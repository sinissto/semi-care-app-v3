"use client";

import { ComponentType, SVGProps, useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

import Logo from "@/components/layout/Logo";
import { useRouter } from "next/navigation";
import MobileSubMenu from "@/components/layout/MobileSubMenu";

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

const MobileMenu = ({ menus }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState<null | number>(null);
  const scrollYRef = useRef(0);
  const router = useRouter();

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClick = (url: string, subLink: boolean) => {
    if (url === "/leistungen" && !subLink) return;

    setIsOpen((prev) => !prev);

    router.push(url);
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
                        {/*<Link href={url}>*/}
                        <span
                          className={
                            "flex items-center p-4 hover:bg-white/20 rounded-md cursor-pointer font-bold relative"
                          }
                        >
                          <span onClick={() => handleClick(url, true)}>
                            {name}
                          </span>
                          {hasSubMenu && (
                            <ChevronDown
                              className={`ml-auto ${isClicked && "rotate-180"}`}
                              onClick={() =>
                                setClicked(isClicked ? null : index)
                              }
                            />
                          )}
                        </span>
                        {/*</Link>*/}

                        {hasSubMenu && (
                          // render MobileSubMenu always; it handles open/closed via max-height to avoid insertion jumps
                          <MobileSubMenu
                            items={subMenu!}
                            open={isClicked}
                            handleIsOpen={handleClick}
                          />
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
