'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Screen } from '@/components/layout/screen';
import { FH2 } from '@/components/typography/FH2';
import { useTheme } from '@/hooks/common/use-theme';
import { Image } from '@/components/image/image/image';
import { Col } from '@/components/grid/col';
import { FH3 } from '@/components/typography/FH3';
import { Form } from '@/components/form/form';
import { Schema } from './@types';
import { schema } from './@constants';
import { InputBase } from '@/components/form/input-base';
import { dropShadow } from '@/theme/shadow';
import { Row } from '@/components/grid/row';

export function SendMessage() {
    const { t } = useTranslation();
    const { theme } = useTheme();

    const methods = useForm<Schema>({
        resolver: zodResolver(schema),
        defaultValues: {
            message: '',
            name: '',
            // image: null,
        },
    });

    const {
        handleSubmit,
        formState: { isSubmitting, isValid },
    } = methods;

    const onSubmit = handleSubmit(async data => {});

    return (
        <Screen>
            <Form
                methods={methods}
                onSubmit={onSubmit}
                style={{ paddingTop: 90 }}>
                <FH2 textAlign={'center'} color={theme.text.primary}>
                    {t('dDay', {
                        day: '20',
                    })}
                </FH2>
                <Col
                    alignItems={'center'}
                    style={{
                        marginTop: 5,
                    }}>
                    <Image
                        src={
                            'https://i.namu.wiki/i/R0AhIJhNi8fkU2Al72pglkrT8QenAaCJd1as-d_iY6MC8nub1iI5VzIqzJlLa-1uzZm--TkB-KHFiT-P-t7bEg.webp'
                        }
                        width={95}
                        height={95}
                        style={{
                            borderWidth: 10,
                            borderColor: theme.background.default,
                            borderStyle: 'solid',
                            borderRadius: 9999,
                        }}
                    />
                </Col>
                <div
                    style={{
                        borderRadius: 30,
                        boxShadow: dropShadow,
                        marginTop: -95 / 2,
                    }}>
                    <div
                        style={{
                            borderTopLeftRadius: 30,
                            borderTopRightRadius: 30,
                            backgroundColor: theme.background.primary,
                            paddingTop: 15 + 92 / 2,
                            paddingBottom: 15,
                            paddingLeft: 45,
                            paddingRight: 45,
                        }}>
                        <FH3
                            textAlign={'center'}
                            color={theme.text.white}
                            sx={{
                                textTransform: 'uppercase',
                            }}>
                            {t('sendMessageTitle')}
                        </FH3>
                    </div>
                    <div
                        style={{
                            borderBottomLeftRadius: 30,
                            borderBottomRightRadius: 30,
                            backgroundColor: theme.background.default,
                            padding: 10,
                        }}>
                        <InputBase
                            name={'message'}
                            placeholder={t('sendMessageMessagePlaceholder')}
                            multiline={true}
                            inputProps={{
                                style: {
                                    minHeight: 100,
                                },
                            }}
                            sx={{
                                paddingTop: 25,
                                paddingLeft: 15,
                                paddingRight: 15,
                            }}
                        />
                        <Row alignItems={'center'}>
                            <InputBase
                                name={'name'}
                                placeholder={t('sendMessageNamePlaceholder')}
                                sx={{
                                    paddingLeft: 15,
                                    paddingRight: 15,
                                }}
                            />
                        </Row>
                    </div>
                </div>
            </Form>
        </Screen>
    );
}
