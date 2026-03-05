const achievements = [
  { label: "Peritonealdialyse (CAPD)", value: "17" },
  { label: "Grundpflege", value: "52" },
  { label: "Behandlungspflege", value: "28+" },
  { label: "Hauswirtschaftliche Leistungen", value: "38+" },
  { label: "Verhinderungspflege", value: "83+" },
];

const Achievements = () => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-primary/15 p-7 md:p-16 mx-4">
      <div className="flex flex-col gap-4 text-center md:text-left">
        <h2 className="text-3xl text-primary font-semibold md:text-4xl">
          Leben, die durch Zahlen verbessert wurden
        </h2>
        <p className="max-w-2xl text-xl text-grey-primary ">
          Die Betreuung mit Hingabe, Fachkompetenz und einer herzlichen Art hat
          dazu geführt, dass Familien uns vertrauen
        </p>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 text-center md:grid-cols-3 lg:grid-cols-5">
        {achievements.map((item, idx) => (
          <div className="flex flex-col gap-2" key={item.label + idx}>
            <span className="text-4xl text-primary font-semibold md:text-5xl">
              {item.value}
            </span>
            <p className="text-sm md:text-base">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
