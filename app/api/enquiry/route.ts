import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/site";
import { keyValueTable, wrapHtml } from "@/lib/email";

function requireEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing environment variable: ${name}`);
  return v;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const resend = new Resend(requireEnv("RESEND_API_KEY"));
    const from = requireEnv("RESEND_FROM");
    const to = process.env.ENQUIRIES_TO ?? siteConfig.email;

    // Notification to Afendi inbox
    const notificationSubject = `New accommodation request — ${body.companyName || "Afendi Property"}`;
    const fields: Array<[string, string]> = [
      ["Company name", body.companyName ?? ""],
      ["Contact name", body.contactName ?? ""],
      ["Email", body.email ?? ""],
      ["WhatsApp", body.whatsapp ?? ""],
      ["Service type", body.serviceType ?? ""],
      ["City + Country", body.location ?? ""],
      ["Check-in", body.checkIn ?? ""],
      ["Check-out", body.checkOut ?? ""],
      ["Guests", String(body.guests ?? "")],
      ["Units", String(body.units ?? "")],
      ["Budget", body.budget ?? ""],
      ["Urgency", body.urgency ?? ""],
      ["Standards", formatStandards(body.standards)],
      ["Notes", body.notes ?? ""],
    ];

    await resend.emails.send({
      from,
      to,
      subject: notificationSubject,
      html: wrapHtml(
        notificationSubject,
        `<p style="margin:0 0 12px;color:#111827;">A new accommodation request was submitted.</p>
         ${keyValueTable(fields)}`
      ),
    });

    // Auto-reply to submitter
    const replySubject = "We’ve received your accommodation request — Afendi Property";
    await resend.emails.send({
      from,
      to: body.email,
      subject: replySubject,
      html: wrapHtml(
        replySubject,
        `<p style="margin:0 0 12px;color:#111827;">Hi ${escape(body.contactName || "there")},</p>
         <p style="margin:0 0 12px;color:#111827;">
           Thanks for your request — we’ve received your accommodation brief.
         </p>
         <p style="margin:0 0 12px;color:#111827;">
           <strong>What happens next:</strong><br/>
           1) We review your dates, location, headcount, and requirements<br/>
           2) We begin sourcing suitable options<br/>
           3) We’ll reply by email with next steps and any clarifying questions
         </p>
         <p style="margin:0 0 12px;color:#111827;">
           If your request is urgent, you can message us on WhatsApp at <strong>${siteConfig.whatsapp}</strong>.
         </p>
         <p style="margin:0;color:#111827;">Kind regards,<br/>${siteConfig.name}</p>`
      ),
    });

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return new NextResponse(e?.message || "Bad Request", { status: 400 });
  }
}

function formatStandards(obj: any) {
  if (!obj || typeof obj !== "object") return "";
  const selected = Object.entries(obj)
    .filter(([, v]) => Boolean(v))
    .map(([k]) => k);
  return selected.join(", ");
}

function escape(s: string) {
  return String(s).replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
