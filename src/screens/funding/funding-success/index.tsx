'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

import { Sheet } from '@/components/layout/sheet';
import { FH2 } from '@/components/typography/FH2';
import { useTheme } from '@/hooks/common/use-theme';

export function FundingSuccess() {
    const { t } = useTranslation();
    const { theme } = useTheme();
    return (
        <Sheet type={'white'}>
            <FH2
                color={theme.text.primary}
                textAlign={'center'}
                style={{ marginTop: 50 }}>
                {t('fundingSuccessTitle')}
            </FH2>
        </Sheet>
    );
}
