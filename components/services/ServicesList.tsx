import { useAppContext } from "@/hooks/useAppContext";

import Section from "@/components/layout/Section";
import ServiceCard from "@/components/services/ServiceCard";

const ServicesList = () => {
  const { services } = useAppContext().services;

  return (
    <Section>
      <div
        className={
          "w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 px-4 mt-16"
        }
      >
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            url={service.url}
            image={service.images.at(0)?.src}
            title={service.title}
            description={service.description.at(0)}
          />
        ))}
      </div>
    </Section>
  );
};

export default ServicesList;
