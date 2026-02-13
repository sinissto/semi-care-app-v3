import { Hero } from "@/components/Hero";
import OfferSection from "@/components/OfferSection";

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
        heading={"We give seniors the love they deserve"}
        description={
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
        }
        image={{
          src: "/images/index-banner-right-img.png",
          alt: "Hero section demo image showing interface components",
        }}
      />

      {/* Offer section */}
      <OfferSection />
    </>
  );
}
