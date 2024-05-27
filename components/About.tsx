import Image from "next/image";

const About = () => {
  return (
    <section
      className="flexCenter flex-col lg:flex-row w-full lg:pb-[150px] pt-[150px] max-container padding-container relative"
      id="about"
    >
      <div className=" flex w-full flex-col items-start justify-center gap-6">
        <h2 className="bold-40 lg:bold-55 flex gap-4">
          <Image src="/person.svg" width={50} height={50} alt="person icon" />
          About me
        </h2>
        <Image
          src="/drawing-line-black.svg"
          width={500}
          height={50}
          alt="person icon"
        />
        <p className="lg:w-[450px] text-gray-30">
          My name is Engiber Lozada, a front-end developer🖥️ based in{" "}
          <span className="text-green-50">Copenhagen, Denmark</span>.
        </p>
        <p className="lg:w-[450px] text-gray-30">
          Besides my passion for coding and continuous learning, I love taking
          walks and soaking up the sun☀️.
        </p>
        <p className="lg:w-[450px] text-gray-30">
          One of my latest hobbies is kitesurfing, so when I&apos;m not diving
          into new frameworks, you&apos;ll find me there 🏄🏻‍♀️.
        </p>
      </div>

      <div className="mt-10 w-full">
        <Image
          src="/engi-2.png"
          width={400}
          height={400}
          alt="about me image"
          className="lg:absolute lg:bottom-0 lg:right-0"
        />
      </div>
    </section>
  );
};

export default About;
