"use client";

import { useMemo, useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

import formConfig from "@/config/formConfig";
import type { FieldConfig } from "@/config/formConfig";
import type { ServiceKey } from "@/types/serviceKeys";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import PayButton from "@/components/PayButton";
import { RASI, STAR } from "@/config/formConfig";
import { CheckCircle2, ChevronRight } from "lucide-react";

type Step = 1 | 2 | 3;

export default function ConsultationForm() {
  const { serviceType } = useParams();
  const location = useLocation();

  const price = location.state?.price ?? 0;
  const title = location.state?.title ?? serviceType ?? "Service";
  const whatsappNumber = "919553231199";

  const fields: FieldConfig[] = useMemo(
    () => formConfig[serviceType as ServiceKey] || [],
    [serviceType]
  );

  // Build initial state from config (keep existing approach)
  const initialState = useMemo(() => {
    const s: Record<string, any> = {};
    fields.forEach((f) => (s[f.name] = ""));
    // ensure birthRasi, birthStar exist if used later
    if (s.birthRasi === undefined) s.birthRasi = "";
    if (s.birthStar === undefined) s.birthStar = "";
    return s;
  }, [fields]);

  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [form, setForm] = useState<Record<string, any>>(initialState);
  const [bookingFor, setBookingFor] = useState<"self" | "other">("self");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);

  // touched state for showing validation messages
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  useEffect(() => setForm(initialState), [initialState]);

  const handleChange = (name: string, value: any) =>
    setForm((prev) => ({ ...prev, [name]: value }));

  const handleBlur = (name: string) =>
    setTouched((t) => ({ ...t, [name]: true }));

  const LABEL = "text-sm font-medium mb-2 block";
  const INPUT =
    "w-full rounded-lg px-3 py-2 shadow-sm placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-primary/40";

  // Basic/service split helpers
  const getBasicFields = () =>
    fields.filter((f) => ["name", "email", "phone"].includes(f.name));
  const getServiceFields = () => {
    // remove unwanted fields
    let list = fields.filter(
      (f) => !["name", "email", "phone", "who", "otherName"].includes(f.name)
    );

    // If gender exists, move it to index 2 (third position)
    const genderIndex = list.findIndex((f) => f.name === "gender");

    if (genderIndex !== -1) {
      const [genderField] = list.splice(genderIndex, 1); // remove gender
      list.splice(2, 0, genderField); // insert at 3rd position
    }

    return list;
  };

  // validators
  const emailValid = (v: string) =>
    /^\S+@\S+\.\S+$/.test(String(v ?? "").trim());

  const phoneValid = (v: string) =>
    /^\d{10}$/.test(String(v ?? "").replace(/\s+/g, ""));

  // Step 1: require name, email (valid) and phone (10 digits)
  const isStep1Valid = () => {
    const basic = getBasicFields();

    // normal validations
    const basicValid = basic.every((f) => {
      const val = (form[f.name] ?? "").toString().trim();
      if (f.name === "email") return val !== "" && emailValid(val);
      if (f.name === "phone") return val !== "" && phoneValid(val);
      return val !== "";
    });

    if (!basicValid) return false;

    // NEW: enforce otherName required if bookingFor = other
    if (bookingFor === "other") {
      const otherName = form.otherName?.trim();
      if (!otherName) return false;
    }

    return true;
  };

  // Step 2: require *service fields* except 'filters' (comments) and except 'childName' (?) - user said comment optional
  // Also enforce bookingFor === other -> otherName must exist
  const isStep2Valid = () => {
    // if custom baby name (special UI) we keep their internal required flags that you added earlier in accordion
    if (serviceType === "numerology_baby_name") {
      // ensure all accordion required ones are provided: childGender & childDob etc (we already build them as required in render)
      // Basic quick-check: childGender & childDob exist (they were set as required when rendering)
      if (!form.childGender || !form.childDob) return false;
      // for 'other name' logic: if bookingFor === other and there is a field otherName in the form, enforce it
      // if (bookingFor === "other" && "otherName" in form && !form.otherName) return false;
      return true;
    }

    // general case: every service field should be present except "filters" (additional notes)
    const serviceFields = getServiceFields();

    for (const f of serviceFields) {
      if (f.name === "filters") continue; // comment optional
      // if the special "otherName" field is present, enforce only when bookingFor === other
      // if (f.name === "otherName") {
      //   if (bookingFor === "other") {
      //     if (!form[f.name] || String(form[f.name]).trim() === "") return false;
      //   }
      //   // if self, skip otherName
      //   continue;
      // }

      const val = form[f.name];
      if (f.required || f.type !== "textarea") {
        // treat empty string/null as invalid
        if (val === undefined || val === null || String(val).trim() === "")
          return false;
      }
      // for textarea we let it be optional only if name === filters (already skipped)
    }

    return true;
  };

  const canProceedToPayment = () =>
    isStep1Valid() && isStep2Valid() && acceptedTerms;

  // helper to render a standard field (with our updated styles)
  const renderField = (f: FieldConfig) => {
    // hide otherName unless bookingFor === other
    if (f.name === "otherName" && bookingFor === "self") return null;

    const value = form[f.name] ?? "";

    // error checks only for visible fields
    const showError =
      !!touched[f.name] &&
      (() => {
        if (f.name === "email") return value === "" || !emailValid(value);
        if (f.name === "phone") return value === "" || !phoneValid(value);
        if (f.required && String(value).trim() === "") return true;
        return false;
      })();

    const errorMsg = (() => {
      if (!showError) return "";
      if (f.name === "email") return "Enter a valid email address.";
      if (f.name === "phone") return "Phone must be 10 digits.";
      if (f.required) return `${f.label} is required.`;
      return "This field is required.";
    })();

    if (f.type === "textarea") {
      return (
        <div key={f.name} className="w-full">
          <Label className={LABEL}>{f.label}</Label>
          <Textarea
            className={`${INPUT} min-h-[88px]`}
            value={value}
            rows={3}
            placeholder={f.placeholder}
            onChange={(e) => handleChange(f.name, e.target.value)}
            onBlur={() => handleBlur(f.name)}
          />
          {showError && <p className="text-xs text-red-500 mt-4">{errorMsg}</p>}
        </div>
      );
    }

    if (f.type === "select") {
      return (
        <div key={f.name} className="w-full">
          <Label className={LABEL}>{f.label}</Label>
          <Select value={value} onValueChange={(v) => handleChange(f.name, v)}>
            <SelectTrigger className={INPUT}>
              <SelectValue placeholder="Select option" />
            </SelectTrigger>
            <SelectContent>
              {f.options?.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {showError && <p className="text-xs text-red-500 mt-1">{errorMsg}</p>}
        </div>
      );
    }

    // radio type in config - keep default single-radio fallback (but we use pill group for bookingFor radio separately)
    if (f.type === "radio") {
      return (
        <div key={f.name} className="w-full">
          <Label className={LABEL}>{f.label}</Label>
          <div className="flex flex-wrap gap-4 gap-y-2 md:gap-12 mt-2">
            {f.options?.map((opt) => {
              const active = value === opt.value;
              return (
                <button
                  type="button"
                  key={opt.value}
                  onClick={() => handleChange(f.name, opt.value)}
                  onBlur={() => handleBlur(f.name)}
                  className={`px-3 py-2 rounded-full font-medium transition-shadow ${
                    active
                      ? "bg-primary text-white shadow-md"
                      : "bg-zinc-100 text-secondary"
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
          {showError && <p className="text-xs text-red-500 mt-1">{errorMsg}</p>}
        </div>
      );
    }

    // default text/date/time/number fields
    return (
      <div key={f.name} className="w-full">
        <Label className={LABEL}>{f.label}</Label>
        <Input
          className={`${INPUT} ${showError ? "ring-2 ring-red-200" : ""}`}
          type={f.type}
          placeholder={f.placeholder}
          value={value}
          onChange={(e) => handleChange(f.name, e.target.value)}
          onBlur={() => handleBlur(f.name)}
        />
        {showError && <p className="text-xs text-red-500 mt-1">{errorMsg}</p>}
      </div>
    );
  };

  // Rendering summary unchanged except styling kept minimal
  const renderSummary = () => {
  return (
    <div className="space-y-4 px-4 md:px-10 lg:px-20 xl:px-40 2xl:px-60">
      
      <div className="p-4 rounded-lg space-y-3 bg-transparent">
        <p className="font-semibold text-secondary">Your Details</p>
        {getBasicFields().map(
          (f) =>
            form[f.name] && (
              <div key={f.name} className="flex justify-between text-sm">
                <span className="text-secondary capitalize">{f.label}:</span>
                <span className="font-medium text-secondary">
                  {form[f.name]}
                </span>
              </div>
            )
        )}
      </div>

      <div className="p-4 rounded-lg space-y-3 bg-transparent">
        <p className="font-semibold text-secondary">Service Details</p>
        {getServiceFields().map(
          (f) =>
            form[f.name] && (
              <div key={f.name} className="flex justify-between text-sm">
                <span className="text-secondary capitalize">{f.label}:</span>
                <span className="font-medium text-secondary">
                  {form[f.name]}
                </span>
              </div>
            )
        )}
      </div>

      <div className="p-4 rounded-lg space-y-3 bg-transparent">
        <p className="font-semibold text-secondary">Order Summary</p>
        <div className="flex justify-between text-sm mb-3">
          <span className="text-secondary">Service:</span>
          <span className="font-medium text-secondary">{title}</span>
        </div>
        <div className="flex justify-between text-base pt-3">
          <span className="font-semibold">Total Amount:</span>
          <span className="font-bold text-purple-600 dark:text-purple-400">
            ₹ {price}
          </span>
        </div>
      </div>

    </div>
  );
};


  const renderStepContent = () => {
    if (currentStep === 1) {
      return (
        <div className="space-y-6">
          <p className="text-sm text-secondary">
            Enter your contact details to get started
          </p>

          {/* 3-column desktop grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {getBasicFields().map((f) => renderField(f))}
          </div>

          {/* Booking for (Self / Other) as pill buttons */}
          <div className="mt-2">
            <Label className={LABEL}>Book For</Label>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setBookingFor("self")}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  bookingFor === "self"
                    ? "bg-primary text-white shadow-md"
                    : "bg-zinc-100 text-secondary"
                }`}
              >
                Self
              </button>

              <button
                type="button"
                onClick={() => setBookingFor("other")}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  bookingFor === "other"
                    ? "bg-primary text-white shadow-md"
                    : "bg-zinc-100 text-secondary"
                }`}
              >
                Other
              </button>
            </div>

            <p className="text-xs text-secondary mt-2">
              Choose who this booking is for. If you pick <strong>Other</strong>
              , you'll be asked for the other person's name.
            </p>
          </div>

          {/* If other, show other name field (we look for otherName field in config) */}
          {fields.some((f) => f.name === "otherName") &&
            bookingFor === "other" && (
              <div className="mt-2">
                {renderField({
                  name: "otherName",
                  label: "Other Person's Name",
                  type: "text",
                  required: true,
                })}
              </div>
            )}
        </div>
      );
    }

    if (currentStep === 2) {
      return (
        <div className="space-y-6">
          <p className="text-sm text-secondary">Fill in the service details</p>

          {serviceType === "numerology_baby_name" ? (
            <Accordion type="multiple" className="space-y-3">
              {/* Baby Name Accordions */}
              <AccordionItem value="general">
                <AccordionTrigger>General</AccordionTrigger>
                <AccordionContent className="space-y-4 mt-4">
                  {renderField({
                    name: "childGender",
                    label: "Child Gender",
                    type: "radio",
                    required: true,
                    options: [
                      { label: "Male", value: "male" },
                      { label: "Female", value: "female" },
                      { label: "Other", value: "other" },
                    ],
                  })}
                  {renderField({
                    name: "childDob",
                    label: "Child DOB",
                    type: "date",
                    required: true,
                  })}
                  {renderField({
                    name: "childTime",
                    label: "Child Time",
                    type: "time",
                  })}
                  {renderField({
                    name: "childName",
                    label: "Child Name (if any)",
                    type: "text",
                  })}
                  {renderField({
                    name: "motherName",
                    label: "Mother Name",
                    type: "text",
                    required: true,
                  })}
                  {renderField({
                    name: "fatherName",
                    label: "Father Name",
                    type: "text",
                    required: true,
                  })}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="word">
                <AccordionTrigger>Word Search</AccordionTrigger>
                <AccordionContent className="space-y-4 mt-4">
                  {renderField({
                    name: "nameStartsWith",
                    label: "Name starting with",
                    type: "text",
                  })}
                  {renderField({
                    name: "nameEndsWith",
                    label: "Name ending with",
                    type: "text",
                  })}
                  {renderField({
                    name: "nameContains1",
                    label: "Contains Option 1",
                    type: "text",
                  })}
                  {renderField({
                    name: "nameContains2",
                    label: "Contains Option 2",
                    type: "text",
                  })}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="num">
                <AccordionTrigger>Numerology</AccordionTrigger>
                <AccordionContent className="space-y-4 mt-4">
                  {renderField({
                    name: "surnameInitials",
                    label: "Surname / Initials",
                    type: "text",
                  })}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="religion">
                <AccordionTrigger>Religion</AccordionTrigger>
                <AccordionContent className="space-y-4 mt-4">
                  {renderField({
                    name: "religion",
                    label: "Religion",
                    type: "radio",
                    options: [
                      { label: "Hindu", value: "hindu" },
                      { label: "Christian", value: "christian" },
                      { label: "Muslim", value: "muslim" },
                    ],
                  })}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="guidance">
                <AccordionTrigger>Guidance</AccordionTrigger>
                <AccordionContent className="space-y-4 mt-4">
                  {renderField({
                    name: "filters",
                    label: "Additional Notes / Guidance",
                    type: "textarea",
                  })}

                  <div>
                    <Label className={LABEL}>Birth Rasi</Label>
                    <Select
                      value={form.birthRasi}
                      onValueChange={(v) => handleChange("birthRasi", v)}
                    >
                      <SelectTrigger className={INPUT}>
                        <SelectValue placeholder="Select Rasi" />
                      </SelectTrigger>
                      <SelectContent>
                        {RASI.map((r) => (
                          <SelectItem value={r} key={r}>
                            {r}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className={LABEL}>Birth Star (Nakshatra)</Label>
                    <Select
                      value={form.birthStar}
                      onValueChange={(v) => handleChange("birthStar", v)}
                    >
                      <SelectTrigger className={INPUT}>
                        <SelectValue placeholder="Select Star" />
                      </SelectTrigger>
                      <SelectContent>
                        {STAR.map((s) => (
                          <SelectItem value={s} key={s}>
                            {s}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {getServiceFields().map((f) => renderField(f))}
            </div>
          )}
        </div>
      );
    }

    if (currentStep === 3) {
      return (
        <div className="space-y-6">
          {!paymentDone ? (
            <>
              {renderSummary()}

              <div className="p-4 rounded-lg bg-transparent px-4 md:px-10 lg:px-20 xl:px-40 2xl:px-60">
  <div className="flex items-start gap-3">
    <Checkbox
      checked={acceptedTerms}
      onCheckedChange={(v) => setAcceptedTerms(!!v)}
      id="step3-terms"
      className="mt-1 rounded-sm"
    />
    <label
      htmlFor="step3-terms"
      className="text-sm cursor-pointer text-secondary"
    >
      I agree to the Terms & Conditions and confirm all the
      details provided above are accurate.
    </label>
  </div>
</div>

            </>
          ) : (
            <div className="text-center space-y-6 py-8">
              <div className="flex justify-center">
                <div className="relative w-20 h-20">
                  <CheckCircle2 className="w-full h-full text-green-500 animate-bounce" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-2">
                  Payment Successful!
                </h3>
                <p className="text-sm text-secondary">
                  Your payment has been processed successfully.
                </p>
              </div>
              {renderSummary()}
            </div>
          )}
        </div>
      );
    }

    return null;
  };

  const handleSubmitWhatsApp = () => {
    let msg = `*${String(title).toUpperCase()} REQUEST*\n\n`;

    Object.keys(form).forEach((k) => {
      if (form[k]) msg += `*${k}:* ${form[k]}\n`;
    });

    // also include bookingFor info
    msg += `*Booking For:* ${bookingFor}\n`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  if (!fields.length) {
    return (
      <div className="p-10 text-center text-red-500 text-xl">
        Invalid Service
      </div>
    );
  }

  // step navigation that enforces validation
  const handleNext = () => {
    if (currentStep === 1) {
      // mark basics touched to show validation messages
      getBasicFields().forEach((f) => handleBlur(f.name));
      if (bookingFor === "other") handleBlur("otherName");
      if (!isStep1Valid()) return;
      setCurrentStep(2);
      return;
    }

    if (currentStep === 2) {
      getServiceFields().forEach((f) => handleBlur(f.name));
      // also otherName if bookingFor=other
      if (bookingFor === "other") handleBlur("otherName");
      if (!isStep2Valid()) return;
      setCurrentStep(3);
      return;
    }
  };

  return (
    <div className="min-h-screen px-4 md:px-10 lg:px-20 xl:px-44 py-6">
      <div className="w-full mx-auto lg:min-w-6xl px-0 md:px-4">
        {/* Header Section */}
        <div className="mt-16 md:mt-12 lg:mt-16 mb-6 md:mb-8">
  <div className="text-center px-4">
    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary break-words leading-snug">
      {title}
    </h1>
  </div>
</div>


        {/* Step Indicators */}
        <div className="flex justify-center items-center gap-2 md:gap-3 mb-6 md:mb-8">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div
                className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full font-bold text-xs md:text-sm transition-all ${
                  step < currentStep || (paymentDone && step === 3)
                    ? "bg-green-500 text-white"
                    : step === currentStep
                    ? "bg-primary text-primary-foreground"
                    : "bg-border text-secondary"
                }`}
              >
                {step < currentStep || (paymentDone && step === 3) ? "✓" : step}
              </div>
              {step < 3 && (
                <div
                  className={`w-8 h-1 mx-1 md:w-12 ${
                    step < currentStep ? "bg-green-500" : "bg-border"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step Label */}
        <div className="flex justify-center text-xs md:text-sm lg:text-base text-secondary mb-6 md:mb-8 font-medium">
          {currentStep === 1 && "Step 1 of 3: Basic Information"}
          {currentStep === 2 && "Step 2 of 3: Service Details"}
          {currentStep === 3 &&
            (paymentDone
              ? "Step 3 of 3: Completed"
              : "Step 3 of 3: Payment & Review")}
        </div>

        <div className="w-full space-y-6 md:space-y-8">
          {/* Form Content - removed outer border/card styles per request */}
          <div className="p-0">{renderStepContent()}</div>

          {/* Footer Actions */}
          <div className="p-0">
  <div className="flex justify-center items-center gap-4 mt-10">

    {currentStep > 1 && !paymentDone && (
      <div className="flex justify-center">
        <Button
          variant="outline"
          className="w-fit px-6"
          onClick={() => setCurrentStep((currentStep - 1) as Step)}
        >
          Back
        </Button>
      </div>
    )}

    {currentStep < 3 && (
      <div className="flex justify-center">
        <Button
          className="w-fit px-6 bg-primary hover:bg-primary/90"
          disabled={currentStep === 1 ? !isStep1Valid() : !isStep2Valid()}
          onClick={handleNext}
        >
          Continue <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    )}

    {currentStep === 3 && !paymentDone && (
      <div className="flex justify-center">
        <PayButton
          amount={price}
          name={form.name}
          email={form.email}
          disabled={!canProceedToPayment()}
          onSuccess={(result) => {
            console.log("PAYMENT SUCCESS:", result);
            setPaymentDone(true);
          }}
          onFailure={(error) => {
            console.log("PAYMENT FAILED:", error);
          }}
        />
      </div>
    )}

    {paymentDone && (
      <div className="flex justify-center">
        <Button
          className="w-fit px-6 bg-green-600 hover:bg-green-700 text-white"
          onClick={handleSubmitWhatsApp}
        >
          Send via WhatsApp
        </Button>
      </div>
    )}

  </div>
</div>

        </div>
      </div>
    </div>
  );
}
