"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Plus, Trash, ArrowLeft } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function NewHackathonPage() {
  // State for form fields
  const [name, setName] = useState("")
  const [theme, setTheme] = useState("")
  const [description, setDescription] = useState("")
  const [status, setStatus] = useState("upcoming")
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()
  const [teamSize, setTeamSize] = useState("")
  const [prizes, setPrizes] = useState("")

  // State for dynamic fields
  const [rules, setRules] = useState<string[]>(["", ""])
  const [judgingCriteria, setJudgingCriteria] = useState<Array<{ name: string; weight: number; description: string }>>([
    { name: "Innovation", weight: 25, description: "" },
    { name: "Functionality", weight: 25, description: "" },
    { name: "UI/UX", weight: 20, description: "" },
    { name: "Code Quality", weight: 15, description: "" },
    { name: "Presentation", weight: 15, description: "" },
  ])
  const [timeline, setTimeline] = useState<Array<{ date: Date | undefined; title: string; description: string }>>([
    { date: undefined, title: "Competition Start", description: "" },
    { date: undefined, title: "Idea Submission Deadline", description: "" },
    { date: undefined, title: "Final Submission", description: "" },
  ])

  // Handler for adding a new rule
  const addRule = () => {
    setRules([...rules, ""])
  }

  // Handler for updating a rule
  const updateRule = (index: number, value: string) => {
    const updatedRules = [...rules]
    updatedRules[index] = value
    setRules(updatedRules)
  }

  // Handler for removing a rule
  const removeRule = (index: number) => {
    const updatedRules = [...rules]
    updatedRules.splice(index, 1)
    setRules(updatedRules)
  }

  // Handler for adding a new judging criterion
  const addJudgingCriterion = () => {
    setJudgingCriteria([...judgingCriteria, { name: "", weight: 0, description: "" }])
  }

  // Handler for updating a judging criterion
  const updateJudgingCriterion = (index: number, field: keyof (typeof judgingCriteria)[0], value: string | number) => {
    const updatedCriteria = [...judgingCriteria]
    updatedCriteria[index] = { ...updatedCriteria[index], [field]: value }
    setJudgingCriteria(updatedCriteria)
  }

  // Handler for removing a judging criterion
  const removeJudgingCriterion = (index: number) => {
    const updatedCriteria = [...judgingCriteria]
    updatedCriteria.splice(index, 1)
    setJudgingCriteria(updatedCriteria)
  }

  // Handler for adding a new timeline event
  const addTimelineEvent = () => {
    setTimeline([...timeline, { date: undefined, title: "", description: "" }])
  }

  // Handler for updating a timeline event
  const updateTimelineEvent = (index: number, field: keyof (typeof timeline)[0], value: Date | string) => {
    const updatedTimeline = [...timeline]
    updatedTimeline[index] = { ...updatedTimeline[index], [field]: value }
    setTimeline(updatedTimeline)
  }

  // Handler for removing a timeline event
  const removeTimelineEvent = (index: number) => {
    const updatedTimeline = [...timeline]
    updatedTimeline.splice(index, 1)
    setTimeline(updatedTimeline)
  }

  // Handler for form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Construct the hackathon object
    const hackathon = {
      name,
      theme,
      description,
      status,
      startDate: startDate ? format(startDate, "MMMM d, yyyy") : "",
      endDate: endDate ? format(endDate, "MMMM d, yyyy") : "",
      teamSize,
      prizes,
      rules: rules.filter((rule) => rule.trim() !== ""),
      judgingCriteria: judgingCriteria.filter((criterion) => criterion.name.trim() !== ""),
      timeline: timeline
        .filter((event) => event.title.trim() !== "")
        .map((event) => ({
          ...event,
          date: event.date ? format(event.date, "MMMM d, yyyy") : "",
        })),
    }

    // In a real application, you would send this data to your API
    console.log("Hackathon data:", hackathon)

    // For demo purposes, show an alert
    alert("Hackathon created successfully!")
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <Link
            href="/admin"
            className="flex items-center text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Admin Dashboard
          </Link>
          <h1 className="text-4xl font-bold mb-2">Create New Hackathon</h1>
          <p className="text-muted-foreground">Set up a new hackathon for your community</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="basic">Basic Info</TabsTrigger>
            <TabsTrigger value="rules">Rules & Criteria</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
            <TabsTrigger value="prizes">Prizes & Details</TabsTrigger>
          </TabsList>

          {/* Basic Information Tab */}
          <TabsContent value="basic" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Enter the core details about your hackathon</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Hackathon Name</Label>
                  <Input
                    id="name"
                    placeholder="e.g., AI Innovation Challenge"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="theme">Theme</Label>
                  <Input
                    id="theme"
                    placeholder="e.g., Artificial Intelligence for Social Good"
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe the purpose and goals of this hackathon..."
                    className="min-h-[120px]"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Status</Label>
                  <RadioGroup
                    defaultValue="upcoming"
                    className="flex space-x-4"
                    value={status}
                    onValueChange={setStatus}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="upcoming" id="upcoming" />
                      <Label htmlFor="upcoming">Upcoming</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="active" id="active" />
                      <Label htmlFor="active">Active</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="completed" id="completed" />
                      <Label htmlFor="completed">Completed</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="startDate">Start Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !startDate && "text-muted-foreground",
                          )}
                        >
                          {startDate ? format(startDate, "PPP") : <span>Pick a date</span>}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar mode="single" selected={startDate} onSelect={setStartDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="endDate">End Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !endDate && "text-muted-foreground",
                          )}
                        >
                          {endDate ? format(endDate, "PPP") : <span>Pick a date</span>}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar mode="single" selected={endDate} onSelect={setEndDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="teamSize">Team Size</Label>
                    <Select value={teamSize} onValueChange={setTeamSize}>
                      <SelectTrigger id="teamSize">
                        <SelectValue placeholder="Select team size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Individual (1 person)</SelectItem>
                        <SelectItem value="1-2">1-2 members</SelectItem>
                        <SelectItem value="2-3">2-3 members</SelectItem>
                        <SelectItem value="2-4">2-4 members</SelectItem>
                        <SelectItem value="2-5">2-5 members</SelectItem>
                        <SelectItem value="3-5">3-5 members</SelectItem>
                        <SelectItem value="1-5">1-5 members</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="prizes">Prize Pool</Label>
                    <Input
                      id="prizes"
                      placeholder="e.g., $10,000"
                      value={prizes}
                      onChange={(e) => setPrizes(e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Rules & Criteria Tab */}
          <TabsContent value="rules" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Rules</CardTitle>
                <CardDescription>Define the rules for your hackathon</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {rules.map((rule, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      placeholder={`Rule ${index + 1}`}
                      value={rule}
                      onChange={(e) => updateRule(index, e.target.value)}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeRule(index)}
                      disabled={rules.length <= 2}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button type="button" variant="outline" onClick={addRule} className="mt-2">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Rule
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Judging Criteria</CardTitle>
                <CardDescription>Define how submissions will be evaluated</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {judgingCriteria.map((criterion, index) => (
                  <div key={index} className="space-y-2 border-b pb-4 last:border-0">
                    <div className="flex justify-between items-center">
                      <Label>Criterion {index + 1}</Label>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => removeJudgingCriterion(index)}
                        disabled={judgingCriteria.length <= 3}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Input
                          placeholder="Name"
                          value={criterion.name}
                          onChange={(e) => updateJudgingCriterion(index, "name", e.target.value)}
                        />
                      </div>
                      <div>
                        <Input
                          type="number"
                          placeholder="Weight (%)"
                          min="0"
                          max="100"
                          value={criterion.weight}
                          onChange={(e) =>
                            updateJudgingCriterion(index, "weight", Number.parseInt(e.target.value) || 0)
                          }
                        />
                      </div>
                      <div className="md:col-span-3">
                        <Input
                          placeholder="Description"
                          value={criterion.description}
                          onChange={(e) => updateJudgingCriterion(index, "description", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <Button type="button" variant="outline" onClick={addJudgingCriterion} className="mt-2">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Criterion
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Timeline Tab */}
          <TabsContent value="timeline" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Timeline</CardTitle>
                <CardDescription>Define the key dates and milestones for your hackathon</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {timeline.map((event, index) => (
                  <div key={index} className="space-y-2 border-b pb-4 last:border-0">
                    <div className="flex justify-between items-center">
                      <Label>Event {index + 1}</Label>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => removeTimelineEvent(index)}
                        disabled={timeline.length <= 3}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal mt-1",
                                !event.date && "text-muted-foreground",
                              )}
                            >
                              {event.date ? format(event.date, "PPP") : <span>Pick a date</span>}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={event.date}
                              onSelect={(date) => updateTimelineEvent(index, "date", date as Date)}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div>
                        <Label>Title</Label>
                        <Input
                          className="mt-1"
                          placeholder="e.g., Registration Deadline"
                          value={event.title}
                          onChange={(e) => updateTimelineEvent(index, "title", e.target.value)}
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Label>Description</Label>
                        <Input
                          className="mt-1"
                          placeholder="Description of this event"
                          value={event.description}
                          onChange={(e) => updateTimelineEvent(index, "description", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <Button type="button" variant="outline" onClick={addTimelineEvent} className="mt-2">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Timeline Event
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Prizes & Details Tab */}
          <TabsContent value="prizes" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Prize Details</CardTitle>
                <CardDescription>Specify the prizes for winners</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="firstPlace">First Place Prize</Label>
                  <Input id="firstPlace" placeholder="e.g., $5,000 + Mentorship" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="secondPlace">Second Place Prize</Label>
                  <Input id="secondPlace" placeholder="e.g., $3,000 + Cloud Credits" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="thirdPlace">Third Place Prize</Label>
                  <Input id="thirdPlace" placeholder="e.g., $2,000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="otherPrizes">Other Prizes (Optional)</Label>
                  <Textarea id="otherPrizes" placeholder="e.g., Special category awards, honorable mentions..." />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Additional Details</CardTitle>
                <CardDescription>Any other information about your hackathon</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="eligibility">Eligibility Requirements</Label>
                  <Textarea id="eligibility" placeholder="Who can participate in this hackathon?" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="resources">Resources Provided</Label>
                  <Textarea id="resources" placeholder="What resources will be provided to participants?" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="faqs">FAQs</Label>
                  <Textarea id="faqs" placeholder="Frequently asked questions and answers" className="min-h-[120px]" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end gap-4 mt-8">
          <Button variant="outline" type="button" asChild>
            <Link href="/admin">Cancel</Link>
          </Button>
          <Button type="submit">Create Hackathon</Button>
        </div>
      </form>
    </div>
  )
}

