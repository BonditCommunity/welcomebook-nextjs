'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

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
import { searchProducts } from '@/api/product/repository/search-products';
import { trim } from '@/helpers/form/trim';
import { ProductRes } from '@/api/product/entity/product';
import { FlatList } from '@/components/layout/flat-list';
import { ListRenderItem } from '@/components/layout/flat-list/@types';
import { usePagination } from '@/hooks/common/use-pagination';
import { Product } from './@components/product';

export function Wishlist() {
    const { t } = useTranslation();
    const { theme } = useTheme();

    const q = useSearch('');
    const { size, canMore, reset, onStartMore, onEndMore } = usePagination();

    const { params, fetch } = searchProducts();

    const [list, setList] = useState<ProductRes[]>([]);

    const search = async (value: string) => {
        reset();
        const { result, error } = await fetch({
            keyword: trim(value),
            page: 0,
            size,
        });
        if (result) {
            setList(result.content);
        } else if (error) {
            alert(error);
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

    const renderItem: ListRenderItem<ProductRes> = useCallback(
        ({ item, index }) => {
            return (
                <Product
                    product={item}
                    index={index}
                    style={{
                        ...(index > 0 && {
                            marginTop: sizing.product.gap,
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

    return (
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
                <IBody2 color={theme.text.caption} style={{ marginLeft: 15 }}>
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
                }}
            />
            <DropBox
                style={{
                    position: 'fixed',
                    left: '50%',
                    transform: `translateX(-${sizing.dropBox.container / 2}px)`,
                    bottom: 30,
                }}
            />
        </Sheet>
    );
}
