import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getUserById, getProjectsByUser, getBlogPostsByAuthor } from "@/lib/data"
import { notFound } from "next/navigation"
import { Calendar, Github, Globe, Linkedin, Mail, MapPin, Trophy } from "lucide-react"
import Link from "next/link"
import { FeaturedProjectCard } from "@/components/project-card"
import { BlogPostCard } from "@/components/blog-card"

export default async function UserProfilePage({ params }: { params: { id: string } }) {
  const user = await getUserById(params.id)
  const userProjects = await getProjectsByUser(params.id)
  const userPosts = await getBlogPostsByAuthor(params.id)

  if (!user) {
    notFound()
  }

  return (
    <div className="space-y-8">
      <Card className="border-primary/20">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <Avatar className="h-24 w-24 border-4 border-background">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-3xl font-bold">{user.name}</h1>
                  <p className="text-muted-foreground">{user.role}</p>
                </div>

                <div className="flex gap-2">
                  <Button>Follow</Button>
                  <Button variant="outline">Message</Button>
                </div>
              </div>

              <p className="mb-4">{user.bio}</p>

              <div className="flex flex-wrap gap-4 text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{user.location}</span>
                </div>

                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>Joined {user.joinDate}</span>
                </div>

                <div className="flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  <span>{user.email}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            {user.github && (
              <Button variant="outline" size="sm" asChild>
                <Link href={`https://${user.github}`} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            )}

            {user.linkedin && (
              <Button variant="outline" size="sm" asChild>
                <Link href={`https://${user.linkedin}`} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
            )}

            {user.website && (
              <Button variant="outline" size="sm" asChild>
                <Link href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-2 h-4 w-4" />
                  Website
                </Link>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle>Skills</CardTitle>
            <CardDescription>Technical expertise and proficiency</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {user.skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <Badge variant="outline">{skill.category}</Badge>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle>Achievements</CardTitle>
            <CardDescription>Recognitions and accomplishments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {user.achievements.map((achievement) => (
                <div key={achievement.id} className="flex gap-3">
                  <div className="bg-primary/10 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <Trophy className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    <p className="text-xs text-muted-foreground mt-1">{achievement.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle>Stats</CardTitle>
            <CardDescription>Activity and contributions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted/50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold">{user.stats.projectsCompleted}</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold">{user.stats.competitionsWon}</p>
                <p className="text-sm text-muted-foreground">Competitions</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold">{user.stats.articlesPublished}</p>
                <p className="text-sm text-muted-foreground">Articles</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold">{user.stats.contributions}</p>
                <p className="text-sm text-muted-foreground">Contributions</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="projects" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="articles">Articles</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="projects" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {userProjects.map((project) => (
              <FeaturedProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="articles" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {userPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="activity" className="mt-6">
          <div className="relative border-l-2 border-primary/30 pl-6 ml-6 space-y-8">
            {user.activity.map((activity, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[30px] w-6 h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div className="mb-1 text-sm text-muted-foreground">{activity.date}</div>
                <h3 className="text-lg font-semibold">
                  {activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}
                </h3>
                <p className="text-muted-foreground">{activity.description}</p>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

