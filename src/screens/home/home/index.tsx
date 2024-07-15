'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import {
    CredentialResponse,
    GoogleLogin,
    GoogleOAuthProvider,
} from '@react-oauth/google';
import { signInWithCustomToken } from 'firebase/auth';
import { jwtDecode } from 'jwt-decode';

import { FTitle } from '@/components/typography/FTitle';
import { useTheme } from '@/hooks/common/use-theme';
import { FH2 } from '@/components/typography/FH2';
import { Screen } from '@/components/layout/screen';
import { spacing } from '@/theme/spacing';
import { routes } from '@/routes';
import { useFetch } from '@/hooks/common/use-fetch';
import { firebase } from '@/firebase';

export function Home() {
    const { t } = useTranslation();
    const { theme } = useTheme();

    const { fetchAPI } = useFetch();

    // [GSI_LOGGER]: The given origin is not allowed for the given client ID.
    const signInGoogle = async (credential: CredentialResponse) => {
        if (!credential.credential) return;
        const payload = jwtDecode(credential.credential);
        const response = await fetchAPI('/api/v1/auth', {
            method: 'POST',
            body: JSON.stringify({
                // snsToken: account?.id_token,
                // snsType: 'GOOGLE',
                // snsId: user.id,
                // email: user.email,
                // displayName: user.name,
                // code: account?.access_token,
            }),
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
                        <GoogleLogin onSuccess={signInGoogle} />
                    </div>
                    <Button
                        href={routes.signUp}
                        style={{
                            marginTop: 15,
                            marginBottom: spacing.form.submit.margin.bottom,
                        }}>
                        {t('homeSignUpWithApple')}
                    </Button>
                </div>
            </Screen>
        </GoogleOAuthProvider>
    );
}
