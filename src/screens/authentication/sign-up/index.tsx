'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Autocomplete, {
    autocompleteClasses,
    createFilterOptions,
} from '@mui/material/Autocomplete';

import { Sheet } from '@/components/layout/sheet';
import { Form } from '@/components/form/form';
import { Schema } from './@types';
import { schema, sizing } from './@constants';
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
import { useSearchColleges } from '@/api/college/repository/search-colleges';
import { trim } from '@/helpers/form/trim';
import { useSearch } from '@/hooks/form/use-search';
import { CollegeRes } from '@/api/college/vm/res/college';
import { parseError } from '@/helpers/format/parse-error';
import { useUpdateUserInfo } from '@/api/user-info/repository/update-user-info';
import { FormInputBox } from '@/components/form/input-box/form-input-box';
import { InputBox } from '@/components/form/input-box';
import { RoundButton } from '@/components/button/round-button';

const filter = createFilterOptions<CollegeRes>();

export function SignUp() {
    const router = useRouter();

    const { t } = useTranslation();
    const { theme } = useTheme();

    const keyword = useSearch('');

    const { fetch } = useSearchColleges();
    const { fetch: updateUserInfo } = useUpdateUserInfo();

    const [college, setCollege] = useState<CollegeRes>();
    const [colleges, setColleges] = useState<CollegeRes[]>([]);

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
        const { result, error } = await fetch({
            keyword,
            page: 0,
            size: 0,
        });
        if (result) {
            setColleges(
                result.content.sort((a, b) => {
                    if (a.name[0].toUpperCase() === b.name[0].toUpperCase()) {
                        return 0;
                    } else if (
                        a.name[0].toUpperCase() > b.name[0].toUpperCase()
                    ) {
                        return 1;
                    }
                    return -1;
                }),
            );
        } else if (error) {
            alert(parseError(error));
        }
    };

    const {
        setValue,
        handleSubmit,
        formState: { isSubmitting, isValid },
    } = methods;

    const handleCollege = useCallback((_: unknown, college: CollegeRes) => {
        setCollege(college);
        if (college.firstDay) {
            setValue('date', new Date(college.firstDay));
        }
        setValue('college', college.name);
    }, []);

    const onSubmit = handleSubmit(async data => {
        if (!college) return;
        const { result, error } = await updateUserInfo({
            name: data.name,
            collegeFirstDay: data.date,
            ...(college.id > 0 && {
                collegeId: college.id,
            }),
            ...(college.id < 0 && {
                collegeName: college.name,
            }),
        });
        if (result) {
            router.replace(routes.wishlist.root);
        } else if (error) {
            alert(parseError(error));
        }
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
                    <FormInputBox name={'name'} title={t('signUpNameTitle')} />
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
                                } as CollegeRes);
                            }
                            return filtered;
                        }}
                        isOptionEqualToValue={(option, value) =>
                            option.name === value.name
                        }
                        popupIcon={
                            <Svg src={iconSearch} color={theme.icon.white} />
                        }
                        onInputChange={(_, value) => {
                            keyword.setValue(value);
                        }}
                        onChange={handleCollege}
                        renderInput={params => (
                            <FormInputBox
                                {...params}
                                name={'college'}
                                title={t('signUpCollegeTitle')}
                                onChange={undefined}
                            />
                        )}
                        renderOption={(props, option) => (
                            <College
                                {...props}
                                key={option.id}
                                college={option}
                            />
                        )}
                        sx={{
                            [`& .${autocompleteClasses.popupIndicator}`]: {
                                transform: 'none',
                            },
                        }}
                        style={{
                            marginTop: sizing.input.gap,
                        }}
                    />
                    <DatePicker
                        name={'date'}
                        orientation={'portrait'}
                        closeOnSelect={true}
                        disablePast={true}
                        format={'YYYY.MM.DD'}
                        localeText={{
                            toolbarTitle: t('signUpCollegeStartDateTitle'),
                            okButtonLabel: t('buttonSelect'),
                            cancelButtonLabel: t('buttonCancel'),
                        }}
                        disabled={
                            !college || !!college.firstDay || college.id > 0
                        }
                        slots={{
                            textField: props => {
                                return (
                                    <InputBox
                                        {...props}
                                        title={t('signUpCollegeStartDateTitle')}
                                        placeholder={''}
                                        style={{
                                            marginTop: sizing.input.gap,
                                        }}
                                    />
                                );
                            },
                        }}
                    />
                </div>
                <div>
                    <Row
                        alignItems={'center'}
                        style={{
                            marginTop: sizing.input.gap,
                        }}>
                        <Svg src={iconAlert} color={theme.form.base.error} />
                        <IBody2
                            color={theme.text.white}
                            sx={{
                                flex: 1,
                                letterSpacing: -0.32,
                                marginLeft: 10,
                            }}>
                            {t('signUpStartDateCaution')}
                        </IBody2>
                    </Row>
                    <Row alignItems={'center'} style={{ marginTop: 15 }}>
                        <Checkbox name={'agree'} />
                        <IBody2
                            component={'span'}
                            color={theme.text.white}
                            sx={{
                                flex: 1,
                                letterSpacing: -0.32,
                                marginLeft: 10,
                            }}>
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
                    <RoundButton
                        type={'submit'}
                        size={'lg'}
                        color={'default'}
                        text={t(isValid ? 'buttonComplete' : 'buttonNext')}
                        disabled={isSubmitting || !isValid}
                        shadow={true}
                        sx={{
                            width: '100%',
                            marginTop: 55,
                            marginBottom: spacing.form.submit.margin.bottom,
                        }}
                    />
                </div>
            </Form>
        </Sheet>
    );
}
