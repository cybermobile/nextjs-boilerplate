import React from 'react'
import Link from 'next/link'
import { Home, FileText, Users, Settings } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav>
        <ul>
          <li className="mb-4">
            <Link href="/dashboard" className="flex items-center p-2 rounded hover:bg-gray-700">
              <Home className="mr-2" />
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/certifications" className="flex items-center p-2 rounded hover:bg-gray-700">
              <FileText className="mr-2" />
              Certifications
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/employees" className="flex items-center p-2 rounded hover:bg-gray-700">
              <Users className="mr-2" />
              Employees
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/settings" className="flex items-center p-2 rounded hover:bg-gray-700">
              <Settings className="mr-2" />
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}