import React from "react";
import Section from "@/components/layout/Section";
import CAPD from "@/assets/images/capd.png";
import grundpflege from "@/assets/images/grundpflege.png";
import behandlungspflege from "@/assets/images/Behandlungspflege.png";
import haushaltsversorgung from "@/assets/images/Hauswirtschaftliche.png";
import betreuungsleistungen from "@/assets/images/Betreuungsleistungen.png";
import sonstige_leistungen from "@/assets/images/Leistungen.png";
import { Button } from "@/components/ui/button";

const blogs = [
  {
    id: 1,
    image: CAPD.src,
    alt: "Durchführung der Peritonealdialyse",
    date: "February 29, 2020 in London",
    title: "Durchführung der Peritonealdialyse (CAPD)",
  },
  {
    id: 2,
    image: grundpflege.src,
    alt: "Grundpflege",
    date: "February 29, 2020 in London",
    title: "Grundpflege",
  },
  {
    id: 3,
    image: behandlungspflege.src,
    alt: "Behandlungspflege",
    date: "February 29, 2020 in London",
    title: "Behandlungspflege",
  },
  {
    id: 4,
    image: betreuungsleistungen.src,
    alt: "Zusätzlich buchbare häusliche Betreuungsleistungen",
    date: "February 29, 2020 in London",
    title: "Zusätzlich buchbare häusliche Betreuungsleistungen",
  },
  {
    id: 5,
    image: haushaltsversorgung.src,
    alt: "Hauswirtschaftliche Versorgung",
    date: "February 29, 2020 in London",
    title: "Hauswirtschaftliche Versorgung",
  },
  {
    id: 7,
    image: sonstige_leistungen.src,
    alt: "Sonstige Leistungen",
    date: "February 29, 2020 in London",
    title: "Sonstige Leistungen",
  },
];

const Blogs = () => {
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
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="h-full flex flex-col bg-gray-50 rounded-3xl shadow-md overflow-hidden hover:shadow-xl hover:bg-[var(--color-primary-light)] transition duration-300"
          >
            {/* Image */}
            <figure className={"w-full mb-6 lg:mb-10.75"}>
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full object-cover"
              />
            </figure>

            {/* Content */}
            <div className="pb-8 xl:px-8 text-center flex flex-col flex-1 ">
              {/* <p className="text-[14px]/[20px] text-secondary-dark mb-2.5 lg:mb-4.25">{blog.date}</p> */}
              <h5
                className={
                  "text-[22px]/[26px] lg:text-[26px] xl:text-[30px]/[34px] font-secondary text-black mb-3.75 lg:mb-6.25"
                }
              >
                {blog.title}
              </h5>

              <Button
                variant={"outline"}
                className="w-auto self-center text-[14px]/[18px] px-5.5 py-2 lg:px-10 lg:py-3.25 rounded-full border-2 border-secondary-dark text-secondary-dark hover:bg-secondary-dark hover:text-white transition mt-auto"
              >
                Mehr erfahren
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Blogs;
