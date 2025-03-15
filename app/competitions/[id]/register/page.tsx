"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useRouter } from "next/navigation"
import { ArrowLeft, Calendar, Trophy, Users } from "lucide-react"
import Link from "next/link"

export default function HackathonRegistrationPage({ params }: { params: { id: string } }) {
  const [isLoading, setIsLoading] = useState(false)
  const [registrationType, setRegistrationType] = useState("individual")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate registration
    setTimeout(() => {
      setIsLoading(false)
      router.push(`/competitions/${params.id}/confirmation`)
    }, 1500)
  }

  return (
    <div className="max-w-4xl mx-auto py-8 space-y-8">
      <div>
        <Link
          href={`/competitions/${params.id}`}
          className="flex items-center text-muted-foreground hover:text-foreground transition-colors mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to hackathon details
        </Link>
        <h1 className="text-3xl font-bold">Register for Hackathon</h1>
        <p className="text-muted-foreground">Complete the form below to register for the hackathon</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle>Registration Information</CardTitle>
              <CardDescription>Provide your details to join the hackathon</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label className="text-base">Registration Type</Label>
                    <RadioGroup
                      defaultValue="individual"
                      className="grid grid-cols-2 gap-4 pt-2"
                      onValueChange={setRegistrationType}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="individual" id="individual" />
                        <Label htmlFor="individual" className="font-normal">
                          Individual
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="team" id="team" />
                        <Label htmlFor="team" className="font-normal">
                          Team
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {registrationType === "team" && (
                    <div className="space-y-2">
                      <Label htmlFor="teamName">Team Name</Label>
                      <Input id="teamName" placeholder="Enter your team name" required />
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="name@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role">Your Role</Label>
                    <Select defaultValue="developer">
                      <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="developer">Developer</SelectItem>
                        <SelectItem value="designer">Designer</SelectItem>
                        <SelectItem value="project-manager">Project Manager</SelectItem>
                        <SelectItem value="student">Student</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="skills">Skills (comma separated)</Label>
                    <Input id="skills" placeholder="React, Node.js, UI/UX, etc." />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Experience Level</Label>
                    <Select defaultValue="intermediate">
                      <SelectTrigger>
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                        <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                        <SelectItem value="advanced">Advanced (3-5 years)</SelectItem>
                        <SelectItem value="expert">Expert (5+ years)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="motivation">Why do you want to join this hackathon?</Label>
                    <Textarea
                      id="motivation"
                      placeholder="Tell us about your motivation and what you hope to achieve..."
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectIdea">Project Idea (optional)</Label>
                    <Textarea
                      id="projectIdea"
                      placeholder="Briefly describe your project idea if you have one..."
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the hackathon rules and code of conduct
                    </Label>
                  </div>
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Submitting..." : "Register for Hackathon"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle>Hackathon Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-1">AI Innovation Challenge</h3>
                <p className="text-sm text-muted-foreground">
                  Develop AI solutions that address pressing social challenges
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>May 1 - June 15, 2025</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Trophy className="h-4 w-4 text-primary" />
                  <span>$10,000 in prizes</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-primary" />
                  <span>2-5 team members</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle>Important Dates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Registration Deadline:</span>
                  <span>May 10, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Team Formation:</span>
                  <span>May 10, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Idea Submission:</span>
                  <span>May 15, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Final Submission:</span>
                  <span>June 15, 2025</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                If you have any questions about the registration process or the hackathon, please contact us.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

