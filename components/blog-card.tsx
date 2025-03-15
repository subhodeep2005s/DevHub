import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { BlogPost } from "@/lib/data"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, Heart, MessageSquare } from "lucide-react"

export function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-primary/20 overflow-hidden flex flex-col h-full transition-all hover:shadow-md hover:shadow-primary/5 hover:border-primary/30">
      <div className="relative h-48 w-full">
        <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        {post.featured && (
          <div className="absolute top-2 left-2">
            <Badge className="bg-primary text-primary-foreground">Featured</Badge>
          </div>
        )}
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
            {post.category}
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="line-clamp-2">{post.title}</CardTitle>
        <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
      </CardHeader>
      <CardContent className="pb-4 flex-1">
        <div className="flex flex-wrap gap-1 mb-4">
          {post.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="outline" className="bg-primary/5">
              {tag}
            </Badge>
          ))}
          {post.tags.length > 3 && (
            <Badge variant="outline" className="bg-primary/5">
              +{post.tags.length - 3}
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Link href={`/profile/${post.author.id}`} className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>{post.author.name.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <span className="text-sm">{post.author.name}</span>
          </Link>
        </div>
      </CardContent>
      <CardFooter className="border-t border-border/50 pt-4 flex justify-between">
        <div className="flex gap-3">
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <Calendar className="h-4 w-4" />
            <span>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <Clock className="h-4 w-4" />
            <span>{post.readTime} min</span>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <Heart className="h-4 w-4" />
            <span>{post.likes}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <MessageSquare className="h-4 w-4" />
            <span>{post.comments}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

