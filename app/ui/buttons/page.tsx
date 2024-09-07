import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Ship, Download, Mail } from 'lucide-react'

export default function ButtonsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">UI Buttons</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Button Variants</CardTitle>
          <CardDescription>Different styles for different purposes</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Button variant="default">Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Button Sizes</CardTitle>
          <CardDescription>Different sizes for different contexts</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap items-center gap-4">
          <Button size="lg">Large</Button>
          <Button size="default">Default</Button>
          <Button size="sm">Small</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Buttons with Icons</CardTitle>
          <CardDescription>Enhance buttons with meaningful icons</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Button>
            <Ship className="mr-2 h-4 w-4" /> Maritime
          </Button>
          <Button variant="secondary">
            <Download className="mr-2 h-4 w-4" /> Download
          </Button>
          <Button variant="outline">
            <Mail className="mr-2 h-4 w-4" /> Email
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}