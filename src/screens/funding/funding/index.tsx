'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';

import { Sheet } from '@/components/layout/sheet';
import { FH2 } from '@/components/typography/FH2';
import { Schema } from './@types';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema, steps } from './@constants';
import { IBody1 } from '@/components/typography/IBody1';
import { useTheme } from '@/hooks/common/use-theme';
import { Form } from '@/components/form/form';
import { TextField } from '@/components/form/text-field';
import { regexNumber } from '@/constants/form/regex';
import { IH1 } from '@/components/typography/IH1';
import { Col } from '@/components/grid/col';
import { RoundButton } from '@/components/button/round-button';
import { Row } from '@/components/grid/row';
import { hideScrollBarX } from '@/theme/styles';
import { Svg } from '@/components/image/svg';
import { iconAdd } from '@/assets/icons';
import { spacing } from '@/theme/spacing';
import { routes } from '@/routes';

export function Funding() {
    const router = useRouter();

    const adornmentRef = useRef<HTMLParagraphElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);

    const { t } = useTranslation();
    const { theme } = useTheme();

    const [width, setWidth] = useState<number>(0);

    const methods = useForm<Schema>({
        resolver: zodResolver(schema),
        defaultValues: {
            amount: 0,
        },
    });

    const {
        watch,
        setValue,
        handleSubmit,
        formState: { isSubmitting, isValid, errors },
    } = methods;

    const amount = watch('amount');

    const add = (step: number) => {
        setValue('amount', amount + step, {
            shouldValidate: true,
        });
    };

    const onSubmit = handleSubmit(async data => {
        router.push(routes.funding.success);
    });

    const renderPrefix = useCallback(() => {
        return (
            <Svg
                src={iconAdd}
                color={theme.icon.action}
                width={15}
                height={15}
                style={{ marginRight: 10 }}
            />
        );
    }, []);

    useEffect(() => {
        if (adornmentRef.current && textRef.current) {
            setWidth(
                adornmentRef.current.offsetWidth + textRef.current.offsetWidth,
            );
        }
    }, [amount]);

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
                <div>
                    <Col alignItems={'center'}>
                        <FH2
                            textAlign={'center'}
                            style={{
                                marginLeft: 40,
                                marginRight: 40,
                            }}>
                            {t('fundingTitle')}
                        </FH2>
                        <div style={{ marginTop: 45 }}>
                            <IH1
                                ref={textRef}
                                style={{
                                    position: 'absolute',
                                    visibility: 'hidden',
                                }}>{`${amount}`}</IH1>
                            <TextField
                                type={'number'}
                                name={'amount'}
                                variant={'standard'}
                                fullWidth={false}
                                regex={regexNumber}
                                hiddenError={true}
                                InputProps={{
                                    startAdornment: (
                                        <IH1 ref={adornmentRef}>$</IH1>
                                    ),
                                }}
                                style={{
                                    width,
                                    minWidth: 70,
                                }}
                            />
                        </div>
                        <IBody1
                            textAlign={'center'}
                            color={
                                errors.amount
                                    ? theme.form.base.error
                                    : theme.text.caption
                            }
                            style={{ marginTop: 35 }}>
                            {t('fundingAmountCaution')}
                        </IBody1>
                    </Col>
                    <Row
                        alignItems={'center'}
                        justifyContent={'center'}
                        sx={{
                            marginLeft: -spacing.screen.padding.horizontal,
                            marginRight: -spacing.screen.padding.horizontal,
                            marginTop: 45,
                            overflowX: 'hidden',
                        }}>
                        <Row
                            sx={{
                                paddingLeft: spacing.screen.padding.horizontal,
                                paddingRight: spacing.screen.padding.horizontal,
                                ...hideScrollBarX,
                            }}>
                            {steps.map((step, index) => {
                                return (
                                    <div
                                        key={step}
                                        style={{
                                            ...(index > 0 && {
                                                marginLeft: 10,
                                            }),
                                        }}>
                                        <RoundButton
                                            size={'sm'}
                                            text={`$${step}`}
                                            onClick={() => add(step)}
                                            renderPrefix={renderPrefix}
                                        />
                                    </div>
                                );
                            })}
                        </Row>
                    </Row>
                </div>
                <RoundButton
                    type={'submit'}
                    text={t('buttonNext')}
                    disabled={isSubmitting || !isValid}
                    shadow={true}
                    sx={{
                        marginTop: 10,
                        marginBottom: spacing.form.submit.margin.bottom,
                    }}
                />
            </Form>
        </Sheet>
    );
}
