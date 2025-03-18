import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Search, Filter, MapPin, Code, Palette, Briefcase } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

// Mock data for community members
const communityMembers = [
  {
    id: "user-1",
    name: "Jane Smith",
    role: "Developer",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&auto=format&fit=crop&q=80",
    location: "San Francisco, CA",
    skills: ["React", "TypeScript", "Node.js"],
    projects: 12,
    followers: 156,
    coverImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&auto=format&fit=crop&q=80",
  },
  {
    id: "user-2",
    name: "John Doe",
    role: "Designer",
    avatar: "",
    location: "New York, NY",
    skills: ["UI/UX", "Figma", "Illustration"],
    projects: 8,
    followers: 92,
    coverImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=400&auto=format&fit=crop&q=80",
  },
  {
    id: "user-3",
    name: "Alex Johnson",
    role: "Project Manager",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&auto=format&fit=crop&q=80",
    location: "Chicago, IL",
    skills: ["Agile", "Scrum", "Team Leadership"],
    projects: 15,
    followers: 124,
    coverImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=80",
  },
  {
    id: "user-4",
    name: "Sarah Lee",
    role: "Developer",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&auto=format&fit=crop&q=80",
    location: "Seattle, WA",
    skills: ["Python", "Django", "Machine Learning"],
    projects: 10,
    followers: 78,
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&h=400&auto=format&fit=crop&q=80",
  },
  {
    id: "user-5",
    name: "Michael Brown",
    role: "Designer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop&q=80",
    location: "Austin, TX",
    skills: ["Graphic Design", "Branding", "Motion Graphics"],
    projects: 7,
    followers: 65,
    coverImage: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=400&auto=format&fit=crop&q=80",
  },
  {
    id: "user-6",
    name: "Emily Davis",
    role: "Student",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&auto=format&fit=crop&q=80",
    location: "Boston, MA",
    skills: ["JavaScript", "React", "CSS"],
    projects: 5,
    followers: 42,
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=400&auto=format&fit=crop&q=80",
  },
  {
    id: "user-7",
    name: "David Wilson",
    role: "Developer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&auto=format&fit=crop&q=80",
    location: "Portland, OR",
    skills: ["Go", "Rust", "Kubernetes"],
    projects: 9,
    followers: 88,
    coverImage: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1200&h=400&auto=format&fit=crop&q=80",
  },
  {
    id: "user-8",
    name: "Lisa Chen",
    role: "Project Manager",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&auto=format&fit=crop&q=80",
    location: "San Diego, CA",
    skills: ["Product Management", "Analytics", "Strategy"],
    projects: 11,
    followers: 103,
    coverImage: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=1200&h=400&auto=format&fit=crop&q=80",
  },
]

export default function CommunityPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Community</h1>
        <p className="text-muted-foreground">Connect with developers, designers, and project managers</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-end">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search community members..." className="pl-8" />
          </div>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Select defaultValue="all">
            <SelectTrigger className="w-[160px]">
              <Filter className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="developer">Developers</SelectItem>
              <SelectItem value="designer">Designers</SelectItem>
              <SelectItem value="project-manager">Project Managers</SelectItem>
              <SelectItem value="student">Students</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all">
            <SelectTrigger className="w-[160px]">
              <MapPin className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="san-francisco">San Francisco</SelectItem>
              <SelectItem value="new-york">New York</SelectItem>
              <SelectItem value="chicago">Chicago</SelectItem>
              <SelectItem value="remote">Remote</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="developers" className="flex items-center gap-1">
            <Code className="h-4 w-4" />
            Developers
          </TabsTrigger>
          <TabsTrigger value="designers" className="flex items-center gap-1">
            <Palette className="h-4 w-4" />
            Designers
          </TabsTrigger>
          <TabsTrigger value="project-managers" className="flex items-center gap-1">
            <Briefcase className="h-4 w-4" />
            Project Managers
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityMembers.map((member) => (
              <Card key={member.id} className="border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden">
                <div className="relative h-32 w-full">
                  <Image
                    src={member.coverImage || "/placeholder.svg"}
                    alt={`${member.name}'s cover`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                      {member.role}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12 border-4 border-background -mt-8">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <CardDescription className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {member.location}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {member.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="bg-primary/5">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <div>{member.projects} Projects</div>
                    <div>{member.followers} Followers</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline" asChild>
                    <Link href={`/users/${member.id}`}>View Profile</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="developers" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityMembers
              .filter((member) => member.role === "Developer")
              .map((member) => (
                <Card key={member.id} className="border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden">
                  <div className="relative h-32 w-full">
                    <Image
                      src={member.coverImage || "/placeholder.svg"}
                      alt={`${member.name}'s cover`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                        {member.role}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12 border-4 border-background -mt-8">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>{member.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{member.name}</CardTitle>
                        <CardDescription className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {member.location}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {member.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="bg-primary/5">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <div>{member.projects} Projects</div>
                      <div>{member.followers} Followers</div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant="outline" asChild>
                      <Link href={`/users/${member.id}`}>View Profile</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="designers" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityMembers
              .filter((member) => member.role === "Designer")
              .map((member) => (
                <Card key={member.id} className="border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden">
                  <div className="relative h-32 w-full">
                    <Image
                      src={member.coverImage || "/placeholder.svg"}
                      alt={`${member.name}'s cover`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                        {member.role}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12 border-4 border-background -mt-8">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>{member.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{member.name}</CardTitle>
                        <CardDescription className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {member.location}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {member.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="bg-primary/5">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <div>{member.projects} Projects</div>
                      <div>{member.followers} Followers</div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant="outline" asChild>
                      <Link href={`/users/${member.id}`}>View Profile</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="project-managers" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityMembers
              .filter((member) => member.role === "Project Manager")
              .map((member) => (
                <Card key={member.id} className="border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden">
                  <div className="relative h-32 w-full">
                    <Image
                      src={member.coverImage || "/placeholder.svg"}
                      alt={`${member.name}'s cover`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                        {member.role}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12 border-4 border-background -mt-8">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>{member.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{member.name}</CardTitle>
                        <CardDescription className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {member.location}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {member.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="bg-primary/5">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <div>{member.projects} Projects</div>
                      <div>{member.followers} Followers</div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant="outline" asChild>
                      <Link href={`/users/${member.id}`}>View Profile</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-center mt-8">
        <Button variant="outline">Load More Members</Button>
      </div>
    </div>
  )
}

