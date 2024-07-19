'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';
import Checkbox from '@mui/material/Checkbox';

import { Screen } from '@/components/layout/screen';
import { Header } from '@/components/layout/header';
import { Svg } from '@/components/image/svg';
import { iconAdd } from '@/assets/icons';
import { useTheme } from '@/hooks/common/use-theme';
import { routes } from '@/routes';
import { wishListState } from '@/recoil/atoms/wishlist/wish-list';
import { SafeArea } from '@/components/layout/safe-area';
import { FlatList } from '@/components/layout/flat-list';
import {
    GetItemContainerStyle,
    ListRenderItem,
} from '@/components/layout/flat-list/@types';
import { ProductInWishListRes } from '@/api/wishlist/vm/res/product-in-wish-list';
import { Product } from './@components/product';
import { Row } from '@/components/grid/row';
import { IBody2 } from '@/components/typography/IBody2';
import { spacing } from '@/theme/spacing';
import { SquareButton } from '@/components/button/square-button';
import { useCreateWishList } from '@/api/wishlist/repository/create-wish-list';
import { useUpdateWishList } from '@/api/wishlist/repository/update-wish-list';
import { parseError } from '@/helpers/format/parse-error';
import { useFindAllProductsInWishList } from '@/api/wishlist/repository/find-all-products-in-wish-list';
import { WishListRes } from '@/api/wishlist/vm/res/wish-list';

export function MyWishList() {
    const router = useRouter();

    const { t } = useTranslation();
    const { theme } = useTheme();

    const [wishList, setWishList] = useRecoilState(wishListState);

    const { fetch } = useFindAllProductsInWishList();
    const { loading: creating, fetch: createWishList } = useCreateWishList();
    const { loading: editing, fetch: updateWishList } = useUpdateWishList();

    const [products, setProducts] = useState<ProductInWishListRes[]>(
        wishList?.products ?? [],
    );
    const [checked, setChecked] = useState<boolean>(false);

    const disabled = useMemo<boolean>(() => {
        return creating || editing || !checked;
    }, [creating, editing, checked]);

    const submit = async () => {
        if (wishList) {
            let addProductIds: number[] = [];
            let deleteProductIds: number[] = [];
            for (const { id, totalCount } of products) {
                const index = wishList.products.findIndex(
                    item => item.id === id,
                );
                if (index < 0) {
                    continue;
                }
                const item = wishList.products[index];
                if (totalCount > item.totalCount) {
                    for (var i = 0; i < totalCount - item.totalCount; i++) {
                        addProductIds.push(id);
                    }
                } else if (totalCount < item.totalCount) {
                    for (var i = 0; i < item.totalCount - totalCount; i++) {
                        deleteProductIds.push(id);
                    }
                }
            }
            alert(
                `add:${JSON.stringify(addProductIds)}\ndelete:${JSON.stringify(
                    deleteProductIds,
                )}`,
            );
            const { result, error } = await updateWishList({
                addProductIds,
                deleteProductIds,
            });
            if (result) {
                onSuccess(result);
            } else if (error) {
                alert(parseError(error));
            }
        } else {
            let productIds: number[] = [];
            for (const { id, totalCount } of products) {
                for (var i = 0; i < totalCount; i++) {
                    productIds.push(id);
                }
            }
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
        setWishList(wishList);
        router.push(routes.wishlist.success);
    }, []);

    const renderItem: ListRenderItem<ProductInWishListRes> = useCallback(
        ({ item }) => {
            return <Product product={item} setProducts={setProducts} />;
        },
        [],
    );

    const getItemContainerStyle: GetItemContainerStyle = useCallback(index => {
        return {
            flex: 1,
            marginTop: 20,
            ...(index % 2 === 1 && {
                marginLeft: 20,
            }),
        };
    }, []);

    const renderAction = useCallback(() => {
        return (
            <Svg
                src={iconAdd}
                color={theme.icon.action}
                onClick={() => router.push(routes.wishlist.root)}
                style={{
                    cursor: 'pointer',
                }}
            />
        );
    }, []);

    useEffect(() => {
        if (wishList) {
            setProducts(wishList.products);
        }
    }, [wishList]);

    useEffect(() => {
        const initialize = async () => {
            const { result } = await fetch();
            if (result) {
                setWishList(result);
            }
        };
        initialize();
    }, []);

    return (
        <Screen>
            <Header title={t('myWishListTitle')} renderAction={renderAction} />
            <SafeArea
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'space-between'}
                sx={{
                    minHeight: '100vh',
                }}>
                <FlatList
                    data={products}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    getItemContainerStyle={getItemContainerStyle}
                    numColumns={2}
                    style={{
                        paddingBottom: 40,
                    }}
                />
                <div style={{ marginTop: 30 }}>
                    <Row alignItems={'center'}>
                        <Checkbox
                            onChange={(_, value) => setChecked(value)}
                            style={{
                                color: theme.icon.action,
                            }}
                        />
                        <IBody2
                            sx={{
                                letterSpacing: -0.32,
                                marginLeft: 10,
                            }}>
                            {`${t('myWishListConfirmText')} `}
                        </IBody2>
                    </Row>
                    <SquareButton
                        text={t('buttonDone')}
                        disabled={disabled}
                        onClick={submit}
                        sx={{
                            marginTop: 30,
                            marginBottom: spacing.form.submit.margin.bottom,
                        }}
                    />
                </div>
            </SafeArea>
        </Screen>
    );
}
