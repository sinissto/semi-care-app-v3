import Link from "next/link";
import semiCareLogo from "@/assets/images/SemiCareLogo.png";
import Image from "next/image";

const Logo = ({
  textClassName = "",
  imgClassName = "",
}: {
  textClassName?: string;
  imgClassName?: string;
}) => {
  return (
    <Link
      href={"/"}
      className={"flex items-center justify-center gap-3 relative"}
    >
      <Image
        src={semiCareLogo}
        alt={"Semi Care Logo"}
        className={`h-15 w-auto `}
      />

      <h2
        className={`text-3xl  text-black  font-secondary ${
          textClassName ? textClassName : "lg:text-5xl"
        }`}
      >
        Semi<span className={"text-secondary"}>Care</span>
      </h2>
    </Link>
  );
};

export default Logo;
