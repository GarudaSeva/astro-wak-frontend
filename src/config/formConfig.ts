import type { ServiceKey } from "@/types/serviceKeys";

/* ----------------------------------------
   FIELD TYPES
----------------------------------------- */
export type FieldType =
  | "text"
  | "email"
  | "tel"
  | "date"
  | "time"
  | "textarea"
  | "select"
  | "radio"
  | "number";

export interface FieldConfig {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  placeholder?: string;
  options?: { label: string; value: string }[];
}

/* ----------------------------------------
   BASE FIELDS (COMMON)
----------------------------------------- */
export const BASE_FIELDS: FieldConfig[] = [
  { name: "name", label: "Full Name", type: "text", required: true, placeholder: "Enter full name" },
  { name: "email", label: "Email", type: "email", required: true, placeholder: "you@email.com" },
  { name: "phone", label: "Phone", type: "tel", required: true, placeholder: "+91 9XXXXXXXXX" },
];

/* ----------------------------------------
   OPTIONS (Rasi & Star)
----------------------------------------- */
export const RASI = [
  "Mesha","Vrushaba","Mithuna","Karkataka","Simha","Kanya","Tula","Vrischika",
  "Dhanus","Makara","Khumbha","Meena"
];
export const STAR = [
  "Ashwini","Bharani","Krittika","Rohini","Mrigshirsha","Arudra","Punarvasu",
  "Pushya","Ashlesha","Magha","Purvaphalguni","Uttaraphalguni","Hasta","Chitra",
  "Swati","Vishakha","Anuradha","Jyeshtha","Moola","Purvashadha","Uttarashadha",
  "Shravana","Dhanishtha","Shatabhisha","Poorvabhadrapada","Uttarabhadrapada",
  "Revati"
];

export const RASI_OPTIONS = RASI.map(v => ({ label: v, value: v }));
export const STAR_OPTIONS = STAR.map(v => ({ label: v, value: v }));

/* ----------------------------------------
   BABY NAME — BASE FIELDS
----------------------------------------- */
export const BABY_NAME_FIELDS: FieldConfig[] = [
  ...BASE_FIELDS,

  { name: "childName", label: "Child Name (if known)", type: "text" },
  {
    name: "childGender",
    label: "Child Gender",
    type: "radio",
    required: true,
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" }
    ]
  },
  { name: "childDob", label: "Child DOB", type: "date", required: true },
  { name: "childTime", label: "Child Time", type: "time" },

  // Word search (accordion)
  { name: "nameStartsWith", label: "Name starting with", type: "text" },
  { name: "nameEndsWith", label: "Name ending with", type: "text" },
  { name: "nameContains1", label: "Name contains Option 1", type: "text" },
  { name: "nameContains2", label: "Name contains Option 2", type: "text" },

  // Numerology preferences
  { name: "surnameInitials", label: "Surname / Initials", type: "text" },
  { name: "birthRasi", label: "Birth Rasi", type: "select", options: RASI_OPTIONS },
  { name: "birthStar", label: "Birth Star", type: "select", options: STAR_OPTIONS },

  // Guidance textarea
  { name: "filters", label: "Name Filters / Guidance", type: "textarea" },

  {
    name: "reportLanguage",
    label: "Report Language",
    type: "select",
    required: true,
    options: [
      { label: "English", value: "english" },
      { label: "Telugu", value: "telugu" },
    ],
  },

  { name: "comment", label: "Comments", type: "textarea" },
];

/* ----------------------------------------
   MAIN FORM CONFIG — EXACT MATCH
----------------------------------------- */
export const formConfig: Record<ServiceKey, FieldConfig[]> = {
  /* ---------------------- Numerology ---------------------- */
  numerology_complete: [
    ...BASE_FIELDS,
    {
      name: "who",
      label: "Consultation For",
      type: "radio",
      required: true,
      options: [
        { label: "Self", value: "self" },
        { label: "Other", value: "other" }
      ]
    },
    { name: "otherName", label: "Other Person Name", type: "text" },
    { name: "dob", label: "Date of Birth", type: "date", required: true },
    {
      name: "gender",
      label: "Gender",
      type: "radio",
      options: [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" }
      ]
    },
    {
      name: "reportLanguage",
      label: "Report Language",
      type: "select",
      required: true,
      options: [
        { label: "English", value: "english" },
        { label: "Telugu", value: "telugu" }
      ]
    },
    { name: "comment", label: "Comments", type: "textarea" },
  ],

  numerology_name_correction: [
    ...BASE_FIELDS,
    {
      name: "who",
      label: "Consultation For",
      type: "radio",
      required: true,
      options: [
        { label: "Self", value: "self" },
        { label: "Other", value: "other" }
      ]
    },
    { name: "otherName", label: "Other Person Name", type: "text" },
    { name: "nameToCorrect", label: "Name to Correct", type: "text", required: true },
    { name: "dob", label: "DOB", type: "date", required: true },
    {
      name: "gender",
      label: "Gender",
      type: "radio",
      options: [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" }
      ]
    },
    {
      name: "reportLanguage",
      label: "Report Language",
      type: "select",
      required: true,
      options: [
        { label: "English", value: "english" },
        { label: "Telugu", value: "telugu" }
      ]
    },
    { name: "comment", label: "Comments", type: "textarea" },
  ],

  numerology_baby_name: [...BABY_NAME_FIELDS],

  numerology_match_making: [
    ...BASE_FIELDS,
    {
      name: "reportLanguage",
      label: "Report Language",
      type: "select",
      required: true,
      options: [
        { label: "English", value: "english" },
        { label: "Telugu", value: "telugu" }
      ]
    },
    { name: "male_name", label: "Male: Full Name", type: "text", required: true },
    { name: "male_dob", label: "Male: DOB", type: "date", required: true },
    { name: "male_time", label: "Male: Time", type: "time" },
    { name: "male_place", label: "Male: Place", type: "text" },
    { name: "female_name", label: "Female: Full Name", type: "text", required: true },
    { name: "female_dob", label: "Female: DOB", type: "date", required: true },
    { name: "female_time", label: "Female: Time", type: "time" },
    { name: "female_place", label: "Female: Place", type: "text" },
    { name: "comment", label: "Comments", type: "textarea" },
  ],

  numerology_business: [
    ...BASE_FIELDS,
    { name: "dob", label: "DOB", type: "date", required: true },
    { name: "businessNames", label: "Business Names", type: "textarea" },
    {
      name: "reportLanguage",
      label: "Report Language",
      type: "select",
      required: true,
      options: [
        { label: "English", value: "english" },
        { label: "Telugu", value: "telugu" }
      ]
    },
    { name: "comment", label: "Comments", type: "textarea" },
  ],

  numerology_family: [
    ...BASE_FIELDS,
    { name: "familyMembers", label: "Family Members", type: "textarea" },
    {
      name: "reportLanguage",
      label: "Report Language",
      type: "select",
      required: true,
      options: [
        { label: "English", value: "english" },
        { label: "Telugu", value: "telugu" }
      ]
    },
    { name: "comment", label: "Comments", type: "textarea" },
  ],

  /* ---------------------- Gems ---------------------- */
  gems: [
    ...BASE_FIELDS,
    {
      name: "who",
      label: "Consultation For",
      type: "radio",
      required: true,
      options: [
        { label: "Self", value: "self" },
        { label: "Other", value: "other" }
      ]
    },
    { name: "otherName", label: "Other Person Name", type: "text" },
    {
      name: "purpose",
      label: "Purpose",
      type: "select",
      required: true,
      options: [
        { label: "Business", value: "business" },
        { label: "Career", value: "career" },
        { label: "Health", value: "health" },
        { label: "Relations", value: "relations" },
        { label: "General", value: "general" }
      ]
    },
    { name: "dob", label: "DOB", type: "date", required: true },
    { name: "birthTime", label: "Birth Time", type: "time" },
    { name: "birthPlace", label: "Birth Place", type: "text" },
    { name: "comment", label: "Comments", type: "textarea" },
  ],

  /* ---------------------- Horoscope ---------------------- */
  horoscope: [
    ...BASE_FIELDS,
    { name: "dob", label: "DOB", type: "date", required: true },
    { name: "birthTime", label: "Birth Time", type: "time" },
    { name: "birthPlace", label: "Birth Place", type: "text" },
    { name: "query", label: "Specific Questions", type: "textarea" },
  ],

  /* ---------------------- Pooja ---------------------- */
  pooja: [
    ...BASE_FIELDS,
    {
      name: "poojaType",
      label: "Pooja Type",
      type: "select",
      required: true,
      options: [
        { label: "Pooja", value: "pooja" },
        { label: "Homa", value: "homa" }
      ]
    },
    { name: "preferredDate", label: "Preferred Date", type: "date" },
    { name: "comment", label: "Instructions / Offerings", type: "textarea" },
  ],

  /* ---------------------- Muhurtham ---------------------- */
  muhurt_namakaranam: [
    ...BASE_FIELDS,
    { name: "fatherName", label: "Father Name", type: "text", required: true },
    { name: "motherName", label: "Mother Name", type: "text" },
    {
      name: "childGender",
      label: "Child Gender",
      type: "radio",
      required: true,
      options: [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" }
      ]
    },
    {
      name: "reportLanguage",
      label: "Report Language",
      type: "select",
      required: true,
      options: [
        { label: "English", value: "english" },
        { label: "Telugu", value: "telugu" }
      ]
    },
    { name: "childDob", label: "Child DOB", type: "date", required: true },
    { name: "childTime", label: "Child Time", type: "time" },
    { name: "childPlace", label: "Place of Birth", type: "text" },
    { name: "comment", label: "Comments", type: "textarea" },
  ],

  muhurt_annaprasana: [
    ...BASE_FIELDS,
    { name: "fatherName", label: "Father Name", type: "text", required: true },
    { name: "motherName", label: "Mother Name", type: "text" },
    {
      name: "childGender",
      label: "Child Gender",
      type: "radio",
      required: true,
      options: [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" }
      ]
    },
    {
      name: "reportLanguage",
      label: "Report Language",
      type: "select",
      required: true,
      options: [
        { label: "English", value: "english" },
        { label: "Telugu", value: "telugu" }
      ]
    },
    { name: "childDob", label: "Child DOB", type: "date", required: true },
    { name: "childTime", label: "Child Time", type: "time" },
    { name: "childPlace", label: "Place of Birth", type: "text" },
    { name: "comment", label: "Comments", type: "textarea" },
  ],

  muhurt_kesa_khandana: [
    ...BASE_FIELDS,
    { name: "fatherName", label: "Father Name", type: "text", required: true },
    { name: "motherName", label: "Mother Name", type: "text" },
    {
      name: "childGender",
      label: "Child Gender",
      type: "radio",
      required: true,
      options: [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" }
      ]
    },
    { name: "childDob", label: "Child DOB", type: "date", required: true },
    { name: "childTime", label: "Child Time", type: "time" },
    { name: "childPlace", label: "Place of Birth", type: "text" },
    { name: "comment", label: "Comments", type: "textarea" },
  ],

  muhurt_karna_vedha: [
    ...BASE_FIELDS,
    { name: "fatherName", label: "Father Name", type: "text", required: true },
    { name: "motherName", label: "Mother Name", type: "text" },
    {
      name: "childGender",
      label: "Child Gender",
      type: "radio",
      required: true,
      options: [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" }
      ]
    },
    { name: "childDob", label: "Child DOB", type: "date", required: true },
    { name: "childTime", label: "Child Time", type: "time" },
    { name: "childPlace", label: "Place of Birth", type: "text" },
    { name: "comment", label: "Comments", type: "textarea" },
  ],

  muhurt_aksharabhyasa: [
    ...BASE_FIELDS,
    { name: "fatherName", label: "Father Name", type: "text", required: true },
    { name: "motherName", label: "Mother Name", type: "text" },
    { name: "childDob", label: "Child DOB", type: "date", required: true },
    { name: "childTime", label: "Child Time", type: "time" },
    { name: "childPlace", label: "Place of Birth", type: "text" },
    {
      name: "reportLanguage",
      label: "Report Language",
      type: "select",
      required: true,
      options: [
        { label: "English", value: "english" },
        { label: "Telugu", value: "telugu" }
      ]
    },
    { name: "comment", label: "Comments", type: "textarea" },
  ],

  muhurt_vivaha: [
    ...BASE_FIELDS,
    { name: "brideName", label: "Bride Name", type: "text", required: true },
    { name: "brideDob", label: "Bride DOB", type: "date", required: true },
    { name: "brideTime", label: "Bride Time", type: "time" },
    { name: "bridePlace", label: "Bride Place", type: "text" },
    { name: "groomName", label: "Groom Name", type: "text", required: true },
    { name: "groomDob", label: "Groom DOB", type: "date", required: true },
    { name: "groomTime", label: "Groom Time", type: "time" },
    { name: "groomPlace", label: "Groom Place", type: "text" },
    {
      name: "reportLanguage",
      label: "Report Language",
      type: "select",
      options: [
        { label: "English", value: "english" },
        { label: "Telugu", value: "telugu" }
      ]
    },
    { name: "comment", label: "Comments", type: "textarea" },
  ],

  muhurt_bhoomi_pooja: [
    ...BASE_FIELDS,
    { name: "ownerName", label: "Owner Name", type: "text", required: true },
    { name: "landLocation", label: "Land Location", type: "text" },
    {
      name: "reportLanguage",
      label: "Report Language",
      type: "select",
      options: [
        { label: "English", value: "english" },
        { label: "Telugu", value: "telugu" }
      ]
    },
    { name: "comment", label: "Comments", type: "textarea" },
  ],

  muhurt_gruha_pravesh: [
    ...BASE_FIELDS,
    { name: "ownerName", label: "Owner Name", type: "text", required: true },
    { name: "propertyLocation", label: "Property Location", type: "text" },
    {
      name: "reportLanguage",
      label: "Report Language",
      type: "select",
      options: [
        { label: "English", value: "english" },
        { label: "Telugu", value: "telugu" }
      ]
    },
    { name: "comment", label: "Comments", type: "textarea" },
  ],

  /* ---------------------- Other Muhurt ---------------------- */
  muhurt_other: [
    ...BASE_FIELDS,
    { name: "details", label: "Type / Details", type: "text", required: true },
    { name: "preferredDate", label: "Preferred Date", type: "date" },
    {
      name: "reportLanguage",
      label: "Report Language",
      type: "select",
      required: true,
      options: [
        { label: "English", value: "english" },
        { label: "Telugu", value: "telugu" }
      ]
    },
    { name: "comment", label: "Comments", type: "textarea" },
  ],
};

export default formConfig;
