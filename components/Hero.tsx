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
    <Section sectionClassName={cn("pb-32 relative z-10", className)}>
      <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col items-center gap-5 text-center md:items-start md:text-left lg:ml-18">
          <h1 className="text-[70px]/[70px] text-black font-secondary font-semibolds text-pretty -tracking-[0.1px] text-center lg:text-left lg:text-6xl mt-7.5 lg:pt-40 mb-6.5">
            {heading}
          </h1>
          <p className="max-w-xl md:text-[20px]/[34px] md:text-center md:mx-auto text-gray-primary mb-7.75">
            {description}
          </p>
          <div className="flex w-full flex-col items-center justify-center gap-2 md:justify-start">
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
          <figure className="relative mx-auto lg:absolute lg:top-13.25 lg:left-10 w-[60%] lg:w-full h-auto">
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
