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

    const notificationSubject = `New supplier submission — ${body.cityCountry || "Afendi Property"}`;
    const fields: Array<[string, string]> = [
      ["Name", body.name ?? ""],
      ["Email", body.email ?? ""],
      ["WhatsApp", body.whatsapp ?? ""],
      ["Role", body.role ?? ""],
      ["City + Country", body.cityCountry ?? ""],
      ["Property type", body.propertyType ?? ""],
      ["Bedrooms", String(body.bedrooms ?? "")],
      ["Max guests", String(body.maxGuests ?? "")],
      ["Rate range", body.rateRange ?? ""],
      ["Minimum stay", body.minStay ?? ""],
      ["Standards", formatStandards(body.standards)],
      ["Listing link", body.listingLink ?? ""],
      ["Notes", body.notes ?? ""],
    ];

    await resend.emails.send({
      from,
      to,
      subject: notificationSubject,
      html: wrapHtml(
        notificationSubject,
        `<p style="margin:0 0 12px;color:#111827;">A new supplier/property submission was received.</p>
         ${keyValueTable(fields)}`
      ),
    });

    const replySubject = "Thanks — we’ve received your property submission";
    await resend.emails.send({
      from,
      to: body.email,
      subject: replySubject,
      html: wrapHtml(
        replySubject,
        `<p style="margin:0 0 12px;color:#111827;">Hi ${escape(body.name || "there")},</p>
         <p style="margin:0 0 12px;color:#111827;">
           Thanks for submitting your property details. We’ll review the information and confirm next steps by email.
         </p>
         <p style="margin:0 0 12px;color:#111827;">
           If we need anything else (photos, compliance details, availability), we’ll reach out.
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
