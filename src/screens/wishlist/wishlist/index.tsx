'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { useRecoilState, useSetRecoilState } from 'recoil';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { DndContext, DragEndEvent } from '@dnd-kit/core';

import { Sheet } from '@/components/layout/sheet';
import { FH2 } from '@/components/typography/FH2';
import { useTheme } from '@/hooks/common/use-theme';
import { useSearch } from '@/hooks/form/use-search';
import { Svg } from '@/components/image/svg';
import { iconSearch } from '@/assets/icons';
import { IBody2 } from '@/components/typography/IBody2';
import { Row } from '@/components/grid/row';
import { DropBox } from './@components/drop-box';
import { sizing } from './@constants';
import { color } from '@/theme/theme';
import { useSearchProducts } from '@/api/product/repository/search-products';
import { trim } from '@/helpers/form/trim';
import { ProductRes } from '@/api/product/vm/res/product';
import { FlatList } from '@/components/layout/flat-list';
import { ListRenderItem } from '@/components/layout/flat-list/@types';
import { usePagination } from '@/hooks/common/use-pagination';
import { Product } from './@components/product';
import { parseError } from '@/helpers/format/parse-error';
import { useCreateWishList } from '@/api/wishlist/repository/create-wish-list';
import { wishListState } from '@/recoil/atoms/wishlist/wish-list';
import { productsState } from '@/recoil/atoms/product/products';
import { useFindProfileByFirebaseUid } from '@/api/user-info/repository/find-profile-by-firebase-uid';
import { UserInfoRes } from '@/api/user-info/vm/res/user-info';
import { WishListRes } from '@/api/wishlist/vm/res/wish-list';
import { useUpdateWishList } from '@/api/wishlist/repository/update-wish-list';
import { FH4 } from '@/components/typography/FH4';
import { routes } from '@/routes';

export function Wishlist() {
    const router = useRouter();

    const { t } = useTranslation();
    const { theme } = useTheme();

    const [products, setProducts] = useRecoilState(productsState);
    const setWishList = useSetRecoilState(wishListState);

    const q = useSearch('');
    const { size, canMore, reset, onStartMore, onEndMore } = usePagination();

    const { fetch: getProfile } = useFindProfileByFirebaseUid();
    const { params, fetch } = useSearchProducts();
    const { loading: creating, fetch: createWishList } = useCreateWishList();
    const { loading: editing, fetch: updateWishList } = useUpdateWishList();

    const [userInfo, setUserInfo] = useState<UserInfoRes>();
    const [list, setList] = useState<ProductRes[]>(products);
    const [productIds, setProductIds] = useState<number[]>([]);
    const [showConfirm, setShowConfirm] = useState<boolean>(false);

    const disabled = useMemo<boolean>(() => {
        return creating || editing;
    }, [creating, editing]);

    const search = async (value: string) => {
        reset();
        const keyword = trim(value);
        const { result, error } = await fetch({
            keyword,
            page: 0,
            size,
        });
        if (result) {
            setList(result.content);
            if (!keyword) {
                setProducts(result.content);
            }
        } else if (error) {
            alert(parseError(error));
        }
    };

    const getMore = async () => {
        if (!params) return;
        if (!canMore) return;
        if (list.length > 0) {
            if (list.length >= size) {
                onStartMore();
                try {
                    const { result } = await fetch({
                        ...params,
                        page: params.page + 1,
                    });
                    if (result) {
                        setList(list => list.concat(result.content));
                        onEndMore(result.content.length);
                    } else {
                        onEndMore();
                    }
                } catch {
                    onEndMore();
                }
            } else {
                onEndMore();
            }
        }
    };

    const onDragEnd = useCallback(
        (event: DragEndEvent) => {
            if (disabled) return;
            const { active, over } = event;
            if (!over) return;
            setProductIds(ids => ids.concat(active.id as number));
        },
        [disabled],
    );

    const onCloseConfirm = useCallback(() => {
        setShowConfirm(false);
    }, []);

    const onConfirm = async () => {
        if (!userInfo) return;
        if (userInfo.wishListId) {
            const { result, error } = await updateWishList({
                addProductIds: productIds,
                deleteProductIds: [],
            });
            if (result) {
                onSuccess(result);
            } else if (error) {
                alert(parseError(error));
            }
        } else {
            const { result, error } = await createWishList({
                productIds,
            });
            if (result) {
                onSuccess(result);
            } else if (error) {
                alert(parseError(error));
            }
        }
    };

    const onSuccess = useCallback((wishList: WishListRes) => {
        setProductIds([]);
        setWishList(wishList);
        setShowConfirm(false);
        router.push(routes.wishlist.my);
    }, []);

    const submit = async () => {
        if (!userInfo) return;
        if (disabled) return;
        if (productIds.length === 0) return;
        setShowConfirm(true);
    };

    const renderItem: ListRenderItem<ProductRes> = useCallback(
        ({ item, index }) => {
            return (
                <Product
                    product={item}
                    index={index}
                    style={{
                        ...(index > 0 && {
                            marginTop:
                                index % 4 === 0
                                    ? sizing.product.gap.lg
                                    : sizing.product.gap.sm,
                        }),
                    }}
                />
            );
        },
        [],
    );

    useEffect(() => {
        search(q.searched);
    }, [q.searched]);

    useEffect(() => {
        const initialize = async () => {
            const { result } = await getProfile();
            if (result) {
                setUserInfo(result);
            }
        };
        initialize();
    }, []);

    return (
        <DndContext autoScroll={false} onDragEnd={onDragEnd}>
            <Sheet type={'black'}>
                <FH2 color={theme.text.primary} style={{ paddingTop: 30 }}>
                    {t('wishListTitle')}
                </FH2>
                <TextField
                    variant={'outlined'}
                    color={'secondary'}
                    type={'text'}
                    name={'search'}
                    placeholder={t('wishListSearchPlaceholder')}
                    fullWidth={true}
                    hiddenLabel={true}
                    value={q.value}
                    onChange={q.onChange}
                    inputMode={'search'}
                    InputProps={{
                        endAdornment: (
                            <Svg src={iconSearch} color={theme.icon.white} />
                        ),
                    }}
                    style={{
                        marginTop: 30,
                    }}
                />
                <IBody2 color={theme.text.white} style={{ marginTop: 30 }}>
                    {t('wishListItemCaution')}
                </IBody2>
                <Row alignItems={'center'} style={{ marginTop: 25 }}>
                    <Box
                        sx={{
                            width: 12,
                            height: 12,
                            backgroundColor: color.green.default,
                            borderRadius: 9999,
                        }}
                    />
                    <IBody2
                        color={theme.text.caption}
                        style={{ marginLeft: 15 }}>
                        {t('wishListItemSufficient')}
                    </IBody2>
                </Row>
                <Row alignItems={'center'} style={{ flex: 1, marginTop: 10 }}>
                    <Box
                        sx={{
                            width: 12,
                            height: 12,
                            backgroundColor: color.red.default,
                            borderRadius: 9999,
                        }}
                    />
                    <IBody2
                        color={theme.text.caption}
                        style={{ flex: 1, marginLeft: 15 }}>
                        {t('wishListItemInsufficient')}
                    </IBody2>
                </Row>
                <FlatList
                    data={list}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    onEndReached={getMore}
                    style={{
                        paddingTop: 40,
                        paddingBottom: 40,
                        marginLeft: -5,
                        marginRight: -5,
                    }}
                />
                <DropBox products={productIds.length} onSubmit={submit} />
            </Sheet>
            <Dialog open={showConfirm} onClose={onCloseConfirm}>
                <div
                    style={{
                        paddingTop: 60,
                        paddingLeft: 30,
                        paddingRight: 30,
                        paddingBottom: 25,
                    }}>
                    <FH4 textAlign={'center'}>{t('wishListConfirmText')}</FH4>
                    <Button
                        onClick={onConfirm}
                        style={{
                            marginTop: 40,
                        }}>
                        {t('wishListConfirmSubmitText')}
                    </Button>
                </div>
            </Dialog>
        </DndContext>
    );
}
