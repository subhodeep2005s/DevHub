import { CalendarDays, ThumbsUp, Trophy, Users, MessageSquare, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type ColorScheme = "blue" | "green" | "purple" | "pink" | "orange" | "teal"

interface HackathonCardProps {
  id: string
  title: string
  category: string
  colorScheme: ColorScheme
  dates: string
  participantsCount: number
  prizesAmount: string
  description: string
  teamSize: string
}

const colorSchemes: Record<ColorScheme, { gradient: string; border: string; bg: string; text: string }> = {
  blue: {
    gradient: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/20",
    bg: "bg-blue-500/10",
    text: "text-blue-500",
  },
  green: {
    gradient: "from-green-500/20 to-emerald-500/20",
    border: "border-green-500/20",
    bg: "bg-green-500/10",
    text: "text-green-500",
  },
  purple: {
    gradient: "from-purple-500/20 to-violet-500/20",
    border: "border-purple-500/20",
    bg: "bg-purple-500/10",
    text: "text-purple-500",
  },
  pink: {
    gradient: "from-pink-500/20 to-rose-500/20",
    border: "border-pink-500/20",
    bg: "bg-pink-500/10",
    text: "text-pink-500",
  },
  orange: {
    gradient: "from-orange-500/20 to-amber-500/20",
    border: "border-orange-500/20",
    bg: "bg-orange-500/10",
    text: "text-orange-500",
  },
  teal: {
    gradient: "from-teal-500/20 to-cyan-500/20",
    border: "border-teal-500/20",
    bg: "bg-teal-500/10",
    text: "text-teal-500",
  },
}

export function HackathonCard({
  id,
  title,
  category,
  colorScheme,
  dates,
  participantsCount,
  prizesAmount,
  description,
  teamSize,
}: HackathonCardProps) {
  const colors = colorSchemes[colorScheme]

  return (
    <div
      className={cn(
        "relative group rounded-xl overflow-hidden border shadow-sm transition-all hover:shadow-md",
        colors.border,
      )}
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-30", colors.gradient)} />

      <div className="relative p-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <Badge className={cn("px-3 py-1 text-xs font-medium", colors.bg, colors.text)}>{category}</Badge>
          <div className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">{participantsCount} participants</span>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>

        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="flex items-center gap-2">
            <CalendarDays className={cn("h-4 w-4", colors.text)} />
            <span className="text-xs">{dates}</span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className={cn("h-4 w-4", colors.text)} />
            <span className="text-xs">{prizesAmount}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className={cn("h-4 w-4", colors.text)} />
            <span className="text-xs">{teamSize} Members</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare className={cn("h-4 w-4", colors.text)} />
            <span className="text-xs">Discord & WhatsApp</span>
          </div>
        </div>

        <div className="mt-auto flex justify-between items-center pt-4 border-t border-border/40">
          <div className="flex items-center gap-1.5">
            <Button size="sm" variant="ghost" className="h-7 gap-1">
              <ThumbsUp className="h-3.5 w-3.5" />
              <span className="text-xs">Interested</span>
            </Button>
          </div>
          <Button size="sm" className={cn("h-7")} asChild>
            <Link href={`/competitions/${id}`}>
              <span className="text-xs">View Details</span>
              <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

