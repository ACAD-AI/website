import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { buildMetadata, PAGE_SEO } from "@/shared/config/seo";

const TERMS_EMAIL = "info@acadai.co";

const acceptableUseItems = [
  "Interfere with or disrupt the Service or connected systems",
  "Attempt to gain unauthorized access to any accounts, data, or networks",
  "Upload harmful or inappropriate content",
  "Use the Service to infringe on the rights of others",
];

const dataCollectionItems = [
  "Personal data (name, email, institution)",
  "Academic content (exam questions, answers, grades, feedback)",
  "Usage data (log files, analytics, device information)",
];

const dataUseItems = [
  "Provide and improve our grading and feedback features",
  "Develop better AI models",
  "Generate anonymised insights for research and reporting",
  "Meet legal obligations",
];

const responsibleAiItems = [
  "Review every AI-generated grade, score, and feedback",
  "Make necessary edits before exporting results or finalizing grades",
];

const pricingPolicySections = [
  {
    title: "Service Delivery",
    paragraphs: [
      "Your Acad AI account is activated within 24 hours of purchase confirmation.",
      "You'll get immediate access to all features once activated.",
      "For schools and institutions, onboarding sessions are scheduled within 5 business days of purchase.",
    ],
  },
  {
    title: "2. Pricing and Credits",
    paragraphs: [
      "2.1 Credit-Based Model: Acad AI operates on a credit system. Credits are purchased in bundles and deducted as you use AI features. Credits do not expire unless otherwise stated.",
      "2.2 No Refunds: All purchases are final. We do not offer refunds for unused credits or any part of the Service, including partial usage or non-usage.",
      "2.3 Changes to Pricing: We reserve the right to change pricing or credit structures at any time. Changes will not affect previously purchased credits.",
    ],
  },
  {
    title: "3. Free Credits Terms",
    paragraphs: [
      "New users receive a set number of free credits upon signup. These credits never expire and give full access to Acad AI features until they are used up.",
      "No payment details are required to receive free credits.",
      "Once free credits are used, access to certain features will be limited unless additional credits are purchased.",
    ],
  },
  {
    title: "4. Service Level Agreement (SLA)",
    paragraphs: [
      "We strive for 99.9% uptime.",
      "Scheduled maintenance is announced at least 48 hours in advance.",
    ],
  },
  {
    title: "Account Termination",
    paragraphs: [
      "Violations of these Terms may lead to suspension or termination.",
      "In such cases, no refunds will be issued.",
      "We will notify you via email if your account is terminated.",
    ],
  },
];

function PolicyCard({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section
      className="scroll-mt-28 rounded-2xl border border-[#e3e8f5] bg-white p-6 shadow-[0_16px_38px_rgba(46,73,139,0.08)] sm:p-8 dark:border-[#4D4D7C] dark:bg-[#323261]"
      id={id}
    >
      {children}
    </section>
  );
}

function PolicyList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 list-disc space-y-2 pl-6">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(PAGE_SEO.terms, locale);
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto w-full max-w-4xl">
        <p className="text-sm font-semibold tracking-[0.32em] text-[#1836b2] uppercase dark:text-[#86c7ed]">
          Legal
        </p>
        <h1 className="mt-5 text-4xl font-medium tracking-tight text-[#141b34] sm:text-5xl dark:text-white">
          Acad AI Terms and Conditions
        </h1>
        <p className="mt-4 text-sm font-medium text-[#5b6b8c] dark:text-white/60">
          Last Updated: 14th August, 2025
        </p>
        <p className="mt-6 max-w-2xl text-base leading-8 text-[#5b6b8c] dark:text-white/68">
          Please read these Terms and Conditions (&quot;Terms&quot;) carefully
          before using Acad AI (the &quot;Service&quot;) provided by Acad AI
          (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). These Terms
          govern your access to and use of the Service.
        </p>
        <p className="mt-4 max-w-2xl text-base leading-8 text-[#5b6b8c] dark:text-white/68">
          By accessing or using the Service, you agree to be bound by these
          Terms. If you do not agree with any part of the Terms, you may not use
          the Service.
        </p>

        <div className="mt-12 space-y-8 text-base leading-8 text-[#5b6b8c] dark:text-white/68">
          <PolicyCard id="terms-and-conditions">
            <h2 className="text-2xl font-semibold text-[#141b34] dark:text-white">
              1. Use of Service
            </h2>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[#141b34] dark:text-white">
                  1.1 Eligibility
                </h3>
                <p className="mt-2">
                  You must be at least 10 years old or the legal age of majority
                  in your jurisdiction to use the Service. If you are under this
                  age, you may only use the Service with the consent of a
                  parent, guardian, or authorized school representative.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#141b34] dark:text-white">
                  1.2 User Accounts
                </h3>
                <p className="mt-2">
                  To access certain features, you may need to create an account.
                  You are responsible for keeping your login details
                  confidential and for all activities under your account. You
                  agree to provide accurate and complete information and update
                  it when necessary.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#141b34] dark:text-white">
                  1.3 Acceptable Use
                </h3>
                <p className="mt-2">
                  You agree to use the Service only for lawful, educational
                  purposes and in compliance with all applicable laws and these
                  Terms. You must not:
                </p>
                <PolicyList items={acceptableUseItems} />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#141b34] dark:text-white">
                  1.4 School Information and Logo Usage
                </h3>
                <p className="mt-2">
                  During onboarding, we request your institution&apos;s name. By
                  providing this information, you grant Acad AI permission to
                  display your school&apos;s name and logo on our website,
                  marketing materials, and case studies for credibility
                  purposes. We will not misrepresent your institution&apos;s
                  endorsement and will remove your logo upon written request.
                </p>
              </div>
            </div>
          </PolicyCard>

          <PolicyCard>
            <h2 className="text-2xl font-semibold text-[#141b34] dark:text-white">
              2. Intellectual Property
            </h2>
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[#141b34] dark:text-white">
                  2.1 Ownership
                </h3>
                <p className="mt-2">
                  The Service, including its code, design, features, and
                  content, is owned by Acad AI and protected by intellectual
                  property laws. All rights are reserved unless expressly
                  granted to you.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#141b34] dark:text-white">
                  2.2 Limited License
                </h3>
                <p className="mt-2">
                  Subject to these Terms, Acad AI grants you a limited,
                  non-exclusive, non-transferable, revocable license to use the
                  Service for its intended educational purposes. You may not
                  copy, modify, or redistribute the Service without written
                  consent.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#141b34] dark:text-white">
                  2.3 Feedback
                </h3>
                <p className="mt-2">
                  If you share feedback or suggestions with us, you grant Acad
                  AI a non-exclusive, royalty-free, worldwide, perpetual license
                  to use and adapt it without obligation to you.
                </p>
              </div>
            </div>
          </PolicyCard>

          <PolicyCard>
            <h2 className="text-2xl font-semibold text-[#141b34] dark:text-white">
              3. Privacy and Data Usage
            </h2>
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[#141b34] dark:text-white">
                  3.1 Privacy Policy
                </h3>
                <p className="mt-2">
                  Your use of the Service is subject to our Privacy Policy,
                  which explains how we collect, use, and protect your data.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#141b34] dark:text-white">
                  3.2 Data Collection
                </h3>
                <p className="mt-2">We may collect:</p>
                <PolicyList items={dataCollectionItems} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#141b34] dark:text-white">
                  3.3 Data Use
                </h3>
                <p className="mt-2">Your data may be used to:</p>
                <PolicyList items={dataUseItems} />
                <p className="mt-4">
                  We do not sell personal data. Data may be shared with trusted
                  service providers under strict confidentiality agreements.
                </p>
              </div>
            </div>
          </PolicyCard>

          <PolicyCard>
            <h2 className="text-2xl font-semibold text-[#141b34] dark:text-white">
              4. AI-Generated Results and Teacher Responsibility
            </h2>
            <p className="mt-5">
              Acad AI&apos;s grading features use artificial intelligence to
              assist teachers in marking assessments. While our models are
              tested for accuracy, there is a remote possibility of errors or
              AI-generated hallucinations.
            </p>
            <p className="mt-4">
              We follow responsible AI practices and clearly advise teachers to:
            </p>
            <PolicyList items={responsibleAiItems} />
            <p className="mt-4">
              Final responsibility for the accuracy of results lies with the
              teacher or institution using the Service. Acad AI is not liable
              for any incorrect grading, wrongful failure, carry-over, or other
              academic outcomes resulting from unreviewed AI outputs.
            </p>
          </PolicyCard>

          <PolicyCard>
            <h2 className="text-2xl font-semibold text-[#141b34] dark:text-white">
              5. Limitation of Liability
            </h2>
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[#141b34] dark:text-white">
                  5.1 Disclaimer
                </h3>
                <p className="mt-2">
                  The Service is provided &quot;as is&quot; without any
                  warranties. We do not guarantee accuracy, reliability, or
                  uninterrupted availability.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#141b34] dark:text-white">
                  5.2 Limitation
                </h3>
                <p className="mt-2">
                  Acad AI will not be liable for indirect, incidental, special,
                  or consequential damages. Our total liability for any claim
                  will not exceed the amount you paid in the last 12 months.
                </p>
              </div>
            </div>
          </PolicyCard>

          <PolicyCard>
            <h2 className="text-2xl font-semibold text-[#141b34] dark:text-white">
              6. Indemnification
            </h2>
            <p className="mt-5">
              You agree to indemnify and hold harmless Acad AI, its affiliates,
              and staff from claims or damages arising from your misuse of the
              Service, violation of these Terms, or reliance on unreviewed
              AI-generated results.
            </p>
          </PolicyCard>

          <PolicyCard>
            <h2 className="text-2xl font-semibold text-[#141b34] dark:text-white">
              8. Changes to Terms
            </h2>
            <p className="mt-5">
              We may update these Terms from time to time. Significant changes
              will be communicated via the Service or email. Continued use after
              updates means you accept the new Terms.
            </p>
          </PolicyCard>

          <PolicyCard>
            <h2 className="text-2xl font-semibold text-[#141b34] dark:text-white">
              9. Contact Us
            </h2>
            <p className="mt-5">
              If you have questions about these Terms, send an email to{" "}
              <a
                className="text-[#1836b2] dark:text-[#86c7ed]"
                href={`mailto:${TERMS_EMAIL}`}
              >
                {TERMS_EMAIL}
              </a>
              .
            </p>
          </PolicyCard>

          <PolicyCard id="pricing-policy">
            <h2 className="text-2xl font-semibold text-[#141b34] dark:text-white">
              Acad AI Fulfilment & Pricing Policy
            </h2>
            <div className="mt-6 space-y-6">
              {pricingPolicySections.map((section) => (
                <div key={section.title}>
                  <h3 className="text-lg font-semibold text-[#141b34] dark:text-white">
                    {section.title}
                  </h3>
                  <div className="mt-2 space-y-3">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}

              <div>
                <h3 className="text-lg font-semibold text-[#141b34] dark:text-white">
                  Contact Information
                </h3>
                <p className="mt-2">
                  For questions about pricing or fulfillment, send an email to{" "}
                  <a
                    className="text-[#1836b2] dark:text-[#86c7ed]"
                    href={`mailto:${TERMS_EMAIL}`}
                  >
                    {TERMS_EMAIL}
                  </a>
                  .
                </p>
              </div>
            </div>
          </PolicyCard>
        </div>
      </div>
    </main>
  );
}
