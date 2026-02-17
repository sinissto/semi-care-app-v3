import Section from "@/components/layout/Section";
import Logo from "@/components/Logo";
import MainNav from "@/components/layout/MainNav";

const Header = () => {
  return (
    <Section sectionClassName={"z-20"}>
      {/* todo: just for development header is set to flex-col, remove it when mobile nav is implemented*/}
      <header
        className={
          "flex flex-col md:flex-row items-center justify-between pt-9.5 px-4 "
        }
      >
        {/*  Logo */}
        <Logo />

        {/* Main navigation and Book btn */}
        <MainNav />
      </header>
    </Section>
  );
};

export default Header;
