"use client";

import { useAppContext } from "@/hooks/useAppContext";

import Section from "@/components/layout/Section";
import { useParams } from "next/navigation";

interface ServiceDetailsPageProps {
  id: number;
  icon: string;
  slug: string;
  title: string;
  description: string[];
  serviceList: string[];
  images: { src: string; alt: string }[];
  url: string;
}

const ServiceDetailsPage = () => {
  const { services } = useAppContext().services;
  const params = useParams();
  console.log(params);
  console.log(services);
  if (services.length === 0) return;

  const service: ServiceDetailsPageProps = services.find(
    (service) => service.slug.toLowerCase() === params.service.toLowerCase()
  );

  console.log(service);

  const { title, images, description, serviceList } = service;
  return (
    <Section>
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
        <h1 className="max-w-3xl text-5xl text-primary font-semibold text-pretty md:text-6xl">
          {title}
        </h1>

        <div className="flex items-center gap-3 text-sm md:text-base"></div>
        <img
          src={images[0].src}
          alt="placeholder"
          className="mt-4 mb-8 aspect-video w-full rounded-lg border object-cover"
        />
      </div>

      <div className="container mx-auto">
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
            <img
              src={images[1].src}
              alt="placeholder"
              className="my-8 w-full h-auto rounded-md object-fit"
            />
          )}
        </div>
      </div>
    </Section>
  );
};

export default ServiceDetailsPage;
