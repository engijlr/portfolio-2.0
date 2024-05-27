import React from "react";
import Button from "./Button";
import Link from "next/link";

function Hero() {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="flex flex-col">
        <h1 className="bold-52 lg:bold-106 md:whitespace-nowrap text-green-50">
          HEY! I AM A
          <br />
          <span className="hand-writting regular-40 md:regular-64 lg:regular-106">
            FRONTENT DEVELOPER
          </span>
        </h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Who loves creating beautiful and user-friendly apps using{" "}
          <span className="text-green-90">react.js</span> with{" "}
          <span className="text-green-90">redux</span> and{" "}
          <span className="text-green-90">typescript</span> to proof check the
          code with types, and <span className="text-green-90">tailwind</span>{" "}
          to speed the development process.
        </p>

        <div className="flex w-full md:w-1/4 sm:flex-row my-11">
          <Link href="#projects" className="w-full">
            <Button
              type="button"
              title="See my projects"
              variant="btn_green"
              icon="/heart-icon.svg"
              full
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
