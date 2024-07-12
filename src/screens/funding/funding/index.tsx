'use client';

import React, { useEffect, useRef, useState } from 'react';
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
        formState: { isSubmitting, isValid },
    } = methods;

    const amount = watch('amount');

    const onSubmit = handleSubmit(async data => {
        console.log(data);
    });

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
                            InputProps={{
                                startAdornment: <IH1 ref={adornmentRef}>$</IH1>,
                            }}
                            style={{
                                width,
                                minWidth: 70,
                            }}
                        />
                    </div>
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
