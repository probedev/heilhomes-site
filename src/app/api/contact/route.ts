import { NextResponse } from "next/server";

type Body = {
  name?: string;
  email?: string;
  property?: string;
  checkIn?: string;
  checkOut?: string;
  message?: string;
};

function buildMailto(body: Required<Pick<Body, "name" | "email" | "message">> & Body) {
  const contact =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@heilhomes.com";
  const subject = `Rental inquiry — ${body.property ?? "property"}`;
  const text = [
    `Name: ${body.name}`,
    `Email: ${body.email}`,
    `Property: ${body.property}`,
    body.checkIn ? `Check-in: ${body.checkIn}` : null,
    body.checkOut ? `Check-out: ${body.checkOut}` : null,
    "",
    body.message,
  ]
    .filter(Boolean)
    .join("\n");
  return `mailto:${encodeURIComponent(contact)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
}

export async function POST(request: Request) {
  let json: Body;
  try {
    json = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = typeof json.name === "string" ? json.name.trim() : "";
  const email = typeof json.email === "string" ? json.email.trim() : "";
  const message = typeof json.message === "string" ? json.message.trim() : "";
  const property = typeof json.property === "string" ? json.property.trim() : "";
  const checkIn =
    typeof json.checkIn === "string" ? json.checkIn.trim() : undefined;
  const checkOut =
    typeof json.checkOut === "string" ? json.checkOut.trim() : undefined;

  if (!name || !email || !message || !property) {
    return NextResponse.json(
      { ok: false, error: "Name, email, property, and message are required." },
      { status: 400 },
    );
  }

  const web3Key = process.env.WEB3FORMS_ACCESS_KEY;
  if (web3Key) {
    /** Primary inbox is set in Web3Forms dashboard; optional CC (PRO) for a second inbox */
    const ccEmail = process.env.WEB3FORMS_CC_EMAIL?.trim();

    const payload: Record<string, string | boolean> = {
      access_key: web3Key,
      subject: `Rental inquiry — ${property}`,
      from_name: "Heil Homes",
      name,
      email,
      message: [
        `Property: ${property}`,
        checkIn ? `Preferred check-in: ${checkIn}` : null,
        checkOut ? `Preferred check-out: ${checkOut}` : null,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    };
    if (ccEmail) {
      payload.ccemail = ccEmail;
    }

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = (await res.json()) as { success?: boolean; message?: string };
    if (!res.ok || !data.success) {
      return NextResponse.json(
        {
          ok: false,
          error: data.message ?? "Could not send message. Try again later.",
        },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true });
  }

  const resendKey = process.env.RESEND_API_KEY;
  const toRaw = process.env.CONTACT_TO_EMAIL;
  if (resendKey && toRaw) {
    const to = toRaw
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from:
          process.env.RESEND_FROM_EMAIL ?? "Heil Homes <onboarding@resend.dev>",
        to,
        reply_to: email,
        subject: `Rental inquiry — ${property}`,
        text: [
          `From: ${name} <${email}>`,
          `Property: ${property}`,
          checkIn ? `Preferred check-in: ${checkIn}` : null,
          checkOut ? `Preferred check-out: ${checkOut}` : null,
          "",
          message,
        ]
          .filter(Boolean)
          .join("\n"),
      }),
    });
    if (!res.ok) {
      const errText = await res.text();
      console.error("Resend error", errText);
      return NextResponse.json(
        { ok: false, error: "Could not send email. Try again later." },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true });
  }

  /** No email provider: return mailto so the client can open the user’s mail app */
  const mailto = buildMailto({ name, email, message, property, checkIn, checkOut });
  return NextResponse.json({
    ok: true,
    mailto,
    fallback: true,
    message:
      "Email delivery is not configured on the server; opening your email app.",
  });
}
