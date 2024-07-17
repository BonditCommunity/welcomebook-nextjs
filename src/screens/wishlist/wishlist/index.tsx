'use client';

import React, { useEffect, useState } from 'react';
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
import { size } from './@constants';
import { color } from '@/theme/theme';
import { useScroll } from '@/hooks/common/use-scroll';
import { productRepository } from '@/api/product';
import { trim } from '@/helpers/form/trim';
import { pagination } from '@/constants/common/pagination';
import { ProductRes } from '@/api/product/entity/product';

export function Wishlist() {
    const { t } = useTranslation();
    const { theme } = useTheme();

    const q = useSearch('');

    const { searchProducts } = productRepository();

    const [products, setProducts] = useState<ProductRes[]>([]);

    const { ref } = useScroll({
        offset: size.product.image,
        onEndReached: () => {},
    });

    const search = async (value: string) => {
        const { result, error } = await searchProducts({
            keyword: trim(value),
            page: 0,
            size: pagination.default,
        });
        if (result) {
            setProducts(result.content);
        } else if (error) {
            alert(error);
        }
    };

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
            <div
                style={{
                    paddingTop: 40,
                    paddingBottom: 40,
                }}>
                {products.map((product, index) => {
                    return (
                        <div
                            key={product.id}
                            style={{
                                width: size.product.image,
                                height: size.product.image,
                                backgroundColor: 'red',
                            }}
                        />
                    );
                })}
                <div ref={ref} />
            </div>
            <DropBox
                style={{
                    position: 'fixed',
                    left: '50%',
                    transform: `translateX(-${size.dropBox.container / 2}px)`,
                    bottom: 30,
                }}
            />
        </Sheet>
    );
}
