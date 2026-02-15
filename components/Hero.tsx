import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import Section from "@/components/layout/Section";

interface HeroProps {
  heading: string;
  description: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
  };
  image: {
    src: string;
    alt: string;
  };
  className?: string;
}

const Hero = ({
  heading = "We give seniors the love they deserve",
  description = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
  buttons = {
    primary: {
      text: "Our Care Services",
      url: "/about",
    },
  },
  image = {
    src: "/images/index-banner-right-img.png",
    alt: "Hero section demo image showing interface components",
  },
  className,
}: HeroProps) => {
  return (
    <Section sectionClassName={cn("pb-[30px] relative z-20", className)}>
      <div className="grid items-center gap-6 md:grid-cols-2 lg:gap-8 lg:mt-20 2xl:mt-44">
        <div className="flex flex-col items-center text-center md:items-start md:text-left sm:mb-8 lg:ml-18 xl:ml-20">
          <h1 className="text-[34px]/[38px] sm:text-[42px]/[44px] md:text-[46px]/[52px] lg:text-[62px]/[68px] xl:text-[70px]/[70px] text-black font-secondary  text-pretty -tracking-[0.1px] text-center md:text-left mt-7.5 mb-3.75 lg:mb-6.5">
            {heading}
          </h1>
          <p className="max-w-[95%] sm:max-w-[75%] md:max-w-[90%] lg:max-w-[95%] text-[16px]/[26px] sm:text-[18px]/[30px] md:text-[18px]/[30px] lg:text-[20px]/[34px] text-center md:text-left mx-auto md:mx-0 text-gray-primary mb-6 lg:mb-7.75">
            {description}
          </p>
          <div className="flex w-full flex-col items-center md:items-start justify-center gap-2 md:justify-start">
            {buttons.primary && (
              <Button asChild className="w-fit rounded-full">
                <Link
                  href={buttons.primary.url}
                  className={
                    "flex-1 uppercase text-[16px]/[24px]! font-bold! py-4 px-9.25 border border-primary hover:bg-white hover:text-primary transition-all duration-300 rounded-full"
                  }
                >
                  {buttons.primary.text}
                </Link>
              </Button>
            )}
          </div>
        </div>
        <div className="relative w-full h-full">
          <figure className="relative mx-auto md:absolute md:top-1/2 md:left-1/2 md:-translate-1/2 w-[60%] md:w-full lg:w-[80%]">
            <img
              src={image.src}
              alt={image.alt}
              // width={560}
              // height={639}
              className="h-full w-full"
            />
          </figure>
        </div>
      </div>
    </Section>
  );
};

export { Hero };
