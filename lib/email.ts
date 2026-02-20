import { siteConfig } from "@/lib/site";

export function wrapHtml(title: string, body: string) {
  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background:#F3F6FB;font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;">
  <div style="max-width:640px;margin:0 auto;padding:24px;">
    <div style="background:#ffffff;border:1px solid #D9E1EE;border-radius:14px;padding:22px;">
      <div style="font-weight:800;color:#0B1B34;font-size:16px;">${siteConfig.name}</div>
      <div style="color:#5B6472;font-size:13px;margin-top:4px;">${siteConfig.tagline}</div>
      <hr style="border:none;border-top:1px solid #D9E1EE;margin:16px 0;" />
      ${body}
      <hr style="border:none;border-top:1px solid #D9E1EE;margin:16px 0;" />
      <div style="color:#5B6472;font-size:12px;line-height:1.5;">
        <div><strong>Email:</strong> ${siteConfig.email}</div>
        <div><strong>WhatsApp:</strong> ${siteConfig.whatsapp}</div>
        <div><strong>Address:</strong> ${siteConfig.address}</div>
      </div>
    </div>
    <div style="color:#5B6472;font-size:11px;margin-top:10px;line-height:1.5;">
      Afendi Property provides sourcing and booking services. All bookings are subject to availability and supplier terms.
    </div>
  </div>
</body>
</html>`;
}

export function keyValueTable(items: Array<[string, string]>) {
  const rows = items
    .filter(([, v]) => String(v ?? "").trim().length > 0)
    .map(([k, v]) => `
      <tr>
        <td style="padding:8px 10px;border-top:1px solid #D9E1EE;color:#0B1B34;font-weight:700;width:220px;vertical-align:top;">${escapeHtml(k)}</td>
        <td style="padding:8px 10px;border-top:1px solid #D9E1EE;color:#111827;vertical-align:top;">${escapeHtml(v)}</td>
      </tr>
    `)
    .join("");

  return `<table style="width:100%;border-collapse:collapse;border:1px solid #D9E1EE;border-radius:12px;overflow:hidden;">
    <tbody>${rows}</tbody>
  </table>`;
}

export function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
