"use client";

import Section from "@/components/layout/Section";
import { useAppContext } from "@/hooks/useAppContext";
import { ServicesHero } from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";

const ServicesPage = () => {
  const ctx = useAppContext();
  console.log(ctx);
  return (
    <Section>
      <ServicesHero />
      <ServicesList />
    </Section>
  );
};

export default ServicesPage;
