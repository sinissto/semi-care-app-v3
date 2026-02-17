import { menusData } from "@/lib/menuData";
import DesktopMenu from "@/components/layout/DesktopMenu";

const MainNav = () => {
  return (
    //   Desktop nav
    <ul className={"hidden lg:flex items-center gap-x-1 "}>
      {menusData.map((menu, index) => (
        <DesktopMenu key={index} menu={menu} />
      ))}
    </ul>

    //   Mobile nav
  );
};

export default MainNav;
