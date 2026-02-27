"use client";

import { useParams } from "next/navigation";
import { useAppContext } from "@/hooks/useAppContext";
import { useState } from "react";
import { X } from "lucide-react";

import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const ServiceDetailsPage = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { services } = useAppContext().services;
  const params = useParams();

  if (!services || services.length === 0) return null;

  const needle = String(params?.service).toLowerCase();

  const service = services.find(
    (service) => service.slug.toLowerCase() === needle
  );

  if (!service) {
    return (
      <Section>
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-16 text-center px-4 mb-4 sm:mb-6 md:mb-8 lg:mb-16">
          <h1 className="max-w-3xl text-5xl text-primary font-semibold text-pretty md:text-6xl">
            Kein Netzempfang!
          </h1>
          <Button variant={"outline"}>
            <Link href={"/leistungen"}>Alle Dienste anzeigen!</Link>
          </Button>
        </div>
      </Section>
    );
  }

  const { title, images, description, serviceList } = service;
  return (
    <Section>
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-16 text-center px-4 mb-4 sm:mb-6 md:mb-8 lg:mb-16">
        <h1 className="max-w-3xl text-4xl lg:text-5xl text-primary font-semibold text-pretty md:text-6xl">
          {title}
        </h1>

        {/*<div className="flex items-center gap-3 text-sm md:text-base"></div>*/}
        <Image
          src={images[0].src}
          alt={`${title} servicebild`}
          width={850}
          height={600}
          className="mt-4 mb-8 aspect-video w-full rounded-lg border object-cover"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-auto prose max-w-3xl dark:prose-invert">
          {description.map((paragraph, index) => (
            <p
              key={index}
              className="text-md md:text-xl text-muted-foreground leading-relaxed mb-6 last-of-type:mb-2"
            >
              {paragraph}
            </p>
          ))}
          <ul className={"list-disc ml-14"}>
            {serviceList.map((listItem, index) => (
              <li
                key={index}
                className={
                  "text-md md:text-xl text-muted-foreground leading-relaxed mb-2"
                }
              >
                {listItem}
              </li>
            ))}
          </ul>
          {images.at(1) && (
            <>
              <Image
                src={images[1].src}
                alt={`${title} servicebild`}
                width={850}
                height={600}
                className="my-8 w-full h-auto rounded-md object-fit cursor-pointer md:cursor-default"
                onClick={() => setIsFullscreen(true)}
              />

              {/* Fullscreen modal for mobile */}
              {isFullscreen && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 md:hidden"
                  onClick={() => setIsFullscreen(false)}
                >
                  <button
                    className="absolute top-4 right-4 text-white p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
                    onClick={() => setIsFullscreen(false)}
                    aria-label="Close fullscreen"
                  >
                    <X size={24} />
                  </button>

                  <Image
                    src={images[1].src}
                    alt={`${title} servicebild`}
                    width={850}
                    height={600}
                    className="max-w-full max-h-full object-contain p-4"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Section>
  );
};

export default ServiceDetailsPage;
