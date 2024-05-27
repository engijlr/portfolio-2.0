import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  gifUrl: string;
  description: string;
  stack: string[];
  idx: number;
  siteUrl: string;
  gitUrl: string;
}

const ProjectCard = ({
  title,
  gifUrl,
  description,
  stack,
  idx,
  siteUrl,
  gitUrl,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col lg:flex-row mb-20 gap-8">
      <div className="flex-col max-container w-full">
        <span className="hand-writting flex regular-32 gap-4 text-green-50">
          {idx + 1}.{" "}
          <Image
            src="/drawing-line-purple.svg"
            width={250}
            height={50}
            alt="drawing line"
          />
        </span>
        <h4 className="bold-52 lg:bold-32 text-green-50">{title}</h4>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          {description}
        </p>
        <div className="flex w-full flex-col md:flex-row gap-4 mt-6">
          <Link href={siteUrl} target="_blank">
            <Button
              type="button"
              title="Go to live site"
              variant="btn_green"
              icon="/arrow.svg"
              full
            />
          </Link>
          <Link href={gitUrl} target="_blank">
            <Button
              type="button"
              title="Go to GitHub repo"
              variant="btn_dark_green"
              icon="/github.svg"
              full
            />
          </Link>
        </div>
      </div>
      <div className="flexCenter w-full max-container 2xl:rounded-lg">
        <Image
          src={gifUrl}
          width={1440}
          height={580}
          alt="project video"
          className=" object-cover w-full object-center 2xl:rounded-lg border border-green-50 border-dotted p-2"
          unoptimized
        />
      </div>
    </div>
  );
};

export default ProjectCard;
