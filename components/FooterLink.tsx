import React from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

type Props = {
  location: number;
  currentLocation: number;
  Icon: IconType;
  link: string;
};

export default function FooterLink({
  location,
  Icon,
  currentLocation,
  link,
}: Props) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.3, delay: 0.6 }}
    >
      <div
        onClick={() => window.open(link, "_blank")}
        className={`group  flex active:bg-blue-500 ${
          location === currentLocation
            ? "bg-blue-500"
            : "bg-gray-100 dark:bg-gray-800"
        } ${
          currentLocation === location - 1 ||
          currentLocation === location ||
          currentLocation === location + 1
            ? "scale-110"
            : "scale-95"
        } cursor-pointer items-center justify-center rounded-xl p-2  transition duration-200 hover:scale-110 hover:opacity-80`}
      >
        {" "}
        <Icon
          className={`h-7 w-7 group-active:text-white ${
            location === currentLocation ? "text-white" : "text-gray-600"
          } dark:text-white`}
        />
      </div>
    </motion.div>
  );
}
