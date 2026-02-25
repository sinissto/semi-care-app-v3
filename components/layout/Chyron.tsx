import { FaPhoneVolume } from "react-icons/fa6";
import { ReactNode } from "react";
import { FaEnvelope, FaUser } from "react-icons/fa";
import Link from "next/link";
import Section from "@/components/layout/Section";

const Chyron = () => {
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
          <p className={"text-gray-primary text-[14px]/[24px] "}>
            <span>Für eine kostenlose Beratung:</span>
            <a href={"tel:+49895207821"} className={"ml-0.75 font-semibold"}>
              +49 89 520 78 21
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
                href={"mailto:info@semi-care.de"}
                className={
                  "text-[14px]/[18px] font-semibold hover:text-primary whitespace-nowrap"
                }
              >
                info@semi-care.de
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
              {/* todo: this route should go to login page, but there is no login page, so to clear error in browser dev tool console this lead to kontakt page, chage later or remove */}
              <Link href={"/kontakt"}>Anmelden</Link>
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
        "bg-secondary w-7.5 h-7.5 flex-shrink-0 flex items-center justify-center rounded-full"
      }
    >
      {children}
    </div>
  );
};
