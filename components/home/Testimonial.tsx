import React from "react";
import { Quote, HeartPulse } from "lucide-react";
import Section from "@/components/layout/Section";
import quoteImg from "@/assets/images/happy-clients-section-img2.png";
import crossInHeartImg from "@/assets/images/carousel-bottom-img.png";
import logoImg from "@/assets/images/SemiCareLogo.png";

export default function TestimonialCard() {
  return (
    <Section sectionClassName={""}>
      <div className="relative max-w-[90%] mx-auto bg-gray-50 rounded-3xl shadow-sm text-center px-3.75 py-16">
        {/* Quote Icon */}
        {/*<Quote className="w-10 h-10 mx-auto text-green-600 mb-6" />*/}
        <figure>
          <img
            src={quoteImg.src}
            alt={"Quote Icon"}
            className="w-[55px] h-[42px] mx-auto mb-8"
          />
        </figure>

        {/* Quote Text */}
        <p className="text-[16px]/[28px] md:text-xl/[30px] lg:text-2xl/[36px] text-gray-primary italic font-secondary max-w-3xl mx-auto">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident deserunt mollit anim id est laborum.
        </p>

        {/* Divider */}
        <div className="w-[25%] h-[1px] bg-primary mx-auto my-8" />

        {/* Name */}
        <h3 className="text-xl md:text-2xl/[30px] font-secondary font-normal text-black">
          Max Mustermann
        </h3>
        <p className="text-[16px]/[24px] text-gray-primary mt-1">
          Sohn von Anton Mustermann
        </p>

        {/* Bottom Floating Icon */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-18">
          <div className="p-4 rounded-full">
            {/*<HeartPulse className="w-10 h-10 text-green-600" />*/}
            {/* <figure>
              <img src={logoImg.src} alt={"Cross in Heart Icon"} className="w-[68px] h-auto mx-auto" />
            </figure> */}
          </div>
        </div>
      </div>
    </Section>
  );
}
