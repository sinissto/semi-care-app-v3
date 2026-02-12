import { FaPhoneVolume } from "react-icons/fa6";
import { ReactNode } from "react";
import { FaEnvelope, FaUser } from "react-icons/fa";
import Link from "next/link";
import Section from "@/components/layout/Section";

const Chyron = () => {
  return (
    <Section>
      <div className={"flex items-center justify-between p-3.75 shadow-chyron"}>
        {/* Tel */}
        <div className={"hidden md:flex items-center gap-2.5"}>
          {/* Icon Phone */}
          <ChyronIcon>
            <FaPhoneVolume className={"rotate-45 text-white"} />
          </ChyronIcon>
          {/* Text and phone */}
          <p className={"text-gray-primary text-[14px]/[24px] "}>
            <span>For a free consultation:</span>
            <a href={"tel:+123456789"} className={"ml-0.75 font-semibold"}>
              0800 123 45 67 890
            </a>
          </p>
        </div>

        {/* Email and Login */}
        <div
          className={
            "flex-1 flex items-center justify-between md:flex-0 md:justify-normal  gap-5.5"
          }
        >
          <div className={"flex items-center gap-2.5"}>
            {/* Icon Phone */}
            <ChyronIcon>
              <FaEnvelope className={"text-white"} />
            </ChyronIcon>
            {/* Text and phone */}
            <p className={"text-gray-primary text-[14px]/[24px]"}>
              <a
                href={"mailto:info@sencare.com"}
                className={
                  "text-[14px]/[18px] font-semibold hover:text-primary"
                }
              >
                info@sencare.com
              </a>
            </p>
          </div>

          <div className={"flex items-center gap-2.5"}>
            {/* Icon Phone */}
            <ChyronIcon>
              <FaUser className={"text-white"} />
            </ChyronIcon>
            {/* Text and phone */}
            <p
              className={
                "text-[14px]/[18px] text-secondary-dark font-semibold hover:text-primary"
              }
            >
              <Link href={"/login"}>Login</Link>
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
        "bg-secondary w-7.5 h-7.5 flex items-center justify-center rounded-full"
      }
    >
      {children}
    </div>
  );
};
