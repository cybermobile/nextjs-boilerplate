'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { Header } from '@/app/components/layout/Header'
import { Sidebar } from '@/app/components/layout/Sidebar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isLoginPage = pathname === '/login'

  return (
    <html lang="en">
      <body>
        <div className="flex h-screen bg-gray-100">
          {!isLoginPage && <Sidebar />}
          <div className="flex-1 flex flex-col overflow-hidden">
            {!isLoginPage && <Header />}
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}