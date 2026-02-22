"use client";

import Section from "@/components/layout/Section";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";

const ServicesPage = () => {
  return (
    <Section>
      <ServicesHero />
      <ServicesList />
    </Section>
  );
};

export default ServicesPage;
