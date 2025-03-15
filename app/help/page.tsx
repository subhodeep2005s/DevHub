import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { ArrowRight, FileQuestion, Headphones, LifeBuoy, MessageSquare, Search, Settings, Users } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function HelpCenterPage() {
  return (
    <div className="container mx-auto py-10 space-y-10">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Help Center</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Find answers to common questions and get the support you need
        </p>
        <div className="relative max-w-xl mx-auto mt-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search for help..." className="pl-10 h-12 rounded-full" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mb-2">
              <FileQuestion className="h-5 w-5 text-primary" />
            </div>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>Quick answers to common questions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Browse our comprehensive FAQ section to find answers to the most common questions about DevHub.
            </p>
            <Button asChild>
              <Link href="/faq">
                View FAQs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mb-2">
              <Headphones className="h-5 w-5 text-primary" />
            </div>
            <CardTitle>Contact Support</CardTitle>
            <CardDescription>Get help from our support team</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Can't find what you're looking for? Our support team is here to help you with any questions or issues.
            </p>
            <Button asChild>
              <Link href="/contact">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mb-2">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <CardTitle>Community Forum</CardTitle>
            <CardDescription>Connect with other users</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Join our community forum to ask questions, share your experiences, and learn from other DevHub users.
            </p>
            <Button asChild>
              <Link href="/community/forum">
                Visit Forum <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="hackathons">Hackathons</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>

        <TabsContent value="account" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Management</CardTitle>
                <CardDescription>Help with your account settings</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li>
                    <Link href="/help/account/signup" className="text-primary hover:underline">
                      How do I create an account?
                    </Link>
                  </li>
                  <li>
                    <Link href="/help/account/profile" className="text-primary hover:underline">
                      How do I update my profile information?
                    </Link>
                  </li>
                  <li>
                    <Link href="/help/account/password" className="text-primary hover:underline">
                      How do I reset my password?
                    </Link>
                  </li>
                  <li>
                    <Link href="/help/account/delete" className="text-primary hover:underline">
                      How do I delete my account?
                    </Link>
                  </li>
                  <li>
                    <Link href="/help/account/notifications" className="text-primary hover:underline">
                      How do I manage my notification settings?
                    </Link>
                  </li>
                </ul>
                <Button variant="ghost" size="sm" className="mt-4" asChild>
                  <Link href="/help/account">
                    View all account help articles <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Privacy & Security</CardTitle>
                <CardDescription>Help with privacy and security settings</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li>
                    <Link href="/help/privacy/data" className="text-primary hover:underline">
                      What data does DevHub collect about me?
                    </Link>
                  </li>
                  <li>
                    <Link href="/help/privacy/sharing" className="text-primary hover:underline">
                      Who can see my profile and projects?
                    </Link>
                  </li>
                  <li>
                    <Link href="/help/privacy/2fa" className="text-primary hover:underline">
                      How do I enable two-factor authentication?
                    </Link>
                  </li>
                  <li>
                    <Link href="/help/privacy/sessions" className="text-primary hover:underline">
                      How do I manage my active sessions?
                    </Link>
                  </li>
                  <li>
                    <Link href="/help/privacy/download" className="text-primary hover:underline">
                      How do I download my data?
                    </Link>
                  </li>
                </ul>
                <Button variant="ghost" size="sm" className="mt-4" asChild>
                  <Link href="/help/privacy">
                    View all privacy help articles <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="projects" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Creating Projects</CardTitle>
                <CardDescription>Help with creating and managing projects</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li>
                    <Link href="/help/projects/create" className="text-primary hover:underline">
                      How do I create a new project?
                    </Link>
                  </li>
                  <li>
                    <Link href="/help/projects/edit" className="text-primary hover:underline">
                      How do I edit my project details?
                    </Link>
                  </li>
                  <li>
                    <Link href="/help/projects/collaborators" className="text-primary hover:underline">
                      How do I add collaborators to my project?
                    </Link>
                  </li>
                  <li>
                    <Link href="/help/projects/visibility" className="text-primary hover:underline">
                      How do I change my project's visibility?
                    </Link>
                  </li>
                  <li>
                    <Link href="/help/projects/delete" className="text-primary hover:underline">
                      How do I delete a project?
                    </Link>
                  </li>
                </ul>
                <Button variant="ghost" size="sm" className="mt-4" asChild>
                  <Link href="/help/projects">
                    View all project help articles <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Project Showcase</CardTitle>
                <CardDescription>Help with showcasing your projects</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li>
                    <Link href="/help/showcase/images" className="text-primary hover:underline">
                      How do I add images to my project?
                    </Link>
                  </li>
                  <li>
                    <Link href="/help/showcase/videos" className="text-primary hover:underline">
                      How do I add videos to my project?
                    </Link>
                  </li>
                  <li>
                    <Link href="/help/showcase/demo" className="text-primary hover:underline">
                      How do I add a live demo to my project?
                    </Link>
                  </li>
                  <li>
                    <Link href="/help/showcase/github" className="text-primary hover:underline">
                      How do I link my GitHub repository?
                    </Link>
                  </li>
                  <li>
                    <Link href="/help/showcase/featured" className="text-primary hover:underline">
                      How do I get my project featured?
                    </Link>
                  </li>
                </ul>
                <Button variant="ghost" size="sm" className="mt-4" asChild>
                  <Link href="/help/showcase">
                    View all showcase help articles <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="hackathons" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Participating in Hackathons</CardTitle>
                <CardDescription>Help with joining and participating in hackathons</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li>
                    <Link href="/help/hackathons/join" className="text-primary hover:underline">
                      How do I join a hackathon?
                    </Link>
                  </li>
                  <li>
                    <Link href="/help/hackathons/team" className="text-primary hover:underline">
                      How do I form or join a team?
                    </Link>
                  </li>
                  <li>
                    <Link href="/help/hackathons/submit" className="text-primary hover:underline">
                      How do I submit my project?
                    </Link>
                  </li>
                  <li>
                    <Link href="/help/hackathons/judging" className="text-primary hover:underline">
                      How does the judging process work?
                    </Link>
                  </li>
                  <li>
                    <Link href="/help/hackathons/prizes" className="text-primary hover:underline">
                      How do I claim my prizes?
                    </Link>
                  </li>
                </ul>
                <Button variant="ghost" size="sm" className="mt-4" asChild>
                  <Link href="/help/hackathons">
                    View all hackathon help articles <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Organizing Hackathons</CardTitle>
                <CardDescription>Help with creating and managing hackathons</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li>
                    <Link href="/help/organizing/create" className="text-primary hover:underline">
                      How do I create a hackathon?
                    </Link>
                  </li>
                  <li>
                    <Link href="/help/organizing/manage" className="text-primary hover:underline">
                      How do I manage participants?
                    </Link>
                  </li>
                  <li>
                    <Link href="/help/organizing/judges" className="text-primary hover:underline">
                      How do I add judges?
                    </Link>
                  </li>
                  <li>
                    <Link href="/help/organizing/criteria" className="text-primary hover:underline">
                      How do I set judging criteria?
                    </Link>
                  </li>
                  <li>
                    <Link href="/help/organizing/prizes" className="text-primary hover:underline">
                      How do I manage prizes?
                    </Link>
                  </li>
                </ul>
                <Button variant="ghost" size="sm" className="mt-4" asChild>
                  <Link href="/help/organizing">
                    View all organizing help articles <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="billing" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Billing & Subscriptions</CardTitle>
                <CardDescription>Help with billing and subscription management</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li>
                    <Link href="/help/billing/plans" className="text-primary hover:underline">
                      What subscription plans are available?
                    </Link>
                  </li>
                  <li>
                    <Link href="/help/billing/payment" className="text-primary hover:underline">
                      How do I update my payment method?
                    </Link>
                  </li>
                  <li>
                    <Link href="/help/billing/invoice" className="text-primary hover:underline">
                      How do I get an invoice?
                    </Link>
                  </li>
                  <li>
                    <Link href="/help/billing/cancel" className="text-primary hover:underline">
                      How do I cancel my subscription?
                    </Link>
                  </li>
                  <li>
                    <Link href="/help/billing/refund" className="text-primary hover:underline">
                      What is your refund policy?
                    </Link>
                  </li>
                </ul>
                <Button variant="ghost" size="sm" className="mt-4" asChild>
                  <Link href="/help/billing">
                    View all billing help articles <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Enterprise Solutions</CardTitle>
                <CardDescription>Help with enterprise plans and features</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li>
                    <Link href="/help/enterprise/plans" className="text-primary hover:underline">
                      What enterprise plans are available?
                    </Link>
                  </li>
                  <li>
                    <Link href="/help/enterprise/teams" className="text-primary hover:underline">
                      How do I manage my organization's teams?
                    </Link>
                  </li>
                  <li>
                    <Link href="/help/enterprise/sso" className="text-primary hover:underline">
                      How do I set up SSO for my organization?
                    </Link>
                  </li>
                  <li>
                    <Link href="/help/enterprise/billing" className="text-primary hover:underline">
                      How does enterprise billing work?
                    </Link>
                  </li>
                  <li>
                    <Link href="/help/enterprise/support" className="text-primary hover:underline">
                      What dedicated support options are available?
                    </Link>
                  </li>
                </ul>
                <Button variant="ghost" size="sm" className="mt-4" asChild>
                  <Link href="/help/enterprise">
                    View all enterprise help articles <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mb-2">
              <MessageSquare className="h-5 w-5 text-primary" />
            </div>
            <CardTitle>Live Chat</CardTitle>
            <CardDescription>Chat with our support team</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Need immediate assistance? Chat with our support team in real-time during business hours.
            </p>
            <Button asChild>
              <Link href="/help/chat">
                Start Chat <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mb-2">
              <Settings className="h-5 w-5 text-primary" />
            </div>
            <CardTitle>Troubleshooting</CardTitle>
            <CardDescription>Common issues and solutions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Browse our troubleshooting guides to resolve common issues quickly.
            </p>
            <Button asChild>
              <Link href="/help/troubleshooting">
                View Guides <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mb-2">
              <LifeBuoy className="h-5 w-5 text-primary" />
            </div>
            <CardTitle>Developer Support</CardTitle>
            <CardDescription>Technical support for developers</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Get technical support for API integration, SDKs, and developer tools.
            </p>
            <Button asChild>
              <Link href="/help/developer">
                Developer Resources <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

