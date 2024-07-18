'use client';

import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';

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
import { ProductRes } from '@/api/product/vm/res/product';
import { Product } from './@components/product';

export function MyWishList() {
    const router = useRouter();

    const { t } = useTranslation();
    const { theme } = useTheme();

    const [wishList, setWishList] = useRecoilState(wishListState);

    const renderItem: ListRenderItem<ProductRes> = useCallback(({ item }) => {
        return <Product product={item} />;
    }, []);

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
            />
        );
    }, []);

    return (
        <Screen>
            <Header title={t('myWishListTitle')} renderAction={renderAction} />
            <SafeArea>
                <FlatList
                    data={wishList.products}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    getItemContainerStyle={getItemContainerStyle}
                    numColumns={2}
                    style={{
                        paddingBottom: 40,
                    }}
                />
            </SafeArea>
        </Screen>
    );
}
