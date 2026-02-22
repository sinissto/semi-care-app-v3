import {
  Cross,
  Orbit,
  Syringe,
  BrushCleaning,
  HandHeart,
  TrendingUpDownIcon,
} from "lucide-react";

import peritoneal_dialysis_img_1 from "@/assets/images/peritoneal_dialysis_1.png";
import peritoneal_dialysis_img_2 from "@/assets/images/peritoneal_dialysis_2.png";
import basic_care_img from "@/assets/images/basic_care.jpeg";
import treatment_care_img from "@/assets/images/treatment_care.jpg";
import domestic_care_img from "@/assets/images/domestic_care.jpg";
import respite_care_man_img from "@/assets/images/respite_care_man.jpg";
import respite_care_woman_img from "@/assets/images/respite_care_women.jpg";
import other_services_img_1 from "@/assets/images/other_services_img_1.png";
import other_services_img_2 from "@/assets/images/other_services_img_2.png";

const data = {
  services: {
    id: 1,
    label: "Our Services",
    title: "Home care - because home is where the heart is",
    description: [
      "SemiCare follows a special concept: We offer the same services as any other care service.",
      "We offer professional services covered by health insurance. In addition, you can also book medical and non-medical services that are not reimbursable, if desired. The advantage: You can choose the services that you need and want, and we will take care of the rest. ",
      "We organize the necessary help in a compact and tailored way, without having to find a multitude of helpers. Which services are covered by health insurance?",
      "We will clarify which services you will have to pay for yourself and what that will cost in a non- binding consultation before the contract is concluded.",
    ],

    services: [
      {
        id: 1,
        title: "Peritoneal Dialysis (CAPD)",
        icon: Cross,
        url: "/services/peritoneal-dialysis",
        slug: "peritoneal-dialysis",
        description: [
          "Peritoneal dialysis changes everyday life – for patients as well as their families. It brings with it many questions, uncertainties, and anxieties. At SemiCare, we won't leave you alone with these challenges. We provide competent, empathetic, and reliable support to people undergoing peritoneal dialysis – right in your own home. We explain each step clearly, so you can feel confident.",
          "Peritoneal dialysis is a kidney replacement therapy used to remove toxins and excess water from the blood in patients with chronic kidney failure. Unlike hemodialysis, this process takes place inside the body, utilizing the body's own peritoneum (the lining of the abdominal cavity) as a filter.",
          'A special dialysis solution is introduced via a catheter permanently implanted in the abdominal cavity. The peritoneum acts as a "semi-permeable" membrane through which waste products from the blood pass into the solution.',
          "Our services include the following:",
        ],
        serviceList: [
          "Professional support for peritoneal dialysis (CAPD) at home Environment",
          "Implementation and monitoring of CAPD and APD (cycler) according to medical advice arrangement",
          "Exit - Change of association",
          "Assistance with ordering materials (Baxter or Fresenius)",
          "Strict adherence to hygiene standards for infection prevention - Preparation, connection and conclusion of dialysis",
          "Control of the inflow and outflow volume",
          "Observation and documentation of general condition",
          "Early detection and forwarding of abnormalities",
          "Guidance and support for patients and their families",
          "Close cooperation with doctors and dialysis centers",
          "Relief for family members through reliable, trained and structured care",
        ],
        images: [peritoneal_dialysis_img_1, peritoneal_dialysis_img_2],
      },

      {
        id: 2,
        title: "Basic care",
        icon: Orbit,
        url: "/services/basic-care",
        slug: "basic-care",
        description: [
          "Basic care supports people with their daily needs and ensures well-being, hygiene, and safety. The goal of basic care is to maintain independence as much as possible, promote health, and enable people to live with dignity. Our team offers the following basic care services:",
          "Basic care is particularly important to prevent infections.",
        ],
        serviceList: [
          "Showering, bathing, washing - Help with dressing and undressing",
          "Cooking, preparing food in bite-sized portions",
          "Assistance with eating",
          "Administration of tube feeding and oral nutritional supplements",
          "Assistance with using the toilet",
          "Use of incontinence products",
          "Cleaning of urethral catheter, changing of the catheter bag",
          "Cleaning and care of artificial exits",
          "Nursing measures to prevent contractures, pneumonia, Oral thrush, pressure sores, thrombosis and constipation",
          "Storage with storage aids",
          "Support while walking",
          "Transfer, e.g., from bed to wheelchair",
          "Activating care with movement exercises",
        ],
        images: [basic_care_img],
      },
      {
        id: 3,
        title: "Treatment care",
        icon: Syringe,
        url: "/services/treatment-care",
        slug: "treatment-care",
        description: [
          "Treatment care encompasses medical measures carried out by nursing professionals in the home environment on the orders of a physician to cure, alleviate, or prevent the worsening of illnesses. It falls under the umbrella of home-based nursing care (German Social Code, Book V) and is regulated by the [relevant authority/organization].",
          "Health insurance covers the costs, regardless of the care level classification. This includes all activities that are to be carried out by healthcare and elderly care professionals based on a doctor's prescription, such as...",
        ],
        serviceList: [
          "Administering injections (e.g., insulin or thrombosis prophylaxis)",
          "Wound care and dressing changes",
          "Setting up medication and preparing for medication administration",
          "Pressure ulcer treatment",
          "Measurement of vital signs, blood sugar and weight control",
          "Putting on and taking off compression stockings, applying Compression bandages",
          "Stoma care",
        ],
        images: [treatment_care_img],
      },
      {
        id: 4,
        title: "Domestic services",
        icon: BrushCleaning,
        url: "/services/domestic-services",
        slug: "domestic-services",
        description: [
          "In addition, we offer various supplementary services that are not part of basic and medical care. If needed, our patients can book domestic support services to facilitate daily life. These are billed either as in-kind benefits through the long- term care insurance or as private services.",
          "Domestic services support individuals in managing their household tasks and daily chores. These services are designed to help maintain a clean, organized, and comfortable living environment, especially for those who may have difficulty performing these tasks themselves due to age, illness, or disability. Our domestic services include:",
        ],
        serviceList: [
          "Grocery shopping and errands",
          "Cleaning and tidying up the living space",
          "Meal preparation and cooking",
          "Wash the dishes and clean the kitchen",
          "Laundry and ironing",
          "Assistance with organizing household items",
          "Light maintenance tasks around the home, eg., changing light bulbs, minor repairs",
        ],
        images: [domestic_care_img],
      },
      {
        id: 5,
        title: "Respite care",
        icon: HandHeart,
        url: "/services/respite-care",
        slug: "respite-care",
        description: [
          "Respite care provides temporary relief for primary caregivers, allowing them to take a break from their caregiving responsibilities. This service is designed to support caregivers who may be experiencing burnout or need time to attend to their own needs while ensuring that their loved ones continue to receive quality care.",
          "You want to go on vacation. You are ill or simply at the end of your rope. You do not have energy. But then there's that one person you lovingly care for every day. And you wonder: Who will look after them when I can't? Respite care exists precisely for these moments.",
          "Caregiving is love, responsibility, and often also physical and emotional strain. You do amazing work – every single day. If you want to travel, need to rest, or are ill yourself, we will take over the care of your loved one during this time – reliably, respectfully, and with heart.",
          "Respite care can be arranged for a few hours, a day, or even longer periods, depending on the needs of the caregiver and the care recipient. During respite care, trained professionals or volunteers step in to provide care and support to the individual in need, allowing the primary caregiver to rest, recharge, or attend to other responsibilities.",
          "You can let go – without a guilty conscience.",
          "Our caregivers help with everything that is needed:",
        ],
        serviceList: [
          "Get up, wash and get dressed",
          "Personal care and hygiene assistance",
          "Medication management and administration",
          "Meal preparation and feeding assistance",
          "Mobility support and transfer assistance",
          "Companionship and emotional support",
          "Light housekeeping and errands",
          "Monitoring of health and well-being",
          "Support in everyday life",
          "Conversations, closeness and safety",
        ],
        images: [respite_care_man_img, respite_care_woman_img],
      },
      {
        id: 6,
        title: "Other services",
        icon: TrendingUpDownIcon,
        url: "/services/other-services",
        slug: "other-services",
        description: [
          "In addition to the core services we offer, we also provide a range of other services to meet the diverse needs of our clients. These services are designed to enhance the quality of life and provide additional support beyond basic and medical care. Our other services include:",
        ],
        serviceList: [
          "Walks",
          "Support in organizing daily life at home",
          "Transportation services for medical appointments, hairdresser and other errands",
          "Companionship and social engagement activities",
          "Assistance with technology and communication devices",
          "Support for managing finances and paperwork",
          "Assistance with applying for nursing care benefits and social security",
          "Assistance with applying for care aids and organizing assistive devices",
          "Assistance with applying for a care level assessment",
          "Support during the care level assessment by the Medical Service of the Health Insurance Funds (MDK)",
          "Measures for cognitive activation, memory-enhancing exercises",
          "Specialized care for individuals with specific conditions (e.g., dementia care, palliative care)",
          "Leisure activities (theater, cinema, concert)",
          "Support for developing and maintaining a daily routine",
          "Pet care assistance",
          "Gardening and outdoor maintenance support",
        ],
        images: [other_services_img_1, other_services_img_2],
      },
    ],
  },
};

export default data;
