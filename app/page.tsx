import React from 'react'
import Link from 'next/link'
import { Button } from "@/app/components/ui/button"
import { Ship } from 'lucide-react'

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex items-center gap-4 mb-8">
        <Ship className="w-12 h-12 text-blue-600" />
        <h1 className="text-4xl font-bold text-gray-800">Maritime Certifications</h1>
      </div>
      <p className="text-xl mb-8 text-gray-600">Manage and track your maritime certifications with ease.</p>
      <div className="space-x-4">
        <Button asChild>
          <Link href="/auth/login">Login</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/auth/register">Register</Link>
        </Button>
      </div>
      <footer className="absolute bottom-4 text-sm text-gray-500">
        © 2023 Maritime Certifications. All rights reserved.
      </footer>
    </div>
  )
}

export default HomePage