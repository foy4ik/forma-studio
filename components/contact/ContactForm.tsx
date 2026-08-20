"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { PROJECT_TYPE_OPTIONS, BUDGET_OPTIONS } from "@/data/contact";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
}

const INITIAL_VALUES: FormValues = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  message: "",
};

type FormErrors = Partial<Record<keyof FormValues, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+\d][\d\s()-]{6,}$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) errors.name = "Please tell us your name.";
  else if (values.name.trim().length < 2) errors.name = "Name looks too short.";

  if (!values.email.trim()) errors.email = "Please share an email address.";
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = "That email doesn't look right.";

  if (values.phone.trim() && !PHONE_PATTERN.test(values.phone.trim())) {
    errors.phone = "Please enter a valid phone number, or leave it blank.";
  }

  if (!values.projectType) errors.projectType = "Please choose a project type.";
  if (!values.budget) errors.budget = "Please choose an approximate budget.";

  if (!values.message.trim()) errors.message = "Tell us a little about your project.";
  else if (values.message.trim().length < 20) {
    errors.message = "A few more details would help us respond well — 20 characters minimum.";
  }

  return errors;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function submitEnquiry(): Promise<void> {
  await sleep(900);
  if (typeof navigator !== "undefined" && !navigator.onLine) {
    throw new Error("offline");
  }
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [submitted, setSubmitted] = useState(false);

  function updateField<K extends keyof FormValues>(field: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (submitted) {
      setErrors(validate({ ...values, [field]: value }));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);

    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      await submitEnquiry();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        role="status"
        className="flex flex-col items-start gap-4 border border-line bg-paper-dim px-8 py-12"
      >
        <CheckCircle2 className="size-9 text-clay" aria-hidden />
        <h2 className="font-display text-2xl tracking-tight text-ink">Thank you — message sent.</h2>
        <p className="max-w-md font-sans text-sm leading-relaxed text-ink/60">
          We&rsquo;ve received your enquiry and will reply within two working days. In the
          meantime, feel free to browse our recent projects.
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(INITIAL_VALUES);
            setSubmitted(false);
            setStatus("idle");
          }}
          className="focus-ring mt-2 font-sans text-sm font-medium text-ink underline underline-offset-4"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  const hasValidationErrors = submitted && Object.keys(errors).length > 0;

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => updateField("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={inputClass(Boolean(errors.name))}
          />
        </Field>

        <Field label="Email" htmlFor="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => updateField("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClass(Boolean(errors.email))}
          />
        </Field>

        <Field label="Phone (optional)" htmlFor="phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={inputClass(Boolean(errors.phone))}
          />
        </Field>

        <Field label="Project type" htmlFor="projectType" error={errors.projectType}>
          <select
            id="projectType"
            name="projectType"
            value={values.projectType}
            onChange={(e) => updateField("projectType", e.target.value)}
            aria-invalid={Boolean(errors.projectType)}
            aria-describedby={errors.projectType ? "projectType-error" : undefined}
            className={inputClass(Boolean(errors.projectType))}
          >
            <option value="">Select an option</option>
            {PROJECT_TYPE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Approximate budget" htmlFor="budget" error={errors.budget} className="sm:col-span-2">
          <select
            id="budget"
            name="budget"
            value={values.budget}
            onChange={(e) => updateField("budget", e.target.value)}
            aria-invalid={Boolean(errors.budget)}
            aria-describedby={errors.budget ? "budget-error" : undefined}
            className={inputClass(Boolean(errors.budget))}
          >
            <option value="">Select an option</option>
            {BUDGET_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Message" htmlFor="message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(e) => updateField("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(inputClass(Boolean(errors.message)), "resize-none")}
        />
      </Field>

      <AnimatePresence>
        {status === "error" && !hasValidationErrors ? (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            role="alert"
            className="flex items-center gap-2 border border-clay/40 bg-clay/10 px-4 py-3 font-sans text-sm text-ink"
          >
            <AlertCircle className="size-4 shrink-0 text-clay" aria-hidden />
            Something went wrong sending your message. Please check your connection and try
            again, or email us directly.
          </motion.p>
        ) : null}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="focus-ring inline-flex w-fit items-center gap-2.5 rounded-full bg-ink px-8 py-3.5 font-sans text-sm font-medium text-paper transition-colors duration-300 hover:bg-clay disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          "Send message"
        )}
      </button>
    </form>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "focus-ring w-full border-b bg-transparent px-0.5 py-3 font-sans text-base text-ink placeholder:text-ink/30",
    hasError ? "border-clay" : "border-line focus-visible:border-ink"
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={htmlFor} className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-ink/50">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${htmlFor}-error`} role="alert" className="font-sans text-xs text-clay">
          {error}
        </p>
      ) : null}
    </div>
  );
}
