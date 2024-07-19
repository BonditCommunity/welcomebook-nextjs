'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Sheet } from '@/components/layout/sheet';
import { FH2 } from '@/components/typography/FH2';
import { useTheme } from '@/hooks/common/use-theme';
import { Chart } from './@components/chart';
import { Col } from '@/components/grid/col';
import { FBody2 } from '@/components/typography/FBody2';
import { ISubtitle2 } from '@/components/typography/ISubtitle2';
import { Schema } from './@types';
import { schema } from './@constants';
import { Form } from '@/components/form/form';
import { RoundButton } from '@/components/button/round-button';
import { spacing } from '@/theme/spacing';
import { TextField } from '@/components/form/text-field';
import { InputBox } from '@/components/form/input-box';
import { regexMobile } from '@/constants/form/regex';

export function FundingSuccess() {
    const { t } = useTranslation();
    const { theme } = useTheme();

    const methods = useForm<Schema>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: '',
            mobile: '',
            countryNumber: '',
        },
    });

    const {
        setValue,
        handleSubmit,
        formState: { isSubmitting, isValid },
    } = methods;

    const onSubmit = handleSubmit(async data => {});

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
                    paddingTop: 50,
                }}>
                <div>
                    <FH2 color={theme.text.primary} textAlign={'center'}>
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
                    <InputBox
                        name={'name'}
                        color={'inverted'}
                        placeholder={t('fundingSuccessNamePlaceholder')}
                        style={{
                            marginTop: 15,
                        }}
                    />
                    <InputBox
                        type={'tel'}
                        name={'mobile'}
                        color={'inverted'}
                        inputMode={'tel'}
                        placeholder={t('fundingSuccessMobilePlaceholder')}
                        regex={regexMobile}
                        style={{
                            marginTop: 15,
                        }}
                    />
                </div>
                <RoundButton
                    type={'submit'}
                    text={t('buttonComplete')}
                    color={'default'}
                    disabled={isSubmitting || !isValid}
                    sx={{
                        marginTop: 30,
                        marginBottom: spacing.form.submit.margin.bottom,
                    }}
                />
            </Form>
        </Sheet>
    );
}
