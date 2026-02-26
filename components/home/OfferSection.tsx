import Section from "@/components/layout/Section";

import offerImg1 from "@/assets/images/offer-section-img1.png";
import offerImg2 from "@/assets/images/offer-section-img2.png";
import offerImg3 from "@/assets/images/offer-section-img3.png";
import Tile from "@/components/Tile";

const offers = [
  {
    icon: offerImg1.src,
    alt: "Doctor icon",
    heading: "Peritonealdialyse (CAPD)",
    description:
      "Eine Peritonealdialyse verändert den Alltag – für Betroffene genauso wie für ihre Angehörigen.",
  },
  {
    icon: offerImg2.src,
    alt: "Grundpflege",
    heading: "Grundpflege",
    description:
      "Die Grundpflege unterstützt Menschen bei ihren täglichen Bedürfnissen und sorgt für Wohlbefinden, Hygiene und Sicherheit.",
  },
  {
    icon: offerImg3.src,
    alt: "Behandlungspflege",
    heading: "Behandlungspflege",
    description:
      "Behandlungspflege: medizinische Maßnahmen durch Pflegefachkräfte auf ärztliche Anordnung zu Hause.",
  },
];

const OfferSection = () => {
  return (
    <Section
      sectionClassName={"sm:mt-[30px] bg-linear-to-b from-[#fff] to-[#fff]"}
    >
      <div
        className={
          "max-w-5xl mx-auto flex flex-col items-center justify-center "
        }
      >
        <h2
          className={
            "text-[26px]/[30px] lg:text-5xl/[64px] text-black font-secondary font-normal md:mb-16.5"
          }
        >
          Unsere beliebtesten <span className={"text-primary"}>Leistungen</span>
        </h2>

        <div
          className={
            "flex  justify-center gap-4 px-8.25 pt-9.25 flex-wrap md:flex-nowrap pb-13.75"
          }
        >
          {offers.map((offer, offerIdx) => (
            <Tile
              key={offerIdx}
              heading={offer.heading}
              description={offer.description}
              image={offer.icon}
              imageAlt={offer.alt}
              onHover={true}
              backgroundColor={"lg:p-6 lg:mb-0 shadow-[0px_6px_38px_0_#dae0e5]"}
              className={"w-[33%]"}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default OfferSection;
