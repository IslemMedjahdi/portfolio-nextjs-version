import { AiFillHome } from "react-icons/ai";
import { BsLightbulbFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiGithub } from "react-icons/fi";
import { IoMailOutline, IoImagesOutline } from "react-icons/io5";
import { FiLinkedin } from "react-icons/fi";
import { useEffect, useRef } from "react";
import FooterButton from "./FooterButton";
import ThemeButton from "./ThemeButton";
import FooterLink from "./FooterLink";

type FooterProps = {
  location: number;
  theme: boolean;
  toggleTheme: () => void;
  setLocation: (n: number) => void;
};

export default function Footer({
  theme,
  location,
  toggleTheme,
  setLocation,
}: FooterProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (location > 4) {
      ref.current?.scrollBy(window.innerWidth, 0);
    }
  }, [location]);
  return (
    <div
      className={`fixed  top-[87vh] z-50 flex max-w-xs  items-center space-x-3 self-center rounded-xl bg-white drop-shadow-lg dark:border-[1px] dark:border-[#374151] dark:bg-gray-900  sm:max-w-xl`}
    >
      <div
        ref={ref}
        className="flex items-center space-x-3 overflow-x-auto py-2 pl-5 scrollbar-none"
      >
        <FooterButton
          currentLocation={location}
          location={0}
          setLocation={setLocation}
          Icon={AiFillHome}
          to="/"
        />
        <FooterButton
          currentLocation={location}
          location={1}
          setLocation={setLocation}
          Icon={CgProfile}
          to="/about"
        />
        <FooterButton
          currentLocation={location}
          location={2}
          setLocation={setLocation}
          Icon={BsLightbulbFill}
          to="/projects"
        />
        <FooterLink
          Icon={FiGithub}
          currentLocation={location}
          location={3}
          link="https://github.com/IslemMedjahdi"
        />
        <FooterLink
          Icon={FiLinkedin}
          currentLocation={location}
          location={4}
          link="https://www.linkedin.com/in/islem-medjahdi/"
        />

        <FooterButton
          currentLocation={location}
          location={5}
          setLocation={setLocation}
          Icon={IoImagesOutline}
          to="/gallery"
        />
        <FooterButton
          currentLocation={location}
          location={6}
          setLocation={setLocation}
          Icon={IoMailOutline}
          to="/contact"
        />
      </div>
      <ThemeButton theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}
