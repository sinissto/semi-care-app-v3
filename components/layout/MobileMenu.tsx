"use client";

import { ComponentType, SVGProps, useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Cross,
  Orbit,
  Syringe,
  BrushCleaning,
  HandHeart,
  MoveUpRightIcon,
} from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "@/components/Logo";

interface SubMenuItemProps {
  name: string;
  desc?: string;
  // now a serializable key that will be mapped to an icon component on the client
  icon?: string;
  url: string;
}

interface MenuItemProps {
  url: string;
  name: string;
  subMenu?: SubMenuItemProps[];
  gridCols?: number;
}

interface MenuProps {
  menus: MenuItemProps[];
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

const MobileMenu = ({ menus }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState<null | number>(null);
  const scrollYRef = useRef(0);

  // Small sub-component to animate submenu height smoothly without layout jumps
  const SubMenu = ({
    items,
    open,
  }: {
    items: SubMenuItemProps[];
    open: boolean;
  }) => {
    const elRef = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
      const el = elRef.current;
      if (!el) return;

      let rafId: number | null = null;

      const onTransitionEnd = (e: TransitionEvent) => {
        if (e.propertyName !== "max-height") return;
        // when opened, allow natural height growth
        if (open) {
          el.style.maxHeight = "none";
        }
      };

      el.addEventListener("transitionend", onTransitionEnd);

      if (open) {
        // ensure element is rendered and measured, then animate to its scrollHeight
        // start from 0 (already set in inline style)
        rafId = requestAnimationFrame(() => {
          // set to measured height to trigger transition
          el.style.maxHeight = `${el.scrollHeight}px`;
        });
      } else {
        // if currently 'none', set it to measured px to allow transition to 0
        if (el.style.maxHeight === "none") {
          el.style.maxHeight = `${el.scrollHeight}px`;
          // force a reflow then collapse
          rafId = requestAnimationFrame(() => {
            el.style.maxHeight = "0px";
          });
        } else {
          // directly collapse
          el.style.maxHeight = "0px";
        }
      }

      return () => {
        if (rafId) cancelAnimationFrame(rafId);
        el.removeEventListener("transitionend", onTransitionEnd);
      };
    }, [open]);

    return (
      <ul
        ref={elRef}
        className={
          "pl-4 ml-8 mt-2 flex flex-col gap-3 overflow-hidden transition-[max-height] duration-300"
        }
        style={{ maxHeight: "0px" }}
      >
        {items.map((it, idx) => {
          const IconComponent = it.icon ? ICON_MAP[it.icon] : null;
          return (
            <li
              key={idx}
              className={
                "flex items-center gap-3 p-2 rounded-md hover:bg-white/20 cursor-pointer gap-x-2"
              }
            >
              <Link href={it.url}>
                {IconComponent && <IconComponent className="w-5 h-5" />}
                <div>
                  <p className={"font-semibold"}>{it.name}</p>
                  {it.desc && (
                    <p className={"text-sm text-primary/70"}>{it.desc}</p>
                  )}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  // Lock body scroll when menu is open and restore on close/unmount
  useEffect(() => {
    if (isOpen) {
      // store current scroll position
      scrollYRef.current = window.scrollY || window.pageYOffset || 0;
      // lock body
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
      document.body.style.width = "100%";

      // handle Escape key to close
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setIsOpen(false);
      };
      window.addEventListener("keydown", onKey);

      return () => {
        window.removeEventListener("keydown", onKey);
      };
    } else {
      // restore
      const scrollY = scrollYRef.current;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      document.body.style.width = "";
      // restore scroll position (after unlocking)
      window.scrollTo(0, scrollY);
    }

    // cleanup on unmount
    return () => {
      const scrollY = scrollYRef.current;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);

  return (
    <>
      <div className={"flex"}>
        <Button onClick={toggleDrawer} className={"relative "}>
          {isOpen ? <X /> : <Menu />}
        </Button>
      </div>

      <div>
        {/* render drawer only when open to avoid offscreen scroll issues */}
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className={
              "bg-white backdrop-blur-sm text-primary p-4 fixed left-0 right-0 top-16 bottom-0 overflow-y-auto z-40 "
            }
            role="dialog"
            aria-modal="true"
            onClick={(e) => {
              // close when clicking on the backdrop (outside the menu list)
              if (e.target === e.currentTarget) setIsOpen(false);
            }}
          >
            <div
              className={
                "container mx-auto flex items-center justify-between px-4 mt-[48px]"
              }
            >
              <Logo imgClassName={"h-[50px]"} textClassName={"text-3xl"} />
              <Button onClick={toggleDrawer} className={"relative "}>
                {isOpen ? <X /> : <Menu />}
              </Button>
            </div>

            <div className={"relative mt-10"}>
              <ul className={"w-fit h-full flex flex-col mx-auto relative"}>
                {menus.map(
                  ({ name, subMenu, url }: MenuItemProps, index: number) => {
                    const hasSubMenu = subMenu && subMenu.length > 0;
                    const isClicked = clicked === index;
                    return (
                      <li key={index} className={"max-w-100"}>
                        <Link href={url}>
                          <span
                            className={
                              "flex items-center p-4 hover:bg-white/20 rounded-md cursor-pointer font-bold relative"
                            }
                            onClick={() => setClicked(isClicked ? null : index)}
                          >
                            {name}
                            {hasSubMenu && (
                              <ChevronDown
                                className={`ml-auto ${
                                  isClicked && "rotate-180"
                                }`}
                              />
                            )}
                          </span>
                        </Link>

                        {hasSubMenu && (
                          // render SubMenu always; it handles open/closed via max-height to avoid insertion jumps
                          <SubMenu items={subMenu!} open={isClicked} />
                        )}
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default MobileMenu;
