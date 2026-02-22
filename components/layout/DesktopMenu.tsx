"use client";

import { SVGProps, ComponentType, useState } from "react";
import {
  ChevronDown,
  // PanelsTopLeft,
  // Bolt,
  // PanelTop,
  // Database,
  // ShoppingBag,
  // MapPin,
  // BellDot,
  // Play,
  // BookOpenText,
  // Figma,
  // BriefcaseBusiness,
  // Images,
  // CircleHelp,
  // MessageCircle,
  // TriangleAlert,
  // ShieldPlus,
  // Users,
  // Dessert,
  // Lock,
  Cross,
  Orbit,
  Syringe,
  BrushCleaning,
  HandHeart,
  MoveUpRightIcon,
} from "lucide-react";

interface SubMenuItemProps {
  name: string;
  desc?: string;
  // now a serializable key that will be mapped to an icon component on the client
  icon?: string;
  url: string;
}

interface MenuItemProps {
  name: string;
  subMenu?: SubMenuItemProps[];
  gridCols?: number;
  url: string;
}

interface MenuProps {
  menu: MenuItemProps;
}

// map string keys from the menu data to actual lucide-react components
const ICON_MAP: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  Cross: Cross,
  Orbit: Orbit,
  Syringe: Syringe,
  BrushCleaning: BrushCleaning,
  HandHeart: HandHeart,
  MoveUpRightIcon: MoveUpRightIcon,

  // PanelsTopLeft: PanelsTopLeft,
  // Bolt: Bolt,
  // PanelTop: PanelTop,
  // Database: Database,
  // ShoppingBag: ShoppingBag,
  // MapPin: MapPin,
  // BellDot: BellDot,
  // Play: Play,
  // BookOpenText: BookOpenText,
  // Figma: Figma,
  // BriefcaseBusiness: BriefcaseBusiness,
  // Images: Images,
  // CircleHelp: CircleHelp,
  // MessageCircle: MessageCircle,
  // TriangleAlert: TriangleAlert,
  // ShieldPlus: ShieldPlus,
  // Users: Users,
  // Dessert: Dessert,
  // Lock: Lock,
};
import { motion } from "motion/react";
import Link from "next/link";

const DesktopMenu = ({ menu }: MenuProps) => {
  const [isHover, setIsHover] = useState(false);
  const { name, subMenu, gridCols, url } = menu;

  const hasSubMenu = subMenu && subMenu.length > 0;

  const toggleHoverMenu = () => {
    setIsHover((prev) => !prev);
  };

  // animation variants for the submenu
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.25,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.2,
      },
      display: "none",
    },
  };

  return (
    <motion.li
      className={"group/link font-semibold overflow-visible"}
      onHoverStart={toggleHoverMenu}
      onHoverEnd={toggleHoverMenu}
    >
      <Link href={url}>
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
      </Link>

      {hasSubMenu && (
        <motion.div
          // span the full header area to avoid clipping; inner container is centered with max-width
          className={
            "absolute   p-3.75 rounded-[6px] origin-[50%_-170px] backdrop-blur-2xl bg-white"
          }
          // avoid applying initial animation styles during hydration
          initial={false}
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}
        >
          {/* center inner container and limit max width so grid can expand without being clipped */}
          <div className={"w-fit"}>
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
                  <Link href={submenu.url}>
                    <div
                      className={
                        "flex items-center gap-x-4 p-2 rounded-md group/menuBox hover:bg-secondary/20 transition duration-300"
                      }
                    >
                      {/* render icon component when provided */}
                      <div
                        className={
                          "bg-secondary/20  p-2 rounded-md group-hover/menuBox:bg-primary/80 group-hover/menuBox:text-white transition duration-300"
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
                            "capitalize font-semibold group-hover/menuBox:text-secondary break-words whitespace-normal"
                          }
                        >
                          {submenu.name}
                        </h6>
                        <p
                          className={
                            "text-sm group-hover/menuBox:text-primary text-gray-400 break-words whitespace-normal"
                          }
                        >
                          {submenu.desc}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.li>
  );
};

export default DesktopMenu;
