"use client";

import {
  PhoneIcon,
  TabletSmartphone,
  MailIcon,
  MapPinIcon,
  Printer,
} from "lucide-react";

import Section from "@/components/layout/Section";
import ContactForm from "@/components/contact/ContactForm";
import { useAppContext } from "@/hooks/useAppContext";

const ContactPage = () => {
  const { contactInfo } = useAppContext();
  const { phone, fax, mobile, email, address } = contactInfo;

  const info = [
    {
      icon: <PhoneIcon />,
      title: "Telefon",
      description: phone,
    },
    {
      icon: <Printer />,
      title: "Fax",
      description: fax,
    },
    {
      icon: <TabletSmartphone />,
      title: "Mobile",
      description: mobile,
    },
    { icon: <MailIcon />, title: "E-mail", description: email },
    {
      icon: <MapPinIcon />,
      title: "Adresse",
      description: address,
    },
  ];

  return (
    <Section sectionClassName={"bg-primary-tint rounded-b-2xl"}>
      {/*<div className="container mx-auto">*/}
      <div className={"px-4"}>
        <h2
          className={
            "text-3xl md:text-5xl text-primary font-semibold mb-6 mt-10"
          }
        >
          Interesse oder Fragen?
        </h2>
        <h3
          className={
            "text-3xl md:text-3xl text-primary font-semibold mb-6 mt-10"
          }
        >
          Kontaktieren Sie uns!
        </h3>
        <p className={"text-sm md:text-base text-grey-primary mb-4 max-w-2xl"}>
          Wir helfen Ihnen gerne bei allen Fragen und Anliegen. Nutzen Sie dazu
          einfach das untenstehende Kontaktformular oder die angegebenen
          Kontaktdaten. Wir freuen uns, von Ihnen zu hören!
        </p>
        <p
          className={
            "text-md md:text-base text-primary uppercase font-bold mb-14 md:mb-10 max-w-2xl"
          }
        >
          Wir bieten eine kostenlose Beratung an!
        </p>
      </div>
      <div className={"flex flex-col md:flex-row gap-8 px-4"}>
        {/* FORM */}
        <ContactForm />
        {/* INFO */}
        <div
          className={
            "flex-1 flex items-center md:justify-end order-1 md:order-2 mb-8 md:mb-0"
          }
        >
          <div className="flex-1 flex items-center md:justify-center order-1 md:order-2 mb-8 md:mb-0">
            <ul className={"flex flex-col gap-8"}>
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div
                    className={
                      "w-13 h-13 xl:w-18 xl:h-18 flex items-center justify-center"
                    }
                  >
                    <div className="mb-4 rounded-full bg-primary p-4 text-white">
                      {item.icon}
                    </div>
                  </div>

                  <div className="mb-2 text-xl font-semibold text-grey-primary">
                    <p className={"text-primary"}>{item.title}</p>
                    <h3 className="textg-rey-primary">
                      {item.title === "Telefon" && (
                        <a type={"tel"} href={`tel:${item.description}`}>
                          {item.description}
                        </a>
                      )}
                      {item.title === "Fax" && <p>{item.description}</p>}
                      {item.title === "Mobile" && (
                        <a type={"tel"} href={`tel:${item.description}`}>
                          {item.description}
                        </a>
                      )}
                      {item.title === "E-mail" && (
                        <a type={"tel"} href={`mailto:${item.description}`}>
                          {item.description}
                        </a>
                      )}
                      {item.title === "Adresse" && (
                        <a
                          type={"tel"}
                          href={
                            "http://maps.google.com/?q=Jolly Straße 5,81545 München"
                          }
                          target={"_blank"}
                        >
                          {item.description}
                        </a>
                      )}
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/*</div>*/}
    </Section>
  );
};

export default ContactPage;
