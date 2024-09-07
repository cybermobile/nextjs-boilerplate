import React from 'react'
import { notFound } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, Printer } from 'lucide-react'

// This would typically come from an API or database
const getCertificationById = (id: string) => {
  const certifications = [
    { id: "1", name: "Master Mariner", holder: "John Doe", expiryDate: "2024-06-30", status: "Valid", issueDate: "2019-06-30", issuingAuthority: "Maritime and Coastguard Agency", certificationNumber: "MM-123456" },
    { id: "2", name: "Chief Engineer", holder: "Jane Smith", expiryDate: "2023-12-15", status: "Expiring Soon", issueDate: "2018-12-15", issuingAuthority: "Maritime and Coastguard Agency", certificationNumber: "CE-789012" },
    { id: "3", name: "Able Seaman", holder: "Bob Johnson", expiryDate: "2023-05-01", status: "Expired", issueDate: "2018-05-01", issuingAuthority: "Maritime and Coastguard Agency", certificationNumber: "AS-345678" },
  ]
  return certifications.find(cert => cert.id === id)
}

export default function CertificationPage({ params }: { params: { id: string } }) {
  const certification = getCertificationById(params.id)

  if (!certification) {
    notFound()
  }

  const getBadgeVariant = (status: string): "default" | "secondary" | "destructive" | "outline" => {
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

  return (
    <div className="space-y-6">
      <Button variant="link" className="pl-0">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Certifications
      </Button>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>{certification.name}</CardTitle>
              <CardDescription>Certification Details</CardDescription>
            </div>
            <Badge variant={getBadgeVariant(certification.status)}>
              {certification.status}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500">Holder</p>
              <p>{certification.holder}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Certification Number</p>
              <p>{certification.certificationNumber}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Issue Date</p>
              <p>{certification.issueDate}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Expiry Date</p>
              <p>{certification.expiryDate}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Issuing Authority</p>
              <p>{certification.issuingAuthority}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">
            <Printer className="mr-2 h-4 w-4" />
            Print
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}