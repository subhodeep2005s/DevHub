import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getLeaderboardByCompetition } from "@/lib/data"

export default async function LeaderboardTable({ competitionId }: { competitionId: string }) {
  const leaderboard = await getLeaderboardByCompetition(competitionId)

  if (leaderboard.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium mb-2">Leaderboard not available</h3>
        <p className="text-muted-foreground">
          The competition is still in progress or no scores have been submitted yet.
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-md border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">Rank</TableHead>
            <TableHead>Team</TableHead>
            <TableHead className="text-center">Innovation</TableHead>
            <TableHead className="text-center">Functionality</TableHead>
            <TableHead className="text-center">UI/UX</TableHead>
            <TableHead className="text-center">Code Quality</TableHead>
            <TableHead className="text-right">Total Score</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leaderboard.map((entry, index) => (
            <TableRow key={entry.id} className={index < 3 ? "bg-primary/5" : ""}>
              <TableCell className="font-medium">
                {index === 0 ? (
                  <Badge className="bg-yellow-500/20 text-yellow-500 border-yellow-500/20">1st</Badge>
                ) : index === 1 ? (
                  <Badge className="bg-gray-500/20 text-gray-500 border-gray-500/20">2nd</Badge>
                ) : index === 2 ? (
                  <Badge className="bg-amber-700/20 text-amber-700 border-amber-700/20">3rd</Badge>
                ) : (
                  `${index + 1}th`
                )}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/placeholder.svg" alt={entry.team} />
                    <AvatarFallback>{entry.team.substring(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <span>{entry.team}</span>
                </div>
              </TableCell>
              <TableCell className="text-center">{entry.scores.innovation}</TableCell>
              <TableCell className="text-center">{entry.scores.functionality}</TableCell>
              <TableCell className="text-center">{entry.scores.uiUx}</TableCell>
              <TableCell className="text-center">{entry.scores.codeQuality}</TableCell>
              <TableCell className="text-right font-bold">{entry.totalScore}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

