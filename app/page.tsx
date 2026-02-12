import Section from "@/components/layout/Section";

export default function Home() {
  return (
    <>
      <div
        className={
          "absolute inset-0 bg-[url(/images/banner1-img.png)] bg-cover bg-center"
        }
      ></div>
      <Section childClassName="bg-gray-300 p-8 rounded-lg relative z-10">
        <main>
          <h1 className="text-4xl font-bold mb-4">MAIN PAGE</h1>
          <p className="text-lg mb-4">
            This is Open Sans (Primary/Sans font) - the default font for body
            text.
          </p>
          <h2 className="font-secondary text-3xl mb-2">
            This is DM Serif Display (Secondary/Serif font)
          </h2>
          <p className="font-secondary text-lg">
            Use font-serif class to apply the secondary font for headings or
            emphasis.
          </p>
        </main>
      </Section>
    </>
  );
}
