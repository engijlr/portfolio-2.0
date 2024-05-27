import { PROJECTS } from "@/constants";
import ProjectCard from "./ProjectCard";
import Slider from "./Slider";
import Image from "next/image";

const Projects = () => {
  return (
    <section className="flexCenter flex-col" id="projects">
      <div className="bg-green-50 w-full mb-10">
        <Slider />
        <div className="max-container text-white py-16 padding-container">
          <h2 className="bold-40 lg:bold-52 flex gap-4 mb-5">
            <Image
              src="/brujula-icon.svg"
              width={50}
              height={50}
              alt="bujula icon"
            />
            Projects
          </h2>
          <Image
            src="/drawing-line-white.svg"
            alt="line"
            width={500}
            height={50}
          />
          <p className="regular-16 mt-4">
            My latest projects utilizing a stack of React, Typescript, Next.js
            <br />
            Tailwind, Vercel, styled components.
          </p>
        </div>
      </div>

      <div className="flex-col max-container padding-container w-full items-start justify-start gap-8 mt-6">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            idx={i}
            key={project.title}
            title={project.title}
            description={project.description}
            gifUrl={project.gif}
            stack={project.stack}
            siteUrl={project.siteUrl}
            gitUrl={project.ghUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
