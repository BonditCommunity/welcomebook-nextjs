'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import {
    CredentialResponse,
    GoogleLogin,
    GoogleOAuthProvider,
} from '@react-oauth/google';
import { signInWithCustomToken } from 'firebase/auth';

import { FTitle } from '@/components/typography/FTitle';
import { useTheme } from '@/hooks/common/use-theme';
import { FH2 } from '@/components/typography/FH2';
import { Screen } from '@/components/layout/screen';
import { firebase } from '@/firebase';
import { useSignIn } from '@/api/authentication/repository/sign-in';
import { routes } from '@/routes';
import { parseError } from '@/helpers/format/parse-error';
import { SignInStatus } from '@/api/authentication/vm/enum/sign-in-status';
import { SnsType } from '@/api/user-info/vm/enum/sns-type';
import { spacing } from '@/theme/spacing';
import { Center } from '@/components/grid/center';

export function Home() {
    const router = useRouter();

    const { t } = useTranslation();
    const { theme, type } = useTheme();

    const { fetch } = useSignIn();

    const onSuccess = async (status?: SignInStatus) => {
        if (status === SignInStatus.FINISHEDSNSLOGIN) {
            router.push(routes.signUp);
        } else if (status === SignInStatus.FINISHEDSIGNUP) {
            router.push(routes.wishlist.root);
        }
    };

    const signInGoogle = async (credential: CredentialResponse) => {
        if (!credential.credential) return;
        const { result, error } = await fetch({
            snsType: SnsType.GOOGLE,
            snsToken: credential.credential,
        });

        if (result?.customToken) {
            await signInWithCustomToken(firebase, result.customToken);
            onSuccess(result.status);
        } else if (error) {
            alert(parseError(error));
        }
    };

    return (
        <GoogleOAuthProvider
            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
            <Screen
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'space-between'}>
                <div>
                    <FTitle
                        color={theme.text.primary}
                        style={{
                            marginTop: 135,
                        }}>
                        {t('homeTitle')}
                    </FTitle>
                    <FH2
                        textAlign={'center'}
                        color={theme.text.secondary}
                        style={{
                            marginTop: 80,
                            marginLeft: 15,
                            marginRight: 15,
                        }}>
                        {t('homeSubtitle')}
                    </FH2>
                </div>
                <Center
                    style={{
                        marginTop: 15,
                        marginBottom: spacing.form.submit.margin.bottom,
                    }}>
                    <GoogleLogin
                        type={'standard'}
                        onSuccess={signInGoogle}
                        size={'large'}
                    />
                </Center>
            </Screen>
        </GoogleOAuthProvider>
    );
}
