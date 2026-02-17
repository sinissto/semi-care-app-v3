import { menusData } from "@/lib/menuData";
import DesktopMenu from "@/components/layout/DesktopMenu";
import MobileMenu from "@/components/layout/MobileMenu";

const MainNav = () => {
  return (
    <>
      {/*<ul className={"flex items-center gap-3"}>*/}
      {/*  <li>Startseite</li>*/}
      {/*  <li>Über uns</li>*/}
      {/*  <li>Leistungen</li>*/}
      {/*  <li>FAQ</li>*/}
      {/*  <li>Kontakt</li>*/}
      {/*</ul>*/}
      {/*Desktop nav*/}
      <ul className={"hidden lg:flex items-center gap-x-1 "}>
        {menusData.map((menu, index) => (
          <DesktopMenu key={index} menu={menu} />
        ))}
      </ul>
      {/*Mobile nav*/}
      <div className={"lg:hidden"}>
        <MobileMenu menus={menusData} />
      </div>
    </>
  );
};

export default MainNav;
