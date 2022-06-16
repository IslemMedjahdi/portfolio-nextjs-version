import React from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import Link from "next/link";
type Props = {
  setLocation: (n: number) => void;
  location: number;
  currentLocation: number;
  Icon: IconType;
  to: string;
};

export default function FooterButton({
  setLocation,
  currentLocation,
  location,
  Icon,
  to,
}: Props) {
  return (
    <div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.3, delay: 0 }}
      >
        <Link href={to}>
          <div
            onClick={() => setLocation(location)}
            className={`group flex items-center space-x-1 transition hover:opacity-80 ${
              currentLocation === location
                ? "bg-blue-500"
                : "bg-gray-100 dark:bg-gray-800"
            } ${
              currentLocation === location + 1 ||
              currentLocation === location - 1 ||
              currentLocation === location
                ? "scale-110"
                : "scale-95"
            } cursor-pointer items-center justify-center rounded-xl p-2 transition duration-200 hover:opacity-80`}
          >
            <Icon
              className={`h-7 w-7  ${
                currentLocation === location ? "text-white" : "text-gray-600"
              } dark:text-white`}
            />
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
