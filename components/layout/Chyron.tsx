"use client";

import { FaPhoneVolume } from "react-icons/fa6";
import { ReactNode } from "react";
import { FaEnvelope } from "react-icons/fa";
import Section from "@/components/layout/Section";
import { useAppContext } from "@/hooks/useAppContext";

const Chyron = () => {
  const { contactInfo } = useAppContext();
  const { phone, email } = contactInfo;

  return (
    <Section sectionClassName={"my-0 lg:my-0"} childClassName={"mt-0"}>
      <div className={"flex items-center justify-between p-3.75 shadow-chyron"}>
        {/* Tel */}
        <div className={"hidden md:flex items-center gap-2.5"}>
          {/* Icon Phone */}
          <ChyronIcon>
            <FaPhoneVolume className={"rotate-45 text-white"} />
          </ChyronIcon>
          {/* Text and phone */}
          <p
            className={
              "text-gray-primary text-[14px]/[24px] flex items-center "
            }
          >
            <span>Für eine kostenlose Beratung:</span>
            <a
              href={`tel:${phone}`}
              className={"ml-0.75 font-semibold hover:text-primary"}
            >
              {phone}
            </a>
          </p>
        </div>

        {/* Email and Login */}
        <div
          className={
            "flex-1 flex items-center justify-between md:flex-0 md:justify-normal  gap-5.5"
          }
        >
          <div className={"flex items-center gap-2.5 min-w-0"}>
            <ChyronIcon>
              <FaEnvelope className={"text-white size-3.5 shrink-0"} />
            </ChyronIcon>
            <p className={"text-gray-primary text-[14px]/[24px]"}>
              <a
                href={`mailto:${email}`}
                className={
                  "text-[14px]/[18px] font-semibold hover:text-primary whitespace-nowrap"
                }
              >
                {email}
              </a>
            </p>
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
        "bg-secondary w-7.5 h-7.5 shrink-0 flex items-center justify-center rounded-full"
      }
    >
      {children}
    </div>
  );
};
