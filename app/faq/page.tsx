import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { ArrowRight, Search } from "lucide-react"

export default function FAQPage() {
  return (
    <div className="container mx-auto py-10 space-y-10">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Find answers to the most common questions about DevHub
        </p>
        <div className="relative max-w-xl mx-auto mt-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search FAQs..." className="pl-10 h-12 rounded-full" />
        </div>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="hackathons">Hackathons</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>General Questions</CardTitle>
              <CardDescription>Basic information about DevHub</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is DevHub?</AccordionTrigger>
                  <AccordionContent>
                    DevHub is a platform for developers and designers to showcase their skills, collaborate on projects,
                    and participate in coding competitions. It provides tools for building a professional portfolio,
                    connecting with other professionals, and discovering new opportunities in the tech industry.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is DevHub free to use?</AccordionTrigger>
                  <AccordionContent>
                    Yes, DevHub offers a free tier that includes basic features such as creating a profile, showcasing
                    projects, and participating in hackathons. We also offer premium plans with additional features for
                    individuals and teams who need more advanced capabilities.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Who can use DevHub?</AccordionTrigger>
                  <AccordionContent>
                    DevHub is designed for developers, designers, project managers, and anyone involved in creating
                    digital products. Whether you're a student, professional, or hobbyist, you're welcome to join our
                    community.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>How do I get started with DevHub?</AccordionTrigger>
                  <AccordionContent>
                    To get started, simply create an account, set up your profile, and start showcasing your projects.
                    You can also browse hackathons to participate in, connect with other users, and explore the
                    community's projects for inspiration.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>What makes DevHub different from other platforms?</AccordionTrigger>
                  <AccordionContent>
                    DevHub uniquely combines project showcasing, professional networking, and hackathon participation in
                    one platform. We focus on helping developers and designers build their professional brand while
                    connecting them with opportunities to grow their skills and network.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="account" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Questions</CardTitle>
              <CardDescription>Information about account management</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I create an account?</AccordionTrigger>
                  <AccordionContent>
                    To create an account, click on the "Sign Up" button in the top right corner of the homepage. You can
                    sign up using your email address or through social login options like GitHub, Google, or LinkedIn.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How do I reset my password?</AccordionTrigger>
                  <AccordionContent>
                    If you've forgotten your password, click on the "Log In" button, then select "Forgot Password."
                    Enter your email address, and we'll send you a link to reset your password. The link is valid for 24
                    hours.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Can I change my username?</AccordionTrigger>
                  <AccordionContent>
                    Yes, you can change your username in your account settings. Go to your profile, click on "Settings,"
                    and update your username in the "Profile" section. Note that if you change your username, the URL to
                    your profile will also change.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>How do I delete my account?</AccordionTrigger>
                  <AccordionContent>
                    To delete your account, go to your account settings, scroll to the bottom, and click on "Delete
                    Account." You'll need to confirm this action. Please note that account deletion is permanent and
                    cannot be undone.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>How do I manage my notification settings?</AccordionTrigger>
                  <AccordionContent>
                    You can manage your notification preferences in your account settings. Go to the "Notifications" tab
                    to customize which notifications you receive via email and within the platform.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projects" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Project Questions</CardTitle>
              <CardDescription>Information about creating and managing projects</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I create a new project?</AccordionTrigger>
                  <AccordionContent>
                    To create a new project, go to your dashboard and click on the "New Project" button. Fill in the
                    project details, add images, links to your code repository, and any other relevant information. Once
                    you're satisfied with your project page, click "Publish" to make it visible to the community.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Can I add collaborators to my project?</AccordionTrigger>
                  <AccordionContent>
                    Yes, you can add collaborators to your projects. On your project page, go to the "Settings" tab and
                    select "Collaborators." Enter the usernames or email addresses of the people you want to add, and
                    they'll receive an invitation to collaborate.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>How do I make my project visible to others?</AccordionTrigger>
                  <AccordionContent>
                    By default, all published projects are visible to the community. When creating or editing a project,
                    you can set its visibility to "Public" (visible to everyone), "Limited" (visible to registered
                    users), or "Private" (visible only to you and your collaborators).
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Can I link my GitHub repository to my project?</AccordionTrigger>
                  <AccordionContent>
                    Yes, you can link your GitHub repository to your project. When creating or editing a project,
                    there's a field for your repository URL. This allows visitors to view your code and contribute if
                    your repository is public.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>How do I get my project featured?</AccordionTrigger>
                  <AccordionContent>
                    Projects are featured based on quality, originality, and community engagement. To increase your
                    chances of being featured, make sure your project has a complete description, high-quality images, a
                    working demo if applicable, and actively engage with the community by responding to comments and
                    feedback.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hackathons" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Hackathon Questions</CardTitle>
              <CardDescription>Information about participating in hackathons</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I join a hackathon?</AccordionTrigger>
                  <AccordionContent>
                    To join a hackathon, browse the "Competitions" section and select a hackathon that interests you.
                    Click on the "Join Hackathon" or "Register" button on the hackathon page and follow the registration
                    process. Some hackathons may require you to form or join a team.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How do I form a team for a hackathon?</AccordionTrigger>
                  <AccordionContent>
                    After registering for a hackathon, you can either create a new team or join an existing one. To
                    create a team, go to the hackathon page, click on "Create Team," and invite other participants. To
                    join a team, you can browse available teams or accept an invitation from a team leader.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>How do I submit my hackathon project?</AccordionTrigger>
                  <AccordionContent>
                    To submit your project, go to the hackathon page and click on "Submit Project" before the submission
                    deadline. You'll need to provide a project title, description, images, and links to your code
                    repository and demo if applicable. Make sure to follow any specific submission guidelines for the
                    hackathon.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>How are hackathon winners determined?</AccordionTrigger>
                  <AccordionContent>
                    Hackathon winners are determined based on the judging criteria specified for each hackathon.
                    Typically, projects are evaluated on factors such as innovation, functionality, design, technical
                    complexity, and presentation. Judges review all submissions and score them according to these
                    criteria.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Can I participate in multiple hackathons simultaneously?</AccordionTrigger>
                  <AccordionContent>
                    Yes, you can participate in multiple hackathons at the same time, but we recommend considering your
                    capacity to deliver quality submissions. Each hackathon requires time and effort, so make sure you
                    can commit to all the hackathons you join.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Billing Questions</CardTitle>
              <CardDescription>Information about billing and subscriptions</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What subscription plans do you offer?</AccordionTrigger>
                  <AccordionContent>
                    We offer several subscription plans: Free (basic features), Pro (advanced features for individuals),
                    and Team (collaborative features for teams). Enterprise plans are also available for larger
                    organizations with custom requirements. You can view detailed plan comparisons on our pricing page.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How do I upgrade my subscription?</AccordionTrigger>
                  <AccordionContent>
                    To upgrade your subscription, go to your account settings and select the "Billing" tab. Click on
                    "Upgrade Plan" and choose the plan that best suits your needs. Follow the prompts to complete the
                    payment process.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                  <AccordionContent>
                    We accept major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for
                    annual enterprise plans. All payments are processed securely through our payment providers.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>How do I cancel my subscription?</AccordionTrigger>
                  <AccordionContent>
                    To cancel your subscription, go to your account settings, select the "Billing" tab, and click on
                    "Cancel Subscription." Your subscription will remain active until the end of the current billing
                    period, after which it will revert to the free plan.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Do you offer refunds?</AccordionTrigger>
                  <AccordionContent>
                    We offer a 14-day money-back guarantee for new subscriptions. If you're not satisfied with your
                    subscription within the first 14 days, contact our support team for a full refund. After this
                    period, refunds are considered on a case-by-case basis.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="bg-muted/50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          If you couldn't find the answer you were looking for, our support team is here to help.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <Link href="/contact">Contact Support</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/help">
              Browse Help Center <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

