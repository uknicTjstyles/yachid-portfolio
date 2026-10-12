"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SOCIALS } from "@/lib/data";

const schema = z.object({
  name: z.string().min(2, "Enter your name."),
  email: z.string().email("Enter a valid email address."),
  subject: z.string().min(2, "Enter a subject."),
  message: z.string().min(10, "Message should be at least 10 characters."),
});

type FormValues = z.infer<typeof schema>;

export default function Contact() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  async function onSubmit(values: FormValues) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        toast.error(result.error ?? "Could not send your message. Try again.");
        return;
      }

      toast.success("Message sent! I'll get back to you soon.");
      form.reset();
    } catch {
      toast.error("Network error. Check your connection and try again.");
    }
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl scroll-mt-28 px-5 py-16"
    >
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          Get in touch
        </p>
        <h2 className="mt-1 font-heading text-2xl font-bold text-fg sm:text-3xl">
          Let&apos;s talk
        </h2>
        <p className="mt-1 max-w-xl text-sm text-slate">
          Have a project in mind, a collaboration opportunity, or just want to
          say hi? I&apos;d love to hear from you.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
        <Reveal className="space-y-4 text-sm">
          <p className="flex items-center gap-3 text-slate">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-fg">
              <Mail className="h-4 w-4" />
            </span>
            {SOCIALS.email}
          </p>
          <p className="flex items-center gap-3 text-slate">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-fg">
              <Phone className="h-4 w-4" />
            </span>
            {SOCIALS.phone}
          </p>
          <p className="flex items-center gap-3 text-slate">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-fg">
              <MapPin className="h-4 w-4" />
            </span>
            {SOCIALS.location}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="contact-name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="contact-name"
                  placeholder="Your name"
                  aria-invalid={Boolean(form.formState.errors.name)}
                  aria-describedby={
                    form.formState.errors.name
                      ? "contact-name-error"
                      : undefined
                  }
                  {...form.register("name")}
                />
                {form.formState.errors.name && (
                  <p
                    id="contact-name-error"
                    role="alert"
                    className="text-sm text-destructive"
                  >
                    {form.formState.errors.name.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="you@example.com"
                  aria-invalid={Boolean(form.formState.errors.email)}
                  aria-describedby={
                    form.formState.errors.email
                      ? "contact-email-error"
                      : undefined
                  }
                  {...form.register("email")}
                />
                {form.formState.errors.email && (
                  <p
                    id="contact-email-error"
                    role="alert"
                    className="text-sm text-destructive"
                  >
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-subject" className="text-sm font-medium">
                Subject
              </label>
              <Input
                id="contact-subject"
                placeholder="What's this about?"
                aria-invalid={Boolean(form.formState.errors.subject)}
                aria-describedby={
                  form.formState.errors.subject
                    ? "contact-subject-error"
                    : undefined
                }
                {...form.register("subject")}
              />
              {form.formState.errors.subject && (
                <p
                  id="contact-subject-error"
                  role="alert"
                  className="text-sm text-destructive"
                >
                  {form.formState.errors.subject.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="contact-message"
                rows={5}
                placeholder="Tell me a bit about it..."
                aria-invalid={Boolean(form.formState.errors.message)}
                aria-describedby={
                  form.formState.errors.message
                    ? "contact-message-error"
                    : undefined
                }
                {...form.register("message")}
              />
              {form.formState.errors.message && (
                <p
                  id="contact-message-error"
                  role="alert"
                  className="text-sm text-destructive"
                >
                  {form.formState.errors.message.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="rounded-full bg-gradient-to-r from-primary to-purple px-8 text-white hover:opacity-90"
            >
              {form.formState.isSubmitting
                ? "Sending..."
                : "Send Message \u2192"}
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
