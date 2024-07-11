'use client';

import React, { ChangeEvent, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Fab from '@mui/material/Fab';

import { Screen } from '@/components/layout/screen';
import { FH2 } from '@/components/typography/FH2';
import { useTheme } from '@/hooks/common/use-theme';
import { Image } from '@/components/image/image/image';
import { Col } from '@/components/grid/col';
import { FH3 } from '@/components/typography/FH3';
import { Form } from '@/components/form/form';
import { Schema } from './@types';
import { schema, size } from './@constants';
import { InputBase } from '@/components/form/input-base';
import { dropShadow } from '@/theme/shadow';
import { Row } from '@/components/grid/row';
import { Svg } from '@/components/image/svg';
import { iconImage } from '@/assets/icons';

export function SendMessage() {
    const { t } = useTranslation();
    const { theme } = useTheme();

    const methods = useForm<Schema>({
        resolver: zodResolver(schema),
        defaultValues: {
            message: '',
            name: '',
        },
    });

    const {
        handleSubmit,
        formState: { isSubmitting, isValid },
    } = methods;

    const [file, setFile] = useState<File>();

    const handleFile = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setFile(event.target.files?.item(0) ?? undefined);
    }, []);

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
                        width={size.avatar}
                        height={size.avatar}
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
                        borderRadius: size.sheet.borderRadius,
                        boxShadow: dropShadow,
                        marginTop: -size.avatar / 2,
                    }}>
                    <div
                        style={{
                            borderTopLeftRadius: size.sheet.borderRadius,
                            borderTopRightRadius: size.sheet.borderRadius,
                            backgroundColor: theme.background.primary,
                            paddingTop: 15 + size.avatar / 2,
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
                            borderBottomLeftRadius: size.sheet.borderRadius,
                            borderBottomRightRadius: size.sheet.borderRadius,
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
                                paddingLeft: size.input.padding.horizontal,
                                paddingRight: size.input.padding.horizontal,
                            }}
                        />
                        <Row alignItems={'center'}>
                            <InputBase
                                name={'name'}
                                placeholder={t('sendMessageNamePlaceholder')}
                                sx={{
                                    flex: 1,
                                    paddingLeft: size.input.padding.horizontal,
                                    paddingRight: size.input.padding.horizontal,
                                }}
                            />
                            <Fab
                                component={'label'}
                                sx={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: 9999,
                                    padding: 0,
                                }}>
                                <Svg
                                    src={iconImage}
                                    color={theme.form.upload.icon}
                                />
                                <input
                                    type={'file'}
                                    accept={'image/*'}
                                    onChange={handleFile}
                                    style={{ display: 'none' }}
                                />
                            </Fab>
                        </Row>
                    </div>
                </div>
            </Form>
        </Screen>
    );
}
