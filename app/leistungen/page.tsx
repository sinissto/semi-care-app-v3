"use client";

import Section from "@/components/layout/Section";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import OtherServices from "@/components/services/OtherServices";

const ServicesPage = () => {
  return (
    <Section>
      <ServicesHero />
      <ServicesList />
      <OtherServices />
    </Section>
  );
};

export default ServicesPage;
