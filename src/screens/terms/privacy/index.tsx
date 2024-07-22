'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

import { Sheet } from '@/components/layout/sheet';
import { IH2 } from '@/components/typography/IH2';
import { useTheme } from '@/hooks/common/use-theme';
import { IBody2 } from '@/components/typography/IBody2';
// Privacy
export function Privacy() {
    const { t } = useTranslation();
    const { theme } = useTheme();

    return (
        <Sheet>
            <IH2
                color={theme.text.white}
                style={{
                    marginTop: 30,
                }}>
                {t('privacyTitle')}
            </IH2>
            <IBody2
                style={{
                    marginTop: 25,
                }}>
                Privacy Policy
            </IBody2>
        </Sheet>
    );
}
