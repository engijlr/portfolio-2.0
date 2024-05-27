import Image from "next/image";

const About = () => {
  return (
    <section
      className="flexCenter w-full py-[150px] max-container relative"
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
        <p className="w-[450px] text-gray-30">
          My name is Engiber Lozada, a front-end developer🖥️ based in{" "}
          <span className="text-green-50">Copenhagen, Denmark</span>.
        </p>
        <p className="w-[450px] text-gray-30">
          Besides my passion for coding and continuous learning, I love taking
          walks and soaking up the sun☀️.
        </p>
        <p className="w-[450px] text-gray-30">
          One of my latest hobbies is kitesurfing, so when I'm not diving into
          new frameworks, you'll find me there 🏄🏻‍♀️.
        </p>
      </div>

      <div className="mt-10 absolute bottom-0 right-0">
        <Image
          src="/engi-2.png"
          width={400}
          height={400}
          alt="about me image"
        />
      </div>
    </section>
  );
};

export default About;
