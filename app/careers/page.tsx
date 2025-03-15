"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Briefcase, MapPin, Clock, ArrowRight, Upload } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { z } from "zod"

// Job openings data
const jobOpenings = [
  {
    id: "job-1",
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "San Francisco, CA (Remote Available)",
    type: "Full-time",
    salary: "$120,000 - $150,000",
    description:
      "We're looking for a Senior Frontend Developer to join our team and help build the next generation of our platform. You'll be responsible for designing and implementing user interfaces, collaborating with designers and backend developers, and ensuring the technical feasibility of UI/UX designs.",
    requirements: [
      "5+ years of experience with React and modern JavaScript",
      "Experience with TypeScript and Next.js",
      "Strong understanding of responsive design and cross-browser compatibility",
      "Experience with state management libraries (Redux, Zustand, etc.)",
      "Excellent problem-solving skills and attention to detail",
    ],
    postedDate: "2023-05-15",
  },
  {
    id: "job-2",
    title: "Backend Engineer",
    department: "Engineering",
    location: "New York, NY (Remote Available)",
    type: "Full-time",
    salary: "$130,000 - $160,000",
    description:
      "Join our backend team to build scalable and reliable APIs and services. You'll be working on our core platform, designing and implementing new features, optimizing performance, and ensuring the security and reliability of our systems.",
    requirements: [
      "4+ years of experience with Node.js or Python",
      "Experience with database design and optimization (SQL and NoSQL)",
      "Knowledge of RESTful APIs and microservices architecture",
      "Experience with cloud platforms (AWS, GCP, or Azure)",
      "Understanding of security best practices",
    ],
    postedDate: "2023-05-10",
  },
  {
    id: "job-3",
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    salary: "$100,000 - $130,000",
    description:
      "We're seeking a talented UX/UI Designer to create beautiful, intuitive interfaces for our products. You'll collaborate with product managers and engineers to define and implement innovative solutions for product direction, visuals, and experience.",
    requirements: [
      "3+ years of experience in UX/UI design for web and mobile applications",
      "Proficiency with design tools (Figma, Sketch, Adobe XD)",
      "Strong portfolio demonstrating your design process and solutions",
      "Experience with user research and usability testing",
      "Excellent communication and collaboration skills",
    ],
    postedDate: "2023-05-05",
  },
  {
    id: "job-4",
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Austin, TX (Remote Available)",
    type: "Full-time",
    salary: "$125,000 - $155,000",
    description:
      "Join our infrastructure team to build and maintain our cloud infrastructure, CI/CD pipelines, and monitoring systems. You'll be responsible for ensuring the reliability, scalability, and security of our platform.",
    requirements: [
      "4+ years of experience with cloud platforms (AWS, GCP, or Azure)",
      "Experience with infrastructure as code (Terraform, CloudFormation)",
      "Knowledge of containerization and orchestration (Docker, Kubernetes)",
      "Experience with CI/CD pipelines and automation",
      "Understanding of networking and security concepts",
    ],
    postedDate: "2023-04-28",
  },
  {
    id: "job-5",
    title: "Product Manager",
    department: "Product",
    location: "Seattle, WA (Remote Available)",
    type: "Full-time",
    salary: "$130,000 - $160,000",
    description:
      "We're looking for a Product Manager to help define and execute our product strategy. You'll work closely with engineering, design, and marketing teams to deliver products that meet user needs and business objectives.",
    requirements: [
      "3+ years of experience in product management for software products",
      "Experience with agile development methodologies",
      "Strong analytical and problem-solving skills",
      "Excellent communication and stakeholder management skills",
      "Technical background or understanding of software development",
    ],
    postedDate: "2023-04-20",
  },
]

// Form validation schema
const applicationSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  resume: z.string().min(1, { message: "Resume is required" }),
  coverLetter: z.string().min(50, { message: "Cover letter must be at least 50 characters" }),
})

export default function CareersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedJob, setSelectedJob] = useState<(typeof jobOpenings)[0] | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
    coverLetter: "",
  })
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [resumeFileName, setResumeFileName] = useState("")
  const { toast } = useToast()

  const handleApply = (job: (typeof jobOpenings)[0]) => {
    setSelectedJob(job)
    setIsModalOpen(true)
    // Reset form data and errors when opening the modal
    setFormData({
      name: "",
      email: "",
      phone: "",
      resume: "",
      coverLetter: "",
    })
    setFormErrors({})
    setResumeFileName("")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error for this field when user types
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // In a real app, you would upload the file to a server and get a URL
      // For this demo, we'll just store the file name
      setResumeFileName(file.name)
      setFormData((prev) => ({ ...prev, resume: file.name }))

      // Clear error for resume field
      if (formErrors.resume) {
        setFormErrors((prev) => {
          const newErrors = { ...prev }
          delete newErrors.resume
          return newErrors
        })
      }
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    try {
      // Validate form data
      applicationSchema.parse(formData)

      // If validation passes, submit the form
      setIsSubmitting(true)

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false)
        setIsModalOpen(false)

        // Show success toast
        toast({
          title: "Application Submitted",
          description: `Your application for ${selectedJob?.title} has been submitted successfully.`,
        })
      }, 1500)
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Convert Zod errors to a more usable format
        const errors: Record<string, string> = {}
        error.errors.forEach((err) => {
          if (err.path[0]) {
            errors[err.path[0] as string] = err.message
          }
        })
        setFormErrors(errors)
      }
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Careers</h1>
        <p className="text-muted-foreground">Join our team and help build the future of developer collaboration</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Open Positions</h2>
            <div className="space-y-4">
              {jobOpenings.map((job) => (
                <Card
                  key={job.id}
                  className="border-primary/20 bg-card/50 backdrop-blur-sm hover:shadow-md transition-all"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{job.title}</CardTitle>
                        <CardDescription>{job.department}</CardDescription>
                      </div>
                      <Badge>{job.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Briefcase className="h-4 w-4" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>
                          Posted on{" "}
                          {new Date(job.postedDate).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">{job.description}</p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" asChild>
                      <Link href={`/careers/${job.id}`}>
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button onClick={() => handleApply(job)}>Apply Now</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Why Join Us?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Innovative Work</h3>
                <p className="text-sm text-muted-foreground">
                  Work on cutting-edge projects that help developers around the world collaborate and build amazing
                  solutions.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Remote-First Culture</h3>
                <p className="text-sm text-muted-foreground">
                  We believe in flexibility and trust. Work from anywhere and manage your own schedule.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Competitive Benefits</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive health insurance, 401(k) matching, generous PTO, and professional development budget.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Diverse & Inclusive</h3>
                <p className="text-sm text-muted-foreground">
                  We're committed to building a diverse team and an inclusive environment where everyone can thrive.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Our Hiring Process</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="bg-primary/10 text-primary h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0">
                    1
                  </span>
                  <span>Application review (1-2 weeks)</span>
                </li>
                <li className="flex gap-2">
                  <span className="bg-primary/10 text-primary h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0">
                    2
                  </span>
                  <span>Initial screening call (30 minutes)</span>
                </li>
                <li className="flex gap-2">
                  <span className="bg-primary/10 text-primary h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0">
                    3
                  </span>
                  <span>Technical assessment or portfolio review</span>
                </li>
                <li className="flex gap-2">
                  <span className="bg-primary/10 text-primary h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0">
                    4
                  </span>
                  <span>Team interviews (2-3 hours)</span>
                </li>
                <li className="flex gap-2">
                  <span className="bg-primary/10 text-primary h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0">
                    5
                  </span>
                  <span>Offer and onboarding</span>
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Application Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Apply for {selectedJob?.title}</DialogTitle>
            <DialogDescription>
              Fill out the form below to apply for this position. All fields are required.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-6 py-4">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={formErrors.name ? "border-red-500" : ""}
                  />
                  {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={formErrors.email ? "border-red-500" : ""}
                  />
                  {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="(123) 456-7890"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={formErrors.phone ? "border-red-500" : ""}
                />
                {formErrors.phone && <p className="text-red-500 text-sm">{formErrors.phone}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="resume">Resume</Label>
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById("resume-upload")?.click()}
                    className={formErrors.resume ? "border-red-500" : ""}
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Resume
                  </Button>
                  <Input
                    id="resume-upload"
                    name="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  {resumeFileName && <span className="text-sm text-muted-foreground">{resumeFileName}</span>}
                </div>
                {formErrors.resume && <p className="text-red-500 text-sm">{formErrors.resume}</p>}
                <p className="text-xs text-muted-foreground">Accepted formats: PDF, DOC, DOCX. Max size: 5MB</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="coverLetter">Cover Letter</Label>
                <Textarea
                  id="coverLetter"
                  name="coverLetter"
                  placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                  className={`min-h-[150px] ${formErrors.coverLetter ? "border-red-500" : ""}`}
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                />
                {formErrors.coverLetter && <p className="text-red-500 text-sm">{formErrors.coverLetter}</p>}
              </div>
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

