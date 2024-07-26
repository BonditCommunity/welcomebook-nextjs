'use client';

import React, {
    ChangeEvent,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { useParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Fab from '@mui/material/Fab';
import dayjs from 'dayjs';

import { Screen } from '@/components/layout/screen';
import { FH2 } from '@/components/typography/FH2';
import { useTheme } from '@/hooks/common/use-theme';
import { Col } from '@/components/grid/col';
import { FH3 } from '@/components/typography/FH3';
import { Form } from '@/components/form/form';
import { Schema, SendLetterParams } from './@types';
import { schema, sizing } from './@constants';
import { dropShadow } from '@/theme/shadow';
import { Row } from '@/components/grid/row';
import { Svg } from '@/components/image/svg';
import { iconClose, iconImage } from '@/assets/icons';
import { spacing } from '@/theme/spacing';
import { useFindProfileById } from '@/api/user-info/repository/find-profile-by-id';
import { UserInfoRes } from '@/api/user-info/vm/res/user-info';
import { Center } from '@/components/grid/center';
import { colorWithAlpha } from '@/helpers/common/color-with-alpha';
import { useCreateLetter } from '@/api/letter/repository/create-letter';
import { parseError } from '@/helpers/format/parse-error';
import { color } from '@/theme/theme';
import { useImageUpload } from '@/api/media/repository/image-upload';
import { FormInput } from '@/components/form/input/form-input';
import { RoundButton } from '@/components/button/round-button';
import { Avatar } from '@/components/userinfo/avatar';
import { Success } from './success';

export function SendLetter() {
    const params = useParams<SendLetterParams>();

    const { t } = useTranslation();
    const { theme } = useTheme();

    const { fetch } = useFindProfileById();
    const { fetch: imageUpload } = useImageUpload();
    const { fetch: createLetter } = useCreateLetter();

    const [user, setUser] = useState<UserInfoRes>();
    const [success, setSuccess] = useState<boolean>(false);

    const methods = useForm<Schema>({
        resolver: zodResolver(schema),
        defaultValues: {
            content: '',
            writer: '',
        },
    });

    const {
        handleSubmit,
        formState: { isSubmitting, isValid },
    } = methods;

    const [file, setFile] = useState<File>();

    const dDay = useMemo<number>(() => {
        if (!user?.firstDay) return 0;
        return dayjs(user.firstDay).diff(dayjs(new Date()), 'd');
    }, [user]);

    const handleFile = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setFile(event.target.files?.item(0) ?? undefined);
    }, []);

    const onSubmit = handleSubmit(async data => {
        if (!user) return;
        let imageUrl: string = '';
        if (file) {
            const { result, error } = await imageUpload({
                file,
            });
            if (result) {
                imageUrl = result.fullPath;
            } else if (error) {
                alert(parseError(error));
            }
        }
        const { result, error } = await createLetter({
            userInfoId: Number(params.id),
            writer: data.writer,
            content: data.content,
            ...(imageUrl && {
                imageUrl,
            }),
        });
        if (result) {
            setSuccess(true);
        } else if (error) {
            alert(parseError(error));
        }
    });

    const renderImage = useCallback(() => {
        if (file) {
            return (
                <div style={{ width: 60, height: 60 }}>
                    <div
                        style={{
                            width: sizing.image.image,
                            height: sizing.image.image,
                            backgroundColor: color.primary['3'],
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
                        width={sizing.image.image}
                        height={sizing.image.image}
                        style={{
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
                    <Center
                        onClick={() => setFile(undefined)}
                        style={{
                            cursor: 'pointer',
                            width: sizing.image.close.container,
                            height: sizing.image.close.container,
                            borderRadius: 9999,
                            backgroundColor: colorWithAlpha(
                                theme.background.default,
                                0.45,
                            ),
                            position: 'absolute',
                            right: 40,
                            bottom: 50,
                            zIndex: 3,
                        }}>
                        <Svg src={iconClose} color={theme.icon.action} />
                    </Center>
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
                <Svg src={iconImage} color={theme.form.action.icon.gray} />
                <input
                    type={'file'}
                    accept={'image/*'}
                    onChange={handleFile}
                    style={{ display: 'none' }}
                />
            </Fab>
        );
    }, [file]);

    useEffect(() => {
        const initialize = async () => {
            const { result } = await fetch(Number(params.id));
            if (result) {
                setUser(result);
            }
        };
        initialize();
    }, []);

    if (success) {
        return <Success />;
    }
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
                        {!!user?.firstDay &&
                            t('dDay', {
                                dDay,
                            })}
                    </FH2>
                    <Col
                        alignItems={'center'}
                        style={{
                            marginTop: 5,
                        }}>
                        <Avatar user={user} size={sizing.avatar} />
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
                                {t('sendLetterTitle')}
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
                            <FormInput
                                name={'content'}
                                placeholder={t('sendLetterContentPlaceholder')}
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
                                <FormInput
                                    name={'writer'}
                                    placeholder={t(
                                        'sendLetterWriterPlaceholder',
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
                <RoundButton
                    type={'submit'}
                    color={'primary'}
                    text={t('sendLetterSubmitText')}
                    disabled={isSubmitting || !isValid}
                    sx={{
                        marginTop: 10,
                        marginBottom: spacing.form.submit.margin.bottom,
                    }}
                />
            </Form>
        </Screen>
    );
}
