import { Button } from "@/components/ui/button"
import { getAllProjects } from "@/lib/data"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Filter, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FeaturedProjectCard } from "@/components/project-card"

export default async function ProjectsPage() {
  const projects = await getAllProjects()

  // Get unique categories
  const categories = Array.from(new Set(projects.map((project) => project.category)))

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Projects</h1>
        <p className="text-muted-foreground">Discover innovative projects from our community</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-end">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search projects..." className="pl-8" />
          </div>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Select defaultValue="all">
            <SelectTrigger className="w-[160px]">
              <Filter className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category.toLowerCase()}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select defaultValue="latest">
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="latest">Latest</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="trending">Trending</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="web">Web</TabsTrigger>
          <TabsTrigger value="mobile">Mobile</TabsTrigger>
          <TabsTrigger value="ai">AI & ML</TabsTrigger>
          <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <FeaturedProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>

        {["web", "mobile", "ai", "blockchain"].map((category) => (
          <TabsContent key={category} value={category} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((project) => {
                  const projectCategory = project.category.toLowerCase()
                  if (category === "web")
                    return (
                      projectCategory.includes("web") ||
                      projectCategory.includes("frontend") ||
                      projectCategory.includes("backend")
                    )
                  if (category === "mobile")
                    return projectCategory.includes("mobile") || projectCategory.includes("app")
                  if (category === "ai")
                    return (
                      projectCategory.includes("ai") ||
                      projectCategory.includes("machine") ||
                      projectCategory.includes("ml")
                    )
                  if (category === "blockchain")
                    return (
                      projectCategory.includes("blockchain") ||
                      projectCategory.includes("crypto") ||
                      projectCategory.includes("web3")
                    )
                  return false
                })
                .map((project) => (
                  <FeaturedProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="flex justify-center mt-8">
        <Button variant="outline">Load More Projects</Button>
      </div>
    </div>
  )
}

