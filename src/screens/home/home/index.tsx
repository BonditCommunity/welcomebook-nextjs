'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';

import { FTitle } from '@/components/typography/FTitle';
import { useTheme } from '@/hooks/common/use-theme';
import { FH2 } from '@/components/typography/FH2';
import { Screen } from '@/components/layout/screen';
import { spacing } from '@/theme/spacing';
import { routes } from '@/routes';

export function Home() {
    const { t } = useTranslation();
    const { theme } = useTheme();

    return (
        <Screen
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'space-between'}>
            <div>
                <FTitle
                    color={theme.text.primary}
                    style={{
                        marginTop: 135,
                    }}>
                    {t('homeTitle')}
                </FTitle>
                <FH2
                    textAlign={'center'}
                    color={theme.text.secondary}
                    style={{
                        marginTop: 80,
                        marginLeft: 15,
                        marginRight: 15,
                    }}>
                    {t('homeSubtitle')}
                </FH2>
            </div>
            <div>
                <Button href={routes.signUp}>
                    {t('homeSignUpWithGoogle')}
                </Button>
                <Button
                    href={routes.signUp}
                    style={{
                        marginTop: 15,
                        marginBottom: spacing.form.submit.margin.bottom,
                    }}>
                    {t('homeSignUpWithApple')}
                </Button>
            </div>
        </Screen>
    );
}
