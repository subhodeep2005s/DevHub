import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle, Clock, Lightbulb } from "lucide-react"

export default function RoadmapPage() {
  return (
    <div className="container mx-auto py-10 space-y-10">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Product Roadmap</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          See what we're working on and what's coming next for DevHub
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-green-500/20">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <CardTitle>Recently Launched</CardTitle>
                <CardDescription>Features we've recently released</CardDescription>
              </div>
              <Badge className="bg-green-500/10 text-green-500 border-green-500/20">Completed</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 mt-4">
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Team Collaboration</h3>
                  <p className="text-sm text-muted-foreground">
                    Collaborate with team members on projects and hackathons with real-time updates and notifications.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Launched: June 2023</p>
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Project Showcase 2.0</h3>
                  <p className="text-sm text-muted-foreground">
                    Enhanced project pages with better media support, custom sections, and improved visibility.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Launched: August 2023</p>
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">API Access</h3>
                  <p className="text-sm text-muted-foreground">
                    Public API for integrating DevHub with your own applications and workflows.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Launched: October 2023</p>
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Dark Mode</h3>
                  <p className="text-sm text-muted-foreground">
                    Dark mode support across the entire platform for better visibility in low-light environments.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Launched: November 2023</p>
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Enhanced Search</h3>
                  <p className="text-sm text-muted-foreground">
                    Improved search functionality with filters, tags, and better relevance ranking.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Launched: January 2024</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-blue-500/20">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <CardTitle>In Progress</CardTitle>
                <CardDescription>Features we're currently working on</CardDescription>
              </div>
              <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20">In Development</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 mt-4">
              <li className="flex gap-3">
                <Clock className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">AI-Powered Recommendations</h3>
                  <p className="text-sm text-muted-foreground">
                    Personalized project and hackathon recommendations based on your skills and interests.
                  </p>
                  <div className="mt-2 w-full bg-muted h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full rounded-full" style={{ width: "80%" }}></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Expected: Q2 2024</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Advanced Analytics</h3>
                  <p className="text-sm text-muted-foreground">
                    Detailed analytics for your projects and profile, including visitor demographics and engagement
                    metrics.
                  </p>
                  <div className="mt-2 w-full bg-muted h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full rounded-full" style={{ width: "65%" }}></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Expected: Q2 2024</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Portfolio Generator</h3>
                  <p className="text-sm text-muted-foreground">
                    Generate a professional portfolio website from your DevHub profile and projects.
                  </p>
                  <div className="mt-2 w-full bg-muted h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full rounded-full" style={{ width: "50%" }}></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Expected: Q3 2024</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Mobile App</h3>
                  <p className="text-sm text-muted-foreground">
                    Native mobile applications for iOS and Android for on-the-go access to DevHub.
                  </p>
                  <div className="mt-2 w-full bg-muted h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full rounded-full" style={{ width: "30%" }}></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Expected: Q3 2024</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Improved Notification System</h3>
                  <p className="text-sm text-muted-foreground">
                    Enhanced notifications with better customization options and delivery channels.
                  </p>
                  <div className="mt-2 w-full bg-muted h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full rounded-full" style={{ width: "20%" }}></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Expected: Q4 2024</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-purple-500/20">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <CardTitle>Planned</CardTitle>
                <CardDescription>Features on our future roadmap</CardDescription>
              </div>
              <Badge className="bg-purple-500/10 text-purple-500 border-purple-500/20">Planned</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 mt-4">
              <li className="flex gap-3">
                <Lightbulb className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Mentorship Platform</h3>
                  <p className="text-sm text-muted-foreground">
                    Connect with mentors and mentees in your field of interest for guidance and knowledge sharing.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Planned for: Q4 2024</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Lightbulb className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Learning Paths</h3>
                  <p className="text-sm text-muted-foreground">
                    Curated learning paths with resources, projects, and challenges to help you develop new skills.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Planned for: Q1 2025</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Lightbulb className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Job Board</h3>
                  <p className="text-sm text-muted-foreground">
                    Find job opportunities and connect with employers looking for talent in your field.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Planned for: Q1 2025</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Lightbulb className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Code Review System</h3>
                  <p className="text-sm text-muted-foreground">
                    Request and provide code reviews for projects within the community.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Planned for: Q2 2025</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Lightbulb className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Virtual Events Platform</h3>
                  <p className="text-sm text-muted-foreground">
                    Host and participate in virtual meetups, workshops, and conferences.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Planned for: Q3 2025</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="q2-2024" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="q2-2024">Q2 2024</TabsTrigger>
          <TabsTrigger value="q3-2024">Q3 2024</TabsTrigger>
          <TabsTrigger value="q4-2024">Q4 2024</TabsTrigger>
          <TabsTrigger value="2025">2025</TabsTrigger>
        </TabsList>

        <TabsContent value="q2-2024" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Q2 2024 Roadmap</CardTitle>
              <CardDescription>April - June 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Major Initiatives</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <Clock className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">AI-Powered Recommendations</h4>
                        <p className="text-sm text-muted-foreground">
                          Personalized project and hackathon recommendations based on your skills and interests.
                        </p>
                        <div className="mt-2 w-full bg-muted h-2 rounded-full overflow-hidden">
                          <div className="bg-blue-500 h-full rounded-full" style={{ width: "80%" }}></div>
                        </div>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Clock className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Advanced Analytics</h4>
                        <p className="text-sm text-muted-foreground">
                          Detailed analytics for your projects and profile, including visitor demographics and
                          engagement metrics.
                        </p>
                        <div className="mt-2 w-full bg-muted h-2 rounded-full overflow-hidden">
                          <div className="bg-blue-500 h-full rounded-full" style={{ width: "65%" }}></div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Additional Improvements</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <Clock className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Performance Optimizations</h4>
                        <p className="text-sm text-muted-foreground">
                          Improving page load times and overall application performance.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Clock className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Accessibility Enhancements</h4>
                        <p className="text-sm text-muted-foreground">
                          Making DevHub more accessible to users with disabilities.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Clock className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Bug Fixes and UI Improvements</h4>
                        <p className="text-sm text-muted-foreground">
                          Addressing reported issues and refining the user interface.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="q3-2024" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Q3 2024 Roadmap</CardTitle>
              <CardDescription>July - September 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Major Initiatives</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <Clock className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Portfolio Generator</h4>
                        <p className="text-sm text-muted-foreground">
                          Generate a professional portfolio website from your DevHub profile and projects.
                        </p>
                        <div className="mt-2 w-full bg-muted h-2 rounded-full overflow-hidden">
                          <div className="bg-blue-500 h-full rounded-full" style={{ width: "50%" }}></div>
                        </div>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Clock className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Mobile App</h4>
                        <p className="text-sm text-muted-foreground">
                          Native mobile applications for iOS and Android for on-the-go access to DevHub.
                        </p>
                        <div className="mt-2 w-full bg-muted h-2 rounded-full overflow-hidden">
                          <div className="bg-blue-500 h-full rounded-full" style={{ width: "30%" }}></div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Additional Improvements</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <Clock className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Enhanced Project Collaboration</h4>
                        <p className="text-sm text-muted-foreground">
                          Improved tools for collaborating on projects with team members.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Clock className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Internationalization</h4>
                        <p className="text-sm text-muted-foreground">
                          Adding support for multiple languages to make DevHub accessible to a global audience.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Clock className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Community Guidelines and Moderation Tools</h4>
                        <p className="text-sm text-muted-foreground">
                          Implementing better tools for community moderation and content quality.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="q4-2024" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Q4 2024 Roadmap</CardTitle>
              <CardDescription>October - December 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Major Initiatives</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <Clock className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Improved Notification System</h4>
                        <p className="text-sm text-muted-foreground">
                          Enhanced notifications with better customization options and delivery channels.
                        </p>
                        <div className="mt-2 w-full bg-muted h-2 rounded-full overflow-hidden">
                          <div className="bg-blue-500 h-full rounded-full" style={{ width: "20%" }}></div>
                        </div>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Lightbulb className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Mentorship Platform</h4>
                        <p className="text-sm text-muted-foreground">
                          Connect with mentors and mentees in your field of interest for guidance and knowledge sharing.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Additional Improvements</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <Clock className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Advanced Search Filters</h4>
                        <p className="text-sm text-muted-foreground">
                          More powerful search capabilities with advanced filtering options.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Clock className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Integration Ecosystem</h4>
                        <p className="text-sm text-muted-foreground">
                          Expanding our integrations with popular development tools and platforms.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Clock className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Year-End Performance Improvements</h4>
                        <p className="text-sm text-muted-foreground">
                          Optimizations to prepare for increased traffic and usage in the new year.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="2025" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>2025 Roadmap</CardTitle>
              <CardDescription>Long-term vision for DevHub</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Q1 2025</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <Lightbulb className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Learning Paths</h4>
                        <p className="text-sm text-muted-foreground">
                          Curated learning paths with resources, projects, and challenges to help you develop new
                          skills.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Lightbulb className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Job Board</h4>
                        <p className="text-sm text-muted-foreground">
                          Find job opportunities and connect with employers looking for talent in your field.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Q2 2025</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <Lightbulb className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Code Review System</h4>
                        <p className="text-sm text-muted-foreground">
                          Request and provide code reviews for projects within the community.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Lightbulb className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Enhanced Analytics Dashboard</h4>
                        <p className="text-sm text-muted-foreground">
                          More comprehensive analytics for projects, profiles, and community engagement.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Q3-Q4 2025</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <Lightbulb className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Virtual Events Platform</h4>
                        <p className="text-sm text-muted-foreground">
                          Host and participate in virtual meetups, workshops, and conferences.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Lightbulb className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">AI-Powered Development Assistant</h4>
                        <p className="text-sm text-muted-foreground">
                          Intelligent assistant to help with coding, debugging, and project management.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Lightbulb className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Global Developer Community Expansion</h4>
                        <p className="text-sm text-muted-foreground">
                          Initiatives to expand our community to more regions and languages worldwide.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="bg-muted/50 rounded-lg p-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Have a Feature Request?</h2>
          <p className="text-muted-foreground mb-6 text-center">
            We're always looking for ways to improve DevHub. If you have a feature request or suggestion, we'd love to
            hear from you.
          </p>
          <div className="flex justify-center">
            <Button asChild>
              <Link href="/feedback">
                Submit Feedback <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

