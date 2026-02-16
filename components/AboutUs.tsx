import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import Section from "@/components/layout/Section";

import aboutUsImg from "@/assets/images/popup-video-img.png";
import topGreenImg from "@/assets/images/video-section-top-img.png";
import bottomPurpleImg from "@/assets/images/video-section-bottom-img.png";

interface AboutUsProps {
  className?: string;
}

const AboutUs = ({ className }: AboutUsProps) => {
  return (
    <Section
      sectionClassName={cn("pb-[30px] lg:pb-32 relative z-20", className)}
    >
      <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col items-center gap-5 text-center md:items-start md:text-left lg:ml-18 ">
          <h1 className="text-4xl/[64px] text-black font-secondary font-semibolds text-pretty -tracking-[0.1px] text-center lg:text-left lg:text-5xl/[64px] mb-6.5">
            Welcome to Semi<span className={"text-primary"}>Care</span>
          </h1>
          <p className="max-w-xl md:text-[20px]/[34px] text-center md:text-left mx-auto md:mx-0 text-gray-primary mb-7.75">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <div className="flex w-full flex-col items-center md:items-start justify-center gap-2 md:justify-start mb-8.75">
            <Button asChild className="w-fit rounded-full">
              <Link
                href={"/about"}
                className={
                  "flex-1 uppercase text-[16px]/[24px]! font-bold! py-4 px-9.25 border border-primary hover:bg-white hover:text-primary transition-all duration-300 rounded-full"
                }
              >
                About Us
              </Link>
            </Button>
          </div>

          <div>
            <h4 className={"text-2xl/[28px] font-secondary mb-1"}>
              Need clinical advice?
            </h4>
            <h4 className={"text-4xl/[42px] text-primary font-secondary mb-1"}>
              0800 123 45 678
            </h4>
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <div className={"relative w-[80%]"}>
            <figure className="relative z-20">
              <img
                src={aboutUsImg.src}
                alt={"Image of doctor with play button at the center"}
                className="w-full h-auto"
              />
            </figure>

            <figure className="absolute -top-7.5 -right-7.5">
              <img
                src={topGreenImg.src}
                alt={"Green retangle image"}
                className="w-22.5 h-22.5"
              />
            </figure>

            <figure className="absolute -bottom-7.5 -left-7.5 ">
              <img
                src={bottomPurpleImg.src}
                alt={"White retangle image with purple border"}
                className="w-22.5 h-22.5"
              />
            </figure>
          </div>
        </div>
      </div>
    </Section>
  );
};

export { AboutUs };
