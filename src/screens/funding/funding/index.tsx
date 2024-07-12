'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';

import { Sheet } from '@/components/layout/sheet';
import { FH2 } from '@/components/typography/FH2';
import { Schema } from './@types';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from './@constants';
import { IBody1 } from '@/components/typography/IBody1';
import { useTheme } from '@/hooks/common/use-theme';

export function Funding() {
    const { t } = useTranslation();
    const { theme } = useTheme();

    const methods = useForm<Schema>({
        resolver: zodResolver(schema),
        defaultValues: {
            amount: 0,
        },
    });

    const {
        setValue,
        handleSubmit,
        formState: { isSubmitting, isValid },
    } = methods;

    const onSubmit = handleSubmit(async data => {
        console.log(data);
    });

    return (
        <Sheet type={'white'}>
            <FH2 textAlign={'center'} style={{ marginTop: 130 }}>
                {t('fundingTitle')}
            </FH2>
            <IBody1
                textAlign={'center'}
                color={theme.text.caption}
                style={{ marginTop: 35 }}>
                {t('fundingAmountCaution')}
            </IBody1>
        </Sheet>
    );
}
