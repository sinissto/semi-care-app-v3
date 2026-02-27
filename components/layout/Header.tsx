import Section from "@/components/layout/Section";
import Logo from "@/components/layout/Logo";
import MainNav from "@/components/layout/MainNav";

const Header = () => {
  return (
    <Section sectionClassName={"z-20 my-0 lg:my-0"} childClassName={"mt-0"}>
      <header
        className={"flex flex-row items-center justify-between pt-9.5 px-4 "}
      >
        {/*  Logo */}
        <Logo imgClassName={"h-[50px]"} />

        {/* Main navigation and Book btn */}
        <MainNav />
      </header>
    </Section>
  );
};

export default Header;
