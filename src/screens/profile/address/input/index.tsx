'use client';

import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';

import { Sheet } from '@/components/layout/sheet';
import { Schema } from './@types';
import { schema, sizing } from './@constants';
import { Form } from '@/components/form/form';
import { spacing } from '@/theme/spacing';
import { TextField } from '@/components/form/text-field';
import { countrys } from '@/constants/common/country';
import { regexMobile, regexNumber } from '@/constants/form/regex';
import { AddressSuccess } from '../success';
import { Country } from '@/@types';
import { LoginRequired } from '@/authentication/guard';

export function AddressInput() {
    const { t } = useTranslation();

    const [success, setSuccess] = useState<boolean>(false);

    const methods = useForm<Schema>({
        resolver: zodResolver(schema),
        defaultValues: {
            country: '',
            address: '',
            city: '',
            extraAddress: '',
            postcode: '',
            mobile: '',
        },
    });

    const {
        setValue,
        handleSubmit,
        formState: { isSubmitting, isValid },
    } = methods;

    const onSubmit = handleSubmit(async data => {
        console.log(data);
        setSuccess(true);
    });

    const handleCountry = useCallback((_: unknown, country: Country) => {
        setValue('country', country.label);
    }, []);

    if (success) {
        return (
            <LoginRequired>
                <AddressSuccess />
            </LoginRequired>
        );
    }
    return (
        <LoginRequired>
            <Sheet>
                <Form
                    methods={methods}
                    onSubmit={onSubmit}
                    style={{
                        minHeight: 'calc(100dvh - 50px)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        paddingTop: 55,
                    }}>
                    <div>
                        <Autocomplete
                            fullWidth={true}
                            options={countrys}
                            getOptionLabel={option => option.label}
                            groupBy={option => option.label[0].toUpperCase()}
                            disableClearable={true}
                            selectOnFocus={true}
                            handleHomeEndKeys={true}
                            onChange={handleCountry}
                            renderInput={params => (
                                <TextField
                                    {...params}
                                    name={'country'}
                                    placeholder={t(
                                        'addressInputCountryPlaceholder',
                                    )}
                                />
                            )}
                            renderOption={(props, option) => (
                                <li {...props} key={option.value}>
                                    {option.label}
                                </li>
                            )}
                        />
                        <TextField
                            name={'address'}
                            placeholder={t('addressInputAddressPlaceholder')}
                            style={{
                                marginTop: sizing.input.gap,
                            }}
                        />
                        <TextField
                            name={'city'}
                            placeholder={t('addressInputCityPlaceholder')}
                            style={{
                                marginTop: sizing.input.gap,
                            }}
                        />
                        <TextField
                            name={'extraAddress'}
                            placeholder={t(
                                'addressInputExtraAddressPlaceholder',
                            )}
                            style={{
                                marginTop: sizing.input.gap,
                            }}
                        />
                        <TextField
                            name={'postcode'}
                            placeholder={t('addressInputPostcodePlaceholder')}
                            fullWidth={false}
                            inputMode={'decimal'}
                            regex={regexNumber}
                            style={{
                                width: '50%',
                                marginTop: sizing.input.gap,
                            }}
                        />
                        <TextField
                            type={'tel'}
                            name={'mobile'}
                            placeholder={t('addressInputMobilePlaceholder')}
                            inputMode={'tel'}
                            regex={regexMobile}
                            style={{
                                marginTop: sizing.input.gap,
                            }}
                        />
                    </div>
                    <Button
                        type={'submit'}
                        disabled={isSubmitting || !isValid}
                        style={{
                            marginTop: 10,
                            marginBottom: spacing.form.submit.margin.bottom,
                        }}>
                        {t('buttonSubmit')}
                    </Button>
                </Form>
            </Sheet>
        </LoginRequired>
    );
}
