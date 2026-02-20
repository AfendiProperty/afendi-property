"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Field, Input, Select, Textarea, Checkbox } from "@/components/forms/Field";
import { Stepper } from "@/components/forms/Stepper";

type FormState = {
  companyName: string;
  contactName: string;
  email: string;
  whatsapp?: string;

  serviceType: "Serviced" | "Workforce" | "Emergency" | "";
  location: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  units?: string;
  budget: string;
  urgency: "Standard" | "Urgent" | "";

  standards: Record<string, boolean>;
  notes?: string;
  consent: boolean;
};

const standardOptions = [
  "Fully furnished",
  "Wi‑Fi required",
  "Weekly cleaning",
  "H&S compliant only",
  "Linen & towels required",
  "Cooking essentials required",
];

export function ClientRequestForm() {
  const steps = ["Contact", "Requirements", "Standards", "Confirm"];
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [data, setData] = useState<FormState>(() => ({
    companyName: "",
    contactName: "",
    email: "",
    whatsapp: "",
    serviceType: "",
    location: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    units: "",
    budget: "",
    urgency: "",
    standards: Object.fromEntries(standardOptions.map((s) => [s, false])),
    notes: "",
    consent: false,
  }));

  const errors = useMemo(() => validate(data), [data]);

  function next() {
    setError(null);
    const stepOk = stepValid(step, data);
    if (!stepOk.ok) {
      setError(stepOk.message);
      return;
    }
    setStep((s) => Math.min(s + 1, steps.length - 1));
  }
  function back() {
    setError(null);
    setStep((s) => Math.max(s - 1, 0));
  }

  async function submit() {
    setError(null);
    const finalOk = stepValid(3, data);
    if (!finalOk.ok) {
      setError(finalOk.message);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || "Submission failed");
      }
      setSuccess("Request received. We’ll review your brief and respond by email shortly.");
      setStep(0);
      setData((d) => ({ ...d, notes: "", consent: false }));
    } catch (e: any) {
      setError(e?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <Card className="bg-surface-soft">
        <div className="text-base font-extrabold text-brand-navy">Request received</div>
        <p className="mt-2 text-sm text-text-muted">{success}</p>
        <div className="mt-5">
          <Button variant="secondary" onClick={() => setSuccess(null)}>Send another request</Button>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-base font-extrabold text-brand-navy">Request Accommodation</div>
          <div className="mt-1 text-sm text-text-muted">We’ll respond via email. WhatsApp used only for urgent clarification.</div>
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
            <Field label="Company name" error={errors.companyName}>
              <Input value={data.companyName} onChange={(e) => setData({ ...data, companyName: e.target.value })} placeholder="e.g., ABC Construction Ltd" />
            </Field>
            <Field label="Your name" error={errors.contactName}>
              <Input value={data.contactName} onChange={(e) => setData({ ...data, contactName: e.target.value })} placeholder="e.g., Sarah Jones" />
            </Field>
            <Field label="Work email" error={errors.email}>
              <Input type="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} placeholder="name@company.com" />
            </Field>
            <Field label="WhatsApp (optional)">
              <Input value={data.whatsapp ?? ""} onChange={(e) => setData({ ...data, whatsapp: e.target.value })} placeholder="+44… or +971…" />
            </Field>
          </>
        ) : null}

        {step === 1 ? (
          <>
            <Field label="Service type" error={errors.serviceType}>
              <Select value={data.serviceType} onChange={(e) => setData({ ...data, serviceType: e.target.value as any })}>
                <option value="">Select…</option>
                <option value="Serviced">Serviced Accommodation</option>
                <option value="Workforce">Workforce Accommodation</option>
                <option value="Emergency">Emergency Housing</option>
              </Select>
            </Field>

            <Field label="City + Country" error={errors.location}>
              <Input value={data.location} onChange={(e) => setData({ ...data, location: e.target.value })} placeholder="e.g., Manchester, UK" />
            </Field>

            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Check-in date" error={errors.checkIn}>
                <Input type="date" value={data.checkIn} onChange={(e) => setData({ ...data, checkIn: e.target.value })} />
              </Field>
              <Field label="Check-out date" error={errors.checkOut}>
                <Input type="date" value={data.checkOut} onChange={(e) => setData({ ...data, checkOut: e.target.value })} />
              </Field>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Number of guests" error={errors.guests}>
                <Input value={data.guests} onChange={(e) => setData({ ...data, guests: e.target.value })} placeholder="e.g., 6" />
              </Field>
              <Field label="Number of units (optional)">
                <Input value={data.units ?? ""} onChange={(e) => setData({ ...data, units: e.target.value })} placeholder="e.g., 2" />
              </Field>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Budget range" error={errors.budget} hint="You can specify per night or per week in the notes if helpful.">
                <Input value={data.budget} onChange={(e) => setData({ ...data, budget: e.target.value })} placeholder="e.g., £120–£180/night" />
              </Field>
              <Field label="Urgency (optional)">
                <Select value={data.urgency} onChange={(e) => setData({ ...data, urgency: e.target.value as any })}>
                  <option value="">Select…</option>
                  <option value="Standard">Standard</option>
                  <option value="Urgent">Urgent (24hr)</option>
                </Select>
              </Field>
            </div>
          </>
        ) : null}

        {step === 2 ? (
          <>
            <div className="text-sm font-bold text-brand-navy">Required standards</div>
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
            <Field label="Notes (optional)">
              <Textarea
                rows={4}
                value={data.notes ?? ""}
                onChange={(e) => setData({ ...data, notes: e.target.value })}
                placeholder="Any additional details that help us source faster (e.g., parking, accessibility, near site address)…"
              />
            </Field>
          </>
        ) : null}

        {step === 3 ? (
          <>
            <div className="rounded-xl border border-border bg-surface-soft p-4">
              <div className="text-sm font-extrabold text-brand-navy">Review</div>
              <div className="mt-2 grid gap-1 text-sm text-text-muted">
                <div><span className="font-semibold text-brand-navy">Company:</span> {data.companyName}</div>
                <div><span className="font-semibold text-brand-navy">Contact:</span> {data.contactName} ({data.email})</div>
                <div><span className="font-semibold text-brand-navy">Service:</span> {data.serviceType}</div>
                <div><span className="font-semibold text-brand-navy">Location:</span> {data.location}</div>
                <div><span className="font-semibold text-brand-navy">Dates:</span> {data.checkIn} → {data.checkOut}</div>
                <div><span className="font-semibold text-brand-navy">Guests/Units:</span> {data.guests}{data.units ? ` / ${data.units}` : ""}</div>
                <div><span className="font-semibold text-brand-navy">Budget:</span> {data.budget}</div>
              </div>
            </div>

            <div className="grid gap-2">
              <Checkbox
                label="I agree to be contacted about this request."
                checked={data.consent}
                onChange={(v) => setData({ ...data, consent: v })}
              />
              {errors.consent ? <div className="text-xs font-semibold text-error">{errors.consent}</div> : null}
            </div>
          </>
        ) : null}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {step > 0 ? <Button variant="secondary" onClick={back}>Back</Button> : null}
        {step < 3 ? <Button onClick={next}>Continue</Button> : null}
        {step === 3 ? (
          <Button onClick={submit} className="min-w-[160px]">
            {loading ? "Sending..." : "Send Request"}
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
  if (!d.companyName.trim()) e.companyName = "Company name is required.";
  if (!d.contactName.trim()) e.contactName = "Your name is required.";
  if (!isEmail(d.email)) e.email = "Enter a valid email.";
  if (!d.serviceType) e.serviceType = "Select a service type.";
  if (!d.location.trim()) e.location = "City + country is required.";
  if (!d.checkIn) e.checkIn = "Check-in date is required.";
  if (!d.checkOut) e.checkOut = "Check-out date is required.";
  if (d.checkIn && d.checkOut && d.checkOut <= d.checkIn) e.checkOut = "Check-out must be after check-in.";
  if (!String(d.guests).trim()) e.guests = "Guests is required.";
  if (!d.budget.trim()) e.budget = "Budget is required.";
  if (!d.consent) e.consent = "Consent is required.";
  return e;
}

function stepValid(step: number, d: FormState) {
  const e = validate(d);
  if (step === 0 && (e.companyName || e.contactName || e.email)) return { ok: false, message: "Please complete contact details." };
  if (step === 1 && (e.serviceType || e.location || e.checkIn || e.checkOut || e.guests || e.budget)) return { ok: false, message: "Please complete required requirement fields." };
  if (step === 3 && e.consent) return { ok: false, message: "Please confirm consent to continue." };
  return { ok: true, message: "" };
}
