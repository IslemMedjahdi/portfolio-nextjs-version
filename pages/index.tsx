import type { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Portfolio | Medjahdi </title>
        <meta
          name="description"
          content="Islem Medjahdi, A Front-end Developer from Algeria."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative flex h-screen flex-col items-center overflow-x-hidden bg-gray-50 transition dark:bg-[#111827]">
        <Header />
        <div className="absolute right-20 top-20 h-44 w-72 -rotate-[14deg] rounded-lg bg-blue-400 opacity-25 blur-3xl" />
        <div className="absolute left-20 bottom-1/3 h-44 w-52  -rotate-12 rounded-md bg-blue-400 opacity-25 blur-3xl" />

        <main className="container mt-16 mb-[20vh] flex max-w-4xl flex-col items-start justify-center px-10">
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: "0" }}
            transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
          >
            <h1 className="font-Space text-4xl font-bold leading-relaxed text-gray-600 dark:text-gray-50  md:text-5xl md:leading-relaxed">
              Hello!👋🏻 <br />
              My name is Islem
              <br />
              I'm a{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90.2deg, #3B82F6 63.77%, #EC4899 83.43%, #3B82F6 99.94%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Front-end Developer
              </span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.6,
              type: "spring",
              delay: 0.4,
              stiffness: 50,
            }}
          >
            <p className="font-Space text-gray-600 dark:text-gray-50">
              Let me help you grow your business and make your product look
              pretty while at it
            </p>
          </motion.div>
          <div className="relative z-10 mt-10 transition active:scale-95">
            <div className="absolute top-0 -z-10 h-full w-full  rounded-md border-2 border-blue-600 "></div>
            <Link href={"contact"}>
              <button
                onClick={() => {}}
                className="rounded-md bg-blue-600 px-8 py-2 font-Space  text-gray-50 transition duration-300 hover:translate-x-2 hover:translate-y-2 hover:bg-blue-500 active:scale-95"
              >
                Say Hello
              </button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
