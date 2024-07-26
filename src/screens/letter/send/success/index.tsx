'use client';

import React, { useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import Fab from '@mui/material/Fab';

import { Screen } from '@/components/layout/screen';
import { Svg } from '@/components/image/svg';
import { iconCheck, iconClose } from '@/assets/icons';
import { useTheme } from '@/hooks/common/use-theme';
import { Row } from '@/components/grid/row';
import { Center } from '@/components/grid/center';
import { sizing } from '../@constants';
import { FH3 } from '@/components/typography/FH3';
import { Col } from '@/components/grid/col';
import { imgHand } from '@/assets/images';
import { IH2 } from '@/components/typography/IH2';
import { RoundButton } from '@/components/button/round-button';
import { getCurrentPeople } from '@/helpers/common/get-current-people';
import { routes } from '@/routes';

export function Success() {
    const router = useRouter();

    const { t } = useTranslation();
    const { theme } = useTheme();

    const people = useMemo<string>(() => {
        return getCurrentPeople();
    }, []);

    const goHome = useCallback(() => {
        router.push(routes.home);
    }, []);

    const goMyWishList = useCallback(() => {
        router.push(routes.wishlist.my);
    }, []);

    return (
        <Screen
            style={{
                paddingTop: 30,
            }}>
            <Row justifyContent={'flex-end'}>
                <Fab
                    sx={{
                        width: 35,
                        height: 35,
                        borderRadius: 9999,
                        padding: 0,
                    }}>
                    <Svg
                        src={iconClose}
                        color={theme.form.action.icon.black}
                        width={12}
                        height={12}
                    />
                </Fab>
            </Row>
            <Col alignItems={'center'} style={{ marginTop: 90 }}>
                <Center
                    style={{
                        width: sizing.success.check.container,
                        height: sizing.success.check.container,
                        borderRadius: 9999,
                        backgroundColor: theme.button.primary.background,
                    }}>
                    <Svg
                        src={iconCheck}
                        color={theme.icon.white}
                        width={sizing.success.check.icon}
                        height={sizing.success.check.icon}
                    />
                </Center>
                <FH3 textAlign={'center'} style={{ marginTop: 20 }}>
                    {t('sendLetterSuccessText')}
                </FH3>
                <Row
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    style={{
                        marginTop: 120,
                    }}>
                    <img
                        src={imgHand.src}
                        width={sizing.success.guide.icon}
                        height={sizing.success.guide.icon}
                    />
                    <IH2
                        textAlign={'center'}
                        style={{ marginLeft: 10, marginRight: 10 }}>
                        {t('sendLetterSuccessGuideText', {
                            people,
                        })}
                    </IH2>
                    <img
                        src={imgHand.src}
                        width={sizing.success.guide.icon}
                        height={sizing.success.guide.icon}
                    />
                </Row>
                <RoundButton
                    text={t('sendLetterSuccessSubmitText')}
                    color={'primary'}
                    shadow={true}
                    onClick={goHome}
                    sx={{
                        paddingLeft: 35,
                        paddingRight: 35,
                        marginTop: 25,
                    }}
                />
                <RoundButton
                    size={'sm'}
                    color={'inverted'}
                    text={t('sendLetterSuccessGoWishListText')}
                    border={true}
                    onClick={goMyWishList}
                    sx={{
                        paddingLeft: 35,
                        paddingRight: 35,
                        marginTop: 40,
                    }}
                />
            </Col>
        </Screen>
    );
}
