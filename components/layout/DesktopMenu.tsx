"use client";

import { SVGProps, ComponentType, useState } from "react";
import {
  ChevronDown,
  PanelsTopLeft,
  Bolt,
  PanelTop,
  Database,
  ShoppingBag,
  MapPin,
  BellDot,
  Play,
  BookOpenText,
  Figma,
  BriefcaseBusiness,
  Images,
  CircleHelp,
  MessageCircle,
  TriangleAlert,
  ShieldPlus,
  Users,
  Dessert,
  Lock,
} from "lucide-react";

interface SubMenuItemProps {
  name: string;
  desc?: string;
  // now a serializable key that will be mapped to an icon component on the client
  icon?: string;
}

interface MenuItemProps {
  name: string;
  subMenuHeading?: string[];
  subMenu?: SubMenuItemProps[];
  gridCols?: number;
}

interface MenuProps {
  menu: MenuItemProps;
}

// map string keys from the menu data to actual lucide-react components
const ICON_MAP: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  PanelsTopLeft: PanelsTopLeft,
  Bolt: Bolt,
  PanelTop: PanelTop,
  Database: Database,
  ShoppingBag: ShoppingBag,
  MapPin: MapPin,
  BellDot: BellDot,
  Play: Play,
  BookOpenText: BookOpenText,
  Figma: Figma,
  BriefcaseBusiness: BriefcaseBusiness,
  Images: Images,
  CircleHelp: CircleHelp,
  MessageCircle: MessageCircle,
  TriangleAlert: TriangleAlert,
  ShieldPlus: ShieldPlus,
  Users: Users,
  Dessert: Dessert,
  Lock: Lock,
};

const DesktopMenu = ({ menu }: MenuProps) => {
  const [isHover, setIsHover] = useState(false);
  const { name, subMenu, gridCols } = menu;
  const hasSubMenu = subMenu && subMenu.length > 0;

  const toggleHoverMenu = () => {
    setIsHover((prev) => !prev);
  };

  return (
    <li
      className={"group/link font-semibold"}
      onMouseEnter={toggleHoverMenu}
      onMouseOut={toggleHoverMenu}
    >
      <span
        className={
          "flex items-center gap-1 cursor-pointer px-3 py-1 rounded-xl hover:bg-primary/50"
        }
      >
        {name}
        {hasSubMenu && (
          <ChevronDown
            className={
              "mt-px group-hover/link:rotate-180 transition duration-500"
            }
          />
        )}
      </span>

      {hasSubMenu && (
        <div
          className={
            "absolute top-24 p-3.75 rounded-[6px] origin-[50%_-170px] backdrop-blur-2xl bg-secondary/4"
          }
        >
          <div
            className={`grid gap-7 ${
              gridCols === 3
                ? "grid-cols-3"
                : gridCols === 2
                ? "grid-cols-2"
                : "grid-cols-1"
            }`}
          >
            {subMenu?.map((submenu) => (
              <div
                key={submenu.name}
                className={"relative cursor-pointer z-30"}
              >
                <div
                  className={
                    "flex items-center gap-x-4 p-2 rounded-md group/menuBox"
                  }
                >
                  {/* render icon component when provided */}
                  <div
                    className={
                      "bg-secondary/20 w-fit p-2 rounded-md group-hover/menuBox:bg-primary/50 group-hover/menuBox:text-gray-primary transition duration-300"
                    }
                  >
                    {submenu.icon &&
                      ICON_MAP[submenu.icon] &&
                      (() => {
                        const Icon = ICON_MAP[submenu.icon];
                        return <Icon className="w-5 h-5" aria-hidden />;
                      })()}
                  </div>
                  <div>
                    <h6
                      className={
                        "font-semibold group-hover/menuBox:text-secondary"
                      }
                    >
                      {submenu.name}
                    </h6>
                    <p
                      className={
                        "text-sm group-hover/menuBox:text-primary text-gray-400"
                      }
                    >
                      {submenu.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </li>
  );
};

export default DesktopMenu;
