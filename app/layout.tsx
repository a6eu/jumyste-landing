import type { Metadata } from 'next'
import './globals.css'
import React from 'react'
import { Comfortaa } from 'next/font/google'

const comfortaa = Comfortaa({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
    title: 'Jumyste - HeRe new opportunities',
    description: 'Made by CodeKyreu team',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body className={`${comfortaa.className} antialiased`}>{children}</body>
        </html>
    )
}
