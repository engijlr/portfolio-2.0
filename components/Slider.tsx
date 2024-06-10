import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaAngular,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiRedux, SiMui } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

const Slider = () => {
  return (
    <div className="relative flex overflow-x-hidden w-full min-w-[1024px]">
      <div
        className="py-12 animate-marquee whitespace-nowrap text-white 
flex items-center justify-around w-full mx-5"
      >
        <span className="text-[30px] lg:text-4xl mx-4 text-center">
          <FaReact width={50} />
        </span>
        <span className="text-[30px] lg:text-4xl mx-4">
          <FaHtml5 width={50} />
        </span>
        <span className="text-[30px] lg:text-4xl mx-4">
          <FaCss3 width={50} />
        </span>
        <span className="text-[30px] lg:text-4xl mx-4">
          <IoLogoJavascript width={50} />
        </span>
        <span className="text-[30px] lg:text-4xl mx-4">
          <SiTypescript width={50} />
        </span>
        <span className="text-[30px] lg:text-4xl mx-4">
          <RiNextjsFill width={50} />
        </span>
        <span className="text-[30px] lg:text-4xl mx-4">
          <SiRedux width={50} />
        </span>
        <span className="text-[30px] lg:text-4xl mx-4">
          <RiTailwindCssFill width={50} />
        </span>
        <span className="text-[30px] lg:text-4xl mx-4">
          <SiMui width={50} />
        </span>
        <span className="text-[30px] lg:text-4xl mx-4">
          <FaGitAlt width={50} />
        </span>
        <span className="text-[30px] lg:text-4xl mx-4">
          <FaGithub width={50} />
        </span>
        <span className="text-[30px] lg:text-4xl mx-4">
          <FaFigma width={50} />
        </span>
        <span className="text-[30px] lg:text-4xl mx-4">
          <FaAngular width={50} />
        </span>
      </div>

      <div
        className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap text-white 
flex items-center justify-around w-full"
      >
        <span className="text-[30px] lg:text-4xl mx-4 text-center">
          <FaReact width={50} />
        </span>
        <span className="text-[30px] lg:text-4xl mx-4">
          <FaHtml5 width={50} />
        </span>
        <span className="text-[30px] lg:text-4xl mx-4">
          <FaCss3 width={50} />
        </span>
        <span className="text-[30px] lg:text-4xl mx-4">
          <IoLogoJavascript width={50} />
        </span>
        <span className="text-[30px] lg:text-4xl mx-4">
          <SiTypescript width={50} />
        </span>
        <span className="text-[30px] lg:text-4xl mx-4">
          <RiNextjsFill width={50} />
        </span>
        <span className="text-[30px] lg:text-4xl mx-4">
          <SiRedux width={50} />
        </span>
        <span className="text-[30px] lg:text-4xl mx-4">
          <RiTailwindCssFill width={50} />
        </span>
        <span className="text-[30px] lg:text-4xl mx-4">
          <SiMui width={50} />
        </span>
        <span className="text-[30px] lg:text-4xl mx-4">
          <FaGitAlt width={50} />
        </span>
        <span className="text-[30px] lg:text-4xl mx-4">
          <FaGithub width={50} />
        </span>
        <span className="text-[30px] lg:text-4xl mx-4">
          <FaFigma width={50} />
        </span>
        <span className="text-[30px] lg:text-4xl mx-4">
          <FaAngular width={50} />
        </span>
      </div>
    </div>
  );
};

export default Slider;
