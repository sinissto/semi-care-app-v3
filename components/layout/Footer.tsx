"use client";

import Link from "next/link";
import Image from "next/image";

import Section from "@/components/layout/Section";
import Logo from "@/components/layout/Logo";
import LogoLarge from "@/assets/images/LogoLarge.png";

import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

import instaImg1 from "@/assets/images/footer-img1.png";
import instaImg2 from "@/assets/images/footer-img2.png";
import instaImg3 from "@/assets/images/footer-img3.png";
import instaImg4 from "@/assets/images/footer-img4.png";
import instaImg5 from "@/assets/images/footer-img5.png";
import instaImg6 from "@/assets/images/footer-img6.png";
import { useAppContext } from "@/hooks/useAppContext";

const pageLinks = {
  title: "Nützliche Links",
  links: [
    { label: "Über uns", url: "/uber-uns" }, // /about-us
    { label: "Leistungen", url: "/leistungen" }, // /services
    // { label: "FAQ", url: "/faq" },
    { label: "Kontakt", url: "/kontakt" }, // /kontakt
  ],
};

const socialLinks = [
  {
    label: "Twitter",
    icon: <FaTwitter />,
    url: "#",
  },
  { label: "Facebook", icon: <FaFacebookF />, url: "#" },
  { label: "Pinterest", icon: <FaPinterestP />, url: "#" },
];

const instagramImages = [
  { src: instaImg1, alt: "Instagram-Bild 1" },
  { src: instaImg2, alt: "Instagram-Bild 2" },
  { src: instaImg3, alt: "Instagram-Bild 3" },
  { src: instaImg4, alt: "Instagram-Bild 4" },
  { src: instaImg5, alt: "Instagram-Bild 5" },
  { src: instaImg6, alt: "Instagram-Bild 6" },
];

const Footer = () => {
  const { contactInfo } = useAppContext();
  return (
    <Section
      sectionClassName={`relative pb-[65px] bg-[url(/images/footer-index-img.jpg)] bg-cover bg-center lg:mb-0 pt-[65px] z-0 my-0`}
    >
      <footer className={"bg-transparent"}>
        <div className="flex flex-col items-start justify-center md:justify-between md:flex-row">
          <div className="flex-1 flex flex-col items-center md:items-start mx-auto md:mx-0 lg:mb-0 px-3.75 mb-0">
            <div className="flex items-center gap-2 md:justify-start mb-4 md:mb-8">
              {/*<Logo textClassName={"lg:text-2xl "} />*/}

              <Image
                src={LogoLarge.src}
                alt={"Großes SemiCare-Logo"}
                width={1024}
                height={1024}
                className={"w-[50%] md:w-full mx-auto"}
              />
            </div>
            <p className="w-[75%] text-[14px]/[24px] text-gray-primary text-center md:text-left mb-8">
              Copyright 2026 SemiCare. Alle Rechte vorbehalten.
            </p>

            {/* todo: Footer Social icons */}
            {/* <div className={"flex items-start"}>
              <ul className={`flex gap-3.25`}>
                {socialLinks.map((social, socialIdx) => (
                  <li key={socialIdx}>
                    <a
                      href={"#"}
                      className={
                        "text-primary hover:text-white text-[16px] w-10 h-10 flex items-center justify-center rounded-full bg-transparent hover:bg-primary border border-primary transition-all duration-300"
                      }
                    >
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>

          {/* USEFUL LINKS */}
          <div className={"flex-1 px-3.75 hidden lg:block"}>
            <h4 className="text-2xl text-black font-normal font-secondary mt-2.5 mb-16.5">
              Nützliche Links
            </h4>
            <ul className="space-y-4 text-muted-foreground">
              {pageLinks.links.map((link, linkIdx) => (
                <li key={linkIdx} className="font-medium ">
                  <Link
                    href={link.url}
                    className={
                      "text-[16px]/[5px] text-gray-primary font-normal pl-0.75 hover:text-primary"
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              {/* Impressum link*/}
              <li className="font-medium ">
                <Link
                  href={"/impressum"}
                  className={
                    "text-[16px]/[5px] text-gray-primary font-normal pl-0.75 hover:text-primary"
                  }
                >
                  Impressum
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div
            className={
              "flex-1 flex flex-col items-center md:items-start mx-auto md:mx-0 px-3.75"
            }
          >
            <h4 className="text-2xl text-black font-normal font-secondary mt-2.5 mb-2.5 md:mb-16.5">
              Kontakt
            </h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="font-medium mb-4 flex flex-col items-center md:items-start">
                <h5
                  className={
                    "text-[16px]/[16px] text-primary text-center font-normal mb-1.75"
                  }
                >
                  Adresse:
                </h5>
                <a
                  type={"text"}
                  href={`https://maps.google.com/?q=${contactInfo.address}`}
                  target={"_blank"}
                  className={
                    "text-[16px]/[16px] font-normal text-gray-primary hover:text-primary"
                  }
                >
                  {contactInfo.address}
                </a>
              </li>

              <li className="font-medium mb-4 flex flex-col items-center md:items-start">
                <h5
                  className={
                    "text-[16px]/[16px] text-primary font-normal mb-1.75"
                  }
                >
                  Email:
                </h5>
                <a
                  type={"email"}
                  href={`mailto:${contactInfo.email}`}
                  className={
                    "text-[16px]/[16px] font-normal text-gray-primary hover:text-primary"
                  }
                >
                  {contactInfo.email}
                </a>
              </li>

              <li className="font-medium mb-4 flex flex-col items-center md:items-start">
                <h5
                  className={
                    "text-[16px]/[16px] text-primary font-normal mb-1.75"
                  }
                >
                  Telefon:
                </h5>
                <a
                  type={"text"}
                  href={`tel:${contactInfo.phone}`}
                  className={
                    "text-[16px]/[16px] font-normal text-gray-primary hover:text-primary"
                  }
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="font-medium mb-4 flex flex-col items-center md:items-start">
                <h5
                  className={
                    "text-[16px]/[16px] text-primary font-normal mb-1.75"
                  }
                >
                  Fax:
                </h5>
                <p
                  className={
                    "text-[16px]/[16px] font-normal text-gray-primary hover:text-primary"
                  }
                >
                  {contactInfo.fax}
                </p>
              </li>
              <li className="font-medium mb-4 flex flex-col items-center md:items-start">
                <h5
                  className={
                    "text-[16px]/[16px] text-primary font-normal mb-1.75"
                  }
                >
                  Mobile:
                </h5>
                <a
                  type={"text"}
                  href={`tel:${contactInfo.mobile}`}
                  className={
                    "text-[16px]/[16px] font-normal text-gray-primary hover:text-primary"
                  }
                >
                  {contactInfo.mobile}
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className={"flex-1 px-3.75 mx-auto"}>
            <h4 className="text-2xl text-black  font-normal font-secondary mt-5 md:mt-2.5 mb-5 md:mb-16.5">
              Soziale Medien
            </h4>
            <div className={"flex items-start"}>
              <ul className={`flex gap-3.25`}>
                {socialLinks.map((social, socialIdx) => (
                  <li key={socialIdx}>
                    <a
                      href={"#"}
                      className={
                        "text-primary hover:text-white text-[16px] w-10 h-10 flex items-center justify-center rounded-full bg-transparent hover:bg-primary border border-primary transition-all duration-300"
                      }
                    >
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </Section>
  );
};

export { Footer };
