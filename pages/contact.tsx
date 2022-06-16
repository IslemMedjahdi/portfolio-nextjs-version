import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setContactData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onsubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (
      contactData.fullName.trim() !== "" &&
      contactData.email.trim() !== "" &&
      contactData.message.trim() !== ""
    ) {
      setLoading(true);
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          e.target as HTMLFormElement,
          process.env.NEXT_PUBLIC_USER_ID
        )
        .then(
          (result) => {
            alert(
              "Message Sent, We will get back to you shortly" + result.text
            );
          },
          (error) => {
            alert("An error occurred, Please try again" + error.text);
          }
        )
        .finally(() => setLoading(false));
    } else {
      alert("some fields must not be empty!");
    }
  };
  return (
    <div className="w-full">
      <Head>
        <title>Portfolio | Medjahdi | Contact</title>
        <meta name="description" content="contact Islem Medjahdi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative flex h-screen flex-col items-center overflow-x-hidden bg-gray-50 transition scrollbar-thin scrollbar-track-gray-50 scrollbar-thumb-gray-300 dark:bg-[#111827] dark:scrollbar-thumb-gray-800 dark:scrollbar-track-gray-900">
        <Header />
        <main className="container mt-12 mb-[20vh] flex max-w-4xl flex-col items-start justify-center px-10">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-Space text-4xl font-bold  text-gray-600 dark:text-white md:text-5xl"
          >
            Contact 📨
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="mt-5 font-Space text-gray-600 dark:text-gray-50"
          >
            Feel free to contact me ( ki_medjahdi@esi.dz )
          </motion.p>
          <form
            onSubmit={onsubmit}
            className="mt-5 flex w-full flex-col items-start space-y-2 font-Space text-gray-50 dark:text-gray-800"
          >
            <div className="flex w-full flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-2">
              <motion.input
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.7, type: "spring" }}
                onChange={onChange}
                name="fullName"
                value={contactData.fullName}
                className="w-full rounded-sm bg-gray-600 px-3 py-2 outline-none  placeholder:text-gray-50 dark:bg-gray-50 dark:placeholder:text-gray-400 md:w-1/2"
                placeholder="Full name"
              />
              <motion.input
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.7, type: "spring", delay: 0.4 }}
                onChange={onChange}
                name="email"
                value={contactData.email}
                className="w-full rounded-sm bg-gray-600 px-3 py-2 outline-none placeholder:text-gray-50 dark:bg-gray-50 dark:placeholder:text-gray-400 md:w-1/2"
                placeholder="Email"
                type="email"
              />
            </div>
            <div className="w-full">
              <motion.input
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.7, type: "spring", delay: 0.8 }}
                onChange={onChange}
                name="subject"
                value={contactData.subject}
                className="w-full rounded-sm  bg-gray-600 px-3 py-2 outline-none placeholder:text-gray-50 dark:bg-gray-50 dark:placeholder:text-gray-400  "
                placeholder="Subject"
              />
            </div>
            <div className="w-full">
              <motion.textarea
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.7, type: "spring", delay: 1.2 }}
                onChange={onChange}
                name="message"
                value={contactData.message}
                className="min-h-[8rem] w-full  rounded-sm bg-gray-600 px-3 py-2 outline-none placeholder:indent-0 placeholder:text-gray-50 dark:bg-gray-50 dark:placeholder:text-gray-400"
                placeholder="Your message"
              />
            </div>
            <div className="group relative z-10 mt-10 self-end transition active:scale-95">
              <div className="absolute top-0 -z-10 h-full w-full rounded-md border-2 border-blue-600"></div>
              <button
                className="rounded-md bg-blue-600 px-8 py-2 font-Space  text-gray-50 transition duration-300 hover:bg-blue-500 active:scale-95 
              group-hover:translate-x-2 group-hover:translate-y-2"
              >
                {loading ? "loading ..." : "Send message"}
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};
export default Contact;
