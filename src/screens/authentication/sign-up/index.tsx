'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@mui/material/Button';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

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
import { College } from './@components/college';
import { DatePicker } from '@/components/form/date-picker';
import { collegeRepository } from '@/api/college';
import { trim } from '@/helpers/form/trim';
import { useSearch } from '@/hooks/form/use-search';
import { College as CollegeType } from '@/api/college/entity/college';

const filter = createFilterOptions<CollegeType>();

export function SignUp() {
    const router = useRouter();

    const { t } = useTranslation();
    const { theme } = useTheme();

    const keyword = useSearch('');

    const { searchCollege } = collegeRepository();

    const [college, setCollege] = useState<CollegeType>();
    const [colleges, setColleges] = useState<CollegeType[]>([]);

    const methods = useForm<Schema>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: '',
            college: '',
            agree: false,
        },
    });

    const search = async (value: string) => {
        const keyword = trim(value);
        if (!keyword) return;
        const response = await searchCollege({
            keyword,
            page: 0,
            size: 999,
            // size: 0,
        });
        if (response.result) {
            setColleges(response.result.content);
        } else if (response.error) {
            alert(response.error);
        }
    };

    const {
        setValue,
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

    useEffect(() => {
        search(keyword.searched);
    }, [keyword.searched]);

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
                    <TextField
                        name={'name'}
                        placeholder={t('signUpNamePlaceholder')}
                    />
                    <Autocomplete
                        fullWidth={true}
                        options={colleges}
                        getOptionLabel={option => option.name}
                        noOptionsText={t('signUpCollegeNoOptionText')}
                        groupBy={option => option.name[0].toUpperCase()}
                        disableClearable={true}
                        selectOnFocus={true}
                        handleHomeEndKeys={true}
                        filterOptions={(options, params) => {
                            let filtered = filter(options, params);
                            const { inputValue } = params;
                            const isExisting = options.some(
                                option => inputValue === option.name,
                            );
                            if (
                                colleges.length === 0 &&
                                inputValue !== '' &&
                                !isExisting
                            ) {
                                filtered.splice(0, 0, {
                                    id: -1,
                                    name: inputValue,
                                } as CollegeType);
                            }
                            return filtered;
                        }}
                        onInputChange={(_, value) => {
                            keyword.setValue(value);
                        }}
                        onChange={(_, value) => {
                            setCollege(value);
                            setValue('college', value.name);
                        }}
                        renderInput={params => (
                            <TextField
                                {...params}
                                name={'college'}
                                placeholder={t('signUpCollegePlaceholder')}
                                onChange={undefined}
                                InputProps={{
                                    ...params.InputProps,
                                    endAdornment: (
                                        <Svg
                                            src={iconSearch}
                                            color={theme.icon.white}
                                        />
                                    ),
                                }}
                            />
                        )}
                        renderOption={(props, option) => (
                            <College
                                {...props}
                                key={option.id}
                                college={option}
                            />
                        )}
                        style={{
                            marginTop: size.input.gap,
                        }}
                    />
                    <DatePicker
                        name={'date'}
                        orientation={'portrait'}
                        closeOnSelect={true}
                        disablePast={true}
                        format={'YYYY.MM.DD'}
                        localeText={{
                            toolbarTitle: t(
                                'signUpCollegeStartDatePlaceholder',
                            ),
                            okButtonLabel: t('buttonSelect'),
                            cancelButtonLabel: t('buttonCancel'),
                        }}
                        disabled={!college || college.id > 0}
                        slotProps={{
                            textField: {
                                fullWidth: true,
                                variant: 'outlined',
                                hiddenLabel: true,
                                placeholder: t(
                                    'signUpCollegeStartDatePlaceholder',
                                ),
                                style: {
                                    marginTop: size.input.gap,
                                },
                            },
                        }}
                    />
                </div>
                <div>
                    <Row
                        alignItems={'center'}
                        style={{
                            marginTop: size.input.gap,
                        }}>
                        <Svg src={iconAlert} color={theme.form.base.error} />
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
