import Link from "next/link";
import Image from "next/image";

import Section from "@/components/layout/Section";
import Logo from "@/components/Logo";

import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

import instaImg1 from "@/assets/images/footer-img1.png";
import instaImg2 from "@/assets/images/footer-img2.png";
import instaImg3 from "@/assets/images/footer-img3.png";
import instaImg4 from "@/assets/images/footer-img4.png";
import instaImg5 from "@/assets/images/footer-img5.png";
import instaImg6 from "@/assets/images/footer-img6.png";

const pageLinks = {
  title: "Useful Links",
  links: [
    { label: "About us", url: "/about" },
    { label: "Services", url: "/services" },
    { label: "Features", url: "/fqa" },
    { label: "Contact", url: "/contact" },
    { label: "Pricing", url: "/picing" },
  ],
};

const contactInfos = {
  address: "121 King Street Melbourne, 3000, Australia",
  email: "info@sencare.com",
  phone: "+1 23 45 6789",
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
  { src: instaImg1, alt: "Instagram Image 1" },
  { src: instaImg2, alt: "Instagram Image 2" },
  { src: instaImg3, alt: "Instagram Image 3" },
  { src: instaImg4, alt: "Instagram Image 4" },
  { src: instaImg5, alt: "Instagram Image 5" },
  { src: instaImg6, alt: "Instagram Image 6" },
];

const Footer = () => {
  return (
    <Section
      sectionClassName={`relative pt-15 pb-[65px] bg-[url(/images/footer-index-img.jpg)] bg-cover bg-center -mt-[136px] pt-[254px] pb-[132px] z-0`}
    >
      <footer className={"bg-transparent"}>
        <div className="flex flex-col items-start justify-center md:justify-between md:flex-row">
          <div className="flex-1 flex flex-col items-center md:items-start mx-auto md:mx-0 lg:mb-0 px-3.75 mb-8">
            <div className="flex items-center gap-2 md:justify-start mb-2.5 md:mb-13">
              <Logo />
            </div>
            <p className="w-[75%] text-[14px]/[24px] text-gray-primary text-center md:text-left mb-8">
              Copyright 2020 DesigningMedia. All Rights reserved
            </p>

            {/* todo: Footer Social icons */}
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

          {/* USEFUL LINKS */}
          <div className={"flex-1 px-3.75 hidden lg:block"}>
            <h4 className="text-2xl text-black font-normal font-secondary mt-2.5 mb-16.5">
              Useful Links
            </h4>
            <ul className="space-y-4 text-muted-foreground">
              {pageLinks.links.map((link, linkIdx) => (
                <li key={linkIdx} className="font-medium ">
                  <Link
                    href={link.url}
                    className={
                      "text-[16px]/[30px] text-gray-primary font-normal pl-0.75 hover:text-primary"
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div
            className={
              "flex-1 flex flex-col items-center md:items-start mx-auto md:mx-0 px-3.75"
            }
          >
            <h4 className="text-2xl text-black font-normal font-secondary mt-2.5 mb-2.5 md:mb-16.5">
              Contact Info
            </h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="font-medium mb-4 flex flex-col items-center md:items-start">
                <h5
                  className={
                    "text-[16px]/[16px] text-primary text-center font-normal mb-1.75"
                  }
                >
                  Address:
                </h5>
                <a
                  type={"text"}
                  href={`https://maps.google.com/?q=${contactInfos.address}`}
                  target={"_blank"}
                  className={
                    "text-[16px]/[16px] font-normal text-gray-primary hover:text-primary"
                  }
                >
                  {contactInfos.address}
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
                  href={`mailto:${contactInfos.email}`}
                  className={
                    "text-[16px]/[16px] font-normal text-gray-primary hover:text-primary"
                  }
                >
                  {contactInfos.email}
                </a>
              </li>

              <li className="font-medium mb-4 flex flex-col items-center md:items-start">
                <h5
                  className={
                    "text-[16px]/[16px] text-primary font-normal mb-1.75"
                  }
                >
                  Phone:
                </h5>
                <a
                  type={"text"}
                  href={`tel:${contactInfos.phone}`}
                  className={
                    "text-[16px]/[16px] font-normal text-gray-primary hover:text-primary"
                  }
                >
                  {contactInfos.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Instagram */}
          <div className={"flex-1 px-3.75 mx-auto"}>
            <h4 className="text-2xl text-black  text-center font-normal font-secondary mt-5 md:mt-2.5 mb-5 md:mb-16.5">
              Instagram
            </h4>
            <ul className="grid grid-cols-3 gap-1 text-muted-foreground">
              {instagramImages.map((img, imgIdx) => (
                <li key={imgIdx} className="font-medium  ">
                  <figure className="mb-0">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      className={"md:w-full md:h-auto "}
                    />
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </Section>
  );
};

export { Footer };
