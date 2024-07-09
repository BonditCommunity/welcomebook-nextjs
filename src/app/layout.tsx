import type { Metadata } from 'next';

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
            <main>{children}</main>
        </html>
    );
}
