import Section from "@/components/layout/Section";

const Services = () => {
  return (
    <Section>
      <div
        className={
          "flex flex-col items-center justify-center py-6.25 gap-8 mt-20"
        }
      >
        {/* Heading and description paragraph */}
        <div className={"flex flex-col items-center justify-center mb-22.75"}>
          <h2 className={"text-5xl/[64px] text-black font-secondary mb-4.25"}>
            Services We <span className={"text-primary"}>Offer</span>
          </h2>
          <p
            className={
              "text-[16px]/[24px] text-center text-gray-primary max-w-3/5"
            }
          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>

        {/* Part with image on left and service tiles on the right */}
        <div>
          {/* Image */}
          <div></div>

          {/* Service tiles */}
          <div></div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
