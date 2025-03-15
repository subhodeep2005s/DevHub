import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto py-10 space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-muted-foreground">Last updated: May 15, 2024</p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="prose dark:prose-invert max-w-none">
            <p>
              Welcome to DevHub! These Terms of Service ("Terms") govern your access to and use of the DevHub website,
              services, and applications (collectively, the "Services"). Please read these Terms carefully before using
              our Services.
            </p>

            <p>
              By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do
              not agree to these Terms, you may not access or use the Services.
            </p>

            <h2>1. Using Our Services</h2>
            <h3>1.1 Account Registration</h3>
            <p>
              To access certain features of our Services, you may be required to register for an account. You agree to
              provide accurate, current, and complete information during the registration process and to update such
              information to keep it accurate, current, and complete.
            </p>

            <h3>1.2 Account Security</h3>
            <p>
              You are responsible for safeguarding your account credentials and for any activities or actions under your
              account. You agree to notify us immediately of any unauthorized use of your account or any other breach of
              security.
            </p>

            <h3>1.3 Age Requirements</h3>
            <p>
              You must be at least 16 years old to use our Services. If you are under 18, you must have the consent of a
              parent or legal guardian to use our Services.
            </p>

            <h2>2. User Content</h2>
            <h3>2.1 Content Ownership</h3>
            <p>
              You retain ownership of any content you submit, post, or display on or through our Services ("User
              Content"). By submitting, posting, or displaying User Content on or through our Services, you grant us a
              worldwide, non-exclusive, royalty-free license to use, copy, modify, create derivative works based upon,
              distribute, publicly display, and publicly perform your User Content in connection with operating and
              providing our Services.
            </p>

            <h3>2.2 Content Responsibility</h3>
            <p>
              You are solely responsible for your User Content and the consequences of submitting and publishing your
              User Content on the Services. You affirm, represent, and warrant that:
            </p>
            <ul>
              <li>
                You own or have the necessary licenses, rights, consents, and permissions to use and authorize us to use
                your User Content as described herein
              </li>
              <li>
                Your User Content does not violate the rights of any third party, including copyright, trademark,
                privacy, or other personal or proprietary rights
              </li>
              <li>
                Your User Content does not contain material that is harmful, abusive, vulgar, offensive, harassing, or
                otherwise objectionable
              </li>
            </ul>

            <h3>2.3 Content Moderation</h3>
            <p>
              We reserve the right to remove any User Content that violates these Terms or that we determine in our sole
              discretion is harmful, offensive, or otherwise objectionable.
            </p>

            <h2>3. Prohibited Conduct</h2>
            <p>You agree not to engage in any of the following prohibited activities:</p>
            <ul>
              <li>Violating any applicable law, contract, intellectual property right, or other third-party right</li>
              <li>Engaging in any harassing, threatening, intimidating, or predatory conduct</li>
              <li>Using our Services for any illegal or unauthorized purpose</li>
              <li>Interfering with or disrupting the integrity or performance of our Services</li>
              <li>Attempting to circumvent any content-filtering techniques we employ</li>
              <li>Creating multiple accounts for disruptive or abusive purposes</li>
              <li>Scraping or collecting data from our Services without our prior consent</li>
              <li>Using our Services to send unsolicited communications, promotions, or advertisements</li>
            </ul>

            <h2>4. Intellectual Property Rights</h2>
            <h3>4.1 Our Intellectual Property</h3>
            <p>
              Our Services and their contents, features, and functionality are owned by DevHub, its licensors, or other
              providers and are protected by copyright, trademark, patent, trade secret, and other intellectual property
              or proprietary rights laws.
            </p>

            <h3>4.2 License to Use</h3>
            <p>
              Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable,
              non-sublicensable license to access and use our Services for your personal, non-commercial use.
            </p>

            <h2>5. Termination</h2>
            <p>
              We may terminate or suspend your access to all or part of our Services, without prior notice or liability,
              for any reason, including if you breach these Terms.
            </p>

            <h2>6. Disclaimer of Warranties</h2>
            <p>
              OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
              IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE, TITLE, AND NON-INFRINGEMENT.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              IN NO EVENT SHALL DEVHUB, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES, BE LIABLE
              FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION,
              LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF
              OR INABILITY TO ACCESS OR USE THE SERVICES.
            </p>

            <h2>8. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of California,
              without regard to its conflict of law provisions.
            </p>

            <h2>9. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. If we make changes, we will provide notice of such
              changes, such as by sending an email notification, providing notice through our Services, or updating the
              "Last Updated" date at the beginning of these Terms. Your continued use of our Services following the
              posting of revised Terms means that you accept and agree to the changes.
            </p>

            <h2>10. Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p>
              DevHub
              <br />
              123 Tech Lane
              <br />
              San Francisco, CA 94107
              <br />
              Email: legal@devhub.com
              <br />
              Phone: +1 (555) 123-4567
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="bg-muted/50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Questions About Our Terms?</h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          If you have any questions or concerns about our Terms of Service, our team is here to help.
        </p>
        <Button asChild>
          <Link href="/contact">
            Contact Our Legal Team <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

