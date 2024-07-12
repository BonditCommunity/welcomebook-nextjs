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
import { Form } from '@/components/form/form';
import { TextField } from '@/components/form/text-field';
import { regexNumber } from '@/constants/form/regex';
import { IH1 } from '@/components/typography/IH1';
import { Col } from '@/components/grid/col';

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
            <Form
                methods={methods}
                onSubmit={onSubmit}
                style={{
                    minHeight: 'calc(100dvh - 50px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    paddingTop: 130,
                }}>
                <Col alignItems={'center'}>
                    <FH2 textAlign={'center'}>{t('fundingTitle')}</FH2>
                    <TextField
                        type={'number'}
                        name={'amount'}
                        variant={'standard'}
                        fullWidth={false}
                        regex={regexNumber}
                        InputProps={{
                            startAdornment: <IH1>$</IH1>,
                        }}
                        style={{ marginTop: 45 }}
                    />
                    <IBody1
                        textAlign={'center'}
                        color={theme.text.caption}
                        style={{ marginTop: 35 }}>
                        {t('fundingAmountCaution')}
                    </IBody1>
                </Col>
            </Form>
        </Sheet>
    );
}
