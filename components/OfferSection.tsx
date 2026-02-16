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
    description: "Eine Peritonealdialyse verändert den Alltag – für Betroffene genauso wie für ihre Angehörigen.",
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
    description: "Behandlungspflege: medizinische Maßnahmen durch Pflegefachkräfte auf ärztliche Anordnung zu Hause.",
  },
];

const OfferSection = () => {
  return (
    // todo: Primeniti linear-gradient kada se resi problem sa pozadinom hedera (trenutno se koristi kao obicna bela pozadina zbog problema sa slikom pozadine hedera, i treba prilagoditi kada se heder pozadina reši)
    <Section sectionClassName={"sm:mt-[30px] lg:mt-[160px]  bg-linear-to-b from-[#fff] to-[#fff]"}>
      <div className={"max-w-5xl mx-auto flex flex-col items-center justify-center "}>
        <h1 className={"text-[26px]/[30px] lg:text-5xl/[64px] text-black font-secondary font-normal md:mb-16.5"}>
          Unsere beliebtesten <span className={"text-primary"}>Leistungen</span>
        </h1>

        <div className={"flex items-center justify-center gap-4 px-8.25 pt-9.25 flex-wrap md:flex-nowrap pb-13.75"}>
          {offers.map((offer, offerIdx) => (
            // <div
            //   key={offerIdx}
            //   className="basis-full md:basis-1/2 lg:basis-1/3 px-3.75 mb-4 lg:mb-0"
            // >
            //   <div
            //     className={
            //       "group bg-white flex flex-col items-center px-8.25 pt-9.25 pb-13.75 shadow-[0px_6px_38px_0_#dae0e5] border border-white rounded-4xl hover:bg-primary hover:border-primary transition duration-300"
            //     }
            //   >
            //     {/* icon */}
            //     <div
            //       className={
            //         "flex flex-col items-center group-hover:bg-white p-6  rounded-4xl mb-2"
            //       }
            //     >
            //       <img src={offer.icon} alt={offer.alt} />
            //     </div>
            //
            //     {/* heading */}
            //     <h5
            //       className={
            //         "text-[30px]/[30px] text-black font-secondary -tracking-[0.9px] mb-2.5"
            //       }
            //     >
            //       {offer.heading}
            //     </h5>
            //
            //     {/* description */}
            //     <p className={"text-[16px]/[24px] text-black text-center"}>
            //       {offer.description}
            //     </p>
            //   </div>
            // </div>
            <Tile
              key={offerIdx}
              heading={offer.heading}
              description={offer.description}
              image={offer.icon}
              imageAlt={offer.alt}
              onHover={true}
              backgroundColor={"lg:p-6 lg:mb-0 shadow-[0px_6px_38px_0_#dae0e5]"}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default OfferSection;
