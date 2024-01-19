import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import KDMIcon from "../public/favicon.ico"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "KDMNorCal",
  description: "Developed by cesarcampos.dev",
  // favicon: "/favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
