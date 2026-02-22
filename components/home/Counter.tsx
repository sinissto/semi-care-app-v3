import Section from "@/components/layout/Section";

const numbers = [
  {
    id: 1,
    value: "45",
    label: "Donations Every Year",
  },
  {
    id: 2,
    value: "690",
    label: "Great Local Volunteers",
  },
  {
    id: 3,
    value: "437",
    label: "Face to Face Visits",
  },
  {
    id: 4,
    value: "170",
    label: "Organized Local Events",
  },
];

const Counter = () => {
  return (
    <Section>
      <div
        className={
          "flex items-center justify-center  flex-wrap py-6.25 border-y gap-8"
        }
      >
        {numbers.map((number) => (
          <div
            key={number.id}
            className={`w-62.5 flex flex-col items-center justify-center gap-2 `}
          >
            <h5
              className={
                "text-6xl/[60px] text-secondary font-normal font-secondary tracking-[0.8px] mb-3"
              }
            >
              {number.value}
            </h5>
            <p className={"text-[18px]/[24px] text-center text-gray-primary"}>
              {number.label}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Counter;
