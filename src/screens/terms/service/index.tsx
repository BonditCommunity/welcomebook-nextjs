'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

import { Sheet } from '@/components/layout/sheet';
import { IH2 } from '@/components/typography/IH2';
import { useTheme } from '@/hooks/common/use-theme';
import { IBody2 } from '@/components/typography/IBody2';
// Service
export function Service() {
    const { t } = useTranslation();
    const { theme } = useTheme();

    return (
        <Sheet>
            <IH2
                color={theme.text.white}
                style={{
                    marginTop: 30,
                }}>
                {t('serviceTitle')}
            </IH2>
            <IBody2
                style={{
                    marginTop: 25,
                }}>
                Terms of Service
            </IBody2>
            <IBody2
                style={{
                    marginTop: 15,
                }}>
                All letters and photos will be made public at the school start date.
            </IBody2>
            <IBody2
                style={{
                    marginTop: 15,
                }}>
                Funding and the use of funds are available until 15 days after the school start date.
            </IBody2>
            <IBody2
                style={{
                    marginTop: 15,
                }}>
                The funded amount is non-refundable under any circumstances.
            </IBody2>
            <IBody2
                style={{
                    marginTop: 15,
                }}>
                10%-15% of the total funded amount will be used as a donation for school education development.
            </IBody2>
            <IBody2
                style={{
                    marginTop: 15,
                }}>
                Once a letter or photo is uploaded, it cannot be modified or deleted.
            </IBody2>
            <IBody2
                style={{
                    marginTop: 15,
                }}>
                After the school starts, If the funding is not used within 15 days, the remaining amount will be used for donation.
            </IBody2>
        </Sheet>
    );

}
