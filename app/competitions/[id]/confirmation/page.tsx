import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Calendar, Trophy, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function RegistrationConfirmationPage({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-2xl mx-auto py-16 flex flex-col items-center text-center">
      <div className="bg-primary/10 rounded-full p-4 mb-6">
        <CheckCircle className="h-12 w-12 text-primary" />
      </div>

      <h1 className="text-3xl font-bold mb-2">Registration Successful!</h1>
      <p className="text-muted-foreground mb-8 max-w-md">
        Thank you for registering for the hackathon. We've sent a confirmation email with all the details.
      </p>

      <Card className="w-full border-primary/20 mb-8">
        <CardHeader>
          <CardTitle>AI Innovation Challenge</CardTitle>
          <CardDescription>Your registration has been confirmed</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center pb-4 border-b">
            <span className="text-muted-foreground">Registration ID</span>
            <span className="font-medium">HAC-{Math.floor(100000 + Math.random() * 900000)}</span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              <span>May 1 - June 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="h-4 w-4 text-primary" />
              <span>$10,000 in prizes</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <span>2-5 team members</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <p className="text-sm text-muted-foreground">
            You'll receive updates and important information about the hackathon via email. Make sure to check your
            inbox regularly.
          </p>
        </CardFooter>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button variant="outline" asChild>
          <Link href="/dashboard">Go to Dashboard</Link>
        </Button>
        <Button asChild>
          <Link href={`/competitions/${params.id}`}>
            Hackathon Details <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

