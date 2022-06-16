import Image, { StaticImageData } from "next/image";
import { AiOutlineEye } from "react-icons/ai";
type ProjectProps = {
  id?: number;
  name: string;
  description: string;
  github: string;
  livePreview: string;
  screenshot: StaticImageData;
  index: number;
};

export default function Project({
  name,
  description,
  github,
  livePreview,
  screenshot,
  index,
}: ProjectProps) {
  return (
    <div className="reverse mt-6 grid items-center gap-10  md:grid-cols-2">
      <div className="flex flex-col items-start">
        <h2 className="font-Space text-2xl font-bold text-gray-700 dark:text-white">
          {name}
        </h2>
        <p className="mt-6 font-Space  text-gray-800 dark:text-gray-50">
          {description}
        </p>
        <div className="group relative z-10 mt-10 transition active:scale-95">
          <div className="absolute top-0 -z-10 h-full w-full rounded-md border-2 border-blue-600"></div>
          <button
            onClick={() => window.open(github, "_blank")}
            className={`rounded-md bg-blue-600 px-8 py-2 font-Space  text-gray-50 transition duration-300 hover:bg-blue-500 active:scale-95 group-hover:${
              index % 2 === 0 ? "-translate-x-2" : "translate-x-2"
            } group-hover:translate-y-2`}
          >
            View Project
          </button>
        </div>
      </div>
      <div
        onClick={() => {
          window.open(livePreview, "_blank");
        }}
        className={`group relative -order-1 cursor-pointer   ${
          index % 2 === 0 ? "md:order-none" : "md:-order-1"
        }  border-2 border-blue-500 hover:scale-105 rounded-2xl overflow-hidden transition duration-300 shadow-lg`}
      >
        <Image
          placeholder="blur"
          layout="responsive"
          className="pointer-events-none h-full w-full"
          src={screenshot}
          alt="screenshot"
        />
        <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center space-x-2 bg-zinc-900 opacity-0 transition duration-300 group-hover:bg-opacity-60 group-hover:opacity-100 ">
          <AiOutlineEye className="text-lg font-bold text-white" />
          <p className="font-Yellowtail text-2xl text-white">Preview</p>
        </div>
      </div>
    </div>
  );
}
