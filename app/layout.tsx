"use client"
import * as React from "react";
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable + "font-inter"}>
        <NextUIProvider>
          <Header />
          <section className="p-4">
            {children}
          </section>
        </NextUIProvider>
      </body>
    </html>
  )
}
