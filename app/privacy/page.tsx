import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto py-10 space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: May 15, 2024</p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="prose dark:prose-invert max-w-none">
            <p>
              At DevHub, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website and use our services. Please read this privacy
              policy carefully. If you do not agree with the terms of this privacy policy, please do not access the
              site.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We collect information that you provide directly to us when you register for an account, create or modify
              your profile, set preferences, sign-up for or make purchases through the Services. This information may
              include:
            </p>
            <ul>
              <li>Personal information such as your name, email address, and profile picture</li>
              <li>Account credentials such as your username and password</li>
              <li>
                Profile information such as your biography, location, skills, and links to your social media profiles
              </li>
              <li>Content you post, upload, or otherwise share on the platform</li>
              <li>Communications you send to us</li>
              <li>Payment information when you subscribe to premium services</li>
            </ul>

            <p>
              We also automatically collect certain information when you visit, use, or navigate our platform. This
              information does not reveal your specific identity but may include:
            </p>
            <ul>
              <li>
                Device and usage information, such as your IP address, browser and device characteristics, operating
                system, language preferences, referring URLs, page views, and other actions on the platform
              </li>
              <li>Cookies and similar technologies</li>
              <li>Location data</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect for various purposes, including to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send administrative information, such as updates, security alerts, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Personalize your experience and deliver content relevant to your interests</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Sharing Your Information</h2>
            <p>We may share your information in the following situations:</p>
            <ul>
              <li>With service providers who perform services on our behalf</li>
              <li>With business partners with whom we jointly offer products or services</li>
              <li>When you choose to share your information publicly on our platform</li>
              <li>In connection with a business transaction such as a merger, acquisition, or sale of assets</li>
              <li>To comply with the law or protect rights, property, or safety</li>
            </ul>

            <h2>Your Privacy Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul>
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate or incomplete information</li>
              <li>The right to delete your personal information</li>
              <li>The right to restrict or object to processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We have implemented appropriate technical and organizational security measures designed to protect the
              security of any personal information we process. However, despite our safeguards and efforts to secure
              your information, no electronic transmission over the Internet or information storage technology can be
              guaranteed to be 100% secure.
            </p>

            <h2>Data Retention</h2>
            <p>
              We will only keep your personal information for as long as it is necessary for the purposes set out in
              this privacy policy, unless a longer retention period is required or permitted by law.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not directed to children under 16, and we do not knowingly collect personal information
              from children under 16. If we learn we have collected or received personal information from a child under
              16 without verification of parental consent, we will delete that information.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this privacy policy from time to time. The updated version will be indicated by an updated
              "Last Updated" date and the updated version will be effective as soon as it is accessible. We encourage
              you to review this privacy policy frequently to be informed of how we are protecting your information.
            </p>

            <h2>Contact Us</h2>
            <p>If you have questions or comments about this policy, you may contact us at:</p>
            <p>
              DevHub
              <br />
              123 Tech Lane
              <br />
              San Francisco, CA 94107
              <br />
              Email: privacy@devhub.com
              <br />
              Phone: +1 (555) 123-4567
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="bg-muted/50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Have Questions About Our Privacy Practices?</h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          If you have any questions or concerns about our privacy policy or data practices, our team is here to help.
        </p>
        <Button asChild>
          <Link href="/contact">
            Contact Our Privacy Team <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

