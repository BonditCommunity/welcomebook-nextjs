
import '@/i18n';
import '@/theme/global.css';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';

import { RecoilProvider } from '@/recoil/provider';
import { I18nProvider } from '@/i18n/provider';
import { Layout } from '@/components/layout/layout';
import { ThemeProvider } from '@/theme/provider';
import { DEFAULT_LOCALE } from '@/constants/common/locale';
import { Color } from '@/theme/@enums';
import LoadingSplash from '@/components/loading/LoadingSplash';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';

export const metadata: Metadata = {
    title: 'Welcome Book',
};

export const viewport = {
    themeColor: Color.main,
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    viewportFit: 'cover',
    userScalable: false,
};

function detectLanguage() {
    return cookies().get('i18next')?.value ?? DEFAULT_LOCALE.value;
}

function AuthStatusChecker({ children }: { children: React.ReactNode }) {
    // const { authStatus } = useAuth();

    // if (!authStatus) {
    //     return <LoadingSplash />;
    // }

    return <>{children}</>;
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
                                <AuthStatusChecker>
                                    <Layout>{children}</Layout>
                                </AuthStatusChecker>
                            </AuthProvider>
                            {/* <Layout>{children}</Layout> */}
                        </ThemeProvider>
                    </I18nProvider>
                </RecoilProvider>
            </body>
        </html>
    );
}

