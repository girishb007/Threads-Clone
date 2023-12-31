import BottomNav from '@/components/bottom-nav';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image';

import dayjs from 'dayjs';
dayjs().format();

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col w-full h-screen bg-brand`}>
        <header className='w-full flex justify-center items-center'>
          <Image width={25} height={25} src='/logo.png' alt='logo' className='mt-4' />
        </header>
        <main className='flex-1 mt-4'>
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  )
}
