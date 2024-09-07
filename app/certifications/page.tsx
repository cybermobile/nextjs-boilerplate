import React from 'react'
import Link from 'next/link'
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Badge } from "@/app/components/ui/badge"
import { Search, Plus } from 'lucide-react'

// This would typically come from an API or database
const certifications = [
  { id: 1, name: "Master Mariner", holder: "John Doe", expiryDate: "2024-06-30", status: "Valid" },
  { id: 2, name: "Chief Engineer", holder: "Jane Smith", expiryDate: "2023-12-15", status: "Expiring Soon" },
  { id: 3, name: "Able Seaman", holder: "Bob Johnson", expiryDate: "2023-09-01", status: "Expired" },
  { id: 4, name: "GMDSS Operator", holder: "Alice Brown", expiryDate: "2025-03-22", status: "Valid" },
  { id: 5, name: "Ship Security Officer", holder: "Charlie Davis", expiryDate: "2024-11-10", status: "Valid" },
]

const getBadgeVariant = (status: string): "default" | "secondary" | "destructive" => {
  switch (status) {
    case 'Valid':
      return 'default'
    case 'Expiring Soon':
      return 'secondary'
    case 'Expired':
      return 'destructive'
    default:
      return 'default'
  }
}

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Certifications</h1>
          <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-gray-900">
            <Plus className="mr-2 h-4 w-4" /> Add New Certification
          </Button>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search certifications..."
              className="w-full bg-gray-800 text-white placeholder-gray-400 border-gray-700 rounded-md pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="bg-white rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Holder</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expiry Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {certifications.map((cert, index) => (
                <tr key={cert.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{cert.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cert.holder}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cert.expiryDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant={getBadgeVariant(cert.status)}>
                      {cert.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Link href={`/certifications/${cert.id}`} className="text-blue-600 hover:text-blue-900">
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}