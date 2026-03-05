"use client";

import React from "react";
import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useAppContext } from "@/hooks/useAppContext";
import { useRouter } from "next/navigation";

const ServiceCards = () => {
  const { services } = useAppContext().services;
  const router = useRouter();

  return (
    <Section sectionClassName={"mt-[120px]"}>
      {/* Section Header */}
      <div className="text-center mb-6.5 sm:mb-7.5 md:mb-10 lg:mb-16.5">
        <h2 className="text-[26px]/[30px] sm:text-[34px]/[36px] md:text-[36px]/[42px] lg:text-[42px]/[44px] xl:text-[48px]/[64px] font-secondary">
          Unsere <span className="text-primary">Leistungen</span>
        </h2>
      </div>

      {/* Blog Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 auto-rows-fr gap-8 max-w-[90%] mx-auto items-stretch">
        {services.map((service) => {
          const imageSrc = service.images[0]?.src;
          return (
            <div
              key={service.id}
              className="h-full flex flex-col bg-gray-50 rounded-3xl shadow-md overflow-hidden hover:shadow-xl hover:bg-[var(--color-primary-light)] transition duration-300"
            >
              {/* Image */}
              <figure
                className={"w-full h-[200px] mb-6 lg:mb-10.75 overflow-hidden"}
              >
                <Image
                  src={imageSrc}
                  alt={service.title}
                  width={350}
                  height={200}
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                />
              </figure>

              {/* Content */}
              <div className="pb-8 xl:px-8 text-center flex flex-col flex-1 ">
                {/* <p className="text-[14px]/[20px] text-secondary-dark mb-2.5 lg:mb-4.25">{service.date}</p> */}
                <h5
                  className={
                    "text-[22px]/[26px] lg:text-[26px] xl:text-[30px]/[34px] font-secondary text-black mb-3.75 lg:mb-6.25"
                  }
                >
                  {service.title}
                </h5>

                <Button
                  variant={"outline"}
                  className="w-auto self-center text-[14px]/[18px] px-5.5 py-2 lg:px-10 lg:py-3.25 rounded-full border-2 border-secondary-dark text-secondary-dark hover:bg-secondary-dark hover:text-white transition mt-auto"
                  onClick={() => router.push(service.url)}
                >
                  Mehr erfahren
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default ServiceCards;
