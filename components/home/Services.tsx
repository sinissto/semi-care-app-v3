import React from "react";

import serviceImg from "@/assets/images/andrija_zuki_no_bg.png";
import offerIcon1 from "@/assets/images/offer-icon1.png";
import offerIcon2 from "@/assets/images/offer-icon2.png";
import offerIcon3 from "@/assets/images/offer-icon3.png";
import offerIcon4 from "@/assets/images/offer-icon4.png";
import Section from "@/components/layout/Section";
import Tile from "@/components/Tile";

const services = [
  {
    icon: offerIcon1,
    alt: "Medical record icon",
    title: "Medical Record",
    desc: "Duis aute irure dolor in reprehen voluptate velit esse cillum.",
  },
  {
    icon: offerIcon2,
    alt: "Ambulance icon",
    title: "Ambulance",
    desc: "Duis aute irure dolor in reprehen voluptate velit esse cillum.",
  },
  {
    icon: offerIcon3,
    alt: "Doctor icon",
    title: "Medical Advice",
    desc: "Duis aute irure dolor in reprehen voluptate velit esse cillum.",
  },
  {
    icon: offerIcon4,
    alt: "Phone icon",
    title: "24/7 Support",
    desc: "Duis aute irure dolor in reprehen voluptate velit esse cillum.",
  },
];

export default function ServicesSection() {
  return (
    <Section sectionClassName={"py-[36px]"}>
      {/* Header */}
      <div className="text-center px-3.75 mb-8 lg:mb-10 xl:mb-22.75">
        <h2 className="text-[26px]/[30px] lg:text-[42px]/[44px] xl:text-[48px]/[64px] text-black font-secondary mb-4 xl:mb-4.25">
          Unsere <span className="text-primary">Leistungen</span>
        </h2>
        <p className="text-[16px]/[24px] lg:text-[16px]/[24px] text-gray-primary px-2 lg:max-w-[85%] xl:max-w-[75%] mx-auto ">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-0 items-center">
        {/* Left Image */}
        <div className={"px-8 "}>
          <figure className={"flex items-center justify-center px-3.75 "}>
            <img
              src={serviceImg.src}
              alt="Elder care"
              className="w-[80%] object-cover overflow-hidden rounded-[50px] border-[6px] border-secondary"
            />
          </figure>
        </div>

        {/* Right Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 px-3.75">
          {services.map((service, index) => (
            // <div key={index}>
            //   <img
            //     src={imgSrc.src}
            //     className="w-10 h-10 text-green-600 mb-3"
            //   />
            //   <h3 className="text-xl font-secondary font-semibold mb-2">
            //     {service.title}
            //   </h3>
            //   <p className="text-gray-600 text-sm">{service.desc}</p>
            // </div>

            <Tile
              key={index}
              heading={service.title}
              description={service.desc}
              image={service.icon.src}
              imageAlt={service.alt}
              onHover={false}
              className={""}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
