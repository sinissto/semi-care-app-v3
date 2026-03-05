"use client";

import Section from "@/components/layout/Section";
import { useAppContext } from "@/hooks/useAppContext";

const OtherServices = () => {
  const { otherServices } = useAppContext();

  return (
    <Section
      sectionClassName={"px-4 "}
      childClassName={
        "bg-primary-light py-[36px] sm:py-[50px]  lg:py-[70px] rounded-lg "
      }
    >
      <div className="w-full flex justify-center mt-10">
        <div
          className={
            "w-full max-w-5xl mx-auto flex flex-col items-center justify-center "
          }
        >
          <h2
            className={
              "text-[26px]/[30px] lg:text-5xl/[64px] text-black font-secondary font-normal md:mb-16.5"
            }
          >
            {otherServices.heading}
          </h2>

          <div
            className={
              "w-full grid grid-cols-1 md:grid-cols-2  justify-between gap-8 px-8.25 pt-9.25 flex-wrap lg:flex-nowrap pb-13.75"
            }
          >
            {otherServices.description.map((otherService, index) => (
              <div key={index} className={" rounded-lg"}>
                <div
                  className={`group bg-white flex items-center justify-center p-4 sm:p-7.5 lg:p-6 2xl:px-8.25 2xl:pt-9.25 2xl:pb-13.75 border border-white rounded-4xl h-full lg:mb-[0px] hover:bg-[var(--color-primary-light)] hover:border-[var(--color-primary-light)] transition duration-300`}
                >
                  {/* description */}
                  <p
                    className={
                      "max-w-[95%] text-[16px]/[24px] lg:text-[18px]/[32px] text-primary font-bold text-center"
                    }
                  >
                    {otherService}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default OtherServices;
