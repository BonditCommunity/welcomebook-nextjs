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

export function MyWishList() {
    const router = useRouter();

    const { t } = useTranslation();
    const { theme } = useTheme();

    const [wishList, setWishList] = useRecoilState(wishListState);

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
        </Screen>
    );
}
