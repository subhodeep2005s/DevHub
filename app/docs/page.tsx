import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Book, Code, FileText, Lightbulb, Puzzle, Rocket, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function DocumentationPage() {
  return (
    <div className="container mx-auto py-10 space-y-10">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Documentation</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Comprehensive guides and references to help you get the most out of DevHub
        </p>
        <div className="relative max-w-xl mx-auto mt-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search documentation..." className="pl-10 h-12 rounded-full" />
        </div>
      </div>

      <Tabs defaultValue="guides" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="guides">Guides</TabsTrigger>
          <TabsTrigger value="api">API Reference</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="guides" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mb-2">
                  <Rocket className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Getting Started</CardTitle>
                <CardDescription>Learn the basics of DevHub and how to set up your profile</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="text-muted-foreground hover:text-foreground transition-colors">
                    <Link href="/docs/getting-started/introduction">Introduction to DevHub</Link>
                  </li>
                  <li className="text-muted-foreground hover:text-foreground transition-colors">
                    <Link href="/docs/getting-started/account-setup">Setting up your account</Link>
                  </li>
                  <li className="text-muted-foreground hover:text-foreground transition-colors">
                    <Link href="/docs/getting-started/profile">Creating your profile</Link>
                  </li>
                  <li className="text-muted-foreground hover:text-foreground transition-colors">
                    <Link href="/docs/getting-started/first-project">Publishing your first project</Link>
                  </li>
                </ul>
                <Button variant="ghost" size="sm" className="mt-4 w-full" asChild>
                  <Link href="/docs/getting-started">
                    View all guides <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mb-2">
                  <Code className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Projects</CardTitle>
                <CardDescription>Learn how to create, manage, and showcase your projects</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="text-muted-foreground hover:text-foreground transition-colors">
                    <Link href="/docs/projects/creating">Creating a project</Link>
                  </li>
                  <li className="text-muted-foreground hover:text-foreground transition-colors">
                    <Link href="/docs/projects/collaborators">Adding collaborators</Link>
                  </li>
                  <li className="text-muted-foreground hover:text-foreground transition-colors">
                    <Link href="/docs/projects/showcase">Showcasing your work</Link>
                  </li>
                  <li className="text-muted-foreground hover:text-foreground transition-colors">
                    <Link href="/docs/projects/analytics">Project analytics</Link>
                  </li>
                </ul>
                <Button variant="ghost" size="sm" className="mt-4 w-full" asChild>
                  <Link href="/docs/projects">
                    View all guides <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mb-2">
                  <Puzzle className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Hackathons</CardTitle>
                <CardDescription>Everything you need to know about participating in hackathons</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="text-muted-foreground hover:text-foreground transition-colors">
                    <Link href="/docs/hackathons/joining">Joining a hackathon</Link>
                  </li>
                  <li className="text-muted-foreground hover:text-foreground transition-colors">
                    <Link href="/docs/hackathons/teams">Forming teams</Link>
                  </li>
                  <li className="text-muted-foreground hover:text-foreground transition-colors">
                    <Link href="/docs/hackathons/submissions">Submitting your project</Link>
                  </li>
                  <li className="text-muted-foreground hover:text-foreground transition-colors">
                    <Link href="/docs/hackathons/judging">Judging criteria</Link>
                  </li>
                </ul>
                <Button variant="ghost" size="sm" className="mt-4 w-full" asChild>
                  <Link href="/docs/hackathons">
                    View all guides <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mb-2">
                  <Book className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Blog</CardTitle>
                <CardDescription>Learn how to publish and manage your blog posts</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="text-muted-foreground hover:text-foreground transition-colors">
                    <Link href="/docs/blog/writing">Writing your first post</Link>
                  </li>
                  <li className="text-muted-foreground hover:text-foreground transition-colors">
                    <Link href="/docs/blog/formatting">Formatting and markdown</Link>
                  </li>
                  <li className="text-muted-foreground hover:text-foreground transition-colors">
                    <Link href="/docs/blog/images">Adding images and media</Link>
                  </li>
                  <li className="text-muted-foreground hover:text-foreground transition-colors">
                    <Link href="/docs/blog/seo">SEO best practices</Link>
                  </li>
                </ul>
                <Button variant="ghost" size="sm" className="mt-4 w-full" asChild>
                  <Link href="/docs/blog">
                    View all guides <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mb-2">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Account Management</CardTitle>
                <CardDescription>Managing your account settings and preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="text-muted-foreground hover:text-foreground transition-colors">
                    <Link href="/docs/account/settings">Account settings</Link>
                  </li>
                  <li className="text-muted-foreground hover:text-foreground transition-colors">
                    <Link href="/docs/account/notifications">Notification preferences</Link>
                  </li>
                  <li className="text-muted-foreground hover:text-foreground transition-colors">
                    <Link href="/docs/account/privacy">Privacy settings</Link>
                  </li>
                  <li className="text-muted-foreground hover:text-foreground transition-colors">
                    <Link href="/docs/account/delete">Deleting your account</Link>
                  </li>
                </ul>
                <Button variant="ghost" size="sm" className="mt-4 w-full" asChild>
                  <Link href="/docs/account">
                    View all guides <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mb-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Tips & Tricks</CardTitle>
                <CardDescription>Advanced tips to get the most out of DevHub</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="text-muted-foreground hover:text-foreground transition-colors">
                    <Link href="/docs/tips/profile-optimization">Optimizing your profile</Link>
                  </li>
                  <li className="text-muted-foreground hover:text-foreground transition-colors">
                    <Link href="/docs/tips/networking">Networking effectively</Link>
                  </li>
                  <li className="text-muted-foreground hover:text-foreground transition-colors">
                    <Link href="/docs/tips/project-visibility">Increasing project visibility</Link>
                  </li>
                  <li className="text-muted-foreground hover:text-foreground transition-colors">
                    <Link href="/docs/tips/hackathon-success">Hackathon success strategies</Link>
                  </li>
                </ul>
                <Button variant="ghost" size="sm" className="mt-4 w-full" asChild>
                  <Link href="/docs/tips">
                    View all tips <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="api" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>API Reference</CardTitle>
              <CardDescription>Comprehensive documentation for the DevHub API</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Our API allows you to programmatically access and manage your DevHub data. Use it to integrate DevHub
                with your own applications or automate your workflow.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Authentication</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="text-muted-foreground hover:text-foreground transition-colors">
                      <Link href="/docs/api/authentication/overview">Authentication Overview</Link>
                    </li>
                    <li className="text-muted-foreground hover:text-foreground transition-colors">
                      <Link href="/docs/api/authentication/tokens">API Tokens</Link>
                    </li>
                    <li className="text-muted-foreground hover:text-foreground transition-colors">
                      <Link href="/docs/api/authentication/oauth">OAuth</Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Endpoints</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="text-muted-foreground hover:text-foreground transition-colors">
                      <Link href="/docs/api/endpoints/users">Users</Link>
                    </li>
                    <li className="text-muted-foreground hover:text-foreground transition-colors">
                      <Link href="/docs/api/endpoints/projects">Projects</Link>
                    </li>
                    <li className="text-muted-foreground hover:text-foreground transition-colors">
                      <Link href="/docs/api/endpoints/hackathons">Hackathons</Link>
                    </li>
                    <li className="text-muted-foreground hover:text-foreground transition-colors">
                      <Link href="/docs/api/endpoints/blog">Blog</Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Guides</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="text-muted-foreground hover:text-foreground transition-colors">
                      <Link href="/docs/api/guides/getting-started">Getting Started</Link>
                    </li>
                    <li className="text-muted-foreground hover:text-foreground transition-colors">
                      <Link href="/docs/api/guides/pagination">Pagination</Link>
                    </li>
                    <li className="text-muted-foreground hover:text-foreground transition-colors">
                      <Link href="/docs/api/guides/error-handling">Error Handling</Link>
                    </li>
                    <li className="text-muted-foreground hover:text-foreground transition-colors">
                      <Link href="/docs/api/guides/rate-limits">Rate Limits</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild>
                  <Link href="/docs/api/reference">
                    View Full API Reference <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="examples" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Code Examples</CardTitle>
                <CardDescription>Ready-to-use code examples for common tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">JavaScript / TypeScript</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="text-muted-foreground hover:text-foreground transition-colors">
                        <Link href="/docs/examples/js/authentication">Authentication</Link>
                      </li>
                      <li className="text-muted-foreground hover:text-foreground transition-colors">
                        <Link href="/docs/examples/js/projects">Managing Projects</Link>
                      </li>
                      <li className="text-muted-foreground hover:text-foreground transition-colors">
                        <Link href="/docs/examples/js/hackathons">Hackathon Integration</Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Python</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="text-muted-foreground hover:text-foreground transition-colors">
                        <Link href="/docs/examples/python/authentication">Authentication</Link>
                      </li>
                      <li className="text-muted-foreground hover:text-foreground transition-colors">
                        <Link href="/docs/examples/python/projects">Managing Projects</Link>
                      </li>
                      <li className="text-muted-foreground hover:text-foreground transition-colors">
                        <Link href="/docs/examples/python/data-analysis">Data Analysis</Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Ruby</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="text-muted-foreground hover:text-foreground transition-colors">
                        <Link href="/docs/examples/ruby/authentication">Authentication</Link>
                      </li>
                      <li className="text-muted-foreground hover:text-foreground transition-colors">
                        <Link href="/docs/examples/ruby/projects">Managing Projects</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sample Applications</CardTitle>
                <CardDescription>Complete applications built with DevHub</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-medium mb-2">Project Dashboard</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      A dashboard for monitoring your projects and their performance.
                    </p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" asChild>
                        <Link href="/docs/examples/apps/project-dashboard/demo">Live Demo</Link>
                      </Button>
                      <Button size="sm" asChild>
                        <Link href="/docs/examples/apps/project-dashboard/code">View Code</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-medium mb-2">Hackathon Tracker</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      An application to track hackathons and manage your submissions.
                    </p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" asChild>
                        <Link href="/docs/examples/apps/hackathon-tracker/demo">Live Demo</Link>
                      </Button>
                      <Button size="sm" asChild>
                        <Link href="/docs/examples/apps/hackathon-tracker/code">View Code</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-medium mb-2">Portfolio Generator</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Generate a beautiful portfolio website from your DevHub profile.
                    </p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" asChild>
                        <Link href="/docs/examples/apps/portfolio-generator/demo">Live Demo</Link>
                      </Button>
                      <Button size="sm" asChild>
                        <Link href="/docs/examples/apps/portfolio-generator/code">View Code</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="resources" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>SDKs & Libraries</CardTitle>
                <CardDescription>Official SDKs and libraries for DevHub</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/docs/resources/sdks/javascript"
                      className="flex items-center hover:text-primary transition-colors"
                    >
                      <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                        <span className="font-bold text-primary">JS</span>
                      </div>
                      JavaScript / TypeScript SDK
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/resources/sdks/python"
                      className="flex items-center hover:text-primary transition-colors"
                    >
                      <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                        <span className="font-bold text-primary">PY</span>
                      </div>
                      Python SDK
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/resources/sdks/ruby"
                      className="flex items-center hover:text-primary transition-colors"
                    >
                      <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                        <span className="font-bold text-primary">RB</span>
                      </div>
                      Ruby SDK
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/resources/sdks/go"
                      className="flex items-center hover:text-primary transition-colors"
                    >
                      <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                        <span className="font-bold text-primary">GO</span>
                      </div>
                      Go SDK
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/resources/sdks/java"
                      className="flex items-center hover:text-primary transition-colors"
                    >
                      <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                        <span className="font-bold text-primary">JV</span>
                      </div>
                      Java SDK
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tools & Integrations</CardTitle>
                <CardDescription>Tools to enhance your DevHub experience</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/docs/resources/tools/cli"
                      className="flex items-center hover:text-primary transition-colors"
                    >
                      <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                        <Code className="h-4 w-4 text-primary" />
                      </div>
                      DevHub CLI
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/resources/tools/vscode"
                      className="flex items-center hover:text-primary transition-colors"
                    >
                      <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                        <Code className="h-4 w-4 text-primary" />
                      </div>
                      VS Code Extension
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/resources/tools/github"
                      className="flex items-center hover:text-primary transition-colors"
                    >
                      <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                        <Code className="h-4 w-4 text-primary" />
                      </div>
                      GitHub Integration
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/resources/tools/slack"
                      className="flex items-center hover:text-primary transition-colors"
                    >
                      <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                        <Code className="h-4 w-4 text-primary" />
                      </div>
                      Slack App
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Community Resources</CardTitle>
                <CardDescription>Resources created by the DevHub community</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/docs/resources/community/templates"
                      className="flex items-center hover:text-primary transition-colors"
                    >
                      <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                        <FileText className="h-4 w-4 text-primary" />
                      </div>
                      Project Templates
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/resources/community/tutorials"
                      className="flex items-center hover:text-primary transition-colors"
                    >
                      <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                        <Book className="h-4 w-4 text-primary" />
                      </div>
                      Community Tutorials
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/resources/community/plugins"
                      className="flex items-center hover:text-primary transition-colors"
                    >
                      <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                        <Puzzle className="h-4 w-4 text-primary" />
                      </div>
                      Plugins & Extensions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/resources/community/showcase"
                      className="flex items-center hover:text-primary transition-colors"
                    >
                      <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                        <Rocket className="h-4 w-4 text-primary" />
                      </div>
                      Project Showcase
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-muted/50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Need more help?</h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Can't find what you're looking for? Check out our help center or reach out to our support team.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <Link href="/help">Visit Help Center</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

