import '@/i18n';
import type { Metadata } from 'next';

import { Layout } from '@/components/layout/layout';
import { ThemeProvider } from '@/theme/provider';

export const metadata: Metadata = {
    title: 'Welcome Book',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang={'en'}>
            <body>
                <ThemeProvider>
                    <Layout>{children}</Layout>
                </ThemeProvider>
            </body>
        </html>
    );
}
