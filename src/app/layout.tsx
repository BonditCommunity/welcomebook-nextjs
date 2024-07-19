import '@/i18n';
import '@/theme/global.css';
import '@/firebase';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';

import { RecoilProvider } from '@/recoil/provider';
import { I18nProvider } from '@/i18n/provider';
import { Layout } from '@/components/layout/layout';
import { ThemeProvider } from '@/theme/provider';
import { DEFAULT_LOCALE } from '@/constants/common/locale';
import { color } from '@/theme/theme';
import { AuthProvider } from '@/authentication/provider';
import { AuthConsumer } from '@/authentication/consumer';

export const metadata: Metadata = {
    metadataBase: new URL('https://uscollege.live'),
    title: 'Welcome Book',
    manifest: '/manifest.json',
    icons: [
        {
            rel: 'icon',
            url: '/favicon/favicon.ico',
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            url: '/favicon/favicon-16.png',
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            url: '/favicon/favicon-32.png',
        },
        {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            url: '/favicon/apple-touch-icon.png',
        },
    ],
};

export const viewport = {
    themeColor: color.primary.default,
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    viewportFit: 'cover',
    userScalable: false,
};

function detectLanguage() {
    return cookies().get('i18next')?.value ?? DEFAULT_LOCALE.value;
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const lang = detectLanguage();

    return (
        <html lang={lang} suppressHydrationWarning={true}>
            <body>
                <InitColorSchemeScript defaultMode={'system'} />
                <RecoilProvider>
                    <I18nProvider lang={lang}>
                        <ThemeProvider>
                            <AuthProvider>
                                <Layout>
                                    <AuthConsumer>{children}</AuthConsumer>
                                </Layout>
                            </AuthProvider>
                        </ThemeProvider>
                    </I18nProvider>
                </RecoilProvider>
            </body>
        </html>
    );
}
