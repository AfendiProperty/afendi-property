"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Field, Input, Select, Textarea, Checkbox } from "@/components/forms/Field";
import { Stepper } from "@/components/forms/Stepper";

type FormState = {
  name: string;
  email: string;
  whatsapp: string;
  role: "Owner" | "Operator" | "Agent" | "";

  cityCountry: string;
  propertyType: "Apartment" | "House" | "Hotel" | "Aparthotel" | "Other" | "";
  bedrooms: string;
  maxGuests: string;
  rateRange?: string;
  minStay?: string;

  standards: Record<string, boolean>;
  listingLink: string;
  notes?: string;

  declaration: boolean;
};

const standardOptions = [
  "Fully furnished",
  "Wi‑Fi",
  "Weekly cleaning provided",
  "Linen & towels included",
  "Cooking essentials included",
  "Meets local health & safety laws",
];

export function SupplierSubmissionForm() {
  const steps = ["Contact", "Property", "Standards", "Confirm"];
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [data, setData] = useState<FormState>(() => ({
    name: "",
    email: "",
    whatsapp: "",
    role: "",
    cityCountry: "",
    propertyType: "",
    bedrooms: "",
    maxGuests: "",
    rateRange: "",
    minStay: "",
    standards: Object.fromEntries(standardOptions.map((s) => [s, false])),
    listingLink: "",
    notes: "",
    declaration: false,
  }));

  const errors = useMemo(() => validate(data), [data]);

  function next() {
    setError(null);
    const ok = stepValid(step, data);
    if (!ok.ok) return setError(ok.message);
    setStep((s) => Math.min(s + 1, steps.length - 1));
  }
  function back() {
    setError(null);
    setStep((s) => Math.max(s - 1, 0));
  }

  async function submit() {
    setError(null);
    const ok = stepValid(3, data);
    if (!ok.ok) return setError(ok.message);

    setLoading(true);
    try {
      const res = await fetch("/api/supplier", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || "Submission failed");
      }
      setSuccess("Submission received. We’ll review and contact you by email with next steps.");
      setStep(0);
      setData((d) => ({ ...d, notes: "", declaration: false }));
    } catch (e: any) {
      setError(e?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <Card className="bg-surface-soft">
        <div className="text-base font-extrabold text-brand-navy">Submission received</div>
        <p className="mt-2 text-sm text-text-muted">{success}</p>
        <div className="mt-5">
          <Button variant="secondary" onClick={() => setSuccess(null)}>Submit another property</Button>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-base font-extrabold text-brand-navy">Become a Supplier</div>
          <div className="mt-1 text-sm text-text-muted">Share your property details. We’ll review and respond by email.</div>
        </div>
        <Stepper steps={steps} activeIndex={step} />
      </div>

      {error ? (
        <div className="mt-4 rounded-lg border border-error/40 bg-error/10 p-3 text-sm text-error">
          {error}
        </div>
      ) : null}

      <div className="mt-6 grid gap-4">
        {step === 0 ? (
          <>
            <Field label="Your name" error={errors.name}>
              <Input value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} placeholder="e.g., Ahmed Ali" />
            </Field>
            <Field label="Email" error={errors.email}>
              <Input type="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} placeholder="name@company.com" />
            </Field>
            <Field label="WhatsApp" error={errors.whatsapp}>
              <Input value={data.whatsapp} onChange={(e) => setData({ ...data, whatsapp: e.target.value })} placeholder="+971…" />
            </Field>
            <Field label="Are you the owner/operator?" error={errors.role}>
              <Select value={data.role} onChange={(e) => setData({ ...data, role: e.target.value as any })}>
                <option value="">Select…</option>
                <option value="Owner">Owner</option>
                <option value="Operator">Operator</option>
                <option value="Agent">Agent</option>
              </Select>
            </Field>
          </>
        ) : null}

        {step === 1 ? (
          <>
            <Field label="City + Country" error={errors.cityCountry}>
              <Input value={data.cityCountry} onChange={(e) => setData({ ...data, cityCountry: e.target.value })} placeholder="e.g., Dubai, UAE" />
            </Field>

            <Field label="Property type" error={errors.propertyType}>
              <Select value={data.propertyType} onChange={(e) => setData({ ...data, propertyType: e.target.value as any })}>
                <option value="">Select…</option>
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
                <option value="Hotel">Hotel</option>
                <option value="Aparthotel">Aparthotel</option>
                <option value="Other">Other</option>
              </Select>
            </Field>

            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Bedrooms" error={errors.bedrooms}>
                <Input value={data.bedrooms} onChange={(e) => setData({ ...data, bedrooms: e.target.value })} placeholder="e.g., 2" />
              </Field>
              <Field label="Sleeps (max guests)" error={errors.maxGuests}>
                <Input value={data.maxGuests} onChange={(e) => setData({ ...data, maxGuests: e.target.value })} placeholder="e.g., 4" />
              </Field>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Typical rate range (optional)">
                <Input value={data.rateRange ?? ""} onChange={(e) => setData({ ...data, rateRange: e.target.value })} placeholder="e.g., AED 450–650/night" />
              </Field>
              <Field label="Minimum stay (optional)">
                <Input value={data.minStay ?? ""} onChange={(e) => setData({ ...data, minStay: e.target.value })} placeholder="e.g., 3 nights" />
              </Field>
            </div>
          </>
        ) : null}

        {step === 2 ? (
          <>
            <div className="text-sm font-bold text-brand-navy">Standards & compliance</div>
            <div className="grid gap-2 md:grid-cols-2">
              {standardOptions.map((s) => (
                <Checkbox
                  key={s}
                  label={s}
                  checked={!!data.standards[s]}
                  onChange={(v) => setData({ ...data, standards: { ...data.standards, [s]: v } })}
                />
              ))}
            </div>

            <Field
              label="Link to photos or listing"
              hint="Google Drive, Dropbox, or a live listing link is fine."
              error={errors.listingLink}
            >
              <Input value={data.listingLink} onChange={(e) => setData({ ...data, listingLink: e.target.value })} placeholder="https://…" />
            </Field>

            <Field label="Notes (optional)">
              <Textarea
                rows={4}
                value={data.notes ?? ""}
                onChange={(e) => setData({ ...data, notes: e.target.value })}
                placeholder="Anything helpful (availability, areas you cover, services, check-in process)…"
              />
            </Field>
          </>
        ) : null}

        {step === 3 ? (
          <>
            <div className="rounded-xl border border-border bg-surface-soft p-4">
              <div className="text-sm font-extrabold text-brand-navy">Review</div>
              <div className="mt-2 grid gap-1 text-sm text-text-muted">
                <div><span className="font-semibold text-brand-navy">Name:</span> {data.name}</div>
                <div><span className="font-semibold text-brand-navy">Email:</span> {data.email}</div>
                <div><span className="font-semibold text-brand-navy">WhatsApp:</span> {data.whatsapp}</div>
                <div><span className="font-semibold text-brand-navy">Role:</span> {data.role}</div>
                <div><span className="font-semibold text-brand-navy">Location:</span> {data.cityCountry}</div>
                <div><span className="font-semibold text-brand-navy">Property:</span> {data.propertyType}, {data.bedrooms} bed, sleeps {data.maxGuests}</div>
                <div><span className="font-semibold text-brand-navy">Listing:</span> {data.listingLink}</div>
              </div>
            </div>

            <div className="grid gap-2">
              <Checkbox
                label="I confirm I’m authorised to submit this property information."
                checked={data.declaration}
                onChange={(v) => setData({ ...data, declaration: v })}
              />
              {errors.declaration ? <div className="text-xs font-semibold text-error">{errors.declaration}</div> : null}
            </div>
          </>
        ) : null}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {step > 0 ? <Button variant="secondary" onClick={back}>Back</Button> : null}
        {step < 3 ? <Button onClick={next}>Continue</Button> : null}
        {step === 3 ? (
          <Button onClick={submit} className="min-w-[160px]">
            {loading ? "Sending..." : "Submit Property"}
          </Button>
        ) : null}
      </div>
    </Card>
  );
}

function isEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.trim());
}

function validate(d: FormState) {
  const e: Record<string, string> = {};
  if (!d.name.trim()) e.name = "Name is required.";
  if (!isEmail(d.email)) e.email = "Enter a valid email.";
  if (!d.whatsapp.trim()) e.whatsapp = "WhatsApp is required.";
  if (!d.role) e.role = "Select a role.";
  if (!d.cityCountry.trim()) e.cityCountry = "City + country is required.";
  if (!d.propertyType) e.propertyType = "Select property type.";
  if (!String(d.bedrooms).trim()) e.bedrooms = "Bedrooms is required.";
  if (!String(d.maxGuests).trim()) e.maxGuests = "Max guests is required.";
  if (!d.listingLink.trim()) e.listingLink = "Listing link is required.";
  if (!d.declaration) e.declaration = "Declaration is required.";
  return e;
}

function stepValid(step: number, d: FormState) {
  const e = validate(d);
  if (step === 0 && (e.name || e.email || e.whatsapp || e.role)) return { ok: false, message: "Please complete contact details." };
  if (step === 1 && (e.cityCountry || e.propertyType || e.bedrooms || e.maxGuests)) return { ok: false, message: "Please complete required property fields." };
  if (step === 2 && e.listingLink) return { ok: false, message: "Please include a link to photos or your listing." };
  if (step === 3 && e.declaration) return { ok: false, message: "Please confirm the declaration to continue." };
  return { ok: true, message: "" };
}
