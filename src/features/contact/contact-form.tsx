"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CircleCheckBig } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/shared/components/ui/button";
import { cn } from "@/shared/lib/utils";

import {
  initialContactFormData,
  inquiryOptions,
  roleOptions,
} from "./contact-data";
import { ContactOptionCard } from "./contact-option-card";
import { ContactStepShell } from "./contact-step-shell";
import type { ContactFormData } from "./contact-types";

const totalSteps = 5;

const stepAnimation = {
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  initial: { opacity: 0, y: 12 },
  transition: { duration: 0.24, ease: "easeOut" },
} as const;

function Field({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-14 w-full rounded-xl border border-[#cbd5eb] bg-white px-4 text-base text-[#141b34] outline-none transition-colors placeholder:text-[#7c86a0] focus:border-[#486fff] dark:border-transparent dark:bg-[#1b2141] dark:text-white dark:placeholder:text-white/28",
        className,
      )}
      {...props}
    />
  );
}

function TextArea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-34 w-full rounded-xl border border-[#cbd5eb] bg-white px-4 py-4 text-base text-[#141b34] outline-none transition-colors placeholder:text-[#7c86a0] focus:border-[#486fff] dark:border-transparent dark:bg-[#1b2141] dark:text-white dark:placeholder:text-white/28",
        className,
      )}
      {...props}
    />
  );
}

export function ContactForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>(
    initialContactFormData,
  );

  const canProceed = useMemo(() => {
    switch (step) {
      case 1:
        return formData.name.trim().length > 1;
      case 2:
        return Boolean(formData.inquiryType);
      case 3:
        return Boolean(formData.role);
      case 4:
        return (
          formData.email.trim().length > 3 &&
          formData.phoneNumber.trim().length > 5
        );
      case 5:
        return formData.message.trim().length > 8;
      default:
        return false;
    }
  }, [formData, step]);

  const nextStep = async () => {
    if (!canProceed) {
      toast.error("Please complete this step before continuing.");
      return;
    }

    if (step === totalSteps) {
      setIsSubmitting(true);

      const payload = {
        ...formData,
        submittedAt: new Date().toISOString(),
      };

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(
            result.error || "Unable to send your message right now.",
          );
        }

        toast.success("Message sent successfully.");
        setIsSubmitted(true);
      } catch (error) {
        toast.error(
          error instanceof Error ? error.message : "Something went wrong.",
        );
      } finally {
        setIsSubmitting(false);
      }

      return;
    }

    setStep((current) => Math.min(current + 1, totalSteps));
  };

  const previousStep = () => {
    setStep((current) => Math.max(current - 1, 1));
  };

  return (
    <div className="w-full max-w-[760px]">
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            {...stepAnimation}
            className="rounded-[24px] border border-[#e3e8f5] bg-white px-8 py-14 text-center shadow-[0_16px_38px_rgba(46,73,139,0.08)] dark:border-[#5a5f93] dark:bg-[#43407c] dark:shadow-[0_24px_70px_rgba(9,13,35,0.28)]"
          >
            <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-[#e6edff] dark:bg-[#31458d]">
              <CircleCheckBig className="size-8 text-[#2f6dff]" />
            </div>
            <h2 className="mt-8 text-4xl font-medium text-[#141b34] dark:text-white">
              You&apos;re in.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-[#5b6b8c] dark:text-white/64">
              We&apos;ll get back to you within 24 hours. Meanwhile, follow us
              on socials.
            </p>
          </motion.div>
        ) : (
          <motion.div key={step} {...stepAnimation}>
            {step === 1 ? (
              <ContactStepShell
                canProceed={canProceed}
                onBack={previousStep}
                onNext={nextStep}
                step={step}
                title="What should we call you?"
                totalSteps={totalSteps}
              >
                <Field
                  onChange={(event) =>
                    setFormData((current) => ({
                      ...current,
                      name: event.target.value,
                    }))
                  }
                  placeholder="Your name"
                  value={formData.name}
                />
              </ContactStepShell>
            ) : null}

            {step === 2 ? (
              <ContactStepShell
                canProceed={canProceed}
                onBack={previousStep}
                onNext={nextStep}
                step={step}
                title="How can we help?"
                totalSteps={totalSteps}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  {inquiryOptions.map((option) => (
                    <ContactOptionCard
                      description={option.description}
                      isActive={formData.inquiryType === option.value}
                      key={option.value}
                      label={option.label}
                      onClick={() =>
                        setFormData((current) => ({
                          ...current,
                          inquiryType: option.value,
                        }))
                      }
                    />
                  ))}
                </div>
              </ContactStepShell>
            ) : null}

            {step === 3 ? (
              <ContactStepShell
                canProceed={canProceed}
                onBack={previousStep}
                onNext={nextStep}
                step={step}
                title="What&apos;s your role?"
                totalSteps={totalSteps}
              >
                <div className="grid gap-4 sm:grid-cols-3">
                  {roleOptions.map((option) => (
                    <ContactOptionCard
                      icon={option.icon}
                      isActive={formData.role === option.value}
                      key={option.value}
                      label={option.label}
                      onClick={() =>
                        setFormData((current) => ({
                          ...current,
                          role: option.value,
                        }))
                      }
                    />
                  ))}
                </div>
              </ContactStepShell>
            ) : null}

            {step === 4 ? (
              <ContactStepShell
                canProceed={canProceed}
                onBack={previousStep}
                onNext={nextStep}
                step={step}
                title="How do we reach you?"
                totalSteps={totalSteps}
              >
                <div className="space-y-4">
                  <Field
                    onChange={(event) =>
                      setFormData((current) => ({
                        ...current,
                        email: event.target.value,
                      }))
                    }
                    placeholder="Email address"
                    type="email"
                    value={formData.email}
                  />
                  <Field
                    onChange={(event) =>
                      setFormData((current) => ({
                        ...current,
                        phoneNumber: event.target.value,
                      }))
                    }
                    placeholder="Phone number"
                    value={formData.phoneNumber}
                  />
                  <Field
                    onChange={(event) =>
                      setFormData((current) => ({
                        ...current,
                        institutionName: event.target.value,
                      }))
                    }
                    placeholder="Institution name (optional)"
                    value={formData.institutionName}
                  />
                </div>
              </ContactStepShell>
            ) : null}

            {step === 5 ? (
              <ContactStepShell
                canProceed={canProceed && !isSubmitting}
                isLastStep
                onBack={previousStep}
                onNext={nextStep}
                step={step}
                title="Tell us more"
                totalSteps={totalSteps}
              >
                <TextArea
                  onChange={(event) =>
                    setFormData((current) => ({
                      ...current,
                      message: event.target.value,
                    }))
                  }
                  placeholder="Tell us what you're looking for..."
                  value={formData.message}
                />

                {isSubmitting ? (
                  <div className="mt-5 flex justify-end">
                    <Button
                      className="h-12 rounded-xl bg-[#245dff] px-5 text-sm font-semibold text-white"
                      disabled
                    >
                      Sending...
                    </Button>
                  </div>
                ) : null}
              </ContactStepShell>
            ) : null}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
