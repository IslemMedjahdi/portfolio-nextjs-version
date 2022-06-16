import { StaticImageData } from "next/image";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import { motion } from "framer-motion";
import Project from "../components/Project";
import markdownScreenShot from "../public/markdownScreenShot.png";
import CountryFinderScreenShot from "../public/CountryFinderScreenShot.png";
import APSScreenShot from "../public/APSScreenShot.png";
import DOMEScreenShot from "../public/DOMEScreenShot.png";
import whatsappScreenshot from "../public/whatsappScreenshot.png";
type ProjectType = {
  id: number;
  name: string;
  description: string;
  github: string;
  livePreview: string;
  screenshot: StaticImageData;
};

const projects: ProjectType[] = [
  {
    id: 0,
    name: "Whatsapp Desktop Clone",
    description: "Responsive realtime chat app clone to whatsapp",
    github: "https://github.com/IslemMedjahdi/whatsapp-v2-clone",
    livePreview: "https://whatsapp-v2-clone.vercel.app/",
    screenshot: whatsappScreenshot,
  },
  {
    id: 1,
    name: "Markdown Editor",
    description:
      "MarkDown Editor is a fullstack web application for creating, editing and saving markdowns with live preview.",
    github: "https://github.com/IslemMedjahdi/markdown-editor",
    livePreview: "https://markdown-editor-islemmedjahdi.vercel.app/",
    screenshot: markdownScreenShot,
  },
  {
    id: 2,
    name: "Country Finder",
    description:
      "Country finder A website that allows you to browse the countries of the world with all the necessary information about the country with advanced search features",
    github: "https://github.com/IslemMedjahdi/Country-finder",
    livePreview: "https://country-finder-medjahdi.netlify.app/",
    screenshot: CountryFinderScreenShot,
  },
  {
    id: 3,
    name: "APS: The art of problem solving",
    description:
      "APS: THE ART OF PROBLEM SOLVING is a website for the ESMS event of the CSE club.",
    github: "https://github.com/IslemMedjahdi/ESMS12-APS-website",
    livePreview: "https://aps-esms12.netlify.app/",
    screenshot: APSScreenShot,
  },
  {
    id: 4,
    name: "DOME: todo app",
    description:
      "DOME is a TODO App that allows the user to add, delete and reorder the tasks of the todo list using drag and drop.",
    github: "https://github.com/IslemMedjahdi/Do-Me-Todo-App",
    livePreview: "https://dome-todoapp.netlify.app/",
    screenshot: DOMEScreenShot,
  },
];

const Projects: NextPage = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Portfolio | Medjahdi | Projects</title>
        <meta
          name="description"
          content="Islem Medjahdi Portfolio Projects page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative flex h-screen flex-col items-center overflow-x-hidden bg-gray-50 transition scrollbar-thin scrollbar-track-gray-50 scrollbar-thumb-gray-300 dark:bg-[#111827] dark:scrollbar-thumb-gray-800 dark:scrollbar-track-gray-900">
        <div className="fixed right-20 top-20 h-44 w-72 -rotate-[14deg] rounded-lg bg-blue-400 opacity-25 blur-3xl" />
        <div className="fixed left-20 bottom-1/3 h-44 w-52  -rotate-12 rounded-md bg-blue-400 opacity-25 blur-3xl" />
        <Header />
        <main className="container mt-12 mb-[20vh] flex max-w-4xl flex-col items-start justify-center px-10">
          <h1 className="font-Space text-4xl font-bold  text-gray-600 dark:text-white md:text-5xl">
            Projects 💡
          </h1>
          <p className="mt-5 font-Space text-gray-600  dark:text-gray-50">
            {"Some things i've been working on in the past few years:"}
          </p>
          <div>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ x: index % 2 === 0 ? "-100vw" : "100vw" }}
                animate={{ x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                  stiffness: 50,
                  type: "spring",
                }}
              >
                <Project index={index} {...project} />
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
