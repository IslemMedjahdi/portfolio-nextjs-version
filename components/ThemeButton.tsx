import { motion } from "framer-motion";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";

type Props = {
  toggleTheme: () => void;
  theme: boolean;
};
export default function ThemeButton({ toggleTheme, theme }: Props) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.3, delay: 0 }}
    >
      <div className="relative py-2 pr-5 before:absolute before:top-1/2 before:right-full before:h-1/2 before:w-4 before:-translate-y-1/2 before:bg-gray-900 before:blur-lg before:dark:bg-gray-100 md:before:hidden">
        <div className="h-4/5 w-px bg-gray-600" />
        <div
          onClick={toggleTheme}
          className={`flex scale-105
          cursor-pointer items-center justify-center rounded-xl bg-gray-100 p-2  transition duration-200 hover:opacity-80 active:scale-95 dark:bg-gray-800`}
        >
          {theme ? (
            <BsFillMoonFill className="h-7 w-7 text-white" />
          ) : (
            <BsSunFill className="h-7 w-7 text-gray-600 " />
          )}
        </div>
      </div>
    </motion.div>
  );
}
