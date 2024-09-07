import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { Badge } from "@/app/components/ui/badge"
import { Progress } from "@/app/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar"
import { Calendar, Ship, User, FileCheck, AlertTriangle } from 'lucide-react'

export default function CardPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">UI Cards</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Basic Card */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Card</CardTitle>
            <CardDescription>A simple card with title and description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is the content of a basic card. It can contain any information you want to display.</p>
          </CardContent>
          <CardFooter>
            <Button>Action</Button>
          </CardFooter>
        </Card>

        {/* Certification Card */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Master Mariner</CardTitle>
                <CardDescription>STCW Regulation II/2</CardDescription>
              </div>
              <Badge variant="secondary">Valid</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                Expires: 2025-06-30
              </div>
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                John Doe
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">View Details</Button>
          </CardFooter>
        </Card>

        {/* Employee Card */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Employee Avatar" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>Jane Smith</CardTitle>
                <CardDescription>Chief Engineer</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Certifications Complete:</span>
                <span>8/10</span>
              </div>
              <Progress value={80} />
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">View Profile</Button>
          </CardFooter>
        </Card>

        {/* Vessel Card */}
        <Card>
          <CardHeader>
            <CardTitle>MV Oceanic Explorer</CardTitle>
            <CardDescription>Container Ship</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>IMO Number:</span>
                <span>9876543</span>
              </div>
              <div className="flex justify-between">
                <span>Flag:</span>
                <span>Panama</span>
              </div>
              <div className="flex justify-between">
                <span>Crew Size:</span>
                <span>25</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">View Vessel Details</Button>
          </CardFooter>
        </Card>

        {/* Training Course Card */}
        <Card>
          <CardHeader>
            <CardTitle>Advanced Firefighting</CardTitle>
            <CardDescription>STCW A-VI/3</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-2">Learn advanced techniques for combating fires on board ships.</p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                5 days
              </div>
              <Badge>Mandatory</Badge>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Enroll Now</Button>
          </CardFooter>
        </Card>

        {/* Compliance Status Card */}
        <Card>
          <CardHeader>
            <CardTitle>Compliance Status</CardTitle>
            <CardDescription>Overall fleet certification status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Compliance Rate:</span>
                <span className="font-bold text-green-600">98.5%</span>
              </div>
              <Progress value={98.5} className="h-2" />
              <p className="text-sm text-muted-foreground">15 certifications expiring in the next 30 days</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">View Detailed Report</Button>
          </CardFooter>
        </Card>

        {/* Quick Stats Card */}
        <Card>
          <CardHeader>
            <CardTitle>Dashboard Overview</CardTitle>
            <CardDescription>Key metrics at a glance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Ship className="h-4 w-4 text-blue-500" />
                <div>
                  <p className="text-sm font-medium">Total Vessels</p>
                  <p className="text-2xl font-bold">42</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4 text-green-500" />
                <div>
                  <p className="text-sm font-medium">Active Crew</p>
                  <p className="text-2xl font-bold">1,250</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <FileCheck className="h-4 w-4 text-yellow-500" />
                <div>
                  <p className="text-sm font-medium">Valid Certifications</p>
                  <p className="text-2xl font-bold">3,780</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-4 w-4 text-red-500" />
                <div>
                  <p className="text-sm font-medium">Expiring Soon</p>
                  <p className="text-2xl font-bold">52</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Audit Card */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Audit</CardTitle>
            <CardDescription>Prepare for your next certification audit</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Audit Date:</span>
                <Badge variant="outline">2023-08-15</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Auditor:</span>
                <span>Maritime Safety Authority</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Focus Areas:</span>
                <span>Safety Management, Crew Certifications</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">View Audit Checklist</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}