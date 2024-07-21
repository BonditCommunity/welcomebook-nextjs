'use client';

import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Autocomplete from '@mui/material/Autocomplete';

import { Sheet } from '@/components/layout/sheet';
import { Schema } from './@types';
import { schema, sizing } from './@constants';
import { Form } from '@/components/form/form';
import { spacing } from '@/theme/spacing';
import { countrys } from '@/constants/common/country';
import { regexMobile, regexNumber } from '@/constants/form/regex';
import { Success } from './success';
import { Country } from '@/@types';
import { FormInputBox } from '@/components/form/input-box/form-input-box';
import { useCreateOrderList } from '@/api/wishlist/repository/create-order-list';
import { parseError } from '@/helpers/format/parse-error';
import { RoundButton } from '@/components/button/round-button';

export function ProfileAddress() {
    const { t } = useTranslation();

    const { fetch } = useCreateOrderList();

    const [success, setSuccess] = useState<boolean>(false);

    const methods = useForm<Schema>({
        resolver: zodResolver(schema),
        defaultValues: {
            country: '',
            streetAddress: '',
            city: '',
            optionalAddress: '',
            zipCode: '',
            phoneNumber: '',
        },
    });

    const {
        setValue,
        handleSubmit,
        formState: { isSubmitting, isValid },
    } = methods;

    const onSubmit = handleSubmit(async data => {
        const { result, error } = await fetch({
            country: data.country,
            streetAddress: data.streetAddress,
            city: data.city,
            zipCode: data.zipCode,
            phoneNumber: data.phoneNumber,
            ...(data.optionalAddress && {
                optionalAddress: data.optionalAddress,
            }),
        });
        if (result) {
            setSuccess(true);
        } else if (error) {
            alert(parseError(error));
        }
    });

    const handleCountry = useCallback((_: unknown, country: Country) => {
        setValue('country', country.label);
    }, []);

    if (success) {
        return <Success />;
    }
    return (
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
                            <FormInputBox
                                {...params}
                                name={'country'}
                                title={t('profileAddressCountryTitle')}
                            />
                        )}
                        renderOption={(props, option) => (
                            <li {...props} key={option.value}>
                                {option.label}
                            </li>
                        )}
                    />
                    <FormInputBox
                        name={'streetAddress'}
                        title={t('profileAddressStreetAddressTitle')}
                        style={{
                            marginTop: sizing.input.gap,
                        }}
                    />
                    <FormInputBox
                        name={'city'}
                        title={t('profileAddressCityTitle')}
                        style={{
                            marginTop: sizing.input.gap,
                        }}
                    />
                    <FormInputBox
                        name={'optionalAddress'}
                        title={t('profileAddressOptionalAddressTitle')}
                        style={{
                            marginTop: sizing.input.gap,
                        }}
                    />
                    <FormInputBox
                        name={'zipCode'}
                        title={t('profileAddressZipCodeTitle')}
                        fullWidth={false}
                        inputMode={'decimal'}
                        regex={regexNumber}
                        style={{
                            width: '50%',
                            marginTop: sizing.input.gap,
                        }}
                    />
                    <FormInputBox
                        type={'tel'}
                        name={'phoneNumber'}
                        title={t('profileAddressPhoneNumberTitle')}
                        inputMode={'tel'}
                        regex={regexMobile}
                        style={{
                            marginTop: sizing.input.gap,
                        }}
                    />
                </div>
                <RoundButton
                    type={'submit'}
                    size={'lg'}
                    color={'default'}
                    text={t('buttonSubmit')}
                    disabled={isSubmitting || !isValid}
                    shadow={true}
                    sx={{
                        width: '100%',
                        marginTop: 10,
                        marginBottom: spacing.form.submit.margin.bottom,
                    }}
                />
            </Form>
        </Sheet>
    );
}
