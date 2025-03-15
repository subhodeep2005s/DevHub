import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getUserTeams, getUserSubmissions, getActiveCompetitions } from "@/lib/data"
import Link from "next/link"
import { ArrowRight, Clock, FileCode, FileText, Users } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default async function DashboardPage() {
  const userTeams = await getUserTeams()
  const userSubmissions = await getUserSubmissions()
  const activeCompetitions = await getActiveCompetitions()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Manage your competitions, teams, and submissions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Users className="h-4 w-4 mr-2 text-primary" />
              My Teams
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{userTeams.length}</div>
            <p className="text-sm text-muted-foreground">Active teams you're part of</p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="w-full" asChild>
              <Link href="/dashboard/teams">
                View Teams <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <FileText className="h-4 w-4 mr-2 text-primary" />
              My Submissions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{userSubmissions.length}</div>
            <p className="text-sm text-muted-foreground">Ideas and projects you've submitted</p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="w-full" asChild>
              <Link href="/dashboard/submissions">
                View Submissions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Clock className="h-4 w-4 mr-2 text-primary" />
              Upcoming Deadlines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">2</div>
            <p className="text-sm text-muted-foreground">Deadlines in the next 7 days</p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="w-full" asChild>
              <Link href="/dashboard/deadlines">
                View Deadlines <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Tabs defaultValue="teams" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="teams">My Teams</TabsTrigger>
          <TabsTrigger value="submissions">My Submissions</TabsTrigger>
          <TabsTrigger value="competitions">Active Competitions</TabsTrigger>
        </TabsList>

        <TabsContent value="teams" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {userTeams.map((team) => (
              <Card key={team.id} className="border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge>{team.role}</Badge>
                    <Badge variant="outline">{team.members.length} Members</Badge>
                  </div>
                  <CardTitle className="mt-3">{team.name}</CardTitle>
                  <CardDescription>{team.competition}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{team.progress}%</span>
                      </div>
                      <Progress value={team.progress} className="h-2" />
                    </div>

                    <div className="text-sm space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Next Deadline:</span>
                        <span>{team.nextDeadline.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Due Date:</span>
                        <span>{team.nextDeadline.date}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href={`/dashboard/teams/${team.id}`}>Team Dashboard</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}

            <Card className="border-dashed border-2 border-primary/20 bg-card/30 backdrop-blur-sm flex flex-col items-center justify-center p-6">
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Create a New Team</h3>
              <p className="text-center text-muted-foreground mb-4">
                Start a new team or join an existing one for a competition
              </p>
              <Button asChild>
                <Link href="/dashboard/teams/create">Create Team</Link>
              </Button>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="submissions" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {userSubmissions.map((submission) => (
              <Card key={submission.id} className="border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge
                      variant={
                        submission.status === "Approved"
                          ? "default"
                          : submission.status === "Pending"
                            ? "secondary"
                            : "destructive"
                      }
                    >
                      {submission.status}
                    </Badge>
                    <Badge variant="outline">{submission.type}</Badge>
                  </div>
                  <CardTitle className="mt-3">{submission.title}</CardTitle>
                  <CardDescription>{submission.team}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Submitted:</span>
                      <span>{submission.submittedDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Competition:</span>
                      <span>{submission.competition}</span>
                    </div>
                    {submission.feedback && (
                      <div>
                        <span className="text-muted-foreground block mb-1">Feedback:</span>
                        <p className="text-sm bg-muted/50 p-2 rounded">{submission.feedback}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href={`/dashboard/submissions/${submission.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}

            <Card className="border-dashed border-2 border-primary/20 bg-card/30 backdrop-blur-sm flex flex-col items-center justify-center p-6">
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <FileCode className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">New Submission</h3>
              <p className="text-center text-muted-foreground mb-4">Submit a new idea or project for your team</p>
              <Button asChild>
                <Link href="/dashboard/submissions/create">Create Submission</Link>
              </Button>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="competitions" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeCompetitions.map((competition) => (
              <Card key={competition.id} className="border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge>Active</Badge>
                    <Badge variant="outline">{competition.teamSize} Team Size</Badge>
                  </div>
                  <CardTitle className="mt-3">{competition.name}</CardTitle>
                  <CardDescription>{competition.theme}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Start Date:</span>
                      <span>{competition.startDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">End Date:</span>
                      <span>{competition.endDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Prizes:</span>
                      <span>{competition.prizes}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href={`/competitions/${competition.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

