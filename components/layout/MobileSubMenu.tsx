import { ComponentType, SVGProps, useEffect, useRef } from "react";
import {
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

// map string keys from the menu data to actual lucide-react components
const ICON_MAP: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  Cross: Cross,
  Orbit: Orbit,
  Syringe: Syringe,
  BrushCleaning: BrushCleaning,
  HandHeart: HandHeart,
  MoveUpRightIcon: MoveUpRightIcon,
};

// Small sub-component to animate submenu height smoothly without layout jumps
const MobileSubMenu = ({
  items,
  open,
  handleIsOpen,
}: {
  items: SubMenuItemProps[];
  open: boolean;
  handleIsOpen: (url: string, subLink: boolean) => void;
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
            onClick={() => handleIsOpen(it.url, true)}
          >
            {/*<Link href={it.url}>*/}
            {IconComponent && <IconComponent className="w-5 h-5" />}
            <div>
              <p className={"font-semibold"}>{it.name}</p>
              {it.desc && (
                <p className={"text-sm text-primary/70"}>{it.desc}</p>
              )}
            </div>
            {/*</Link>*/}
          </li>
        );
      })}
    </ul>
  );
};

export default MobileSubMenu;
