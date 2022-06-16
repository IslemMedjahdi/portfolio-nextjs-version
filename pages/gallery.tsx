import { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import Header from "../components/Header";
const Gallery: NextPage = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Portfolio | Medjahdi | Gallery</title>
        <meta
          name="description"
          content="Islem Medjahdi Portfolio Gallery page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative flex h-screen flex-col items-center overflow-x-hidden bg-gray-50 transition scrollbar-thin scrollbar-track-gray-50 scrollbar-thumb-gray-300 dark:bg-[#111827] dark:scrollbar-thumb-gray-800 dark:scrollbar-track-gray-900">
        <Header />
        <div className="absolute right-20 top-20 h-44 w-72 -rotate-[14deg] rounded-lg bg-blue-400 opacity-25 blur-3xl" />
        <div className="absolute left-20 bottom-1/3 h-44 w-52  -rotate-12 rounded-md bg-blue-400 opacity-25 blur-3xl" />
        <main className="container mt-12 mb-[25vh] flex max-w-4xl flex-col items-start justify-center px-10">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-Space text-4xl font-bold  text-gray-600 dark:text-white md:text-5xl"
          >
            Gallery 📸
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="mt-5 font-Space text-gray-600 dark:text-gray-50"
          >
            I'm sharing with you one of my best moments. Drag to see the full
            picture
          </motion.p>

          <div className="mt-10 flex relative flex-wrap justify-center gap-10">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(
              (photo, index) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                  }}
                  key={index}
                >
                  <motion.img
                    loading="eager"
                    drag
                    alt={"img"}
                    dragConstraints={{ bottom: 0, left: 0, right: 0, top: 0 }}
                    whileDrag={{ scale: 3 }}
                    className="h-36 w-auto cursor-grab overflow-hidden rounded-lg border-2 border-gray-500 object-cover shadow-lg  dark:border-gray-300"
                    src={`/img${photo}.jpg`}
                  />
                </motion.div>
              )
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Gallery;
