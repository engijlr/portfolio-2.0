import Image from "next/image";
import { STACK } from "@/constants";
import { FaRegStar } from "react-icons/fa";
import Slider from "./Slider";

const Stack = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[60px] bg-green-50">
      <div className="get-app max-container">
        <div className=" flex w-full flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-55 flex gap-4">
            <Image
              src="/lightning.svg"
              width={24}
              height={24}
              alt="lightning icon"
            />
            My current stack
          </h2>
          <Image
            src="/drawing-line-white.svg"
            alt="line"
            width={500}
            height={50}
            className="max-w-[500px] w-full"
          />
          <p className="w-[450px]">
            I constantly like to learn new languages and frameworks, these are
            some of the languages and frameworks that I know:
          </p>
        </div>

        <div className="w-full mt-10 grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:mg-20 lg:gap-24">
          {STACK.map((item) => (
            <div key={item.title}>
              <h4 className="hand-writting regular-24" key={item.title}>
                {item.title}
              </h4>
              <ul className="list-disc pl-6">
                {item.stack.map((stack) => (
                  <li key={stack} className="regular-16 text-nowrap">
                    {stack}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Slider />
    </section>
  );
};

export default Stack;
