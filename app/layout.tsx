import React from 'react'
import type { Metadata } from 'next'
import './global.css'

import StyledComponentsRegistry from './lib/registry'

export const metadata: Metadata = {
    title: "Unsplash search app",
    description: `Kathryn's awesome coding test for Zora.co`,
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            </head>
            <body>
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
        </html>
    )
}
