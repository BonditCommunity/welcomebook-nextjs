import '@/i18n';
import '@/theme/global.css';
import type { Metadata } from 'next';

import { Layout } from '@/components/layout/layout';

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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang={'en'}>
            <body>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
