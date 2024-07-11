'use client';

import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Sheet } from '@/components/layout/sheet';
import { Form } from '@/components/form/form';
import { Schema } from './@types';
import { schema, size } from './@constants';
import { TextField } from '@/components/form/text-field';
import { Svg } from '@/components/image/svg';
import { iconAlert, iconSearch } from '@/assets/icons';
import { useTheme } from '@/hooks/common/use-theme';
import { IBody2 } from '@/components/typography/IBody2';
import { Row } from '@/components/grid/row';
import { routes } from '@/routes';
import { Checkbox } from '@/components/form/check-box';
import { spacing } from '@/theme/spacing';

export function SignUp() {
    const router = useRouter();

    const { t } = useTranslation();
    const { theme } = useTheme();

    const methods = useForm<Schema>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: '',
            school: '',
            date: '',
            agree: false,
        },
    });

    const {
        handleSubmit,
        formState: { isSubmitting, isValid },
    } = methods;

    const onSubmit = handleSubmit(async data => {
        router.push(routes.wishList);
    });

    const goTermsService = useCallback(() => {
        router.push(routes.terms.service);
    }, [router]);

    const goTermsPrivacy = useCallback(() => {
        router.push(routes.terms.privacy);
    }, [router]);

    return (
        <Sheet>
            <Form
                methods={methods}
                onSubmit={onSubmit}
                style={{
                    minHeight: 'calc(100vh - 50px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    paddingTop: 55,
                }}>
                <div>
                    <TextField
                        name={'name'}
                        placeholder={t('signUpNamePlaceholder')}
                    />
                    <TextField
                        name={'school'}
                        placeholder={t('signUpSchoolPlaceholder')}
                        InputProps={{
                            endAdornment: (
                                <Svg
                                    src={iconSearch}
                                    color={theme.icon.white}
                                />
                            ),
                        }}
                        style={{
                            marginTop: size.input.gap,
                        }}
                    />
                    <TextField
                        name={'date'}
                        placeholder={t('signUpSchoolStartDatePlaceholder')}
                        disabled={true}
                        style={{
                            marginTop: size.input.gap,
                        }}
                    />
                </div>
                <div>
                    <Row
                        alignItems={'center'}
                        style={{
                            marginTop: size.input.gap,
                        }}>
                        <Svg
                            src={iconAlert}
                            color={theme.form.textfield.error}
                        />
                        <IBody2
                            color={theme.text.white}
                            style={{ flex: 1, marginLeft: 10 }}>
                            {t('signUpStartDateCaution')}
                        </IBody2>
                    </Row>
                    <Row alignItems={'center'} style={{ marginTop: 15 }}>
                        <Checkbox name={'agree'} />
                        <IBody2
                            component={'span'}
                            color={theme.text.white}
                            style={{ flex: 1, marginLeft: 10 }}>
                            {`${t('signUpTermsPrefix')} `}
                            <IBody2
                                component={'span'}
                                color={theme.text.white}
                                onClick={goTermsService}
                                sx={{
                                    cursor: 'pointer',
                                    textDecoration: 'underline',
                                }}>
                                {t('termsService')}
                            </IBody2>
                            <IBody2 component={'span'} color={theme.text.white}>
                                {` ${t('signUpTermsAnd')} `}
                            </IBody2>
                            <IBody2
                                component={'span'}
                                color={theme.text.white}
                                onClick={goTermsPrivacy}
                                sx={{
                                    cursor: 'pointer',
                                    textDecoration: 'underline',
                                }}>
                                {t('termsPrivacy')}
                            </IBody2>
                        </IBody2>
                    </Row>
                    <Button
                        type={'submit'}
                        disabled={isSubmitting || !isValid}
                        style={{
                            marginTop: 55,
                            marginBottom: spacing.form.submit.margin.bottom,
                        }}>
                        {t(isValid ? 'buttonComplete' : 'buttonNext')}
                    </Button>
                </div>
            </Form>
        </Sheet>
    );
}
