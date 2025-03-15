import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getProjectById, getFeaturedProjects } from "@/lib/data"
import { notFound } from "next/navigation"
import { Calendar, ExternalLink, Eye, Github, Heart, MessageSquare, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FeaturedProjectCard } from "@/components/project-card"

export default async function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = await getProjectById(params.id)
  const relatedProjects = await getFeaturedProjects()

  if (!project) {
    notFound()
  }

  return (
    <div className="space-y-8">
      <div className="relative rounded-xl overflow-hidden aspect-video">
        <Image
          src={project.coverImage || "/placeholder.svg?height=600&width=1200"}
          alt={project.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge>{project.category}</Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Heart className="h-3 w-3" />
              {project.likes} Likes
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Eye className="h-3 w-3" />
              {project.views} Views
            </Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.title}</h1>
          <p className="text-lg text-white/80 max-w-3xl">{project.shortDescription}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>About This Project</CardTitle>
              <CardDescription>Detailed description and features</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose dark:prose-invert max-w-none">
                <p>{project.description}</p>

                <h3>Technologies Used</h3>
                <div className="flex flex-wrap gap-2 not-prose mb-6">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <h3>Key Features</h3>
                <ul>
                  <li>Responsive design for all device sizes</li>
                  <li>Real-time data synchronization</li>
                  <li>User authentication and authorization</li>
                  <li>Advanced analytics and reporting</li>
                  <li>Integration with third-party services</li>
                </ul>

                <h3>Implementation Details</h3>
                <p>
                  This project was built using a modern tech stack to ensure scalability, performance, and
                  maintainability. The frontend leverages React for a component-based architecture, while the backend
                  uses Node.js with Express for API development.
                </p>

                <p>
                  Data is stored in MongoDB, allowing for flexible schema design and easy scaling. The application uses
                  WebSockets for real-time communication and implements JWT for secure authentication.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Comments</CardTitle>
              <CardDescription>Join the discussion about this project</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="font-medium">John Doe</span>
                        <span className="text-muted-foreground text-sm ml-2">2 days ago</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        Reply
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      This is an amazing project! I love how you've implemented the real-time features. The UI is also
                      very intuitive and user-friendly.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" alt="User" />
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="font-medium">Alice Smith</span>
                        <span className="text-muted-foreground text-sm ml-2">1 week ago</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        Reply
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Have you considered adding dark mode support? I think it would be a great addition to this already
                      impressive project.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <textarea
                    className="w-full p-3 rounded-md border bg-background min-h-[100px] focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Add your comment..."
                  ></textarea>
                  <div className="flex justify-end mt-2">
                    <Button>Post Comment</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-1">Author</h3>
                <Link
                  href={`/users/${project.author.id}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={project.author.avatar} alt={project.author.name} />
                    <AvatarFallback>{project.author.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <span>{project.author.name}</span>
                </Link>
              </div>

              {project.collaborators && project.collaborators.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium mb-1">Collaborators</h3>
                  <div className="flex flex-col gap-2">
                    {project.collaborators.map((collaborator) => (
                      <Link
                        key={collaborator.id}
                        href={`/users/${collaborator.id}`}
                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={collaborator.avatar} alt={collaborator.name} />
                          <AvatarFallback>{collaborator.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <span>{collaborator.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-sm font-medium mb-1">Created</h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{project.createdAt}</span>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-1">Last Updated</h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{project.updatedAt}</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col gap-2">
                {project.demoUrl && (
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                )}

                {project.repoUrl && (
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </Link>
                  </Button>
                )}

                <Button variant="outline" className="w-full justify-start">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Project
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Project Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Likes</span>
                  <div className="flex items-center gap-1">
                    <Heart className="h-4 w-4 text-primary" />
                    <span>{project.likes}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Views</span>
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4 text-primary" />
                    <span>{project.views}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Comments</span>
                  <div className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4 text-primary" />
                    <span>{project.comments}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Similar Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProjects.slice(0, 3).map((relatedProject) => (
            <FeaturedProjectCard key={relatedProject.id} project={relatedProject} />
          ))}
        </div>
      </div>
    </div>
  )
}

