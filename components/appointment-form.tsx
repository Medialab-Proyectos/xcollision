"use client"

import { useState } from "react"
import type { FormEvent } from "react"
import { CheckCircle2, Loader2, Phone } from "lucide-react"
import { SITE } from "@/lib/site"

export function AppointmentForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("loading")
    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error("Request failed")
      setStatus("success")
      form.reset()
    } catch {
      setStatus("error")
    }
  }

  const fieldClass =
    "w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/40"

  return (
    <section id="estimate" className="bg-secondary py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Get Started
          </p>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-primary text-balance sm:text-4xl">
            Schedule An Appointment
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
            Request your free estimate and we&apos;ll get back to you within 24–48 hours. Prefer
            to talk now? Call us — most of our customers get the fastest answers by phone.
          </p>

          <a
            href={SITE.phoneHref}
            className="mt-6 inline-flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-sm transition-colors hover:border-accent"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <Phone className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="text-left">
              <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Call Us Today
              </span>
              <span className="block font-heading text-xl font-bold text-primary">
                {SITE.phone}
              </span>
            </span>
          </a>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-lg sm:p-8">
          {status === "success" ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 py-12 text-center">
              <CheckCircle2 className="h-14 w-14 text-accent" aria-hidden="true" />
              <h3 className="font-heading text-2xl font-bold uppercase text-primary">
                Request Received!
              </h3>
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                Thank you. A member of our team will reach out within 24–48 hours. Need help
                sooner? Call {SITE.phone}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-1.5 block text-sm font-medium text-foreground">
                    First Name <span className="text-accent">*</span>
                  </label>
                  <input id="firstName" name="firstName" required className={fieldClass} placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="mb-1.5 block text-sm font-medium text-foreground">
                    Last Name <span className="text-accent">*</span>
                  </label>
                  <input id="lastName" name="lastName" required className={fieldClass} placeholder="Doe" />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
                  Phone <span className="text-accent">*</span>
                </label>
                <input id="phone" name="phone" type="tel" required className={fieldClass} placeholder="(469) 000-0000" />
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                  Email <span className="text-accent">*</span>
                </label>
                <input id="email" name="email" type="email" required className={fieldClass} placeholder="john@email.com" />
              </div>

              <div>
                <label htmlFor="vehicle" className="mb-1.5 block text-sm font-medium text-foreground">
                  Vehicle (Year / Make / Model)
                </label>
                <input id="vehicle" name="vehicle" className={fieldClass} placeholder="2022 Honda Accord" />
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                  Tell us about the damage
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className={`${fieldClass} resize-none`}
                  placeholder="Briefly describe what happened..."
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-destructive">
                  Something went wrong. Please try again or call us at {SITE.phone}.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-6 py-4 font-heading text-base font-semibold uppercase tracking-wide text-accent-foreground shadow-sm transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                    Sending...
                  </>
                ) : (
                  "Request My Free Estimate"
                )}
              </button>
              <p className="text-center text-xs text-muted-foreground">
                &quot;*&quot; indicates required fields
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
