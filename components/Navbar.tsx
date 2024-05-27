import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/" className="bold-32 flex gap-3 text-gray-50">
        <Image src="/happy-face.svg" alt="logo" width={32} height={32} />
        ENGIBER LOZADA
      </Link>

      <div className="lg:flexCenter hidden gap-10">
        <ul className="hidden h-full gap-12 lg:flex">
          <Link
            href="#projects"
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            Projects
          </Link>
          <Link
            href="#about"
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            About Me
          </Link>
        </ul>
        <Link
          href="https://www.linkedin.com/in/engiber-lozada/"
          target="_blank"
        >
          <Button
            type="button"
            title="Work with me"
            variant="btn_dark_green_outline"
          />
        </Link>
      </div>

      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
}

export default Navbar;
