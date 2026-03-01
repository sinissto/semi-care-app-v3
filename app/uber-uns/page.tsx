import Image from "next/image";
import Section from "@/components/layout/Section";

import andrija_zuki_img from "@/assets/images/about_us/andrija_zuki_no_bg.png";
import ja_i_zuki_img from "@/assets/images/about_us/ja_i_zuki_no_bg.png";
import humanity_and_trust_img from "@/assets/images/about_us/humanity_and_trust2.jpg";
import expertise_and_experience_img from "@/assets/images/about_us/expertise_and_experience2.png";
import care_in_place_img from "@/assets/images/about_us/care_at_home.png";
import individual_consultation_img from "@/assets/images/about_us/individual_consultation2.png";
import reliability_and_accessibility_img from "@/assets/images/about_us/reliability_and_accessibility2.jpg";
import trust_of_relatives_img from "@/assets/images/about_us/trust_of_relatives2.jpg";

const defaultAchievements = [
  { label: "Peritonealdialyse (CAPD)", value: "17" },
  { label: "Grundpflege", value: "52" },
  { label: "Behandlungspflege", value: "28+" },
  { label: "Hauswirtschaftliche Leistungen", value: "38+" },
  { label: "Verhinderungspflege", value: "83+" },
];

const defaultSpecialUs = [
  {
    img: humanity_and_trust_img.src,
    alt: "Das Bild zeigt Menschlichkeit und Vertrauen.",
    label: "Menschlichkeit und Vertrauen",
    description:
      "Bei SemiCare stehen die Menschen im Mittelpunkt unseres Handelns – nicht nur unserer Pflegedienstleistungen. Wir bieten Pflege nicht „nach Plan“, sondern mit Herz. Wir hören zu, wir verstehen, wir unterstützen – auch in schwierigen Zeiten. Wir bauen langfristige Beziehungen auf – zu unseren Klienten und ihren Familien.",
  },
  {
    img: expertise_and_experience_img.src,
    alt: "Bild zeigt Fachkompetenz und Erfahrung",
    label: "Fachwissen und Erfahrung",
    description:
      "Unser qualifiziertes Team verfügt über fundiertes Fachwissen und langjährige Erfahrung in der ambulanten und stationären Versorgung. Wir arbeiten nach höchsten Qualitätsstandards und bilden uns regelmäßig fort. So gewährleisten wir eine professionelle, medizinisch fundierte und zugleich mitfühlende Betreuung.",
  },
  {
    img: care_in_place_img.src,
    alt: "Bild zur häuslichen Pflege",
    label: "Pflege an einem Ort, an dem Sie sich sicher fühlen",
    description:
      "Ihr Zuhause ist ein Ort voller Erinnerungen, Geborgenheit und Vertrautheit. Genau hier setzen wir an. Unser ambulanter Pflegedienst ermöglicht es Menschen, in ihrer gewohnten Umgebung zu bleiben, so lange wie möglich selbstständig und selbstbestimmt zu leben und sich dennoch gut betreut zu fühlen.",
  },
  {
    img: individual_consultation_img.src,
    alt: "Abbildung einer individuellen ärztlichen Beratung",
    label: "Einzelberatung",
    description:
      "Wir wissen, dass jeder Mensch seine eigene Geschichte und seine eigenen Bedürfnisse hat. Darauf basiert unsere Betreuung. Individuell zugeschnittene Pflege steht bei uns im Mittelpunkt. Unsere Betreuung beschränkt sich nicht auf ein standardisiertes Programm, sondern beinhaltet Zeit, Geduld und Aufmerksamkeit.",
  },
  {
    img: reliability_and_accessibility_img.src,
    alt: "Bild von Arzt und Patient im Gespräch über den Behandlungsplan",
    label: "Zuverlässigkeit und Zugänglichkeit",
    description:
      "Zuverlässigkeit, Pünktlichkeit und klare Kommunikation sind für uns selbstverständlich. Wir sind für Sie da – auch in schwierigen Zeiten. Im Notfall erreichen Sie uns rund um die Uhr, auch an Sonn- und Feiertagen.",
  },
  {
    img: trust_of_relatives_img.src,
    alt: "Familienfoto vom Boden aus, das eine Familie mit drei Generationen zeigt, die lächelnd einander umarmen.",
    label: "Vertrauen der Verwandten",
    description:
      "Die Entscheidung, die eigenen Eltern oder einen geliebten Menschen Fremden anzuvertrauen, ist nie leicht. Wir bei SemiCare verstehen diese Gefühle sehr gut – denn für uns ist Pflege mehr als nur eine Dienstleistung. Es ist eine Frage des Vertrauens. Vertrauen beginnt dort, wo man loslassen kann, im Wissen, dass die Hilfsbedürftigen in guten Händen sind.",
  },
];

const defaultProps = {
  title: "Über uns",
  description:
    "Für uns bedeutet Pflege mehr als nur Unterstützung im Alltag. Sie bedeutet Nähe, Respekt und echtes Interesse am Einzelnen. Bei SemiCare unterstützen wir Senioren mit dem Ziel, ihre Lebensqualität zu erhalten und ihnen ein gutes und sicheres Leben in ihren eigenen vier Wänden zu ermöglichen.",
  mainImage: {
    src: ja_i_zuki_img.src,
    alt: "Eine junge Pflegekraft in einem rosa Hemd und eine lächelnde ältere Dame",
  },
  secondaryImage: {
    src: andrija_zuki_img.src,
    alt: "Ein junger Mann im rosa Hemd und eine lächelnde ältere Dame, die von einem Pflegedienst betreut wird",
  },
  breakout: {
    title: "Semi<span className='text-secondary'>Care</span>",
    description: "Ambulante Pflege mit Herz und Verantwortungsbewusstsein.",
  },
  achievementsTitle: "Leben, die durch Zahlen verbessert wurden",
  achievementsDescription:
    "Die Betreuung mit Hingabe, Fachkompetenz und einer herzlichen Art hat dazu geführt, dass Familien uns vertrauen.",
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
          <Image
            src={mainImage.src}
            alt={mainImage.alt}
            width={1024}
            height={1114}
            className="h-full w-auto max-h-[620px] rounded-[50%] object-cover ring-8 ring-primary/30 "
          />
        </div>
        <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
          <div className="flex flex-col justify-between gap-6 rounded-xl p-7 md:w-1/2 lg:w-auto bg-white">
            <div>
              <p className="text-5xl text-primary text-center font-bold mb-6">
                {/*{breakout.title}*/}
                Semi<span className="text-secondary">Care</span>
              </p>
              <p className="text-grey-primary text-center text-xl">
                {/*{breakout.description}*/}
                Ambulante Pflege mit Herz und Verantwortungsbewusstsein.
              </p>
            </div>
          </div>
          <Image
            src={secondaryImage.src}
            alt={secondaryImage.alt}
            width={860}
            height={860}
            className="grow basis-0  rounded-xl object-cover md:w-1/2  lg:w-auto  ring-8 ring-primary/30"
          />
        </div>
      </div>

      <div className="py-18 px-4">
        <div className="mt-6 flex flex-wrap justify-center gap-8 bg-primary/98 p-10 rounded-xl mb-12">
          <p className={"max-w-4xl text-center text-xl text-white"}>
            Wir begegnen jedem Menschen individuell mit Empathie und Respekt –
            unabhängig von seiner Religion, Herkunft, Sprache oder sozialem
            Status. Unsere Pflege gestalten wir so, wie wir sie auch für uns
            wünschen würden. Wir passen uns Ihren Wünschen an. Unser Team
            übernimmt Pflege in deutscher, englischer, bosnischer, kroatischer
            und serbischer Sprache.
          </p>
          <p className={"max-w-4xl text-center text-xl text-white"}>
            Wir sind ein verlässlicher Partner für Familienmitglieder. Wir
            bieten Entlastung, Beratung und Unterstützung – transparent, ehrlich
            und unkompliziert. So schaffen wir Sicherheit für die ganze Familie.
          </p>
          <p className={"max-w-4xl text-center text-xl text-white"}>
            Am Ende zählt nur eines – dass Sie mit ruhigem Herzen wissen, dass
            Ihre Lieben in guten Händen sind.
          </p>
        </div>
      </div>

      {specialUs.map((item, idx) => (
        <div key={idx} className={"px-4"}>
          <div className="relative overflow-hidden rounded-xl bg-primary/5 p-7 md:p-16 mb-12 px-4">
            <div className={"flex flex-col items-center gap-12 md:flex-row"}>
              <Image
                src={item.img}
                alt={item.alt}
                width={500}
                height={500}
                className={"max-w-52"}
              />
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
