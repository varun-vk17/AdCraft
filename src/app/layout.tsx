import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'AdCraft AI - The AI Ad Engine for 10x Growth',
    description: 'Turn a single product URL into hundreds of on-brand ad creatives. No design skills required.',
    keywords: ['AI Ads', 'Ad Generator', 'Marketing AI', 'Social Media Ads', 'Ad Creative'],
    openGraph: {
        title: 'AdCraft AI - The AI Ad Engine for 10x Growth',
        description: 'Turn a single product URL into hundreds of on-brand ad creatives. No design skills required.',
        url: 'https://adcraft.ai',
        siteName: 'AdCraft AI',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AdCraft AI - The AI Ad Engine for 10x Growth',
        description: 'Turn a single product URL into hundreds of on-brand ad creatives.',
        creator: '@adcraftai',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
                <Analytics />
            </body>
        </html>
    )
}
