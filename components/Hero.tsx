import React from "react";
import Button from "./Button";
import Link from "next/link";

function Hero() {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="flex flex-col">
        <h1 className="bold-52 lg:bold-106 md:whitespace-nowrap text-green-50">
          HEJ! I AM A
          <br />
          <span className="hand-writting regular-40 md:regular-64 lg:regular-106">
            FRONTEND DEVELOPER
          </span>
        </h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Who loves creating beautiful and user-friendly apps using{" "}
          <span className="text-green-90">React</span> with{" "}
          <span className="text-green-90">Redux/RTK</span> and{" "}
          <span className="text-green-90">Tailwind</span>, written of course in{" "}
          <span className="text-green-90">TypeScript</span> for type-checking
          the code.
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
