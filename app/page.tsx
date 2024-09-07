import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to Maritime Certifications</h1>
      <p className="text-xl mb-8">Manage and track your maritime certifications with ease.</p>
      <div className="space-x-4">
        <Button asChild>
          <Link href="/auth/login">Login</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/auth/register">Register</Link>
        </Button>
      </div>
    </div>
  )
}