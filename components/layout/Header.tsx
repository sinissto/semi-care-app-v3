import Section from "@/components/layout/Section";
import Logo from "@/components/Logo";
import MainNav from "@/components/layout/MainNav";

const Header = () => {
  return (
    <Section sectionClassName={""}>
      <header className={"flex items-center justify-between pt-9.5"}>
        {/*  Logo */}
        <Logo />

        {/* Main navigation and Book btn */}
        <MainNav />
      </header>
    </Section>
  );
};

export default Header;
