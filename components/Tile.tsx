import { cn } from "@/lib/utils";

interface TileProps {
  heading: string;
  description: string;
  image: string;
  imageAlt: string;
  className?: string;
  backgroundColor?: string;
  onHover?: boolean;
}

const Tile = ({
  image,
  imageAlt,
  heading,
  description,
  onHover,
  className,
  backgroundColor = "bg-transparent",
}: TileProps) => {
  return (
    <div
      className={cn(
        "basis-full md:basis-1/2 lg:basis-1/3 lg:px-3.75 mb-0  ",
        className
      )}
    >
      {/* shadow-[0px_6px_38px_0_#dae0e5] */}
      <div
        className={cn(
          `group bg-white flex flex-col items-center px-4 py-4 lg:px-0 lg:py-0 2xl:px-8.25 2xl:pt-9.25 2xl:pb-13.75 border border-white rounded-4xl h-full lg:mb-[27px] ${
            onHover ? "hover:bg-primary hover:border-primary" : ""
          } transition duration-300`,
          backgroundColor
        )}
      >
        {/* icon */}
        <div
          className={`flex flex-col items-center rounded-4xl ${
            onHover ? "group-hover:bg-white" : ""
          }`}
        >
          <figure className={"md:mb-3 lg:mb-5"}>
            <img src={image} alt={imageAlt} />
          </figure>
        </div>

        {/* heading */}
        <h5
          className={
            "text-xl/[22px] lg:text-[30px]/[30px] text-black text-center font-secondary -tracking-[0.9px] lg:mb-[26px] mb-2.5"
          }
        >
          {heading}
        </h5>

        {/* description */}
        <p
          className={
            "text-[16px]/[24px] sm:text-[14px]/[22px] lg:text-[16px]/[24px] text-black text-center"
          }
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default Tile;
