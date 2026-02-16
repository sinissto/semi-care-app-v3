import { Hero } from "@/components/Hero";
import OfferSection from "@/components/OfferSection";
import { AboutUs } from "@/components/AboutUs";
import Counter from "@/components/Counter";
import Services from "@/components/Services";
import TestimonialCard from "@/components/Testimonial";
import Blogs from "@/components/Blogs";

export default function Home() {
  return (
    <>
      <div className={"absolute inset-0 bg-[url(/images/footer-index-img.jpg)] bg-cover bg-center"}></div>

      {/* Hero section */}
      <Hero
        heading={{ main: "Wir geben Senioren die Liebe, die sie", span: "verdienen" }}
        description={
          "Pflege bedeutet für uns mehr als Unterstützung im Alltag. Sie bedeutet Nähe, Respekt und echtes Interesse am Menschen. "
        }
        image={{
          src: "/images/hero_image_1.png",
          alt: "Hero section demo image showing interface components",
        }}
      />

      {/* Offer section */}
      <OfferSection />
      <AboutUs />
      <Blogs />
      {/* <Counter /> */}
      {/* <Services /> */}
      <TestimonialCard />
    </>
  );
}
