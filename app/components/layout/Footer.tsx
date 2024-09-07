import React from 'react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link href="/privacy" className="text-gray-400 hover:text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-gray-400 hover:text-gray-500">
            Terms of Service
          </Link>
          <Link href="/contact" className="text-gray-400 hover:text-gray-500">
            Contact
          </Link>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-400">
            &copy; {new Date().getFullYear()} Maritime Certification Dashboard. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}