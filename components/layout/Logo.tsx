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
      href={"/public"}
      className={"flex items-center justify-center gap-3 relative"}
    >
      <Image
        src={semiCareLogo}
        alt={"Semi Care Logo"}
        className={`h-15 w-auto ${imgClassName}`}
      />

      <h2 className={`${textClassName} lg:text-5xl text-black  font-secondary`}>
        Semi<span className={"text-primary"}>Care</span>
      </h2>
    </Link>
  );
};

export default Logo;
