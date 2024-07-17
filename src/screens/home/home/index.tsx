'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import {
    CredentialResponse,
    GoogleLogin,
    GoogleOAuthProvider,
} from '@react-oauth/google';
import AppleSignIn from 'react-apple-signin-auth';
import { signInWithCustomToken } from 'firebase/auth';

import { FTitle } from '@/components/typography/FTitle';
import { useTheme } from '@/hooks/common/use-theme';
import { FH2 } from '@/components/typography/FH2';
import { Screen } from '@/components/layout/screen';
import { firebase } from '@/firebase';
import { AppleSignInResponse } from '@/@types';
import { useSignIn } from '@/api/authentication/repository/sign-in';
import { routes } from '@/routes';
import { parseError } from '@/helpers/format/parse-error';

export function Home() {
    const router = useRouter();

    const { t } = useTranslation();
    const { theme, type } = useTheme();

    const { fetch } = useSignIn();

    const onSuccess = async () => {
        router.push(routes.signUp);
    };

    const signInGoogle = async (credential: CredentialResponse) => {
        if (!credential.credential) return;
        const { result, error } = await fetch({
            snsType: 'GOOGLE',
            snsToken: credential.credential,
        });

        if (result?.customToken) {
            await signInWithCustomToken(firebase, result.customToken);
            onSuccess();
        } else if (error) {
            alert(parseError(error));
        }
    };

    const signInApple = async (credential: AppleSignInResponse) => {
        const { result, error } = await fetch({
            snsType: 'APPLE',
            snsToken: credential.authorization.id_token,
        });

        if (result?.customToken) {
            await signInWithCustomToken(firebase, result.customToken);
            onSuccess();
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
                <div>
                    <div style={{ marginTop: 15 }}>
                        <GoogleLogin onSuccess={signInGoogle} />
                    </div>
                    <div style={{ marginTop: 15 }}>
                        <AppleSignIn
                            authOptions={{
                                clientId: process.env.APPLE_CLIENT_ID!,
                                scope: 'email name',
                                redirectURI: 'http://localhost:3000',
                                // redirectURI: 'https://welcomebook.com',
                                state: 'origin:web',
                                nonce: 'nonce',
                                usePopup: true,
                            }}
                            uiType={type}
                            onSuccess={signInApple}
                            onError={() => {}}
                        />
                    </div>
                </div>
            </Screen>
        </GoogleOAuthProvider>
    );
}
