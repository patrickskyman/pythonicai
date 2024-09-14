import { type Metadata } from 'next'
import React, { Suspense  } from 'react'
import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'
import Newsletter from "@/components/layout/Newsletter";
import './globals.css';
import '@/styles/styles.scss'
import Menu from '@/components/navbarold';
import { Footer } from '@/components/Footer';
import GlobalProvider from './GlobalProvider'
import ModalSearch from '@/components/Modal/ModalSearch'


export const metadata = {
  title: 'PythonicAI - Unlock the Power of Python for AI and Machine Learning',
  description: 'Learn and apply Python for Artificial Intelligence. From deep learning to AI-driven automation, explore how Python can help you build smarter solutions effortlessly.',
  icons: {
    icon: '/logos.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <GlobalProvider>
    <html lang="en">
    <Suspense>
      <body>
        <Menu />
        {children}
        <ModalSearch />
        <Newsletter />
        <Footer />
      </body>
      </Suspense>
    </html>
    </GlobalProvider>
  )
}
