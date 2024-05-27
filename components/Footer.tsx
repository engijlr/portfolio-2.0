import React from "react";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flexCenter py-16 md:py-24 bg-green-50" id="home">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex-col items-start justify-center gap-[10%] md:flex-row">
          <span className="mb-10 bold-40 md:bold-64 text-white flex gap-4">
            <Image src="/lupa.svg" width={50} height={50} alt="lupa icon" />
            Find me on LinkedIn
          </span>
          <div className="flex gap-5">
            <Link
              href="https://www.linkedin.com/in/engiber-lozada/"
              target="_blank"
            >
              <Button
                type="button"
                title="LinkdIn"
                icon="/arrow-1.svg"
                variant="btn_white_text hand-writting"
              />
            </Link>
            <Link href="https://github.com/engijlr" target="_blank">
              <Button
                type="button"
                title="GitHub"
                icon="/arrow-1.svg"
                variant="btn_white_text hand-writting"
              />
            </Link>
          </div>
        </div>

        <p className="regular-14 w-full text-center text-white">
          2024 Engiber Lozada | All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
