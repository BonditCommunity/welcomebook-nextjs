'use client';

import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import { Sheet } from '@/components/layout/sheet';
import { FH2 } from '@/components/typography/FH2';
import { useTheme } from '@/hooks/common/use-theme';
import { routes } from '@/routes';
import { Col } from '@/components/grid/col';
import { Svg } from '@/components/image/svg';
import { iconArrowDownLg } from '@/assets/icons';
import { RoundButton } from '@/components/button/round-button';
import { spacing } from '@/theme/spacing';

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
                paddingTop: 110,
            }}>
            <Col alignItems={'center'}>
                <FH2 textAlign={'center'} color={theme.text.title}>
                    {t('fundingSuccessSuccessTitle')}
                </FH2>
                <FH2
                    textAlign={'center'}
                    color={theme.text.white}
                    style={{
                        marginTop: 85,
                    }}>
                    {t('fundingSuccessSuccessText')}
                </FH2>
                <Svg
                    src={iconArrowDownLg}
                    color={theme.icon.white}
                    width={90}
                    height={90}
                    style={{
                        marginTop: 50,
                    }}
                />
            </Col>
            <RoundButton
                size={'xl'}
                color={'inverted'}
                text={t('buttonYes')}
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
