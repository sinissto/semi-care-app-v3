"use client";

import { FaPhoneVolume } from "react-icons/fa6";
import { FaMobileScreenButton } from "react-icons/fa6";
import { ReactNode } from "react";
import { FaEnvelope } from "react-icons/fa";
import Section from "@/components/layout/Section";
import { useAppContext } from "@/hooks/useAppContext";

const Chyron = () => {
  const { contactInfo } = useAppContext();
  const { phone, email, mobile } = contactInfo;

  return (
    <Section sectionClassName={"my-0 lg:my-0"} childClassName={"mt-0"}>
      <div className={"flex items-center justify-between p-3.75 shadow-chyron"}>
        {/* Tel */}
        <div className={"flex flex-row items-center gap-2.5"}>
          {/* Icon Phone */}
          <ChyronIcon>
            <FaPhoneVolume className={"rotate-45 text-white"} />
          </ChyronIcon>
          {/* Text and phone */}
          <p
            className={
              "text-gray-primary text-[16px]/[24px] flex items-center "
            }
          >
            <span className={"hidden lg:flex"}>
              Für eine kostenlose Beratung:
            </span>
            <a
              href={`tel:${phone}`}
              className={
                "text-[18px]/[18px] ml-0.75 font-semibold hover:text-primary"
              }
            >
              {phone}
            </a>
          </p>
        </div>

        {/* Email  */}
        <div
          className={
            "flex-1 flex items-center justify-center md:flex-0 md:justify-normal gap-5.5"
          }
        >
          <div className={"hidden lg:flex"}>
            <div className={"flex items-center gap-2.5 min-w-0"}>
              <ChyronIcon>
                <FaEnvelope className={"text-white size-3.5 shrink-0"} />
              </ChyronIcon>
              <p className={"text-gray-primary text-[14px]/[24px]"}>
                <a
                  href={`mailto:${email}`}
                  className={
                    "text-[18px]/[18px] font-semibold hover:text-primary whitespace-nowrap"
                  }
                >
                  {email}
                </a>
              </p>
            </div>
          </div>

          {/* Mobile Phone */}
          <div className={"flex lg:hidden"}>
            <div className={"flex items-center gap-2.5 min-w-0"}>
              <ChyronIcon>
                <FaMobileScreenButton
                  className={"text-white size-4 shrink-0"}
                />
              </ChyronIcon>
              <p className={"text-gray-primary"}>
                <a
                  href={`tel:${mobile}`}
                  className={
                    "text-[18px]/[18px] font-semibold hover:text-primary whitespace-nowrap"
                  }
                >
                  {mobile}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Chyron;

const ChyronIcon = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={
        "bg-secondary w-8 h-8 shrink-0 flex items-center justify-center rounded-full"
      }
    >
      {children}
    </div>
  );
};
