'use client';

import React, {
    ChangeEvent,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';
import Switch from '@mui/material/Switch';
import Dialog from '@mui/material/Dialog';
import { signOut } from 'firebase/auth';

import { Screen } from '@/components/layout/screen';
import { userInfoState } from '@/recoil/atoms/user-info/user-info';
import { useFindProfileByFirebaseUid } from '@/api/user-info/repository/find-profile-by-firebase-uid';
import { FH4 } from '@/components/typography/FH4';
import { useTheme } from '@/hooks/common/use-theme';
import { Col } from '@/components/grid/col';
import { Avatar } from '@/components/userinfo/avatar';
import { sizing } from './@constants';
import { dropShadow } from '@/theme/shadow';
import { RoundButton } from '@/components/button/round-button';
import { color } from '@/theme/theme';
import { Row } from '@/components/grid/row';
import { UserInfoRes } from '@/api/user-info/vm/res/user-info';
import { Svg } from '@/components/image/svg';
import { iconLogout, iconNext } from '@/assets/icons';
import { spacing } from '@/theme/spacing';
import { useImageUpload } from '@/api/media/repository/image-upload';
import { parseError } from '@/helpers/format/parse-error';
import { useUpdateUserInfo } from '@/api/user-info/repository/update-user-info';
import { FH3 } from '@/components/typography/FH3';
import { firebase } from '@/firebase';
import { routes } from '@/routes';

export function Profile() {
    const router = useRouter();

    const [userInfo, setUserInfo] = useRecoilState(userInfoState);

    const inputRef = useRef<HTMLInputElement>(null);

    const { t } = useTranslation();
    const { theme } = useTheme();

    const { fetch } = useFindProfileByFirebaseUid();
    const { loading: uploading, fetch: imageUpload } = useImageUpload();
    const { loading: editing, fetch: updateUserInfo } = useUpdateUserInfo();

    const [user, setUser] = useState<UserInfoRes | undefined>(userInfo);
    const [file, setFile] = useState<File>();
    const [showConfirm, setShowConfirm] = useState<boolean>(false);

    const openImagePicker = useCallback(() => {
        inputRef.current?.click();
    }, []);

    const handleFile = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setFile(event.target.files?.item(0) ?? undefined);
    }, []);

    const handleIsCollegeHide = useCallback(
        (_: unknown, isCollegeHide: boolean) => {
            if (!user) return;
            setUser({
                ...user,
                isCollegeHide,
            });
        },
        [user],
    );

    const confirmLogout = useCallback(() => {
        setShowConfirm(true);
    }, []);

    const onCloseConfirm = useCallback(() => {
        setShowConfirm(false);
    }, []);

    const logout = async () => {
        await signOut(firebase);
        router.replace(routes.home);
    };

    const submit = async () => {
        if (!user) return;
        if (!file && userInfo?.isCollegeHide === user.isCollegeHide) return;
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
        const { result, error } = await updateUserInfo({
            imageUrl,
            isCollegeHide: user.isCollegeHide,
        });
        if (result) {
            setUserInfo(user);
        } else if (error) {
            alert(parseError(error));
        }
    };

    useEffect(() => {
        if (userInfo) {
            setUser(userInfo);
        }
    }, [userInfo]);

    useEffect(() => {
        const initialize = async () => {
            const { result } = await fetch();
            if (result) {
                setUserInfo(result);
            }
        };
        initialize();
    }, []);

    return (
        <Screen
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'space-between'}
            style={{
                paddingTop: 70,
            }}>
            <div>
                <FH4 color={theme.text.primary} textAlign={'center'}>
                    {user?.name ?? ''}
                </FH4>
                <Col
                    alignItems={'center'}
                    style={{
                        marginTop: 5,
                    }}>
                    <Avatar user={user} size={sizing.avatar} file={file} />
                </Col>
                <div
                    style={{
                        borderRadius: sizing.sheet.borderRadius,
                        boxShadow: dropShadow,
                        marginTop: -sizing.avatar / 2,
                    }}>
                    <Col
                        alignItems={'center'}
                        style={{
                            borderTopLeftRadius: sizing.sheet.borderRadius,
                            borderTopRightRadius: sizing.sheet.borderRadius,
                            backgroundColor: theme.background.primary,
                            paddingTop: 20 + sizing.avatar / 2,
                            paddingBottom: 25,
                        }}>
                        <RoundButton
                            text={t('profileEditProfileImageText')}
                            onClick={openImagePicker}
                            sx={{
                                borderColor: color.primary['3'],
                                borderWidth: 3,
                                borderStyle: 'solid',
                                paddingLeft: 40,
                                paddingRight: 40,
                                boxShadow: dropShadow,
                            }}
                        />
                        <input
                            ref={inputRef}
                            type={'file'}
                            accept={'image/*'}
                            onChange={handleFile}
                            style={{ display: 'none' }}
                        />
                    </Col>
                    <div
                        style={{
                            borderBottomLeftRadius: sizing.sheet.borderRadius,
                            borderBottomRightRadius: sizing.sheet.borderRadius,
                            backgroundColor: theme.background.default,
                            padding: `40px 30px 25px`,
                        }}>
                        <Row alignItems={'center'}>
                            <FH4 style={{ flex: 1 }}>
                                {t('profileIsCollegeHideText')}
                            </FH4>
                            <Switch
                                disableRipple={true}
                                checked={user?.isCollegeHide}
                                onChange={handleIsCollegeHide}
                            />
                        </Row>
                        <Row
                            alignItems={'center'}
                            style={{
                                cursor: 'pointer',
                                marginTop: sizing.menu.gap,
                            }}>
                            <FH4 style={{ flex: 1 }}>
                                {t('profileLetterText')}
                            </FH4>
                            <Svg
                                src={iconNext}
                                color={theme.form.switch.border}
                                width={sizing.menu.icon}
                                height={sizing.menu.icon}
                                style={{
                                    marginRight: 15,
                                }}
                            />
                        </Row>
                        <Row
                            alignItems={'center'}
                            onClick={confirmLogout}
                            style={{
                                cursor: 'pointer',
                                marginTop: sizing.menu.gap,
                            }}>
                            <FH4 style={{ flex: 1 }}>
                                {t('profileLogoutText')}
                            </FH4>
                            <Svg
                                src={iconLogout}
                                color={theme.form.switch.border}
                                width={sizing.menu.icon}
                                height={sizing.menu.icon}
                                style={{
                                    marginRight: 15,
                                }}
                            />
                        </Row>
                    </div>
                </div>
            </div>
            <RoundButton
                text={t('profileSaveText')}
                disabled={uploading || editing}
                shadow={true}
                onClick={submit}
                sx={{
                    marginTop: 10,
                    marginBlock: spacing.form.submit.margin.bottom,
                }}
            />
            <Dialog open={showConfirm} onClose={onCloseConfirm}>
                <div
                    style={{
                        paddingTop: 60,
                        paddingLeft: 35,
                        paddingRight: 35,
                        paddingBottom: 35,
                    }}>
                    <FH3
                        textAlign={'center'}
                        style={{
                            marginLeft: 25,
                            marginRight: 25,
                        }}>
                        {t('profileConfirmLogoutText')}
                    </FH3>
                    <Row alignItems={'center'} style={{ marginTop: 35 }}>
                        <RoundButton
                            color={'inverted'}
                            text={t('buttonYes')}
                            onClick={logout}
                            textSx={{
                                color: theme.text.default,
                            }}
                            sx={{
                                flex: 1,
                                borderColor: theme.button.primary.background,
                                borderWidth: 4,
                                borderStyle: 'solid',
                            }}
                        />
                        <RoundButton
                            text={t('buttonNo')}
                            onClick={onCloseConfirm}
                            sx={{
                                flex: 1,
                                borderColor: theme.button.primary.background,
                                borderWidth: 4,
                                borderStyle: 'solid',
                                marginLeft: 10,
                            }}
                        />
                    </Row>
                </div>
            </Dialog>
        </Screen>
    );
}
