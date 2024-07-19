'use client';

import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import { Col } from '@/components/grid/col';
import { Sheet } from '@/components/layout/sheet';
import { FH2 } from '@/components/typography/FH2';
import { useTheme } from '@/hooks/common/use-theme';
import { imgSuccess } from '@/assets/images';
import { routes } from '@/routes';
import { spacing } from '@/theme/spacing';
import { RoundButton } from '@/components/button/round-button';

export function Success() {
    const router = useRouter();

    const { t } = useTranslation();
    const { theme } = useTheme();

    const goHome = useCallback(() => {
        router.push(routes.home);
    }, []);

    return (
        <Sheet
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                paddingTop: 90,
            }}>
            <Col alignItems={'center'}>
                <FH2 textAlign={'center'} color={theme.text.title}>
                    {t('profileAddressSuccessTitle')}
                </FH2>
                <img
                    src={imgSuccess.src}
                    width={'100%'}
                    style={{
                        marginTop: 40,
                    }}
                />
            </Col>
            <RoundButton
                size={'xl'}
                color={'inverted'}
                text={t('profileAddressSuccessGoMainText')}
                shadow={true}
                onClick={goHome}
                sx={{
                    marginTop: 10,
                    marginLeft: 25,
                    marginRight: 25,
                    marginBottom: spacing.form.submit.margin.bottom,
                }}
            />
        </Sheet>
    );
}
