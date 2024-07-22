'use client';

import React, { useCallback, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';
import dayjs from 'dayjs';

import { Screen } from '@/components/layout/screen';
import { Stickers } from './@components/stickers';
import { colorWithAlpha } from '@/helpers/common/color-with-alpha';
import { useTheme } from '@/hooks/common/use-theme';
import { useFindByFirebaseUid } from '@/api/my-page/repository/find-by-firebase-uid';
import { myPageState } from '@/recoil/atoms/my-page/my-page';
import { Funding } from './@components/funding';
import { spacing } from '@/theme/spacing';
import { FH3 } from '@/components/typography/FH3';
import { Col } from '@/components/grid/col';
import { Avatar } from '@/components/userinfo/avatar';
import { sizing } from './@constants';
import { dropShadow } from '@/theme/shadow';
import { FH1 } from '@/components/typography/FH1';
import { Row } from '@/components/grid/row';
import { imgHand } from '@/assets/images';
import { IH2 } from '@/components/typography/IH2';
import { RoundButton } from '@/components/button/round-button';
import { Svg } from '@/components/image/svg';
import { iconShare } from '@/assets/icons';
import { routes } from '@/routes';

export function MyLetter() {
    const router = useRouter();

    const [myPage, setMyPage] = useRecoilState(myPageState);

    const { t } = useTranslation();
    const { theme } = useTheme();

    const { fetch } = useFindByFirebaseUid();

    const percent = useMemo<number>(() => {
        if (!myPage) return 0;
        return myPage.totalFund > 100 ? 100 : myPage.totalFund;
    }, [myPage]);

    const dDay = useMemo<number>(() => {
        if (!myPage?.userInfo.firstDay) return 0;
        return dayjs(myPage.userInfo.firstDay).diff(dayjs(new Date()), 'd');
    }, [myPage]);

    const share = () => {
        if (!myPage) return;
        const text = `${routes.origin}${routes.letter.send(
            `${myPage.userInfo.id}`,
        )}`;
        if (!!navigator.canShare) {
            if (
                navigator.canShare({
                    text,
                })
            ) {
                navigator.share({
                    text,
                });
                return;
            }
        }
        if (navigator.clipboard) {
            navigator.clipboard
                .writeText(text)
                .then(() => alert(t('myLetterCopiedText')));
        }
    };

    const goMyWishList = useCallback(() => {
        router.push(routes.wishlist.my);
    }, []);

    const renderShareIcon = useCallback(() => {
        return (
            <Svg
                src={iconShare}
                color={theme.icon.white}
                width={sizing.share.icon}
                height={sizing.share.icon}
                style={{
                    marginRight: 5,
                }}
            />
        );
    }, []);

    useEffect(() => {
        const initialize = async () => {
            const { result } = await fetch();
            if (result) {
                setMyPage(result);
            }
        };
        initialize();
    }, []);

    return (
        <Screen
            sx={{
                position: 'relative',
                overflow: 'hidden',
            }}>
            <Stickers />
            <div
                style={{
                    backgroundColor: colorWithAlpha(
                        theme.background.default,
                        0.06,
                    ),
                    paddingLeft: spacing.screen.padding.horizontal,
                    paddingRight: spacing.screen.padding.horizontal,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 3,
                    backdropFilter: 'blur(6px)',
                }}>
                <Funding
                    percent={percent}
                    style={{
                        marginTop: 30,
                    }}
                />
                <FH3 textAlign={'center'} style={{ marginTop: 50 }}>
                    {t('myLetterCountText', {
                        people: myPage?.letters.length ?? 0,
                    })}
                </FH3>
                <Col
                    alignItems={'center'}
                    style={{
                        marginTop: 50,
                    }}>
                    <Avatar
                        user={myPage?.userInfo}
                        college={myPage?.college}
                        size={sizing.avatar}
                    />
                </Col>
                <Col
                    alignItems={'center'}
                    style={{
                        backgroundColor: theme.background.default,
                        borderRadius: sizing.sheet.borderRadius,
                        boxShadow: dropShadow,
                        paddingTop: sizing.avatar / 2,
                        paddingLeft: 20,
                        paddingRight: 20,
                        paddingBottom: 30,
                        marginTop: -sizing.avatar / 2,
                    }}>
                    <FH1 color={theme.text.primary} textAlign={'center'}>
                        {!!myPage?.userInfo.firstDay &&
                            t('dDay', {
                                dDay,
                            })}
                    </FH1>
                    <Row
                        alignItems={'center'}
                        justifyContent={'space-between'}
                        style={{
                            marginTop: 30,
                            marginLeft: 20,
                            marginRight: 20,
                        }}>
                        <img
                            src={imgHand.src}
                            width={sizing.guide.icon}
                            height={sizing.guide.icon}
                        />
                        <IH2 textAlign={'center'}>
                            {t('myLetterShareGuide')}
                        </IH2>
                        <img
                            src={imgHand.src}
                            width={sizing.guide.icon}
                            height={sizing.guide.icon}
                        />
                    </Row>
                    <RoundButton
                        text={t('myLetterShareText')}
                        shadow={true}
                        onClick={share}
                        renderPrefix={renderShareIcon}
                        sx={{
                            width: '100%',
                            marginTop: 15,
                        }}
                    />
                    <RoundButton
                        size={'sm'}
                        color={'inverted'}
                        text={t('myLetterGoMyWishListText')}
                        border={true}
                        onClick={goMyWishList}
                        sx={{
                            paddingLeft: 35,
                            paddingRight: 35,
                            marginTop: 25,
                        }}
                    />
                </Col>
            </div>
        </Screen>
    );
}
