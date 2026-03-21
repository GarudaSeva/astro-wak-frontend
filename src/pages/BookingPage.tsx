"use client";

import { useEffect, useMemo, useState } from "react";
import { format } from "date-fns";
import { useLocation, useParams } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import PayButton from "@/components/PayButton";
import formConfig from "@/config/formConfig";
import type { FieldConfig } from "@/config/formConfig";
import { POOJA_CONSULTATION_NOTE } from "@/data/poojaServices";
import { cn } from "@/lib/utils";
import type { ServiceKey } from "@/types/serviceKeys";
import {
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  Clock3,
  CreditCard,
  LockKeyhole,
  ScrollText,
  Sparkles,
  UserRound,
} from "lucide-react";

type Step = 1 | 2 | 3;
type FormState = Record<string, string>;

type TimeParts = {
  hour12: string;
  minute: string;
  period: "AM" | "PM";
};

const STEP_META = [
  {
    id: 1 as Step,
    title: "Contact Details",
    description: "How we can reach you for updates and delivery.",
    icon: UserRound,
  },
  {
    id: 2 as Step,
    title: "Service Inputs",
    description: "Details we need for the consultation or report.",
    icon: ScrollText,
  },
  {
    id: 3 as Step,
    title: "Review & Payment",
    description: "Confirm your information and pay securely.",
    icon: CreditCard,
  },
];

const PHONE_HELPER = "Enter a 10-digit number. +91 is accepted too.";
const HOUR_OPTIONS = Array.from({ length: 12 }, (_, index) =>
  String(index + 1).padStart(2, "0")
);
const MINUTE_OPTIONS = Array.from({ length: 60 }, (_, index) =>
  String(index).padStart(2, "0")
);

const parseDateValue = (value: string) => {
  if (!value) return undefined;

  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) return undefined;

  return new Date(year, month - 1, day);
};

const formatDisplayDate = (value: string) => {
  const date = parseDateValue(value);
  return date ? format(date, "dd MMM yyyy") : "";
};

const parseTimeValue = (value: string): TimeParts => {
  const [rawHour = "", minute = "00"] = value.split(":");
  const hour24 = Number(rawHour);

  if (Number.isNaN(hour24)) {
    return { hour12: "09", minute: "00", period: "AM" };
  }

  const period: "AM" | "PM" = hour24 >= 12 ? "PM" : "AM";
  const hour12Number = hour24 % 12 || 12;

  return {
    hour12: String(hour12Number).padStart(2, "0"),
    minute: String(Number(minute) || 0).padStart(2, "0"),
    period,
  };
};

const buildTimeValue = ({ hour12, minute, period }: TimeParts) => {
  const hour12Number = Number(hour12);
  const minuteNumber = Number(minute);

  if (
    Number.isNaN(hour12Number) ||
    Number.isNaN(minuteNumber) ||
    hour12Number < 1 ||
    hour12Number > 12 ||
    minuteNumber < 0 ||
    minuteNumber > 59
  ) {
    return "";
  }

  const hour24 =
    period === "PM" ? (hour12Number % 12) + 12 : hour12Number % 12;

  return `${String(hour24).padStart(2, "0")}:${String(minuteNumber).padStart(2, "0")}`;
};

const formatDisplayTime = (value: string) => {
  if (!value) return "";

  const { hour12, minute, period } = parseTimeValue(value);
  return `${hour12}:${minute} ${period}`;
};

function BookingDateField({
  value,
  onChange,
  onBlur,
  hasError,
  placeholder,
  disableFuture = false,
}: {
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  hasError: boolean;
  placeholder?: string;
  disableFuture?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cn(
            "flex h-12 w-full items-center justify-between rounded-2xl border bg-white/90 px-4 text-left text-sm shadow-sm transition-all",
            hasError
              ? "border-red-300 bg-red-50/80 text-secondary"
              : "border-primary/10 text-secondary hover:border-primary/30 hover:bg-primary/5"
          )}
        >
          <span className={cn(value ? "text-secondary" : "text-secondary/60")}>
            {value ? formatDisplayDate(value) : placeholder || "Select date"}
          </span>
          <CalendarDays className="h-4 w-4 text-primary" />
        </button>
      </PopoverTrigger>

      <PopoverContent
        align="start"
        className="w-auto rounded-[28px] border border-primary/10 bg-white/95 p-0 shadow-[0_30px_70px_-35px_rgba(82,24,16,0.45)]"
      >
        <div className="border-b border-primary/10 bg-gradient-to-r from-white via-primary/5 to-accent/10 px-4 py-4">
          <p className="font-playfair text-xl text-secondary">Choose a Date</p>
          <p className="mt-1 text-sm text-secondary/70">
            {value ? formatDisplayDate(value) : "Tap a day from the calendar below."}
          </p>
        </div>

        <Calendar
          mode="single"
          selected={parseDateValue(value)}
          onSelect={(date) => {
            if (!date) return;

            onChange(format(date, "yyyy-MM-dd"));
            onBlur();
            setOpen(false);
          }}
          disabled={disableFuture ? { after: new Date() } : undefined}
          className="p-4"
          classNames={{
            month: "space-y-4",
            caption_label: "font-playfair text-lg text-secondary",
            head_cell: "w-11 text-xs font-semibold uppercase tracking-[0.16em] text-secondary/60",
            cell: "h-11 w-11 p-0 text-sm",
            day: "h-11 w-11 rounded-2xl text-sm font-medium hover:bg-primary/10",
            day_selected:
              "h-11 w-11 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white hover:bg-primary hover:text-white",
            day_today:
              "h-11 w-11 rounded-2xl border border-accent bg-accent/15 text-secondary",
          }}
        />
      </PopoverContent>
    </Popover>
  );
}

function BookingTimeField({
  value,
  onChange,
  onBlur,
  hasError,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  hasError: boolean;
  placeholder?: string;
}) {
  const [open, setOpen] = useState(false);
  const [parts, setParts] = useState<TimeParts>(() => parseTimeValue(value));

  useEffect(() => {
    setParts(parseTimeValue(value));
  }, [value]);

  const updateParts = (nextParts: Partial<TimeParts>) => {
    const merged = { ...parts, ...nextParts };
    setParts(merged);

    const nextValue = buildTimeValue(merged);
    if (nextValue) {
      onChange(nextValue);
      onBlur();
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cn(
            "flex h-12 w-full items-center justify-between rounded-2xl border bg-white/90 px-4 text-left text-sm shadow-sm transition-all",
            hasError
              ? "border-red-300 bg-red-50/80 text-secondary"
              : "border-primary/10 text-secondary hover:border-primary/30 hover:bg-primary/5"
          )}
        >
          <span className={cn(value ? "text-secondary" : "text-secondary/60")}>
            {value ? formatDisplayTime(value) : placeholder || "Select time"}
          </span>
          <Clock3 className="h-4 w-4 text-primary" />
        </button>
      </PopoverTrigger>

      <PopoverContent
        align="start"
        className="w-[min(92vw,360px)] rounded-[28px] border border-primary/10 bg-white/95 p-0 shadow-[0_30px_70px_-35px_rgba(82,24,16,0.45)]"
      >
        <div className="border-b border-primary/10 bg-gradient-to-r from-white via-primary/5 to-accent/10 px-4 py-4">
          <p className="font-playfair text-xl text-secondary">Choose a Time</p>
          <p className="mt-1 text-sm text-secondary/70">
            {value ? formatDisplayTime(value) : "Pick hour, minute, and AM or PM."}
          </p>
        </div>

        <div className="space-y-4 p-4">
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="space-y-2">
              <Label className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary/60">
                Hour
              </Label>
              <Select
                value={parts.hour12}
                onValueChange={(nextValue) => updateParts({ hour12: nextValue })}
              >
                <SelectTrigger className="h-12 rounded-2xl border-primary/10 bg-white px-4 text-sm text-secondary">
                  <SelectValue placeholder="Hour" />
                </SelectTrigger>
                <SelectContent className="rounded-[24px] border border-primary/10 bg-white/95 p-2 shadow-xl">
                  {HOUR_OPTIONS.map((option) => (
                    <SelectItem
                      key={option}
                      value={option}
                      className="min-h-[48px] rounded-2xl py-3 pl-8 pr-4 text-sm font-medium"
                    >
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary/60">
                Minute
              </Label>
              <Select
                value={parts.minute}
                onValueChange={(nextValue) => updateParts({ minute: nextValue })}
              >
                <SelectTrigger className="h-12 rounded-2xl border-primary/10 bg-white px-4 text-sm text-secondary">
                  <SelectValue placeholder="Minute" />
                </SelectTrigger>
                <SelectContent className="rounded-[24px] border border-primary/10 bg-white/95 p-2 shadow-xl">
                  {MINUTE_OPTIONS.map((option) => (
                    <SelectItem
                      key={option}
                      value={option}
                      className="min-h-[48px] rounded-2xl py-3 pl-8 pr-4 text-sm font-medium"
                    >
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary/60">
                Period
              </Label>
              <div className="grid grid-cols-2 gap-2">
                {(["AM", "PM"] as const).map((period) => (
                  <button
                    key={period}
                    type="button"
                    onClick={() => updateParts({ period })}
                    className={cn(
                      "flex h-12 items-center justify-center rounded-2xl border text-sm font-semibold transition-all",
                      parts.period === period
                        ? "border-primary bg-gradient-to-r from-primary to-secondary text-white shadow-[0_18px_45px_-26px_rgba(180,30,30,0.8)]"
                        : "border-primary/10 bg-white text-secondary hover:border-primary/30 hover:bg-primary/5"
                    )}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-primary/10 bg-primary/5 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary/60">
              Selected Time
            </p>
            <p className="mt-1 font-playfair text-2xl text-secondary">
              {formatDisplayTime(buildTimeValue(parts) || value || "09:00") || "09:00 AM"}
            </p>
          </div>

          <Button
            type="button"
            className="h-12 w-full rounded-full bg-gradient-to-r from-primary to-secondary text-white"
            onClick={() => {
              const nextValue = buildTimeValue(parts);
              if (nextValue) {
                onChange(nextValue);
                onBlur();
              }
              setOpen(false);
            }}
          >
            Confirm Time
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

const humanize = (value: string) =>
  value
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/_/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());

const isBlank = (value: unknown) => String(value ?? "").trim() === "";

const normalizePhone = (value: string) => {
  const digits = value.replace(/\D/g, "");

  if (digits.length === 12 && digits.startsWith("91")) {
    return digits.slice(2);
  }

  if (digits.length === 11 && digits.startsWith("0")) {
    return digits.slice(1);
  }

  return digits;
};

const emailValid = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value ?? "").trim());

const phoneValid = (value: string) => /^[6-9]\d{9}$/.test(normalizePhone(value));

export default function ConsultationForm() {
  const { serviceType } = useParams();
  const location = useLocation();

  const price = location.state?.price ?? 0;
  const title = location.state?.title ?? serviceType ?? "Service";
  const whatsappNumber = "919553231199";
  const isPoojaService = serviceType === "pooja";

  const fields: FieldConfig[] = useMemo(
    () => formConfig[serviceType as ServiceKey] || [],
    [serviceType]
  );

  const initialState = useMemo<FormState>(() => {
    const state: FormState = {};

    fields.forEach((field) => {
      state[field.name] = "";
    });

    if (state.birthRasi === undefined) state.birthRasi = "";
    if (state.birthStar === undefined) state.birthStar = "";
    if (state.otherName === undefined) state.otherName = "";
    if (state.who === undefined) state.who = "self";

    return state;
  }, [fields]);

  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [form, setForm] = useState<FormState>(initialState);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [stepMessage, setStepMessage] = useState("");

  useEffect(() => {
    setForm(initialState);
    setCurrentStep(1);
    setAcceptedTerms(false);
    setPaymentDone(false);
    setTouched({});
    setStepMessage("");
  }, [initialState]);

  const bookingFor = form.who === "other" ? "other" : "self";

  const fieldMap = useMemo(
    () =>
      Object.fromEntries(fields.map((field) => [field.name, field])) as Record<
        string,
        FieldConfig
      >,
    [fields]
  );

  const getFieldDefinition = (name: string): FieldConfig =>
    fieldMap[name] ?? {
      name,
      label: humanize(name),
      type: "text",
      required: name === "otherName",
    };

  const basicFields = useMemo(
    () => fields.filter((field) => ["name", "email", "phone"].includes(field.name)),
    [fields]
  );

  const serviceFields = useMemo(() => {
    const list = fields.filter(
      (field) => !["name", "email", "phone", "who", "otherName"].includes(field.name)
    );

    const genderIndex = list.findIndex((field) => field.name === "gender");

    if (genderIndex !== -1) {
      const [genderField] = list.splice(genderIndex, 1);
      list.splice(2, 0, genderField);
    }

    return list;
  }, [fields]);

  const babySections = useMemo(
    () => [
      {
        value: "general",
        title: "Basic Baby Details",
        description: "These details help us prepare the report accurately.",
        fields: [
          "childGender",
          "childDob",
          "childTime",
          "childName",
          "motherName",
          "fatherName",
        ],
      },
      {
        value: "word",
        title: "Word Search Preferences",
        description: "Share sounds, letters, and style preferences if you have any.",
        fields: [
          "nameStartsWith",
          "nameEndsWith",
          "nameContains1",
          "nameContains2",
        ],
      },
      {
        value: "numerology",
        title: "Numerology Preferences",
        description: "Optional cultural and numerology preferences for better suggestions.",
        fields: [
          "surnameInitials",
          "birthRasi",
          "birthStar",
          "religion",
          "reportLanguage",
        ],
      },
      {
        value: "guidance",
        title: "Guidance & Notes",
        description: "Add any filters, family notes, or extra guidance here.",
        fields: ["filters", "comment"],
      },
    ],
    []
  );

  const currentStepMeta = STEP_META.find((step) => step.id === currentStep) ?? STEP_META[0];
  const progressPercent = paymentDone
    ? 100
    : currentStep === 1
    ? 34
    : currentStep === 2
    ? 68
    : 92;

  const handleChange = (name: string, value: string) => {
    setForm((previous) => ({ ...previous, [name]: value }));

    if (touched[name]) {
      setTouched((previous) => ({ ...previous, [name]: true }));
    }

    if (stepMessage) {
      setStepMessage("");
    }
  };

  const handleBlur = (name: string) =>
    setTouched((previous) => ({ ...previous, [name]: true }));

  const markTouched = (names: string[]) => {
    setTouched((previous) => {
      const next = { ...previous };
      names.forEach((name) => {
        next[name] = true;
      });
      return next;
    });
  };

  const isFieldRequired = (field: FieldConfig) => {
    if (field.name === "otherName") {
      return bookingFor === "other";
    }

    return !!field.required;
  };

  const getFieldError = (field: FieldConfig) => {
    const value = form[field.name] ?? "";

    if (field.name === "email") {
      if (isBlank(value)) return "Email is required.";
      if (!emailValid(value)) return "Enter a valid email address.";
      return "";
    }

    if (field.name === "phone") {
      if (isBlank(value)) return "Mobile number is required.";
      if (!phoneValid(value)) {
        return "Enter a valid 10-digit mobile number. +91 is accepted too.";
      }
      return "";
    }

    if (isFieldRequired(field) && isBlank(value)) {
      return `${field.label} is required.`;
    }

    return "";
  };

  const step1Fields = useMemo(
    () => [
      ...basicFields,
      ...(bookingFor === "other"
        ? [
            fieldMap.otherName ?? {
              name: "otherName",
              label: "Other Person Name",
              type: "text",
              required: true,
            },
          ]
        : []),
    ],
    [basicFields, bookingFor, fieldMap]
  );

  const isStep1Valid = () => step1Fields.every((field) => !getFieldError(field));
  const isStep2Valid = () => serviceFields.every((field) => !getFieldError(field));
  const canProceedToPayment = isStep1Valid() && isStep2Valid() && acceptedTerms;

  const getFieldDescription = (field: FieldConfig) => {
    if (field.name === "phone") return PHONE_HELPER;
    if (field.type === "date")
      return "Opens a themed calendar so selecting dates feels easier.";
    if (field.type === "time")
      return "Choose hour and minute from the styled time picker.";
    if (field.name === "filters")
      return "Optional. Use this for style preferences, family guidance, or cultural notes.";
    if (field.name === "comment" || field.name === "query")
      return "Optional. Share anything helpful for the astrologer.";
    return "";
  };

  const getFieldValueLabel = (field: FieldConfig, value: string) => {
    if (field.options?.length) {
      const option = field.options.find((item) => item.value === value);
      return option?.label ?? value;
    }

    return value;
  };

  const getFieldWrapperClassName = (field: FieldConfig) =>
    cn(
      "space-y-2",
      (field.type === "textarea" ||
        ["query", "comment", "filters", "businessNames", "familyMembers"].includes(
          field.name
        )) &&
        "md:col-span-2"
    );

  const getInputClassName = (hasError: boolean) =>
    cn(
      "h-12 rounded-2xl border bg-white/90 px-4 text-sm text-secondary shadow-sm transition-all placeholder:text-secondary/60 focus-visible:ring-2 focus-visible:ring-primary/20",
      hasError
        ? "border-red-300 bg-red-50/80 focus-visible:ring-red-200"
        : "border-primary/10 focus-visible:border-primary/40"
    );

  const renderField = (field: FieldConfig, wrapperClassName?: string) => {
    if (field.name === "otherName" && bookingFor === "self") {
      return null;
    }

    const value = form[field.name] ?? "";
    const errorMessage = touched[field.name] ? getFieldError(field) : "";
    const helperText = getFieldDescription(field);

    if (field.type === "textarea") {
      return (
        <div key={field.name} className={cn(getFieldWrapperClassName(field), wrapperClassName)}>
          <div className="flex items-center justify-between gap-3">
            <Label className="text-sm font-semibold text-secondary">
              {field.label}
              {isFieldRequired(field) ? (
                <span className="ml-1 text-primary">*</span>
              ) : null}
            </Label>
          </div>

          <Textarea
            className={cn(getInputClassName(!!errorMessage), "min-h-[132px] resize-y py-3")}
            rows={4}
            placeholder={field.placeholder}
            value={value}
            onChange={(event) => handleChange(field.name, event.target.value)}
            onBlur={() => handleBlur(field.name)}
          />

          {errorMessage ? (
            <p className="flex items-start gap-2 text-sm text-red-600">
              <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{errorMessage}</span>
            </p>
          ) : helperText ? (
            <p className="text-xs leading-relaxed text-secondary/70">{helperText}</p>
          ) : null}
        </div>
      );
    }

    if (field.type === "select") {
      return (
        <div key={field.name} className={cn(getFieldWrapperClassName(field), wrapperClassName)}>
          <div className="flex items-center justify-between gap-3">
            <Label className="text-sm font-semibold text-secondary">
              {field.label}
              {isFieldRequired(field) ? (
                <span className="ml-1 text-primary">*</span>
              ) : null}
            </Label>
          </div>

          <Select value={value} onValueChange={(nextValue) => handleChange(field.name, nextValue)}>
            <SelectTrigger className={getInputClassName(!!errorMessage)}>
              <SelectValue placeholder={field.placeholder || "Select an option"} />
            </SelectTrigger>
            <SelectContent className="rounded-[24px] border border-primary/10 bg-white/95 p-2 shadow-[0_24px_60px_-32px_rgba(82,24,16,0.42)]">
              {field.options?.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  className="min-h-[50px] rounded-2xl py-3 pl-8 pr-4 text-sm font-medium"
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {errorMessage ? (
            <p className="flex items-start gap-2 text-sm text-red-600">
              <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{errorMessage}</span>
            </p>
          ) : helperText ? (
            <p className="text-xs leading-relaxed text-secondary/70">{helperText}</p>
          ) : null}
        </div>
      );
    }

    if (field.type === "date") {
      return (
        <div key={field.name} className={cn(getFieldWrapperClassName(field), wrapperClassName)}>
          <div className="flex items-center justify-between gap-3">
            <Label className="text-sm font-semibold text-secondary">
              {field.label}
              {isFieldRequired(field) ? <span className="ml-1 text-primary">*</span> : null}
            </Label>
          </div>

          <BookingDateField
            value={value}
            placeholder={field.placeholder || "Select date"}
            hasError={!!errorMessage}
            disableFuture={field.name.toLowerCase().includes("dob")}
            onChange={(nextValue) => handleChange(field.name, nextValue)}
            onBlur={() => handleBlur(field.name)}
          />

          {errorMessage ? (
            <p className="flex items-start gap-2 text-sm text-red-600">
              <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{errorMessage}</span>
            </p>
          ) : helperText ? (
            <p className="text-xs leading-relaxed text-secondary/70">{helperText}</p>
          ) : null}
        </div>
      );
    }

    if (field.type === "time") {
      return (
        <div key={field.name} className={cn(getFieldWrapperClassName(field), wrapperClassName)}>
          <div className="flex items-center justify-between gap-3">
            <Label className="text-sm font-semibold text-secondary">
              {field.label}
              {isFieldRequired(field) ? <span className="ml-1 text-primary">*</span> : null}
            </Label>
          </div>

          <BookingTimeField
            value={value}
            placeholder={field.placeholder || "Select time"}
            hasError={!!errorMessage}
            onChange={(nextValue) => handleChange(field.name, nextValue)}
            onBlur={() => handleBlur(field.name)}
          />

          {errorMessage ? (
            <p className="flex items-start gap-2 text-sm text-red-600">
              <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{errorMessage}</span>
            </p>
          ) : helperText ? (
            <p className="text-xs leading-relaxed text-secondary/70">{helperText}</p>
          ) : null}
        </div>
      );
    }

    if (field.type === "radio") {
      return (
        <div key={field.name} className={cn(getFieldWrapperClassName(field), wrapperClassName)}>
          <div className="flex items-center justify-between gap-3">
            <Label className="text-sm font-semibold text-secondary">
              {field.label}
              {isFieldRequired(field) ? (
                <span className="ml-1 text-primary">*</span>
              ) : null}
            </Label>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {field.options?.map((option) => {
              const active = value === option.value;

              return (
                <button
                  type="button"
                  key={option.value}
                  onClick={() => handleChange(field.name, option.value)}
                  className={cn(
                    "flex min-h-[52px] items-center justify-between rounded-2xl border px-4 py-3 text-left transition-all",
                    active
                      ? "border-primary bg-gradient-to-r from-primary to-secondary text-white shadow-[0_18px_45px_-25px_rgba(180,30,30,0.75)]"
                      : errorMessage
                      ? "border-red-300 bg-red-50/70 text-secondary"
                      : "border-primary/10 bg-white/90 text-secondary hover:border-primary/30 hover:bg-primary/5"
                  )}
                >
                  <span className="font-medium">{option.label}</span>
                  <span
                    className={cn(
                      "h-4 w-4 rounded-full border transition-all",
                      active ? "border-white bg-white/90" : "border-primary/30"
                    )}
                  />
                </button>
              );
            })}
          </div>

          {errorMessage ? (
            <p className="flex items-start gap-2 text-sm text-red-600">
              <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{errorMessage}</span>
            </p>
          ) : helperText ? (
            <p className="text-xs leading-relaxed text-secondary/70">{helperText}</p>
          ) : null}
        </div>
      );
    }

    return (
      <div key={field.name} className={cn(getFieldWrapperClassName(field), wrapperClassName)}>
        <div className="flex items-center justify-between gap-3">
          <Label className="text-sm font-semibold text-secondary">
            {field.label}
            {isFieldRequired(field) ? <span className="ml-1 text-primary">*</span> : null}
          </Label>

          {field.name === "phone" ? (
            <span className="rounded-full bg-accent/15 px-2.5 py-1 text-[11px] font-semibold text-secondary">
              Accepts +91
            </span>
          ) : null}
        </div>

        <Input
          className={getInputClassName(!!errorMessage)}
          type={field.type}
          placeholder={field.placeholder}
          value={value}
          inputMode={field.name === "phone" ? "tel" : undefined}
          autoComplete={
            field.name === "email"
              ? "email"
              : field.name === "phone"
              ? "tel"
              : field.name === "name"
              ? "name"
              : undefined
          }
          onChange={(event) => handleChange(field.name, event.target.value)}
          onBlur={() => handleBlur(field.name)}
        />

        {errorMessage ? (
          <p className="flex items-start gap-2 text-sm text-red-600">
            <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{errorMessage}</span>
          </p>
        ) : helperText ? (
          <p className="text-xs leading-relaxed text-secondary/70">{helperText}</p>
        ) : null}
      </div>
    );
  };

  const renderSummarySection = (heading: string, items: Array<[string, string]>) => {
    if (!items.length) {
      return null;
    }

    return (
      <div className="rounded-3xl border border-primary/10 bg-white/80 p-5 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-primary" />
          <h3 className="font-playfair text-xl text-secondary">{heading}</h3>
        </div>

        <div className="space-y-3">
          {items.map(([label, value]) => (
            <div
              key={label}
              className="flex flex-col gap-1 border-b border-primary/5 pb-3 last:border-b-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
            >
              <span className="text-sm font-medium text-secondary/70">{label}</span>
              <span className="whitespace-pre-line break-words text-sm font-semibold text-secondary sm:max-w-[60%] sm:text-right">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderSummary = () => {
    const basicSummary: Array<[string, string]> = [["Booking For", humanize(bookingFor)]];

    if (bookingFor === "other" && !isBlank(form.otherName)) {
      basicSummary.push(["Other Person Name", form.otherName]);
    }

    basicFields.forEach((field) => {
      if (!isBlank(form[field.name])) {
        basicSummary.push([field.label, getFieldValueLabel(field, form[field.name])]);
      }
    });

    const serviceSummary: Array<[string, string]> = [];
    serviceFields.forEach((field) => {
      if (!isBlank(form[field.name])) {
        serviceSummary.push([field.label, getFieldValueLabel(field, form[field.name])]);
      }
    });

    const orderSummary: Array<[string, string]> = [
      ["Service", String(title)],
      [isPoojaService ? "Consultation Fee" : "Total Amount", `₹ ${price}`],
    ];

    if (paymentDone) {
      orderSummary.push(["Payment Status", "Successful"]);
    }

    return (
      <div className="space-y-5">
        {renderSummarySection("Personal Details", basicSummary)}
        {renderSummarySection("Service Details", serviceSummary)}
        {renderSummarySection("Order Summary", orderSummary)}

        {isPoojaService ? (
          <div className="rounded-3xl border border-primary/15 bg-primary/5 p-4 text-sm leading-relaxed text-secondary">
            <span className="font-semibold text-primary">Note:</span>{" "}
            {POOJA_CONSULTATION_NOTE}
          </div>
        ) : null}
      </div>
    );
  };

  const renderStep1 = () => (
    <div className="space-y-8">
      <div className="grid gap-5 md:grid-cols-2">
        {basicFields.map((field) => renderField(field))}
      </div>

      <div className="rounded-[28px] border border-primary/10 bg-gradient-to-br from-white via-white to-primary/5 p-5 shadow-sm">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <h3 className="font-playfair text-xl text-secondary">Who is this booking for?</h3>
            <p className="mt-1 text-sm text-secondary/70">
              Choose who will receive the consultation or report.
            </p>
          </div>
          <Badge className="bg-secondary/10 text-secondary hover:bg-secondary/10">
            Step 1
          </Badge>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              value: "self",
              title: "Booking For Self",
              description: "Use your own details for the consultation.",
            },
            {
              value: "other",
              title: "Booking For Someone Else",
              description: "We will also ask for the other person's name.",
            },
          ].map((option) => {
            const active = bookingFor === option.value;

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => handleChange("who", option.value)}
                className={cn(
                  "rounded-3xl border p-4 text-left transition-all",
                  active
                    ? "border-primary bg-gradient-to-r from-primary to-secondary text-white shadow-[0_20px_50px_-28px_rgba(180,30,30,0.85)]"
                    : "border-primary/10 bg-white/90 text-secondary hover:border-primary/30 hover:bg-primary/5"
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold">{option.title}</p>
                    <p
                      className={cn(
                        "mt-1 text-sm leading-relaxed",
                        active ? "text-white/85" : "text-secondary/70"
                      )}
                    >
                      {option.description}
                    </p>
                  </div>
                  <span
                    className={cn(
                      "mt-1 h-4 w-4 rounded-full border",
                      active ? "border-white bg-white/90" : "border-primary/30"
                    )}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {bookingFor === "other" ? (
          <div className="mt-5">{renderField(getFieldDefinition("otherName"))}</div>
        ) : null}
      </div>
    </div>
  );

  const renderBabyStep = () => (
    <Accordion
      type="multiple"
      defaultValue={["general", "word", "numerology"]}
      className="space-y-4"
    >
      {babySections.map((section) => {
        const sectionFields = section.fields
          .map((name) => getFieldDefinition(name))
          .filter((field) => fields.some((item) => item.name === field.name));

        return (
          <AccordionItem
            key={section.value}
            value={section.value}
            className="overflow-hidden rounded-[28px] border border-primary/10 bg-white/80 px-5 shadow-sm"
          >
            <AccordionTrigger className="py-5 text-left font-playfair text-lg text-secondary hover:no-underline">
              <div>
                <p>{section.title}</p>
                <p className="mt-1 text-sm font-normal leading-relaxed text-secondary/70">
                  {section.description}
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-5">
              <div className="grid gap-5 md:grid-cols-2">
                {sectionFields.map((field) => renderField(field))}
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      {serviceType === "numerology_baby_name" ? (
        renderBabyStep()
      ) : (
        <div className="grid gap-5 md:grid-cols-2">
          {serviceFields.map((field) => renderField(field))}
        </div>
      )}
    </div>
  );

  const renderStep3 = () => {
    if (paymentDone) {
      return (
        <div className="space-y-6">
          <div className="rounded-[32px] border border-green-200 bg-green-50/90 p-8 text-center shadow-sm">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="mt-5 font-playfair text-3xl text-green-700">
              Payment Successful
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-green-700/80">
              Your booking has been confirmed. You can now share the details on WhatsApp so
              the team can continue with the next steps.
            </p>
          </div>

          {renderSummary()}
        </div>
      );
    }

    return (
      <div className="space-y-6">
        {renderSummary()}

        <div
          className={cn(
            "rounded-[28px] border bg-gradient-to-r from-white to-primary/5 p-5 shadow-sm transition-colors",
            acceptedTerms ? "border-primary/20" : "border-primary/10"
          )}
        >
          <div className="flex items-start gap-3">
            <Checkbox
              checked={acceptedTerms}
              onCheckedChange={(value) => setAcceptedTerms(!!value)}
              id="step3-terms"
              className="mt-1 rounded-[5px]"
            />
            <label
              htmlFor="step3-terms"
              className="cursor-pointer text-sm leading-relaxed text-secondary"
            >
              I agree to the Terms & Conditions and confirm all the details provided
              above are accurate.
            </label>
          </div>

          {!acceptedTerms ? (
            <p className="mt-3 text-xs text-secondary/70">
              Please accept the terms to enable secure payment.
            </p>
          ) : null}
        </div>
      </div>
    );
  };

  const renderStepContent = () => {
    if (currentStep === 1) return renderStep1();
    if (currentStep === 2) return renderStep2();
    if (currentStep === 3) return renderStep3();
    return null;
  };

  const handleSubmitWhatsApp = () => {
    const rows: Array<[string, string]> = [
      ["Service", String(title)],
      ["Booking For", humanize(bookingFor)],
    ];

    if (bookingFor === "other" && !isBlank(form.otherName)) {
      rows.push(["Other Person Name", form.otherName]);
    }

    basicFields.forEach((field) => {
      if (!isBlank(form[field.name])) {
        rows.push([field.label, getFieldValueLabel(field, form[field.name])]);
      }
    });

    serviceFields.forEach((field) => {
      if (!isBlank(form[field.name])) {
        rows.push([field.label, getFieldValueLabel(field, form[field.name])]);
      }
    });

    rows.push(["Payment Status", "Successful"]);
    rows.push([isPoojaService ? "Consultation Fee" : "Amount Paid", `₹ ${price}`]);

    let message = `*${String(title).toUpperCase()} BOOKING*\n\n`;
    rows.forEach(([label, value]) => {
      message += `*${label}:* ${value}\n`;
    });

    if (isPoojaService) {
      message += `\n*Note:* ${POOJA_CONSULTATION_NOTE}\n`;
    }

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleNext = () => {
    if (currentStep === 1) {
      markTouched(step1Fields.map((field) => field.name));

      if (!isStep1Valid()) {
        setStepMessage("Please review the highlighted contact details before continuing.");
        return;
      }

      setStepMessage("");
      setCurrentStep(2);
      return;
    }

    if (currentStep === 2) {
      markTouched(serviceFields.map((field) => field.name));

      if (!isStep2Valid()) {
        setStepMessage("Please complete the required service details before continuing.");
        return;
      }

      setStepMessage("");
      setCurrentStep(3);
    }
  };

  if (!fields.length) {
    return (
      <div className="min-h-screen px-4 py-24">
        <div className="mx-auto max-w-2xl rounded-[32px] border border-red-200 bg-white p-10 text-center shadow-sm">
          <h1 className="font-playfair text-3xl text-secondary">Invalid Service</h1>
          <p className="mt-3 text-sm text-secondary/70">
            We could not load the booking form for this service.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,196,0,0.14),_transparent_24%),linear-gradient(180deg,_rgba(255,255,255,0.98),_rgba(254,247,241,0.92))]">
      <div className="pointer-events-none absolute inset-0 cosmic-pattern opacity-80" />
      <div className="pointer-events-none absolute left-1/2 top-20 h-52 w-52 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-24 sm:px-6 lg:px-8">
        <div className="mb-8 rounded-[34px] border border-primary/10 bg-white/80 p-6 shadow-[0_30px_80px_-40px_rgba(82,24,16,0.35)] backdrop-blur-xl sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <Badge className="bg-primary/10 px-3 py-1 text-primary hover:bg-primary/10">
                3-Step Booking Experience
              </Badge>
              <h1 className="mt-4 font-playfair text-3xl leading-tight text-secondary sm:text-4xl lg:text-5xl">
                {title}
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-secondary/75 sm:text-base">
                Share your details, add service inputs, and confirm your booking in a
                calmer, cleaner flow designed to match the AstroWak theme.
              </p>

              {isPoojaService ? (
                <p className="mt-4 rounded-2xl border border-primary/15 bg-primary/5 px-4 py-3 text-sm leading-relaxed text-secondary">
                  <span className="font-semibold text-primary">Consultation fee:</span>{" "}
                  {POOJA_CONSULTATION_NOTE}
                </p>
              ) : null}
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:w-[360px]">
              <div className="rounded-3xl border border-primary/10 bg-gradient-to-br from-primary/5 to-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary/60">
                  Amount
                </p>
                <p className="mt-2 font-playfair text-3xl text-secondary">₹ {price}</p>
                <p className="mt-1 text-sm text-secondary/70">
                  {isPoojaService ? "Consultation fee" : "Secure online payment"}
                </p>
              </div>

              <div className="rounded-3xl border border-primary/10 bg-gradient-to-br from-accent/10 to-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary/60">
                  Support
                </p>
                <p className="mt-2 font-playfair text-xl text-secondary">Fast Follow-up</p>
                <p className="mt-1 text-sm text-secondary/70">
                  We use your form details to continue on WhatsApp and email.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <Card className="overflow-hidden rounded-[30px] border-primary/10 bg-white/85 shadow-[0_24px_60px_-35px_rgba(82,24,16,0.38)] backdrop-blur-xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary/60">
                      Progress
                    </p>
                    <h2 className="mt-2 font-playfair text-2xl text-secondary">
                      {paymentDone ? "Booking Completed" : "Booking Journey"}
                    </h2>
                  </div>
                  <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                    {progressPercent}%
                  </div>
                </div>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-primary/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-accent via-primary to-secondary transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>

                <div className="mt-6 space-y-4">
                  {STEP_META.map((step) => {
                    const Icon = step.icon;
                    const isActive = currentStep === step.id && !paymentDone;
                    const isComplete = step.id < currentStep || (paymentDone && step.id === 3);

                    return (
                      <div
                        key={step.id}
                        className={cn(
                          "rounded-3xl border p-4 transition-all",
                          isActive
                            ? "border-primary bg-gradient-to-r from-primary to-secondary text-white shadow-[0_18px_45px_-28px_rgba(180,30,30,0.9)]"
                            : isComplete
                            ? "border-green-200 bg-green-50 text-green-700"
                            : "border-primary/10 bg-white/70 text-secondary"
                        )}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={cn(
                              "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border",
                              isActive
                                ? "border-white/25 bg-white/10"
                                : isComplete
                                ? "border-green-200 bg-white"
                                : "border-primary/10 bg-primary/5"
                            )}
                          >
                            {isComplete ? (
                              <CheckCircle2 className="h-5 w-5" />
                            ) : (
                              <Icon className="h-5 w-5" />
                            )}
                          </div>

                          <div>
                            <p className="font-semibold">
                              {step.id}. {step.title}
                            </p>
                            <p
                              className={cn(
                                "mt-1 text-sm leading-relaxed",
                                isActive
                                  ? "text-white/80"
                                  : isComplete
                                  ? "text-green-700/80"
                                  : "text-secondary/70"
                              )}
                            >
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="hidden rounded-[30px] border-primary/10 bg-white/85 shadow-[0_24px_60px_-35px_rgba(82,24,16,0.38)] backdrop-blur-xl lg:block">
              <CardContent className="space-y-4 p-6">
                <div className="flex items-start gap-3">
                  <div className="rounded-2xl bg-accent/15 p-3 text-secondary">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl text-secondary">Booking Snapshot</h3>
                    <p className="mt-1 text-sm leading-relaxed text-secondary/70">
                      Your service, secure payment status, and key reminders all in one place.
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3 text-sm text-secondary">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-secondary/70">Service</span>
                    <span className="max-w-[170px] text-right font-semibold">{title}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-secondary/70">
                      {isPoojaService ? "Consultation Fee" : "Amount"}
                    </span>
                    <span className="font-semibold text-primary">₹ {price}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-secondary/70">Booking For</span>
                    <span className="font-semibold">{humanize(bookingFor)}</span>
                  </div>
                </div>

                <div className="rounded-3xl border border-primary/10 bg-gradient-to-r from-secondary/5 to-primary/5 p-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-2xl bg-white p-2.5 text-primary shadow-sm">
                      <LockKeyhole className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary">Secure Checkout</p>
                      <p className="mt-1 text-sm leading-relaxed text-secondary/70">
                        Payment is handled securely, and your details stay ready for WhatsApp follow-up.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          <Card className="overflow-hidden rounded-[34px] border-primary/10 bg-white/85 shadow-[0_28px_70px_-36px_rgba(82,24,16,0.42)] backdrop-blur-xl">
            <CardContent className="p-0">
              <div className="border-b border-primary/10 bg-gradient-to-r from-white via-primary/5 to-accent/10 px-6 py-6 sm:px-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="max-w-2xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary/60">
                      Step {currentStep} of 3
                    </p>
                    <h2 className="mt-2 font-playfair text-3xl text-secondary">
                      {paymentDone ? "Booking Completed" : currentStepMeta.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-secondary/75 sm:text-base">
                      {paymentDone
                        ? "Everything is confirmed. Share it on WhatsApp to move ahead quickly."
                        : currentStepMeta.description}
                    </p>
                  </div>

                  <Badge className="h-fit bg-primary text-white hover:bg-primary">
                    {paymentDone ? "Success" : `Step ${currentStep}`}
                  </Badge>
                </div>
              </div>

              <div className="space-y-6 px-6 py-7 sm:px-8 sm:py-8">
                {stepMessage ? (
                  <div className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50/80 px-4 py-3 text-sm text-red-700">
                    <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>{stepMessage}</span>
                  </div>
                ) : null}

                {renderStepContent()}

                <Separator />

                <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-sm text-secondary/70">
                    {paymentDone
                      ? "Next step: share the booking details on WhatsApp."
                      : "All required fields are validated before the next step."}
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    {currentStep > 1 && !paymentDone ? (
                      <Button
                        variant="outline"
                        className="h-12 rounded-full border-primary/20 px-6 text-secondary hover:bg-primary/5"
                        onClick={() => {
                          setStepMessage("");
                          setCurrentStep((currentStep - 1) as Step);
                        }}
                      >
                        Back
                      </Button>
                    ) : null}

                    {currentStep < 3 ? (
                      <Button
                        className="h-12 rounded-full bg-gradient-to-r from-primary to-secondary px-6 text-white shadow-[0_20px_45px_-24px_rgba(180,30,30,0.9)] hover:opacity-95"
                        onClick={handleNext}
                      >
                        Continue
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    ) : null}

                    {currentStep === 3 && !paymentDone ? (
                      <PayButton
                        amount={price}
                        name={form.name}
                        email={form.email}
                        disabled={!canProceedToPayment}
                        bookingData={{
                          serviceType,
                          title,
                          price,
                          bookingFor,
                          allFields: form,
                        }}
                        onSuccess={(result) => {
                          console.log("PAYMENT SUCCESS:", result);
                          setPaymentDone(true);
                        }}
                        onFailure={(error) => {
                          console.log("PAYMENT FAILED:", error);
                        }}
                      />
                    ) : null}

                    {paymentDone ? (
                      <Button
                        className="h-12 rounded-full bg-green-600 px-6 text-white hover:bg-green-700"
                        onClick={handleSubmitWhatsApp}
                      >
                        Send via WhatsApp
                      </Button>
                    ) : null}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
