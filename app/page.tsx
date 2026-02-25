import { Hero } from "@/components/Hero";
import OfferSection from "@/components/home/OfferSection";
import { AboutUs } from "@/components/home/AboutUs";
import Counter from "@/components/home/Counter";
import Services from "@/components/home/Services";
import TestimonialCard from "@/components/home/Testimonial";
import Blogs from "@/components/home/Blogs";

export default function Home() {
  return (
    <>
      <div
        className={
          "absolute inset-0 bg-[url(/images/footer-index-img.jpg)] bg-cover bg-center"
        }
      ></div>

      {/* Hero section */}
      <Hero
        heading={{
          main: "Wir geben Senioren die Liebe, die sie",
          span: "verdienen",
        }}
        description={
          "Pflege bedeutet für uns mehr als Unterstützung im Alltag. Sie bedeutet Nähe, Respekt und echtes Interesse am Menschen. "
        }
        image={{
          src: "/images/hero_image_1.png",
          alt: "Pflegekraft unterstützt Seniorin zu Hause",
        }}
        buttons={{
          primary: {
            text: "Unsere Pflegedienstleistungen",
            url: "/uber-uns",
          },
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
