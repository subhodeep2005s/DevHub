import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getAllCompetitions } from "@/lib/data"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Filter, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default async function CompetitionsPage() {
  const competitions = await getAllCompetitions()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Competitions</h1>
        <p className="text-muted-foreground">Browse and join our coding competitions</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-end">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search competitions..." className="pl-8" />
          </div>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Select defaultValue="all">
            <SelectTrigger className="w-[160px]">
              <Filter className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="upcoming">Upcoming</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all">
            <SelectTrigger className="w-[160px]">
              <Calendar className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Dates</SelectItem>
              <SelectItem value="this-month">This Month</SelectItem>
              <SelectItem value="next-month">Next Month</SelectItem>
              <SelectItem value="past">Past</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitions.map((competition, index) => {
              // Determine color scheme based on competition type or index
              const colorSchemes = [
                {
                  gradient: "from-blue-500/20 to-cyan-500/20",
                  border: "border-blue-500/20",
                  bg: "bg-blue-500/10",
                  text: "text-blue-500",
                },
                {
                  gradient: "from-purple-500/20 to-violet-500/20",
                  border: "border-purple-500/20",
                  bg: "bg-purple-500/10",
                  text: "text-purple-500",
                },
                {
                  gradient: "from-pink-500/20 to-rose-500/20",
                  border: "border-pink-500/20",
                  bg: "bg-pink-500/10",
                  text: "text-pink-500",
                },
                {
                  gradient: "from-green-500/20 to-emerald-500/20",
                  border: "border-green-500/20",
                  bg: "bg-green-500/10",
                  text: "text-green-500",
                },
                {
                  gradient: "from-orange-500/20 to-amber-500/20",
                  border: "border-orange-500/20",
                  bg: "bg-orange-500/10",
                  text: "text-orange-500",
                },
                {
                  gradient: "from-teal-500/20 to-cyan-500/20",
                  border: "border-teal-500/20",
                  bg: "bg-teal-500/10",
                  text: "text-teal-500",
                },
              ]

              const colorScheme = colorSchemes[index % colorSchemes.length]

              // Get a relevant unsplash image based on the competition theme
              const unsplashQuery = competition.name.toLowerCase().includes("ai")
                ? "artificial-intelligence"
                : competition.name.toLowerCase().includes("web3")
                  ? "blockchain"
                  : competition.name.toLowerCase().includes("mobile")
                    ? "mobile-app"
                    : "hackathon"

              const headerImage = `https://source.unsplash.com/random/400x200/?${unsplashQuery}`

              return (
                <div
                  key={competition.id}
                  className={cn(
                    "relative group rounded-xl overflow-hidden border shadow-sm transition-all hover:shadow-md",
                    colorScheme.border,
                  )}
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={headerImage || "/placeholder.svg"}
                      alt={competition.name}
                      fill
                      className="object-cover"
                    />
                    <div className={cn("absolute inset-0 bg-gradient-to-br opacity-80", colorScheme.gradient)} />
                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                      <div className="flex justify-between">
                        <Badge className={cn("px-3 py-1 text-xs font-medium", colorScheme.bg, colorScheme.text)}>
                          {competition.status}
                        </Badge>
                        <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                          {competition.teamSize} Team Size
                        </Badge>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{competition.name}</h3>
                        <p className="text-white/80 text-sm line-clamp-2">{competition.theme}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 space-y-4">
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

                    <Button
                      className={cn("w-full", competition.status === "Active" ? colorScheme.bg : "bg-muted")}
                      asChild
                    >
                      <Link href={`/competitions/${competition.id}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="active" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitions
              .filter((comp) => comp.status === "Active")
              .map((competition, index) => {
                // Determine color scheme based on competition type or index
                const colorSchemes = [
                  {
                    gradient: "from-blue-500/20 to-cyan-500/20",
                    border: "border-blue-500/20",
                    bg: "bg-blue-500/10",
                    text: "text-blue-500",
                  },
                  {
                    gradient: "from-purple-500/20 to-violet-500/20",
                    border: "border-purple-500/20",
                    bg: "bg-purple-500/10",
                    text: "text-purple-500",
                  },
                  {
                    gradient: "from-pink-500/20 to-rose-500/20",
                    border: "border-pink-500/20",
                    bg: "bg-pink-500/10",
                    text: "text-pink-500",
                  },
                  {
                    gradient: "from-green-500/20 to-emerald-500/20",
                    border: "border-green-500/20",
                    bg: "bg-green-500/10",
                    text: "text-green-500",
                  },
                  {
                    gradient: "from-orange-500/20 to-amber-500/20",
                    border: "border-orange-500/20",
                    bg: "bg-orange-500/10",
                    text: "text-orange-500",
                  },
                  {
                    gradient: "from-teal-500/20 to-cyan-500/20",
                    border: "border-teal-500/20",
                    bg: "bg-teal-500/10",
                    text: "text-teal-500",
                  },
                ]

                const colorScheme = colorSchemes[index % colorSchemes.length]

                // Get a relevant unsplash image based on the competition theme
                const unsplashQuery = competition.name.toLowerCase().includes("ai")
                  ? "artificial-intelligence"
                  : competition.name.toLowerCase().includes("web3")
                    ? "blockchain"
                    : competition.name.toLowerCase().includes("mobile")
                      ? "mobile-app"
                      : "hackathon"

                const headerImage = `https://source.unsplash.com/random/400x200/?${unsplashQuery}`

                return (
                  <div
                    key={competition.id}
                    className={cn(
                      "relative group rounded-xl overflow-hidden border shadow-sm transition-all hover:shadow-md",
                      colorScheme.border,
                    )}
                  >
                    <div className="relative h-48 w-full">
                      <Image
                        src={headerImage || "/placeholder.svg"}
                        alt={competition.name}
                        fill
                        className="object-cover"
                      />
                      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-80", colorScheme.gradient)} />
                      <div className="absolute inset-0 p-6 flex flex-col justify-between">
                        <div className="flex justify-between">
                          <Badge className={cn("px-3 py-1 text-xs font-medium", colorScheme.bg, colorScheme.text)}>
                            {competition.status}
                          </Badge>
                          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                            {competition.teamSize} Team Size
                          </Badge>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{competition.name}</h3>
                          <p className="text-white/80 text-sm line-clamp-2">{competition.theme}</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 space-y-4">
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

                      <Button
                        className={cn("w-full", competition.status === "Active" ? colorScheme.bg : "bg-muted")}
                        asChild
                      >
                        <Link href={`/competitions/${competition.id}`}>View Details</Link>
                      </Button>
                    </div>
                  </div>
                )
              })}
          </div>
        </TabsContent>

        {/* Similar content for "upcoming" and "completed" tabs */}
        <TabsContent value="upcoming" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitions
              .filter((comp) => comp.status === "Upcoming")
              .map((competition, index) => {
                // Determine color scheme based on competition type or index
                const colorSchemes = [
                  {
                    gradient: "from-blue-500/20 to-cyan-500/20",
                    border: "border-blue-500/20",
                    bg: "bg-blue-500/10",
                    text: "text-blue-500",
                  },
                  {
                    gradient: "from-purple-500/20 to-violet-500/20",
                    border: "border-purple-500/20",
                    bg: "bg-purple-500/10",
                    text: "text-purple-500",
                  },
                  {
                    gradient: "from-pink-500/20 to-rose-500/20",
                    border: "border-pink-500/20",
                    bg: "bg-pink-500/10",
                    text: "text-pink-500",
                  },
                  {
                    gradient: "from-green-500/20 to-emerald-500/20",
                    border: "border-green-500/20",
                    bg: "bg-green-500/10",
                    text: "text-green-500",
                  },
                  {
                    gradient: "from-orange-500/20 to-amber-500/20",
                    border: "border-orange-500/20",
                    bg: "bg-orange-500/10",
                    text: "text-orange-500",
                  },
                  {
                    gradient: "from-teal-500/20 to-cyan-500/20",
                    border: "border-teal-500/20",
                    bg: "bg-teal-500/10",
                    text: "text-teal-500",
                  },
                ]

                const colorScheme = colorSchemes[index % colorSchemes.length]

                // Get a relevant unsplash image based on the competition theme
                const unsplashQuery = competition.name.toLowerCase().includes("ai")
                  ? "artificial-intelligence"
                  : competition.name.toLowerCase().includes("web3")
                    ? "blockchain"
                    : competition.name.toLowerCase().includes("mobile")
                      ? "mobile-app"
                      : "hackathon"

                const headerImage = `https://source.unsplash.com/random/400x200/?${unsplashQuery}`

                return (
                  <div
                    key={competition.id}
                    className={cn(
                      "relative group rounded-xl overflow-hidden border shadow-sm transition-all hover:shadow-md",
                      colorScheme.border,
                    )}
                  >
                    <div className="relative h-48 w-full">
                      <Image
                        src={headerImage || "/placeholder.svg"}
                        alt={competition.name}
                        fill
                        className="object-cover"
                      />
                      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-80", colorScheme.gradient)} />
                      <div className="absolute inset-0 p-6 flex flex-col justify-between">
                        <div className="flex justify-between">
                          <Badge className={cn("px-3 py-1 text-xs font-medium", colorScheme.bg, colorScheme.text)}>
                            {competition.status}
                          </Badge>
                          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                            {competition.teamSize} Team Size
                          </Badge>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{competition.name}</h3>
                          <p className="text-white/80 text-sm line-clamp-2">{competition.theme}</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 space-y-4">
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

                      <Button
                        className={cn("w-full", competition.status === "Active" ? colorScheme.bg : "bg-muted")}
                        asChild
                      >
                        <Link href={`/competitions/${competition.id}`}>View Details</Link>
                      </Button>
                    </div>
                  </div>
                )
              })}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitions
              .filter((comp) => comp.status === "Completed")
              .map((competition, index) => {
                // Determine color scheme based on competition type or index
                const colorSchemes = [
                  {
                    gradient: "from-blue-500/20 to-cyan-500/20",
                    border: "border-blue-500/20",
                    bg: "bg-blue-500/10",
                    text: "text-blue-500",
                  },
                  {
                    gradient: "from-purple-500/20 to-violet-500/20",
                    border: "border-purple-500/20",
                    bg: "bg-purple-500/10",
                    text: "text-purple-500",
                  },
                  {
                    gradient: "from-pink-500/20 to-rose-500/20",
                    border: "border-pink-500/20",
                    bg: "bg-pink-500/10",
                    text: "text-pink-500",
                  },
                  {
                    gradient: "from-green-500/20 to-emerald-500/20",
                    border: "border-green-500/20",
                    bg: "bg-green-500/10",
                    text: "text-green-500",
                  },
                  {
                    gradient: "from-orange-500/20 to-amber-500/20",
                    border: "border-orange-500/20",
                    bg: "bg-orange-500/10",
                    text: "text-orange-500",
                  },
                  {
                    gradient: "from-teal-500/20 to-cyan-500/20",
                    border: "border-teal-500/20",
                    bg: "bg-teal-500/10",
                    text: "text-teal-500",
                  },
                ]

                const colorScheme = colorSchemes[index % colorSchemes.length]

                // Get a relevant unsplash image based on the competition theme
                const unsplashQuery = competition.name.toLowerCase().includes("ai")
                  ? "artificial-intelligence"
                  : competition.name.toLowerCase().includes("web3")
                    ? "blockchain"
                    : competition.name.toLowerCase().includes("mobile")
                      ? "mobile-app"
                      : "hackathon"

                const headerImage = `https://source.unsplash.com/random/400x200/?${unsplashQuery}`

                return (
                  <div
                    key={competition.id}
                    className={cn(
                      "relative group rounded-xl overflow-hidden border shadow-sm transition-all hover:shadow-md",
                      colorScheme.border,
                    )}
                  >
                    <div className="relative h-48 w-full">
                      <Image
                        src={headerImage || "/placeholder.svg"}
                        alt={competition.name}
                        fill
                        className="object-cover"
                      />
                      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-80", colorScheme.gradient)} />
                      <div className="absolute inset-0 p-6 flex flex-col justify-between">
                        <div className="flex justify-between">
                          <Badge className={cn("px-3 py-1 text-xs font-medium", colorScheme.bg, colorScheme.text)}>
                            {competition.status}
                          </Badge>
                          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                            {competition.teamSize} Team Size
                          </Badge>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{competition.name}</h3>
                          <p className="text-white/80 text-sm line-clamp-2">{competition.theme}</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 space-y-4">
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

                      <Button
                        className={cn("w-full", competition.status === "Active" ? colorScheme.bg : "bg-muted")}
                        asChild
                      >
                        <Link href={`/competitions/${competition.id}`}>View Results</Link>
                      </Button>
                    </div>
                  </div>
                )
              })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

