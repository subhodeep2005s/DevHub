import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { Project } from "@/lib/data"
import Link from "next/link"
import Image from "next/image"
import { Eye, Heart, MessageSquare } from "lucide-react"

export function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-primary/20 overflow-hidden flex flex-col h-full transition-all hover:shadow-md hover:shadow-primary/5 hover:border-primary/30">
      <div className="relative h-48 w-full">
        <Image src={project.coverImage || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
            {project.category}
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <CardTitle className="line-clamp-1">{project.title}</CardTitle>
            <CardDescription className="line-clamp-2">{project.shortDescription}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-4 flex-1">
        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <Badge key={index} variant="outline" className="bg-primary/5">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="outline" className="bg-primary/5">
              +{project.technologies.length - 4}
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Link href={`/profile/${project.author.id}`} className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={project.author.avatar} alt={project.author.name} />
              <AvatarFallback>{project.author.name.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <span className="text-sm">{project.author.name}</span>
          </Link>
          {project.collaborators && project.collaborators.length > 0 && (
            <div className="flex -space-x-2 ml-2">
              {project.collaborators.slice(0, 2).map((collaborator, index) => (
                <Avatar key={index} className="h-6 w-6 border-2 border-background">
                  <AvatarImage src={collaborator.avatar} alt={collaborator.name} />
                  <AvatarFallback>{collaborator.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
              ))}
              {project.collaborators.length > 2 && (
                <Avatar className="h-6 w-6 border-2 border-background bg-muted">
                  <AvatarFallback>+{project.collaborators.length - 2}</AvatarFallback>
                </Avatar>
              )}
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="border-t border-border/50 pt-4 flex justify-between">
        <div className="flex gap-3">
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <Heart className="h-4 w-4" />
            <span>{project.likes}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <Eye className="h-4 w-4" />
            <span>{project.views}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <MessageSquare className="h-4 w-4" />
            <span>{project.comments}</span>
          </div>
        </div>
        <Button size="sm" asChild>
          <Link href={`/projects/${project.id}`}>View Project</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

