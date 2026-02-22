import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import heroImg from "@/assets/images/hero_services.png";
import { useAppContext } from "@/hooks/useAppContext";

const ServicesHero = () => {
  const { services } = useAppContext();

  return (
    // <section
    //   className={cn("bg-primary-tint px-8 py-32 mx-auto max-w-8xl", className)}
    // >
    //   <div className="container mx-auto">
    <div className="flex items-center justify-center gap-6 px-4">
      <div className=" flex flex-col items-center text-center">
        <p
          className={
            "text-lg text-primary text-center uppercase font-semibold mb-6"
          }
        >
          {services.label}
        </p>
        <h1 className="text-[34px]/[38px] sm:text-[42px]/[44px] md:text-[46px]/[52px] lg:text-[62px]/[68px] text-grey-primary font-primary font-bold -tracking-[0.5px] mb-10  max-w-3xl">
          {services.title}
        </h1>
        {services.description.map((description, index) => (
          <p
            key={index}
            className="max-w-3xl text-[16px]/[26px] sm:text-[18px]/[30px] lg:text-xl/[34px] text-grey-primary mb-4 "
          >
            {description}
          </p>
        ))}
      </div>
    </div>
    //   </div>
    // </section>
  );
};

export default ServicesHero;
