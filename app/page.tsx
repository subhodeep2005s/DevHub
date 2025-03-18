import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, BookOpen, Code, Trophy, Users } from "lucide-react"
import { getActiveCompetitions, getFeaturedProjects, getFeaturedBlogPosts } from "@/lib/data"
import RetroGrid from "@/components/retro-grid"
import Image from "next/image"
import { FeaturedProjectCard } from "@/components/project-card"
import { HackathonCard } from "@/components/hackathon-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default async function Home() {
  const competitions = await getActiveCompetitions()
  const featuredProjects = await getFeaturedProjects()
  const featuredPosts = await getFeaturedBlogPosts()

  return (
    <div>
      <section className="py-24 relative overflow-hidden">
        <RetroGrid />
        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge className="px-4 py-1.5 text-sm mb-4 bg-primary/10 text-primary border-primary/20">
              Innovate • Collaborate • Build
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500">
                Discover & Join Hackathons
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Showcase your skills, collaborate with developers around the world, and build solutions that make a
              difference
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-6">
              <Button size="lg" className="h-12 px-6 text-base" asChild>
                <Link href="/register">
                  Join Community <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-6 text-base" asChild>
                <Link href="/competitions">Explore Hackathons</Link>
              </Button>
            </div>
          </div>

          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-full max-w-6xl h-6 bg-gradient-to-r from-purple-600/20 via-primary/20 to-pink-600/20 blur-3xl"></div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Active Hackathons</h2>
            <p className="text-muted-foreground text-lg">Find the perfect hackathon for your skills and interests</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <HackathonCard
              title="Web3 Innovation"
              category="Blockchain"
              colorScheme="blue"
              dates="May 10 - June 5, 2025"
              participantsCount={128}
              prizesAmount="$15,000"
              description="Build the future of decentralized applications and blockchain solutions"
              teamSize="2-4"
              id="web3-2025"
            />

            <HackathonCard
              title="Mobile App Challenge"
              category="App Development"
              colorScheme="green"
              dates="June 1 - June 30, 2025"
              participantsCount={213}
              prizesAmount="$12,000"
              description="Create innovative mobile applications that solve real-world problems"
              teamSize="1-5"
              id="mobile-2025"
            />

            <HackathonCard
              title="AI & Machine Learning"
              category="Artificial Intelligence"
              colorScheme="purple"
              dates="May 15 - June 20, 2025"
              participantsCount={176}
              prizesAmount="$20,000"
              description="Leverage AI and ML to build intelligent solutions for tomorrow's challenges"
              teamSize="2-4"
              id="ai-ml-2025"
            />

            <HackathonCard
              title="UX/UI Design Jam"
              category="Design"
              colorScheme="pink"
              dates="June 5 - June 25, 2025"
              participantsCount={98}
              prizesAmount="$8,000"
              description="Design beautiful, accessible, and innovative user experiences"
              teamSize="1-3"
              id="design-2025"
            />

            <HackathonCard
              title="Cloud Innovation"
              category="Cloud Computing"
              colorScheme="orange"
              dates="May 20 - June 15, 2025"
              participantsCount={142}
              prizesAmount="$14,000"
              description="Build scalable, resilient cloud solutions for enterprise needs"
              teamSize="2-5"
              id="cloud-2025"
            />

            <HackathonCard
              title="Web Performance"
              category="Web Development"
              colorScheme="teal"
              dates="June 10 - July 5, 2025"
              participantsCount={164}
              prizesAmount="$10,000"
              description="Create blazing fast web experiences with cutting-edge technologies"
              teamSize="1-4"
              id="web-perf-2025"
            />
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/competitions">
                View All Hackathons <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">What We Offer</h2>
            <p className="text-muted-foreground text-lg">Everything you need to grow as a developer</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover:shadow-lg transition-all hover:border-primary/40">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-muted-foreground mb-4">Connect with like-minded developers and designers</p>
              <Button variant="ghost" size="sm" className="gap-1" asChild>
                <Link href="/users">
                  Browse Community <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover:shadow-lg transition-all hover:border-primary/40">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Projects</h3>
              <p className="text-muted-foreground mb-4">Showcase your work and discover innovative projects</p>
              <Button variant="ghost" size="sm" className="gap-1" asChild>
                <Link href="/projects">
                  Explore Projects <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover:shadow-lg transition-all hover:border-primary/40">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Blog</h3>
              <p className="text-muted-foreground mb-4">Read and write articles about development and design</p>
              <Button variant="ghost" size="sm" className="gap-1" asChild>
                <Link href="/blog">
                  Read Articles <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover:shadow-lg transition-all hover:border-primary/40">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Competitions</h3>
              <p className="text-muted-foreground mb-4">Participate in coding challenges and hackathons</p>
              <Button variant="ghost" size="sm" className="gap-1" asChild>
                <Link href="/competitions">
                  Join Competitions <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Featured Projects</h2>
            <p className="text-muted-foreground text-lg">Discover top projects from our community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <FeaturedProjectCard key={project.id} project={project} />
            ))}
            {/* /2nd */}
            {featuredProjects.map((project) => (
              <FeaturedProjectCard key={project.id} project={project} />
            ))}
            {/* 3rd */}
            {featuredProjects.map((project) => (
              <FeaturedProjectCard key={project.id} project={project} />
            ))}
           
          </div>
        

          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Latest Blog Posts</h2>
            <p className="text-muted-foreground text-lg">Insights, tutorials, and updates from our community</p>
          </div>

          <div className="space-y-4">
            {featuredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-4 hover:shadow-md transition-all hover:border-primary/30"
              >
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="relative h-24 w-24 md:h-32 md:w-32 flex-shrink-0 rounded-md overflow-hidden">
                    <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                        {post.category}
                      </Badge>
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index} variant="outline" className="bg-primary/5">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-muted-foreground line-clamp-2 mb-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={post.author.avatar} alt={post.author.name} />
                          <AvatarFallback>{post.author.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">{post.author.name}</span>
                        <span className="text-sm text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">{post.readTime} min read</span>
                      </div>
                      <Button variant="ghost" size="sm" className="gap-1" asChild>
                        <Link href={`/blog/${post.slug}`}>
                          Read More <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/blog">
                Read More Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-3xl blur-3xl"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-4 py-1.5">Join Today</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to showcase your skills?</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Create your developer profile, join hackathons, collaborate with teams, and build solutions that can
                change the world. Connect with a global community of developers and designers.
              </p>
              <Button size="lg" className="h-12 px-6 text-base" asChild>
                <Link href="/register">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl blur-xl opacity-70"></div>
              <div className="relative bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl overflow-hidden">
                <Image
                  src="https://img.freepik.com/free-photo/three-dark-skinned-guy-chatting-laptop-sitting-sideways-desk-studio-black-background_613910-20785.jpg?t=st=1742289270~exp=1742292870~hmac=79b6bcca6c051d8122f7b8e93554323f7d5104b3c148f9e3c80457ba884215f3&w=1380"
                  alt="Developer Showcase"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

