import '@/i18n';
import '@/theme/global.css';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';

import { RecoilProvider } from '@/recoil/provider';
import { I18nProvider } from '@/i18n/provider';
import { Layout } from '@/components/layout/layout';
import { ThemeProvider } from '@/theme/provider';
import { DEFAULT_LOCALE } from '@/constants/common/locale';

export const metadata: Metadata = {
    title: 'Welcome Book',
};

export const viewport = {
    // themeColor
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
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
    // const lang = detectLanguage();
    const lang = 'ko';

    return (
        <html lang={lang}>
            <body>
                <RecoilProvider>
                    <I18nProvider lang={lang}>
                        <ThemeProvider>
                            <Layout>{children}</Layout>
                        </ThemeProvider>
                    </I18nProvider>
                </RecoilProvider>
            </body>
        </html>
    );
}
