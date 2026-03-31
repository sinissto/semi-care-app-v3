import Section from "@/components/layout/Section";

const ImpressumPage = () => {
  return (
    <Section>
      <div className={"max-w-[750px] mx-auto px-4"}>
        <h1
          className={
            "text-[42px]/[52px] lg:text-[52px]/[60px] font-bold mb-[18px]"
          }
        >
          Impressum
        </h1>
        <p className={"text-[16px]/[24px] lg:text-[18px]/[29px] mb-[18px]"}>
          Angaben gemäß § 5 DDG
        </p>
        <p className={"text-[16px]/[24px] lg:text-[18px]/[29px] mb-[18px]"}>
          Ambulanter Pflegedienst SemiCare
          <br />
          <br />
          Jolly str.5
          <br />
          81545 München <br />
        </p>
        <p className={"text-[16px]/[24px] lg:text-[18px]/[29px] mb-[18px]"}>
          <strong>Vertreten durch: </strong>
          <br />
          Semira Spasojevic
          <br />
        </p>

        <p className={"text-[16px]/[24px] lg:text-[18px]/[29px] mb-[18px]"}>
          <strong>Kontakt:</strong>
          <br />
          Telefon: 089-52074219
          <br />
          Fax: 089-32763110
          <br />
          E-Mail:{" "}
          <a
            type={"email"}
            href={`mailto:info@semi-care.de`}
            className={"underline text-primary"}
          >
            info@semi-care.de
          </a>
        </p>

        <p className={"text-[16px]/[24px] lg:text-[18px]/[29px] mb-[18px]"}>
          <strong>Aufsichtsbehörde:</strong>
          <br />
          Landeshauptstadt München Gesundheitsreferat Bayerstraße 28a 80335
          München
          <br /> Deutschland
          <br />
        </p>

        <p className={"text-[16px]/[24px] lg:text-[18px]/[29px] mb-[18px]"}>
          <strong>
            Verbraucherstreitbeilegung / Universalschlichtungsstelle
          </strong>
          <br />
          Wir nehmen nicht an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teil und sind dazu auch nicht
          verpflichtet.
        </p>

        <p className={"text-[16px]/[24px] lg:text-[18px]/[29px] mb-[18px]"}>
          <strong>Haftungsausschluss: </strong>
          <br />
          <br />
          <strong>Haftung für Inhalte</strong>
          <br />
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
          die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
          jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7
          Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen
          Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
          Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
          gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
          forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          von entsprechenden Rechtsverletzungen werden wir diese Inhalte
          umgehend entfernen.
        </p>

        <p className={"text-[16px]/[24px] lg:text-[18px]/[29px] mb-[18px]"}>
          Erstellt mit{" "}
          <a
            href="https://impressum-generator.de"
            rel="dofollow"
            className={"underline text-primary"}
          >
            Impressum-Generator.de
          </a>
          , dem Tool für Impressum und{" "}
          <a
            href="https://impressum-generator.de/datenschutz-generator"
            rel="dofollow"
            className={"underline text-primary"}
          >
            Datenschutz-Erklärung
          </a>
          . Nach einer Vorlage der{" "}
          <a
            href="https://www.kanzlei-hasselbach.de/"
            rel="dofollow"
            className={"underline text-primary"}
          >
            Kanzlei Hasselbach
          </a>
          .
        </p>
      </div>
    </Section>
  );
};

export default ImpressumPage;
