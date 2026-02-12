import Link from "next/link";
import logoImg from "@/assets/images/sencare-logo2.png";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        src={logoImg}
        alt={"Semi Care Logo"}
        className={"max-w-full h-auto"}
      />
    </Link>
  );
};

export default Logo;
