# Afendi Property (Phase 1) — Next.js + Resend

This repository contains a Phase 1 marketing website for **Afendi Property** designed as a clean foundation for future Phase 2 features (property database, search, customer portal, supplier portal).

## What’s included

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS with corporate design tokens (navy + coral)
- Pages: Home, Services (+ dynamic), Locations (+ dynamic), For Businesses, For Suppliers, FAQs, Contact, Blog (+ post), Privacy, Terms
- Two forms on Contact:
  - **Request Accommodation** (client enquiry)
  - **Become a Supplier** (property submission)
- API routes:
  - `POST /api/enquiry`
  - `POST /api/supplier`
- Email sending via **Resend**:
  - Notification emails to `enquiries@afendiproperty.com`
  - Auto-reply confirmation emails to submitters
- SEO basics:
  - Metadata per page
  - JSON-LD Organization schema
  - `sitemap.xml` and `robots.txt`

---

## 1) Local setup

### Install dependencies

```bash
npm install
```

### Run the dev server

```bash
npm run dev
```

Open http://localhost:3000

---

## 2) Environment variables

Copy `.env.example` to `.env.local` and fill values:

```bash
cp .env.example .env.local
```

Required:

- `RESEND_API_KEY` – your Resend API key
- `RESEND_FROM` – a **verified sender** in Resend, e.g. `Afendi Property <noreply@yourdomain.com>`
- `ENQUIRIES_TO` – where notifications go (defaults to `enquiries@afendiproperty.com`)
- `NEXT_PUBLIC_SITE_URL` – set to `https://afendiproperty.com` for production

> Note: Resend requires you to verify the sender domain/address for deliverability.

---

## 3) Resend setup (recommended)

1. Create a Resend account
2. Verify a domain (recommended) or use a verified address
3. Create an API key
4. Set env vars in `.env.local` (local) and in Vercel (production)

---

## 4) Deploy to Vercel

### A) Push to GitHub
1. Create a new GitHub repo
2. Push this project

### B) Import to Vercel
1. Log in to Vercel
2. Import the GitHub repo
3. Add environment variables:
   - `RESEND_API_KEY`
   - `RESEND_FROM`
   - `ENQUIRIES_TO` (optional)
   - `NEXT_PUBLIC_SITE_URL` = `https://afendiproperty.com`

Deploy.

---

## 5) Connect your domain (afendiproperty.com)

In Vercel:
1. Project → Settings → Domains
2. Add `afendiproperty.com`
3. Follow Vercel DNS instructions at your domain registrar

---

## Phase 2 notes (future growth)

This codebase is structured to expand cleanly:
- Add Supabase/Postgres for:
  - property inventory
  - supplier profiles
  - client accounts & roles
- Add `/portal` routes for authenticated users
- Add `/properties` and search UI with pagination and faceted filters

The UI components, tokens, and routing patterns are already suitable for these additions.

---

## Support

Primary contact email: enquiries@afendiproperty.com
