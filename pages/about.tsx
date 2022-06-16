import type { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import Header from "../components/Header";
type TypeSkill = {
  name: string;
  value: number;
  hover?: string[];
};

const skills: TypeSkill[] = [
  { name: "HTML", value: 97 },
  { name: "CSS / TAILWIND", value: 97 },
  { name: "JavaScript / ES6", value: 95 },
  { name: "TypeScript", value: 90 },
  {
    name: "ReactJS",
    value: 95,
    hover: ["NextJs", "Redux", "StoryBook", "..."],
  },
  { name: "React Native", value: 90, hover: ["Expo", "CLI"] },
  { name: "Firebase", value: 90 },
  { name: "GIT & GITHUB", value: 95 },
];

const About: NextPage = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Portfolio | Medjahdi | About</title>
        <meta
          name="description"
          content=" A Front-end Developer from Algeria. I am a student at the higher
            school of Computer Science (ESI Algiers ex.INI). I've always been
            fascinated with how things work. fast forward to 2 years into school
            and i'm now structuring, developing and implementing incredible web
            and mobile apps."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" relative  flex h-screen flex-col items-center overflow-x-hidden bg-gray-50 transition scrollbar-thin scrollbar-track-gray-50 scrollbar-thumb-gray-300 dark:bg-[#111827] dark:scrollbar-thumb-gray-800 dark:scrollbar-track-gray-900">
        <div className="absolute right-20 top-20 h-44 w-72 -rotate-[14deg] rounded-lg bg-blue-400 opacity-25 blur-3xl" />
        <div className="absolute left-20 bottom-1/3 h-44 w-52  -rotate-12 rounded-md bg-blue-400 opacity-25 blur-3xl" />
        <Header />
        <main className="container mt-12 mb-[20vh] flex max-w-4xl flex-col items-start justify-center px-10">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-Space text-4xl font-bold  text-gray-600 dark:text-white md:text-5xl"
          >
            About Me 👨‍🎓
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="mt-5 font-Space text-gray-600 dark:text-gray-50"
          >
            A brief intro to who I am and how I do what I do:
          </motion.p>
          <motion.p
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="font-space mt-10 text-gray-600 dark:text-gray-50"
          >
            I am{" "}
            <span className="text-2xl font-bold dark:text-white">
              Islem Medjahdi
            </span>
          </motion.p>
          <motion.p
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              type: "spring",
            }}
            className="mt-6 tracking-wide text-gray-600 dark:text-gray-50"
          >
            A Front-end Developer from Algeria. I am a student at the higher
            school of Computer Science (ESI Algiers ex.INI). I've always been
            fascinated with how things work. fast forward to 2 years into school
            and i'm now structuring, developing and implementing incredible web
            and mobile apps.
          </motion.p>
          <motion.p
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              type: "spring",
            }}
            className="mt-6 tracking-wide text-gray-600 dark:text-gray-50"
          >
            Believe i’ve got the right skills and technologies to take your
            online presence on the level it truly deserves. Your website should
            be your no1 sales agent and its works 24/7, Get a quote now that’s
            best for your business.
          </motion.p>
          <div className="relative z-10 mt-10 transition active:scale-95">
            <div className="absolute top-0 -z-10 h-full w-full rounded-md border-2 border-blue-600 "></div>
            <button
              onClick={() => {}}
              className="rounded-md bg-blue-600 px-8 py-2 font-Space  text-gray-50 transition duration-300 hover:translate-x-2 hover:translate-y-2 hover:bg-blue-500 active:scale-95"
            >
              Download my resume
            </button>
          </div>
          <div className="mt-20 w-full space-y-5">
            <h1 className="font-Space text-3xl font-bold text-gray-800  dark:text-white md:text-4xl">
              PRO SKILLS :
            </h1>
            <div className="!mt-10 flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex w-96 items-center space-x-2">
                  <div
                    className={skill.hover ? "tooltip" : ""}
                    data-tip={skill.hover?.join(" , ")}
                  >
                    <p className="whitespace-nowrap font-Space font-bold text-gray-600 dark:text-gray-50">
                      {skill.name}
                    </p>
                  </div>
                  <progress
                    className="progress dark:progress-info"
                    value={skill.value}
                    max="100"
                  ></progress>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-20 w-full space-y-5">
            <h1 className="font-Space text-3xl font-bold text-gray-800  dark:text-white md:text-4xl">
              ACHIEVEMENTS :
            </h1>
            <div className="!mt-10 flex flex-wrap gap-4">
              <p className="indent-14 font-Space text-xl font-bold text-gray-600 dark:text-gray-50">
                Soon!
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default About;
