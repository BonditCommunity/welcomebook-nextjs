'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Autocomplete from '@mui/material/Autocomplete';

import { Sheet } from '@/components/layout/sheet';
import { FH2 } from '@/components/typography/FH2';
import { useTheme } from '@/hooks/common/use-theme';
import { Chart } from './@components/chart';
import { Col } from '@/components/grid/col';
import { FBody2 } from '@/components/typography/FBody2';
import { ISubtitle2 } from '@/components/typography/ISubtitle2';
import { FundingSuccessParams, Schema } from './@types';
import { schema, sizing } from './@constants';
import { Form } from '@/components/form/form';
import { RoundButton } from '@/components/button/round-button';
import { spacing } from '@/theme/spacing';
import { regexMobile } from '@/constants/form/regex';
import { FormInputBox } from '@/components/form/input-box/form-input-box';
import { useFindAllFundsByUserInfoId } from '@/api/fund/repository/find-all-fund-by-user-info-id';
import { countrys } from '@/constants/common/country';
import { Country } from '@/@types';
import { FundInMyPageRes } from '@/api/fund/vm/res/fund-in-my-page';
import { useCreateOrderHistoryByInStripe } from '@/api/order/repository/create-order-history-by-in-stripe';
import { parseError } from '@/helpers/format/parse-error';
import { errors } from '@/messages/error';
import { useCompleteFund } from '@/api/fund/repository/complete-fund';
import { Success } from './success';

export function FundingSuccess() {
    const params = useParams<FundingSuccessParams>();
    const searchParams = useSearchParams();

    const { t } = useTranslation();
    const { theme } = useTheme();

    const { fetch } = useFindAllFundsByUserInfoId();
    const { fetch: validate } = useCreateOrderHistoryByInStripe();
    const { fetch: completeFund } = useCompleteFund();

    const [fund, setFund] = useState<FundInMyPageRes>();
    const [success, setSuccess] = useState<boolean>(false);

    const percent = useMemo<number>(() => {
        if (!fund) return 0;
        return fund.totalFund > 100 ? 100 : fund.totalFund;
    }, [fund]);

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

    const handleCountryNumber = useCallback((_: unknown, country: Country) => {
        setValue('countryNumber', country.number);
    }, []);

    const onSubmit = handleSubmit(async data => {
        if (!fund) return;
        const orderUid = searchParams.get('orderUid');
        const totalPrice = searchParams.get('totalPrice');
        const sessionId = searchParams.get('sessionId');
        if (!(orderUid && totalPrice && sessionId)) return;
        const validation = await validate(
            {
                orderUid,
                totalPrice: Number(totalPrice),
                sessionId,
                transactionDate: `${new Date().getTime()}`,
            },
            fund.userInfo.id,
        );
        if (validation.error) {
            alert(parseError(validation.error));
            return;
        }
        if (!validation.result) {
            alert(t(errors.common));
            return;
        }
        const { result, error } = await completeFund({
            orderUid,
            recipientId: fund.userInfo.id,
            amount: Number(totalPrice),
            name: data.name,
            countryNumber: data.countryNumber,
            mobile: data.mobile,
        });
        if (result) {
            setSuccess(true);
        } else if (error) {
            alert(parseError(error));
        }
    });

    useEffect(() => {
        const initialize = async () => {
            const { result } = await fetch(Number(params.id));
            if (result) {
                setFund(result);
            }
        };
        initialize();
    }, []);

    if (success) {
        return <Success />;
    }
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
                        <Chart percent={percent} />
                    </Col>
                    <FBody2 textAlign={'center'}>
                        {t('fundingSuccessGuide', {
                            user: fund?.userInfo.name ?? '',
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
                    <Autocomplete
                        fullWidth={true}
                        options={countrys}
                        getOptionLabel={option => option.label}
                        groupBy={option => option.label[0].toUpperCase()}
                        disableClearable={true}
                        selectOnFocus={true}
                        handleHomeEndKeys={true}
                        onChange={handleCountryNumber}
                        renderInput={params => (
                            <FormInputBox
                                {...params}
                                color={'inverted'}
                                name={'countryNumber'}
                                placeholder={t(
                                    'fundingSuccessCountryNumberPlaceholder',
                                )}
                                style={{
                                    marginTop: sizing.input.gap,
                                }}
                            />
                        )}
                        renderOption={(props, option) => (
                            <li {...props} key={option.value}>
                                {`${option.label} (${option.number})`}
                            </li>
                        )}
                    />
                    <FormInputBox
                        type={'tel'}
                        name={'mobile'}
                        color={'inverted'}
                        inputMode={'tel'}
                        placeholder={t('fundingSuccessMobilePlaceholder')}
                        regex={regexMobile}
                        style={{
                            marginTop: sizing.input.gap,
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
