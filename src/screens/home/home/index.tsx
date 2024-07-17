'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    CredentialResponse,
    GoogleLogin,
    GoogleOAuthProvider,
} from '@react-oauth/google';
import AppleSignIn from 'react-apple-signin-auth';
import { signInWithCustomToken } from 'firebase/auth';
import { jwtDecode } from 'jwt-decode';

import { FTitle } from '@/components/typography/FTitle';
import { useTheme } from '@/hooks/common/use-theme';
import { FH2 } from '@/components/typography/FH2';
import { Screen } from '@/components/layout/screen';
import { useFetch } from '@/hooks/common/use-fetch';
import { firebase } from '@/firebase';
import { useAuth } from '@/contexts/authentication/hook';
import { JwtPayload,AppleSigninResponse } from '@/@types';

export function Home() {
    const { t } = useTranslation();
    const { theme, type } = useTheme();

    const { fetchAPI } = useFetch();
    const { user:firebaeUser } = useAuth();

    // [GSI_LOGGER]: The given origin is not allowed for the given client ID.
    const signInGoogle = async (credential: CredentialResponse) => {
        if (!credential.credential) return;
        const payload = jwtDecode<JwtPayload>(credential.credential);
        const token = firebaeUser ? await firebaeUser.getIdToken() : '';
        const response = await fetchAPI('/api/v1/auth/sign-in/custom', {
            method: 'POST',
            body: JSON.stringify({
                'snsToken': credential.credential,
                'snsType': 'GOOGLE',
                'snsId': credential.clientId || '',
                'email': payload.email,
                'displayName': payload.name,
                'code': payload.jti,
                'mobile': '000000000',
                'countryNumber': '+1',
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`,
                'Access-Control-Allow-Origin':'*'
            },
        });

        const data = await response.json();
        if (data.customToken) {
            await signInWithCustomToken(firebase, data.customToken);
        }
    };

    const signInApple = async (credential: AppleSigninResponse) => {
        console.log(credential);
        const token = firebaeUser ? await firebaeUser.getIdToken() : '';
        const { user, authorization } = credential;
        const { id_token, code } = authorization;
        const userIdentifier = user ? user.id : null;
        const email = user ? user.email : null;
        const displayName = user && user.name ? `${user.name.firstName || ''} ${user.name.lastName || ''}`.trim() : null;
        const response = await fetchAPI('/api/v1/auth/sign-in/custom', {
            method: 'POST',
            body: JSON.stringify({
                'snsToken': id_token,
                'snsType': 'APPLE',
                'snsId': userIdentifier,
                'email': email,
                'displayName': displayName,
                'code': code,
                'mobile': '000000000',
                'countryNumber': '+1',
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`,
                'Access-Control-Allow-Origin':'*'
            },
        });

        const data = await response.json();
        if (data.customToken) {
            await signInWithCustomToken(firebase, data.customToken);
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
                        <GoogleLogin onSuccess={signInGoogle} onError={() => {
                            console.log('Login Failed');
                        }}
                        />
                    </div>
                    <div style={{ marginTop: 15 }}>
                        <AppleSignIn
                            authOptions={{
                                clientId: process.env.APPLE_CLIENT_ID!,
                                scope: 'email name',
                                redirectURI: 'http://localhost:3000',
                                // redirectURI: 'https://welcomebook.com',
                                state: 'state',
                                nonce: 'nonce',
                                usePopup: true,
                            }}
                            uiType={type}
                            onSuccess={signInApple}
                            onError={() => { }}
                        />
                    </div>
                </div>
            </Screen>
        </GoogleOAuthProvider>
    );
}
