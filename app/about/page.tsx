import { cn } from "@/lib/utils";

import andrija_zuki_img from "@/assets/images/about_us/andrija_zuki_no_bg.png";
import ja_i_zuki_img from "@/assets/images/about_us/ja_i_zuki_no_bg.png";
import humanity_and_trust_img from "@/assets/images/about_us/humanity_and_trust.jpg";
import expertise_and_experience_img from "@/assets/images/about_us/expertise_and_experience.png";
import care_in_place_img from "@/assets/images/about_us/care_at_home.png";
import individual_consultation_img from "@/assets/images/about_us/individual_consultation.png";
import reliability_and_accessibility_img from "@/assets/images/about_us/reliability_and_accessibility.jpg";
import trust_of_relatives_img from "@/assets/images/about_us/trust_of_relatives.jpg";
import Section from "@/components/layout/Section";

const defaultAchievements = [
  { label: "Peritoneal Dialysis (CADP)", value: "17" },
  { label: "Basic Care", value: "52" },
  { label: "Treatment Care", value: "28+" },
  { label: "Domestic Care", value: "38+" },
  { label: "Respite Care", value: "83+" },
];

const defaultSpecialUs = [
  {
    img: humanity_and_trust_img.src,
    alt: "Humanity and trust image",
    label: "Humanity and trust",
    description:
      'At SemiCare, people are at the heart of everything we do – not just care services. We don\'t provide care "according to a plan", but with heart. We listen, we understand, we support – even during difficult times. We build long-term relationships – with our clients and their families.',
  },
  {
    img: expertise_and_experience_img.src,
    alt: "Expertise and Experience photo",
    label: "Expertise and Experience",
    description:
      "Our qualified team possesses in-depth expertise and many years of experience in outpatient and inpatient care. We work according to the highest quality standards and participate in regular professional development. This ensures professional care: medically sound and delivered with compassionate care.",
  },
  {
    img: care_in_place_img.src,
    alt: "Care at home photo",
    label: "Care in a place where you feel safe",
    description:
      "Your own home is a place full of memories, security and familiarity. That's exactly where we come in. Our outpatient care service enables people to remain in their familiar surroundings, to live independently and autonomously for as long as possible, and yet to feel well cared for.",
  },
  {
    img: individual_consultation_img.src,
    alt: "Individual medical consultation",
    label: "Individual consultation",
    description:
      "We know that every person has their own story and their own needs. That's what we base our care on. Individually tailored care is our focus. Our care isn't limited to a routine program, but is provided with time, patience, and attention.",
  },
  {
    img: reliability_and_accessibility_img.src,
    alt: "Doctor and patient discussing treatment plan",
    label: "Reliability and accessibility",
    description:
      "Reliability, punctuality, and clear communication are a matter of course for us. We are there for you – even when things get difficult. We are available 24 hours a day for emergencies, including Sundays and public holidays.",
  },
  {
    img: trust_of_relatives_img.src,
    alt: "Family photo",
    label: "Trust of relatives",
    description:
      "The decision to entrust one's parents or a loved one to strangers is never easy. At SemiCare, we understand these feelings perfectly – because for us, caregiving is more than just a service. It's a matter of trust. Trust begins where you can let go, knowing that those in need are in good hands.",
  },
];

const defaultProps = {
  title: "About Us",
  description:
    "For us, care means more than just support in everyday life. It means closeness, respect, and genuine interest in the individual. At SemiCare, we support seniors with the goal of maintaining their quality of life and enabling them to live well and safely in their own homes.",
  mainImage: {
    src: ja_i_zuki_img.src,
    alt: "Andrija in a pink shirt and Zuki smiling",
  },
  secondaryImage: {
    src: andrija_zuki_img.src,
    alt: "Andrija in a pink shirt and Zuki smiling",
  },
  breakout: {
    title: "SemiCare",
    description: "Outpatient nursing service with heart and responsibility.",
  },
  achievementsTitle: "Lives made better in Numbers",
  achievementsDescription:
    "Providing care with dedication, expertise and warm approach made families to trust in us.",
  achievements: defaultAchievements,
  specialUs: defaultSpecialUs,
};

const AboutUsPage = () => {
  const {
    title,
    description,
    mainImage,
    secondaryImage,
    breakout,
    achievementsTitle,
    achievementsDescription,
    achievements,
    specialUs,
  } = { ...defaultProps };

  return (
    <Section>
      {/*<div className={cn("", className)}>*/}
      {/*  <div className="container mx-auto">*/}
      <div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left px-4">
        <h1 className="text-5xl lg:text-6xl text-primary font-semibold lg:ml-32">
          {title}
        </h1>
        <p className="text-xl text-grey-primary">{description}</p>
      </div>
      <div className="grid gap-7 lg:grid-cols-3 px-4">
        <div className={"lg:col-span-2 flex items-center justify-center"}>
          <img
            src={mainImage.src}
            alt={mainImage.alt}
            className="h-full w-auto max-h-[620px] rounded-[50%] object-cover ring-8 ring-primary/30 "
          />
        </div>
        <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
          <div className="flex flex-col justify-between gap-6 rounded-xl p-7 md:w-1/2 lg:w-auto bg-white">
            <div>
              <p className="text-5xl text-primary text-center font-bold mb-6">
                {breakout.title}
              </p>
              <p className="text-grey-primary text-center text-xl">
                {breakout.description}
              </p>
            </div>
          </div>
          <img
            src={secondaryImage.src}
            alt={secondaryImage.alt}
            className="grow basis-0  rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto ring-8 ring-primary/30"
          />
        </div>
      </div>

      <div className="py-18 px-4">
        <div className="mt-6 flex flex-wrap justify-center gap-8 bg-primary/98 p-10 rounded-xl mb-12">
          <p className={"max-w-4xl text-center text-xl text-white"}>
            We treat each person individually with empathy and respect –
            regardless of their religion, origin, language, or social status. We
            provide care the way we would want it for ourselves. We adapt to
            your wishes. Our team provides care in German, English, Bosnian,
            Croatian, and Serbian.
          </p>
          <p className={"max-w-4xl text-center text-xl text-white"}>
            We are a reliable partner for family members. We provide relief,
            advice, and support – transparently, honestly, and accessibly. In
            this way, we create security for the whole family.
          </p>
          <p className={"max-w-4xl text-center text-xl text-white"}>
            In the end, only one thing matters – that you know with a calm heart
            that your loved ones are in good hands.
          </p>
        </div>
      </div>

      {specialUs.map((item, idx) => (
        <div key={idx} className={"px-4"}>
          <div className="relative overflow-hidden rounded-xl bg-secondary/20 p-7 md:p-16 mb-12 px-4">
            <div className={"flex flex-col items-center gap-12 md:flex-row"}>
              <img src={item.img} alt={item.alt} className={"max-w-52"} />
              <div>
                <h2 className="text-2xl text-center text-primary font-semibold md:text-3xl mb-4 md:text-left">
                  {item.label}
                </h2>
                <p className="text-lg text-center text-grey-primary md:text-xl mb-4 md:text-left">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="relative overflow-hidden rounded-xl bg-primary/15 p-7 md:p-16 mx-4">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h2 className="text-3xl text-primary font-semibold md:text-4xl">
            {achievementsTitle}
          </h2>
          <p className="max-w-2xl text-xl text-grey-primary ">
            {achievementsDescription}
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 text-center md:grid-cols-3 lg:grid-cols-5">
          {achievements.map((item, idx) => (
            <div className="flex flex-col gap-2" key={item.label + idx}>
              <span className="text-4xl text-primary font-semibold md:text-5xl">
                {item.value}
              </span>
              <p className="text-sm md:text-base">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      {/*  </div>*/}
      {/*</div>*/}
    </Section>
  );
};

export default AboutUsPage;
