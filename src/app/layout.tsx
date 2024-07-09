import '@/i18n';
import '@/theme/global.css';
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
                <Layout>
                    <main>{children}</main>
                </Layout>
            </body>
        </html>
    );
}
