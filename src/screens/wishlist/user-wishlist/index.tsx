'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import { Sheet } from '@/components/layout/sheet';
import { Row } from '@/components/grid/row';
import { FH3 } from '@/components/typography/FH3';
import { useTheme } from '@/hooks/common/use-theme';
import { UserInfoRes } from '@/api/user-info/vm/res/user-info';
import { useFindProfileById } from '@/api/user-info/repository/find-profile-by-id';
import { UserWishListParams } from './@types';
import { Center } from '@/components/grid/center';
import { Svg } from '@/components/image/svg';
import { iconClose } from '@/assets/icons';
import { sizing } from './@constants';
import { Col } from '@/components/grid/col';
import { Avatar } from '@/components/userinfo/avatar';
import { FH2 } from '@/components/typography/FH2';
import { RoundButton } from '@/components/button/round-button';
import { spacing } from '@/theme/spacing';
import { IH2 } from '@/components/typography/IH2';
import { imgHand } from '@/assets/images';
import { useFindAllProductsByUserInfoId } from '@/api/wishlist/repository/find-all-products-by-user-info-id';
import { ProductInWishListRes } from '@/api/wishlist/vm/res/product-in-wish-list';

export function UserWishList() {
    const params = useParams<UserWishListParams>();

    const { t } = useTranslation();
    const { theme } = useTheme();

    const { fetch } = useFindProfileById();
    const { fetch: findAllProductsByUserInfoId } =
        useFindAllProductsByUserInfoId();

    const [user, setUser] = useState<UserInfoRes>();
    const [products, setProducts] = useState<ProductInWishListRes[]>([]);

    useEffect(() => {
        const getProfile = async () => {
            const { result } = await fetch({
                id: params.id,
            });
            if (result) {
                setUser(result);
            }
        };
        const getProducts = async () => {
            const { result } = await findAllProductsByUserInfoId({
                userInfoId: Number(params.id),
            });
            if (result) {
                setProducts(result.products);
            }
        };
        getProfile();
        getProducts();
    }, []);

    return (
        <Sheet
            type={'white'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'space-between'}>
            <div>
                <Row alignItems={'center'} style={{ marginTop: 20 }}>
                    <FH3 color={theme.text.primary} style={{ flex: 1 }}>
                        {t('userWishListTitle', {
                            user: user?.name ?? '',
                        })}
                    </FH3>
                    <Center
                        style={{
                            cursor: 'pointer',
                            width: 35,
                            height: 35,
                            borderRadius: 9999,
                            backgroundColor: theme.form.action.background,
                        }}>
                        <Svg
                            src={iconClose}
                            color={theme.form.action.icon.black}
                            width={12}
                            height={12}
                        />
                    </Center>
                </Row>
                <Col
                    alignItems={'center'}
                    style={{
                        marginTop: 5,
                    }}>
                    <Avatar user={user} size={sizing.avatar} />
                </Col>
                <div
                    style={{
                        backgroundColor: theme.background.primary,
                        borderRadius: sizing.sheet.borderRadius,
                        paddingTop: sizing.avatar / 2,
                        marginTop: -sizing.avatar / 2,
                    }}>
                    <FH2
                        textAlign={'center'}
                        color={theme.text.white}
                        sx={{
                            textTransform: 'uppercase',
                        }}>
                        {t('userWishListListTitle')}
                    </FH2>
                </div>
            </div>
            <div>
                <Row
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    style={{ marginTop: 10, marginLeft: 75, marginRight: 75 }}>
                    <img
                        src={imgHand.src}
                        width={sizing.guide.icon}
                        height={sizing.guide.icon}
                    />
                    <IH2 textAlign={'center'}>
                        {t('userWishListFundingGuide')}
                    </IH2>
                    <img
                        src={imgHand.src}
                        width={sizing.guide.icon}
                        height={sizing.guide.icon}
                    />
                </Row>
                <RoundButton
                    color={'primary'}
                    text={t('userWishListFundingText')}
                    sx={{
                        width: '100%',
                        marginTop: 10,
                        marginBottom: spacing.form.submit.margin.bottom,
                    }}
                />
            </div>
        </Sheet>
    );
}
