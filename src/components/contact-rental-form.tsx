"use client";

import { useState } from "react";
import type { PropertySlug } from "@/data/availability";
import { cn } from "@/lib/utils";

const PROPERTY_LABEL: Record<PropertySlug, string> = {
  hanalei: "Hanalei, Kauai",
  amsterdam: "Amsterdam",
};

type ContactRentalFormProps = {
  propertySlug: PropertySlug;
  className?: string;
};

/** Build-time public key, or runtime key from /api/contact/web3-key (server WEB3FORMS_ACCESS_KEY). */
async function resolveWeb3Key(): Promise<string | null> {
  const env = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
  if (env) return env;
  try {
    const r = await fetch("/api/contact/web3-key");
    if (!r.ok) return null;
    const j = (await r.json()) as { key?: string | null };
    return j.key?.trim() ?? null;
  } catch {
    return null;
  }
}

export function ContactRentalForm({
  propertySlug,
  className,
}: ContactRentalFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    setSuccessMessage("");

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    const bodyLines = [
      `Property: ${propertySlug}`,
      checkIn ? `Preferred check-in: ${checkIn}` : null,
      checkOut ? `Preferred check-out: ${checkOut}` : null,
      "",
      trimmedMessage,
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const web3Key = await resolveWeb3Key();

      let res: Response;
      if (web3Key) {
        res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: web3Key,
            subject: `Rental inquiry — ${propertySlug}`,
            from_name: "Heil Homes",
            name: trimmedName,
            email: trimmedEmail,
            message: bodyLines,
          }),
        });
      } else {
        res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: trimmedName,
            email: trimmedEmail,
            property: propertySlug,
            checkIn: checkIn || undefined,
            checkOut: checkOut || undefined,
            message: trimmedMessage,
          }),
        });
      }

      const raw = await res.text();
      let data: {
        ok?: boolean;
        error?: string;
        mailto?: string;
        fallback?: boolean;
        success?: boolean;
        message?: string;
      } = {};
      try {
        data = raw ? (JSON.parse(raw) as typeof data) : {};
      } catch {
        setStatus("error");
        setErrorMessage(
          `Could not read server response (${res.status}). Please email us directly.`,
        );
        return;
      }

      if (web3Key) {
        if (!res.ok || !data.success) {
          setStatus("error");
          setErrorMessage(
            data.message ?? "Could not send message. Please try again.",
          );
          return;
        }
        setName("");
        setEmail("");
        setCheckIn("");
        setCheckOut("");
        setMessage("");
        setStatus("success");
        setSuccessMessage(
          "Thanks — your message was sent. We'll reply by email soon.",
        );
        return;
      }

      if (!res.ok || !data.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong.");
        return;
      }
      setName("");
      setEmail("");
      setCheckIn("");
      setCheckOut("");
      setMessage("");
      setStatus("success");
      if (data.fallback && data.mailto && typeof window !== "undefined") {
        window.open(data.mailto, "_blank");
        setSuccessMessage(
          "We opened a draft in your email app—send it to complete your inquiry.",
        );
      } else {
        setSuccessMessage(
          "Thanks — your message was sent. We'll reply by email soon.",
        );
      }
    } catch (err) {
      setStatus("error");
      const msg =
        err instanceof Error ? err.message : "Network error. Please try again.";
      setErrorMessage(msg);
    }
  }

  return (
    <div className={cn("space-y-4", className)}>
      <h3 className="font-serif text-lg text-slate-900">Contact us</h3>
      <p className="text-xs leading-relaxed text-slate-600">
        Tell us your preferred dates and we&apos;ll get back to you about{" "}
        {PROPERTY_LABEL[propertySlug]}.
      </p>
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="space-y-1.5">
            <span className="text-xs font-medium text-slate-700">Name</span>
            <input
              required
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-slate-300 transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-300/50"
              placeholder="Your name"
              autoComplete="name"
            />
          </label>
          <label className="space-y-1.5">
            <span className="text-xs font-medium text-slate-700">Email</span>
            <input
              required
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-slate-300 transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-300/50"
              placeholder="you@email.com"
              autoComplete="email"
            />
          </label>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="space-y-1.5">
            <span className="text-xs font-medium text-slate-700">
              Preferred check-in
            </span>
            <input
              type="date"
              name="checkIn"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-300/50"
            />
          </label>
          <label className="space-y-1.5">
            <span className="text-xs font-medium text-slate-700">
              Preferred check-out
            </span>
            <input
              type="date"
              name="checkOut"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-300/50"
            />
          </label>
        </div>
        <label className="block space-y-1.5">
          <span className="text-xs font-medium text-slate-700">Message</span>
          <textarea
            required
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full resize-y rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-300/50"
            placeholder="Party size, questions, or anything we should know…"
          />
        </label>
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex w-full items-center justify-center rounded-md bg-slate-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 disabled:opacity-60 sm:w-auto"
        >
          {status === "loading" ? "Sending…" : "Send inquiry"}
        </button>
        {status === "success" && successMessage && (
          <p className="text-sm text-emerald-800" role="status">
            {successMessage}
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-700" role="alert">
            {errorMessage}
          </p>
        )}
      </form>
    </div>
  );
}
