import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aapka Sahyog Foundation | Social Impact NGO",
  description:
    "Aapka Sahyog Foundation - Empowering communities through education, environmental protection, and social welfare",

  icons: {
    icon: [
      {
        url: "/images/asf-logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/asf-logo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/images/asf-logo.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/images/asf-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
