import Section from "@/components/layout/Section";
import Logo from "@/components/layout/Logo";
import MainNav from "@/components/layout/MainNav";

const Header = () => {
  return (
    <Section sectionClassName={"z-20 lg:my-0"}>
      {/* todo: just for development header is set to flex-col, remove it when mobile nav is implemented*/}
      <header
        className={"flex flex-row items-center justify-between pt-9.5 px-4 "}
      >
        {/*  Logo */}
        <Logo imgClassName={"h-[50px]"} textClassName={"text-3xl"} />

        {/* Main navigation and Book btn */}
        <MainNav />
      </header>
    </Section>
  );
};

export default Header;
