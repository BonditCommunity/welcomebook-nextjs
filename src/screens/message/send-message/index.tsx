'use client';

import React, { ChangeEvent, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';

import { Screen } from '@/components/layout/screen';
import { FH2 } from '@/components/typography/FH2';
import { useTheme } from '@/hooks/common/use-theme';
import { Image } from '@/components/image/image/image';
import { Col } from '@/components/grid/col';
import { FH3 } from '@/components/typography/FH3';
import { Form } from '@/components/form/form';
import { Schema } from './@types';
import { schema, sizing } from './@constants';
import { InputBase } from '@/components/form/input-base';
import { dropShadow } from '@/theme/shadow';
import { Row } from '@/components/grid/row';
import { Svg } from '@/components/image/svg';
import { iconImage } from '@/assets/icons';
import { spacing } from '@/theme/spacing';

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

    const renderImage = useCallback(() => {
        if (file) {
            return (
                <div style={{ width: 60, height: 60 }}>
                    <div
                        style={{
                            width: sizing.image,
                            height: sizing.image,
                            backgroundColor: theme.background.primary,
                            borderRadius: 8,
                            position: 'absolute',
                            right: 20,
                            bottom: -30,
                            transform: 'rotateZ(9.4deg)',
                            boxShadow: dropShadow,
                            zIndex: 1,
                        }}
                    />
                    <img
                        src={URL.createObjectURL(file)}
                        width={sizing.image}
                        height={sizing.image}
                        onClick={() => setFile(undefined)}
                        style={{
                            cursor: 'pointer',
                            objectFit: 'cover',
                            borderRadius: 8,
                            borderWidth: 1.5,
                            borderColor: theme.border.primary,
                            borderStyle: 'solid',
                            position: 'absolute',
                            right: 25,
                            bottom: -30,
                            transform: 'rotateZ(-7.51deg)',
                            boxShadow: dropShadow,
                            zIndex: 2,
                        }}
                    />
                </div>
            );
        }
        return (
            <Fab
                component={'label'}
                sx={{
                    width: 60,
                    height: 60,
                    borderRadius: 9999,
                    padding: 0,
                }}>
                <Svg src={iconImage} color={theme.form.upload.icon} />
                <input
                    type={'file'}
                    accept={'image/*'}
                    onChange={handleFile}
                    style={{ display: 'none' }}
                />
            </Fab>
        );
    }, [file]);

    return (
        <Screen>
            <Form
                methods={methods}
                onSubmit={onSubmit}
                style={{
                    minHeight: 'calc(100dvh)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    paddingTop: 90,
                }}>
                <div>
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
                            width={sizing.avatar}
                            height={sizing.avatar}
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
                            borderRadius: sizing.sheet.borderRadius,
                            boxShadow: dropShadow,
                            marginTop: -sizing.avatar / 2,
                        }}>
                        <div
                            style={{
                                borderTopLeftRadius: sizing.sheet.borderRadius,
                                borderTopRightRadius: sizing.sheet.borderRadius,
                                backgroundColor: theme.background.primary,
                                paddingTop: 15 + sizing.avatar / 2,
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
                                borderBottomLeftRadius:
                                    sizing.sheet.borderRadius,
                                borderBottomRightRadius:
                                    sizing.sheet.borderRadius,
                                backgroundColor: theme.background.default,
                                padding: 10,
                                position: 'relative',
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
                                    paddingLeft:
                                        sizing.input.padding.horizontal,
                                    paddingRight:
                                        sizing.input.padding.horizontal,
                                }}
                            />
                            <Row alignItems={'center'}>
                                <InputBase
                                    name={'name'}
                                    placeholder={t(
                                        'sendMessageNamePlaceholder',
                                    )}
                                    sx={{
                                        flex: 1,
                                        paddingLeft:
                                            sizing.input.padding.horizontal,
                                        paddingRight:
                                            sizing.input.padding.horizontal,
                                    }}
                                />
                                {renderImage()}
                            </Row>
                        </div>
                    </div>
                </div>
                <Button
                    type={'submit'}
                    variant={'rounded'}
                    disabled={isSubmitting || !isValid}
                    style={{
                        marginTop: 10,
                        marginBottom: spacing.form.submit.margin.bottom,
                    }}>
                    {t('sendMessageSubmitText')}
                </Button>
            </Form>
        </Screen>
    );
}
