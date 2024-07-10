import '@/i18n';
import type { Metadata } from 'next';

import { Layout } from '@/components/layout/layout';

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
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
