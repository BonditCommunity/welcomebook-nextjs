'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

import { Sheet } from '@/components/layout/sheet';
import { FH2 } from '@/components/typography/FH2';
import { useTheme } from '@/hooks/common/use-theme';
import { Chart } from './@components/chart';
import { Col } from '@/components/grid/col';
import { FBody2 } from '@/components/typography/FBody2';
import { ISubtitle2 } from '@/components/typography/ISubtitle2';

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
            <Col alignItems={'center'} style={{ marginTop: 30 }}>
                <Chart percent={62} />
            </Col>
            <FBody2 textAlign={'center'}>
                {t('fundingSuccessGuide', {
                    user: 'Eunju',
                    amount: `$${100}`,
                })}
            </FBody2>
            <ISubtitle2 style={{ marginTop: 60 }}>
                {t('fundingSuccessFormTitle')}
            </ISubtitle2>
        </Sheet>
    );
}
