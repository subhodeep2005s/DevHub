import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getCompetitionById, getCompetitionByStringId } from "@/lib/data"
import { notFound } from "next/navigation"
import { Trophy, Users, Calendar, FileText, MessageSquare, ArrowRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TeamList from "@/components/team-list"
import LeaderboardTable from "@/components/leaderboard-table"
import Image from "next/image"

export default async function CompetitionDetailPage({ params }: { params: { id: string } }) {
  // Try to get the competition by string ID first, then by regular ID
  const competition = (await getCompetitionByStringId(params.id)) || (await getCompetitionById(params.id))

  if (!competition) {
    notFound()
  }

  // Determine theme colors for the visual styling
  const isPurpleTheme =
    competition.name.toLowerCase().includes("ai") || competition.theme.toLowerCase().includes("intelligence")
  const isGreenTheme =
    competition.name.toLowerCase().includes("web3") || competition.theme.toLowerCase().includes("blockchain")
  const isBlueTheme =
    competition.name.toLowerCase().includes("cloud") || competition.theme.toLowerCase().includes("innovation")

  const primaryColor = isPurpleTheme ? "purple" : isGreenTheme ? "green" : isBlueTheme ? "blue" : "primary"

  // Get a relevant unsplash image based on the competition theme
  const unsplashQuery = isPurpleTheme
    ? "artificial-intelligence"
    : isGreenTheme
      ? "blockchain"
      : isBlueTheme
        ? "cloud-computing"
        : "hackathon"

  const headerImage = `https://source.unsplash.com/random/1200x400/?${unsplashQuery}`

  return (
    <div className="space-y-8">
      <section className="relative h-64 md:h-80 rounded-xl overflow-hidden">
        <Image src={headerImage || "/placeholder.svg"} alt={competition.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge
              className={cn(
                competition.status === "Active"
                  ? isPurpleTheme
                    ? "bg-purple-500 hover:bg-purple-600"
                    : isGreenTheme
                      ? "bg-green-500 hover:bg-green-600"
                      : isBlueTheme
                        ? "bg-blue-500 hover:bg-blue-600"
                        : "bg-primary hover:bg-primary/90"
                  : competition.status === "Upcoming"
                    ? "bg-secondary"
                    : "bg-muted",
              )}
            >
              {competition.status}
            </Badge>
            <Badge variant="outline">{competition.teamSize} Team Size</Badge>
            <Badge
              variant="outline"
              className={cn(
                "flex items-center gap-1",
                isPurpleTheme
                  ? "text-purple-500"
                  : isGreenTheme
                    ? "text-green-500"
                    : isBlueTheme
                      ? "text-blue-500"
                      : "text-primary",
              )}
            >
              <Trophy className="h-3 w-3" />
              {competition.prizes}
            </Badge>
          </div>
          <h1 className="text-4xl font-bold text-white">{competition.name}</h1>
          <p className="text-xl text-white/80 mt-2">{competition.theme}</p>
        </div>
      </section>

      <div className="flex flex-col md:flex-row justify-between gap-6 items-start">
        <div>
          <p className="text-muted-foreground max-w-2xl">{competition.description}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          {competition.status === "Active" && (
            <Button
              className={cn(
                isPurpleTheme
                  ? "bg-purple-500 hover:bg-purple-600"
                  : isGreenTheme
                    ? "bg-green-500 hover:bg-green-600"
                    : isBlueTheme
                      ? "bg-blue-500 hover:bg-blue-600"
                      : "bg-primary hover:bg-primary/90",
              )}
              asChild
            >
              <Link href={`/competitions/${params.id}/register`}>Join Hackathon</Link>
            </Button>
          )}
          {competition.status === "Upcoming" && (
            <Button variant="outline" asChild>
              <Link href={`/competitions/${params.id}/register`}>Pre-Register</Link>
            </Button>
          )}

          <div className="flex gap-2">
            <Button variant="outline" size="icon" asChild>
              <Link href="https://discord.gg/hackathon" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 -28.5 256 256" className="h-4 w-4 fill-current">
                  <path d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.784-3.443 118.216 1.087 167.825c22.169 16.099 43.653 25.925 64.775 32.388 5.215-7.033 9.863-14.538 13.89-22.397-7.637-2.84-14.93-6.323-21.816-10.413 1.833-1.32 3.625-2.7 5.336-4.119 42.103 19.575 87.778 19.575 129.376 0a136.805 136.805 0 0 0 5.337 4.12c-6.889 4.089-14.18 7.572-21.818 10.412 4.038 7.858 8.674 15.363 13.89 22.398 21.142-6.463 42.638-16.29 64.776-32.389 5.318-58.283-9.08-108.263-38.877-151.228ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z" />
                </svg>
                <span className="sr-only">Discord</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="https://whatsapp.com/group/hackathon" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                <span className="sr-only">WhatsApp</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div
          className={cn(
            "flex items-center gap-2 p-4 rounded-lg",
            isPurpleTheme
              ? "bg-purple-500/10"
              : isGreenTheme
                ? "bg-green-500/10"
                : isBlueTheme
                  ? "bg-blue-500/10"
                  : "bg-primary/10",
          )}
        >
          <Calendar
            className={cn(
              "h-5 w-5",
              isPurpleTheme
                ? "text-purple-500"
                : isGreenTheme
                  ? "text-green-500"
                  : isBlueTheme
                    ? "text-blue-500"
                    : "text-primary",
            )}
          />
          <div>
            <p className="text-sm font-medium">Start Date</p>
            <p className="text-sm">{competition.startDate}</p>
          </div>
        </div>
        <div
          className={cn(
            "flex items-center gap-2 p-4 rounded-lg",
            isPurpleTheme
              ? "bg-purple-500/10"
              : isGreenTheme
                ? "bg-green-500/10"
                : isBlueTheme
                  ? "bg-blue-500/10"
                  : "bg-primary/10",
          )}
        >
          <Calendar
            className={cn(
              "h-5 w-5",
              isPurpleTheme
                ? "text-purple-500"
                : isGreenTheme
                  ? "text-green-500"
                  : isBlueTheme
                    ? "text-blue-500"
                    : "text-primary",
            )}
          />
          <div>
            <p className="text-sm font-medium">End Date</p>
            <p className="text-sm">{competition.endDate}</p>
          </div>
        </div>
        <div
          className={cn(
            "flex items-center gap-2 p-4 rounded-lg",
            isPurpleTheme
              ? "bg-purple-500/10"
              : isGreenTheme
                ? "bg-green-500/10"
                : isBlueTheme
                  ? "bg-blue-500/10"
                  : "bg-primary/10",
          )}
        >
          <Trophy
            className={cn(
              "h-5 w-5",
              isPurpleTheme
                ? "text-purple-500"
                : isGreenTheme
                  ? "text-green-500"
                  : isBlueTheme
                    ? "text-blue-500"
                    : "text-primary",
            )}
          />
          <div>
            <p className="text-sm font-medium">Prize Pool</p>
            <p className="text-sm">{competition.prizes}</p>
          </div>
        </div>
        <div
          className={cn(
            "flex items-center gap-2 p-4 rounded-lg",
            isPurpleTheme
              ? "bg-purple-500/10"
              : isGreenTheme
                ? "bg-green-500/10"
                : isBlueTheme
                  ? "bg-blue-500/10"
                  : "bg-primary/10",
          )}
        >
          <Users
            className={cn(
              "h-5 w-5",
              isPurpleTheme
                ? "text-purple-500"
                : isGreenTheme
                  ? "text-green-500"
                  : isBlueTheme
                    ? "text-blue-500"
                    : "text-primary",
            )}
          />
          <div>
            <p className="text-sm font-medium">Team Size</p>
            <p className="text-sm">{competition.teamSize}</p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">About This Hackathon</h2>
                <p className="text-muted-foreground">{competition.description}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Rules</h2>
                <ul className="space-y-2 list-disc pl-5">
                  {competition.rules.map((rule, index) => (
                    <li key={index} className="text-muted-foreground">
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Judging Criteria</h2>
                <div className="space-y-4">
                  {competition.judgingCriteria.map((criteria, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{criteria.name}</span>
                        <span>{criteria.weight}%</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{criteria.description}</p>
                      <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                        <div
                          className={cn(
                            "h-full rounded-full",
                            isPurpleTheme
                              ? "bg-purple-500"
                              : isGreenTheme
                                ? "bg-green-500"
                                : isBlueTheme
                                  ? "bg-blue-500"
                                  : "bg-primary",
                          )}
                          style={{ width: `${criteria.weight}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {competition.prizeDetails && (
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Trophy
                      className={cn(
                        "h-5 w-5",
                        isPurpleTheme
                          ? "text-purple-500"
                          : isGreenTheme
                            ? "text-green-500"
                            : isBlueTheme
                              ? "text-blue-500"
                              : "text-primary",
                      )}
                    />
                    Prizes
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-yellow-500/20 text-yellow-500 h-10 w-10 rounded-full flex items-center justify-center font-bold">
                        1st
                      </div>
                      <div>
                        <p className="font-medium">First Place</p>
                        <p className="text-sm text-muted-foreground">{competition.prizeDetails.firstPlace}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-gray-500/20 text-gray-500 h-10 w-10 rounded-full flex items-center justify-center font-bold">
                        2nd
                      </div>
                      <div>
                        <p className="font-medium">Second Place</p>
                        <p className="text-sm text-muted-foreground">{competition.prizeDetails.secondPlace}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-amber-700/20 text-amber-700 h-10 w-10 rounded-full flex items-center justify-center font-bold">
                        3rd
                      </div>
                      <div>
                        <p className="font-medium">Third Place</p>
                        <p className="text-sm text-muted-foreground">{competition.prizeDetails.thirdPlace}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {competition.stats && (
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Stats</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold">{competition.stats.teams}</p>
                      <p className="text-sm text-muted-foreground">Teams</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold">{competition.stats.participants}</p>
                      <p className="text-sm text-muted-foreground">Participants</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold">{competition.stats.submissions}</p>
                      <p className="text-sm text-muted-foreground">Submissions</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <MessageSquare
                    className={cn(
                      "h-5 w-5",
                      isPurpleTheme
                        ? "text-purple-500"
                        : isGreenTheme
                          ? "text-green-500"
                          : isBlueTheme
                            ? "text-blue-500"
                            : "text-primary",
                    )}
                  />
                  Communication
                </h3>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="https://discord.gg/hackathon" target="_blank" rel="noopener noreferrer">
                      <svg viewBox="0 -28.5 256 256" className="h-4 w-4 mr-2 fill-current">
                        <path d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.784-3.443 118.216 1.087 167.825c22.169 16.099 43.653 25.925 64.775 32.388 5.215-7.033 9.863-14.538 13.89-22.397-7.637-2.84-14.93-6.323-21.816-10.413 1.833-1.32 3.625-2.7 5.336-4.119 42.103 19.575 87.778 19.575 129.376 0a136.805 136.805 0 0 0 5.337 4.12c-6.889 4.089-14.18 7.572-21.818 10.412 4.038 7.858 8.674 15.363 13.89 22.398 21.142-6.463 42.638-16.29 64.776-32.389 5.318-58.283-9.08-108.263-38.877-151.228ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z" />
                      </svg>
                      Join Discord Server
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="https://whatsapp.com/group/hackathon" target="_blank" rel="noopener noreferrer">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 mr-2 fill-current">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                      </svg>
                      Join WhatsApp Group
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <FileText
                    className={cn(
                      "h-5 w-5",
                      isPurpleTheme
                        ? "text-purple-500"
                        : isGreenTheme
                          ? "text-green-500"
                          : isBlueTheme
                            ? "text-blue-500"
                            : "text-primary",
                    )}
                  />
                  Resources
                </h3>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="mr-2 h-4 w-4" />
                    Hackathon Guidelines
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="mr-2 h-4 w-4" />
                    Submission Template
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            {competition.status === "Active" && (
              <Button
                size="lg"
                className={cn(
                  isPurpleTheme
                    ? "bg-purple-500 hover:bg-purple-600"
                    : isGreenTheme
                      ? "bg-green-500 hover:bg-green-600"
                      : isBlueTheme
                        ? "bg-blue-500 hover:bg-blue-600"
                        : "bg-primary hover:bg-primary/90",
                )}
                asChild
              >
                <Link href={`/competitions/${params.id}/register`}>
                  Register Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            )}
            {competition.status === "Upcoming" && (
              <Button size="lg" variant="outline" asChild>
                <Link href={`/competitions/${params.id}/register`}>
                  Pre-Register <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            )}
          </div>
        </TabsContent>

        <TabsContent value="teams" className="mt-6">
          <TeamList competitionId={competition.id} />
        </TabsContent>

        <TabsContent value="timeline" className="mt-6">
          <div className="relative border-l-2 border-primary/30 pl-6 ml-6 space-y-8">
            {competition.timeline.map((event, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[30px] w-6 h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div className="mb-1 text-sm text-muted-foreground">{event.date}</div>
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <p className="text-muted-foreground">{event.description}</p>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="leaderboard" className="mt-6">
          <LeaderboardTable competitionId={competition.id} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

