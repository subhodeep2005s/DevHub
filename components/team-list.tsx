import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { getTeamsByCompetition } from "@/lib/data"

export default async function TeamList({ competitionId }: { competitionId: string }) {
  const teams = await getTeamsByCompetition(competitionId)

  if (teams.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium mb-2">No teams yet</h3>
        <p className="text-muted-foreground mb-4">Be the first to create a team for this competition</p>
        <Button asChild>
          <Link href={`/competitions/${competitionId}/join`}>Create Team</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {teams.map((team) => (
        <Card key={team.id} className="border-primary/20 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>{team.name}</CardTitle>
            <CardDescription>Created by {team.leader}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Team Members</h4>
                <div className="flex -space-x-2">
                  {team.members.map((member, index) => (
                    <Avatar key={index} className="border-2 border-background">
                      <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                      <AvatarFallback>{member.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Skills</h4>
                <div className="flex flex-wrap gap-1">
                  {team.skills.map((skill, index) => (
                    <Badge key={index} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link href={`/teams/${team.id}`}>View Team</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

