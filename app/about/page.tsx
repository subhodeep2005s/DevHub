import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { ArrowRight, Code, Github, Linkedin, Mail, Twitter } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-10 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <Badge className="px-4 py-1.5 text-sm mb-4 bg-primary/10 text-primary border-primary/20">Our Mission</Badge>
        <h1 className="text-4xl md:text-5xl font-bold">Empowering Developers to Build the Future</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          DevHub is a platform where developers and designers can showcase their skills, collaborate on projects, and
          participate in hackathons to build innovative solutions.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              DevHub was founded in 2020 by a group of developers who were frustrated with the lack of platforms for
              showcasing their work and connecting with like-minded professionals.
            </p>
            <p>
              What started as a small community of passionate developers has grown into a global platform with thousands
              of users from over 100 countries. Our mission is to provide developers and designers with the tools and
              opportunities they need to grow their skills, build their portfolios, and advance their careers.
            </p>
            <p>
              Today, DevHub is more than just a platform—it's a thriving community where innovation happens every day.
              From hackathons that tackle real-world problems to collaborative projects that push the boundaries of
              technology, we're proud to be a part of the developer journey.
            </p>
          </div>
        </div>
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <Image src="/placeholder.svg?height=800&width=600" alt="DevHub team" fill className="object-cover" />
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-muted/30 py-16 px-6 rounded-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These core principles guide everything we do at DevHub
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardContent className="pt-6">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We believe in pushing the boundaries of what's possible and encouraging creative solutions to complex
                problems.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardContent className="pt-6">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M17 6.1H3"></path>
                  <path d="M21 12.1H3"></path>
                  <path d="M15.1 18H3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Inclusivity</h3>
              <p className="text-muted-foreground">
                We're committed to creating a diverse and inclusive community where everyone feels welcome and valued.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardContent className="pt-6">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-muted-foreground">
                We foster a collaborative environment where knowledge sharing and teamwork lead to better outcomes.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Team Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">The passionate individuals behind DevHub</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <Avatar className="h-32 w-32 mx-auto mb-4 border-4 border-background">
              <AvatarImage src="/placeholder.svg" alt="Sarah Johnson" />
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-bold">Sarah Johnson</h3>
            <p className="text-muted-foreground mb-3">Co-Founder & CEO</p>
            <div className="flex justify-center gap-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com/sarahjohnson" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com/in/sarahjohnson" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/sarahjohnson" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="text-center">
            <Avatar className="h-32 w-32 mx-auto mb-4 border-4 border-background">
              <AvatarImage src="/placeholder.svg" alt="Michael Chen" />
              <AvatarFallback>MC</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-bold">Michael Chen</h3>
            <p className="text-muted-foreground mb-3">Co-Founder & CTO</p>
            <div className="flex justify-center gap-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com/michaelchen" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com/in/michaelchen" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/michaelchen" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="text-center">
            <Avatar className="h-32 w-32 mx-auto mb-4 border-4 border-background">
              <AvatarImage src="/placeholder.svg" alt="Emily Rodriguez" />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-bold">Emily Rodriguez</h3>
            <p className="text-muted-foreground mb-3">Head of Design</p>
            <div className="flex justify-center gap-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com/emilyrodriguez" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com/in/emilyrodriguez" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/emilyrodriguez" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="text-center">
            <Avatar className="h-32 w-32 mx-auto mb-4 border-4 border-background">
              <AvatarImage src="/placeholder.svg" alt="David Kim" />
              <AvatarFallback>DK</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-bold">David Kim</h3>
            <p className="text-muted-foreground mb-3">Head of Community</p>
            <div className="flex justify-center gap-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com/davidkim" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com/in/davidkim" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/davidkim" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-muted/30 py-16 px-6 rounded-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Milestones we've reached along the way</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50K+</div>
            <p className="text-muted-foreground">Registered Users</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100+</div>
            <p className="text-muted-foreground">Hackathons Hosted</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">10K+</div>
            <p className="text-muted-foreground">Projects Showcased</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">120+</div>
            <p className="text-muted-foreground">Countries Represented</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from the developers and designers who use DevHub
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" alt="Alex Turner" />
                  <AvatarFallback>AT</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-bold">Alex Turner</h3>
                  <p className="text-sm text-muted-foreground">Frontend Developer</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "DevHub has been instrumental in my career growth. The projects I've showcased here have led to multiple
                job offers and freelance opportunities."
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" alt="Priya Patel" />
                  <AvatarFallback>PP</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-bold">Priya Patel</h3>
                  <p className="text-sm text-muted-foreground">UX Designer</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "The hackathons on DevHub pushed me to learn new skills and collaborate with talented developers. I've
                made valuable connections and built projects I'm truly proud of."
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" alt="Marcus Johnson" />
                  <AvatarFallback>MJ</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-bold">Marcus Johnson</h3>
                  <p className="text-sm text-muted-foreground">Full Stack Developer</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "As a self-taught developer, DevHub gave me the platform to showcase my work and get feedback from
                experienced professionals. It's been a game-changer for my career."
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="bg-gradient-to-r from-primary/10 to-purple-500/10 py-16 px-6 rounded-xl text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Be part of a global community of developers and designers who are building the future of technology.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/register">
              Sign Up Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardContent className="pt-6 text-center">
              <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-muted-foreground mb-4">For general inquiries and support</p>
              <Link href="mailto:info@devhub.com" className="text-primary hover:underline">
                info@devhub.com
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardContent className="pt-6 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 text-primary mx-auto mb-4"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-muted-foreground mb-4">Monday to Friday, 9am to 6pm EST</p>
              <Link href="tel:+1-555-123-4567" className="text-primary hover:underline">
                +1 (555) 123-4567
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardContent className="pt-6 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 text-primary mx-auto mb-4"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <h3 className="text-xl font-bold mb-2">Office</h3>
              <p className="text-muted-foreground mb-4">Visit our headquarters</p>
              <address className="not-italic text-primary">
                123 Tech Lane
                <br />
                San Francisco, CA 94107
              </address>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

