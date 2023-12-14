"use client"
import * as React from "react";
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { NextUIProvider } from "@nextui-org/react";
import {Providers} from "./providers";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  adjustFontFallback: false
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='light'>
      <body className={inter.variable + "font-inter"}>
        <Providers>
          <Header />
          <section>
            {children}
          </section>
        </Providers>
      </body>
    </html>
  )
}
