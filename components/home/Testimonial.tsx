"use client";

import React from "react";
import { Quote, HeartPulse } from "lucide-react";
import Section from "@/components/layout/Section";
import quoteImg from "@/assets/images/happy-clients-section-img2.png";
import crossInHeartImg from "@/assets/images/carousel-bottom-img.png";
import logoImg from "@/assets/images/SemiCareLogo.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonialData = [
  {
    quote:
      "Wir sind dem gesamten Team dieses Pflegedienstes von Herzen dankbar. In einer Zeit, die für unsere Familie nicht immer leicht war, haben die Pflegekräfte nicht nur professionell geholfen, sondern auch unglaublich viel Menschlichkeit, Wärme und Verständnis gezeigt.",
    name: "Müller Hans",
  },
  {
    quote:
      "Jeder Besuch war geprägt von Respekt, Geduld und echter Fürsorge. Man merkt sofort, dass hier Menschen arbeiten, die ihren Beruf mit Herz ausüben. Sie haben nicht nur gepflegt, sondern auch Mut gemacht, zugehört und ein Gefühl von Sicherheit gegeben.",
    name: "Lea Barthold",
  },
  {
    quote:
      "Für uns ist dieser Pflegedienst weit mehr als nur Unterstützung im Alltag – er ist eine große Hilfe und ein echter Halt gewesen. Vielen Dank für eure liebevolle Arbeit, euren Einsatz und eure Menschlichkeit. Wir können euch von ganzem Herzen weiterempfehlen. ",
    name: "Heinz Rudolph",
  },
];

export default function TestimonialCard() {
  return (
    <Section>
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides={true}
        pagination={{
          clickable: true,
          dynamicBullets: false,
        }}
        navigation={{
          prevEl: ".testimonial-prev",
          nextEl: ".testimonial-next",
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        allowTouchMove={true}
        simulateTouch={true}
        grabCursor={true}
        touchRatio={1}
        touchAngle={45}
        className="w-full testimonial-swiper"
      >
        {/*Button Left */}
        <button
          type="button"
          aria-label="Previous slide"
          className="testimonial-prev absolute left-8 top-2/3 md:top-1/2 md:-translate-y-1/2 z-20 h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/90 text-primary shadow-md border border-gray-200 hover:bg-primary hover:text-white transition-colors duration-200 flex items-center justify-center"
        >
          <span className="text-2xl leading-none flex items-center justify-center">
            <FaChevronLeft />
          </span>
        </button>

        <button
          type="button"
          aria-label="Next slide"
          className="testimonial-next absolute right-8 top-2/3 md:top-1/2 md:-translate-y-1/2 z-20 h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/90 text-primary shadow-md border border-gray-200 hover:bg-primary hover:text-white transition-colors duration-200 flex items-center justify-center"
        >
          <span className="text-2xl leading-none">
            <FaChevronRight />
          </span>
        </button>

        {testimonialData.map((testimonial, index) => (
          <SwiperSlide key={index} className={"px-6"}>
            <div className="relative bg-gray-50 rounded-3xl shadow-sm text-center px-3.75 py-16">
              {/* Quote Icon */}
              {/*<Quote className="w-10 h-10 mx-auto text-green-600 mb-6" />*/}
              <figure>
                <Image
                  src={quoteImg.src}
                  alt={"Zitat-Symbol"}
                  width={110}
                  height={84}
                  className="w-[55px] h-[42px] mx-auto mb-8"
                />
              </figure>

              {/* Quote Text */}
              <p className="text-[16px]/[28px] md:text-xl/[30px] lg:text-2xl/[36px] text-gray-primary italic font-secondary max-w-xl lg:max-w-3xl mx-auto">
                {testimonial.quote}
              </p>

              {/* Divider */}
              <div className="w-[25%] h-[1px] bg-primary mx-auto my-8" />

              {/* Name */}
              <h3 className="text-xl md:text-2xl/[30px] font-secondary font-normal text-black">
                {testimonial.name}
              </h3>
              {/*<p className="text-[16px]/[24px] text-gray-primary mt-1">*/}
              {/*  Sohn von Anton Mustermann*/}
              {/*</p>*/}

              {/* Bottom Floating Icon */}
              {/*<div className="absolute left-1/2 -translate-x-1/2 -bottom-18">*/}
              {/*  <div className="p-4 rounded-full">*/}
              {/*    <figure>*/}
              {/*      <Image*/}
              {/*        src={logoImg.src}*/}
              {/*        width={320}*/}
              {/*        height={450}*/}
              {/*        alt={"Kreuz im Herz-Symbol"}*/}
              {/*        className="w-[68px] h-auto mx-auto"*/}
              {/*      />*/}
              {/*    </figure>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
}
