import Link from "next/link";

import { Button } from "@/components/ui/button";
import Section from "@/components/layout/Section";

import aboutUsImg from "@/assets/images/ja i zuki.png";
import topGreenImg from "@/assets/images/video-section-top-img.png";
import bottomPurpleImg from "@/assets/images/video-section-bottom-img.png";
import Image from "next/image";

interface AboutUsProps {
  className?: string;
}

const AboutUs = ({ className }: AboutUsProps) => {
  return (
    <Section sectionClassName={"relative"}>
      <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col items-center gap-5 text-center md:items-start md:text-left lg:ml-18 px-3.75">
          <h2 className="text-4xl/[64px] text-black font-secondary font-semibolds text-pretty -tracking-[0.1px] text-center lg:text-left lg:text-5xl/[64px] mb-6.5">
            Willkommen bei Semi<span className={"text-primary"}>Care</span>
          </h2>
          <p className="max-w-xl md:text-[20px]/[34px] text-center md:text-left mx-auto md:mx-0 text-gray-primary mb-7.75">
            Pflege bedeutet für uns mehr als Unterstützung im Alltag. Sie
            bedeutet Nähe, Respekt und echtes Interesse am Menschen. Bei
            SemiCare begleiten wir Senioren und Seniorinnen mit dem Ziel, ihre
            Lebensqualität zu erhalten und ihnen ein gutes und sicheres Leben in
            den eigenen vier Wänden zu ermöglichen.
          </p>
          <div className="flex w-full flex-col items-center md:items-start justify-center gap-2 md:justify-start mb-8.75">
            <Button asChild className="w-fit rounded-full">
              <Link
                href={"/uber-uns"}
                className={
                  "flex-1 uppercase text-[16px]/[24px]! font-bold! py-4 px-9.25 border border-primary hover:bg-white hover:text-primary transition-all duration-300 rounded-full"
                }
              >
                Über uns
              </Link>
            </Button>
          </div>

          <div>
            <h4 className={"text-2xl/[28px] font-secondary mb-1"}>
              Brauchen Sie Beratung?
            </h4>
            <h4 className={"text-4xl/[42px] text-primary font-secondary mb-1"}>
              +49 89 5707 4219
            </h4>
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <div className={"relative w-[80%]"}>
            <figure className="relative z-20">
              <Image
                src={aboutUsImg.src}
                alt={
                  "Bild einer jungen Frau und einer alten Dame, die sich umarmen"
                }
                width={1024}
                height={1114}
                className="w-full h-auto rounded-[40px] border-8 border-white"
              />
            </figure>

            <figure className="absolute -top-7.5 -right-7.5">
              <Image
                src={topGreenImg.src}
                alt={"Grünes Rechteckbild"}
                width={90}
                height={90}
                className="w-22.5 h-22.5"
              />
            </figure>

            <figure className="absolute -bottom-7.5 -left-7.5 ">
              <Image
                src={bottomPurpleImg.src}
                alt={"Weißes Rechteck mit violettem Rand"}
                width={90}
                height={90}
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
