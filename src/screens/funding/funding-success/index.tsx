'use client';

import React, { useState } from 'react';
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
import { regexMobile } from '@/constants/form/regex';
import { CountryNumber } from './@components/country-number';
import { FormInputBox } from '@/components/form/input-box/form-input-box';

export function FundingSuccess() {
    const { t } = useTranslation();
    const { theme } = useTheme();

    const [focusedMobile, setFocusedMobile] = useState<boolean>(false);

    const methods = useForm<Schema>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: '',
            mobile: '',
            countryNumber: '+1',
        },
    });

    const {
        watch,
        setValue,
        handleSubmit,
        formState: { isSubmitting, isValid },
    } = methods;

    const mobile = watch('mobile');
    const countryNumber = watch('countryNumber');

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
                    <FormInputBox
                        name={'name'}
                        color={'inverted'}
                        placeholder={t('fundingSuccessNamePlaceholder')}
                        style={{
                            marginTop: 15,
                        }}
                    />
                    <FormInputBox
                        type={'tel'}
                        name={'mobile'}
                        color={'inverted'}
                        inputMode={'tel'}
                        placeholder={t('fundingSuccessMobilePlaceholder')}
                        regex={regexMobile}
                        onFocus={() => setFocusedMobile(true)}
                        onBlur={() => setFocusedMobile(false)}
                        InputProps={{
                            startAdornment: (
                                <CountryNumber
                                    countryNumber={countryNumber}
                                    focused={focusedMobile || !!mobile}
                                    style={{ marginRight: 10 }}
                                />
                            ),
                        }}
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
                    shadow={true}
                    sx={{
                        marginTop: 30,
                        marginBottom: spacing.form.submit.margin.bottom,
                    }}
                />
            </Form>
        </Sheet>
    );
}
