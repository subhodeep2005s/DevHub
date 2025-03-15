import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getBlogPostBySlug, getFeaturedBlogPosts } from "@/lib/data"
import { notFound } from "next/navigation"
import { Calendar, Clock, Heart, MessageSquare, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { BlogPostCard } from "@/components/blog-card"

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug)
  const relatedPosts = await getFeaturedBlogPosts()

  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge>{post.category}</Badge>
          {post.tags.map((tag, index) => (
            <Badge key={index} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>

        <h1 className="text-4xl font-bold">{post.title}</h1>

        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>{post.author.name.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <Link href={`/users/${post.author.id}`} className="hover:text-foreground transition-colors">
              {post.author.name}
            </Link>
          </div>

          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{post.publishedAt}</span>
          </div>

          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{post.readTime} min read</span>
          </div>
        </div>
      </div>

      <div className="relative aspect-video rounded-xl overflow-hidden">
        <Image
          src={post.coverImage || "/placeholder.svg?height=600&width=1200"}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex gap-8">
        <div className="hidden md:flex flex-col gap-4 items-center">
          <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
            <Heart className="h-5 w-5" />
          </Button>
          <span className="text-sm">{post.likes}</span>

          <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
            <MessageSquare className="h-5 w-5" />
          </Button>
          <span className="text-sm">{post.comments}</span>

          <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
            <Share2 className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex-1">
          <article className="prose dark:prose-invert max-w-none">
            <p>{post.content}</p>

            <h2>Introduction</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>

            <h2>Main Concepts</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>

            <ul>
              <li>First important concept explained in detail</li>
              <li>Second important concept with practical examples</li>
              <li>Third concept and its implications for developers</li>
              <li>Fourth concept with code examples and use cases</li>
            </ul>

            <h2>Implementation Details</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo.
            </p>

            <pre>
              <code>{`
function example() {
  const data = fetchData();
  return processData(data);
}
            `}</code>
            </pre>

            <h2>Conclusion</h2>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
              sunt in culpa qui officia deserunt mollitia animi.
            </p>
          </article>

          <div className="flex md:hidden justify-center gap-6 mt-8 pt-6 border-t">
            <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
              <Heart className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
              <MessageSquare className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t">
            <div className="flex items-center gap-4 mb-6">
              <Avatar className="h-12 w-12">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">{post.author.name}</h3>
                <p className="text-sm text-muted-foreground">Software Engineer and Technical Writer</p>
              </div>
              <Button variant="outline" size="sm" className="ml-auto">
                Follow
              </Button>
            </div>

            <p className="text-muted-foreground mb-4">
              Jane is a software engineer with over 5 years of experience in web development. She specializes in React,
              Node.js, and cloud technologies. When not coding, she enjoys writing technical articles and contributing
              to open source projects.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl font-bold mb-6">Comments ({post.comments})</h3>

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
                    Great article! I've been looking for a clear explanation of these concepts for a while. This really
                    helped me understand the topic better.
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
                    I'd love to see a follow-up article that goes deeper into the implementation details. Have you
                    considered writing about advanced use cases?
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
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t">
        <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedPosts
            .filter((p) => p.id !== post.id)
            .slice(0, 3)
            .map((relatedPost) => (
              <BlogPostCard key={relatedPost.id} post={relatedPost} />
            ))}
        </div>
      </div>
    </div>
  )
}

