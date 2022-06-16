import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { useRouter } from "next/router";

type Props = {
  children: any;
};

export default function Layout({ children }: Props) {
  const { pathname } = useRouter();
  useEffect(() => {
    switch (pathname) {
      case "/about":
        setLocation(1);
        break;
      case "/projects":
        setLocation(2);
        break;
      case "/gallery":
        setLocation(5);
        break;
      case "/contact":
        setLocation(6);
        break;
      default:
        setLocation(0);
    }
  }, [pathname]);
  const [theme, setTheme] = useState(false);
  const [location, setLocation] = useState(0);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setTheme(theme === "true" ? true : false);
    }
  }, []);
  const toggleTheme = (): void => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme ? "false" : "true");
    }
    setTheme(!theme);
  };
  return (
    <div className={`flex w-screen justify-center ${theme ? "dark" : ""}`}>
      {children}
      <Footer
        location={location}
        theme={theme}
        setLocation={setLocation}
        toggleTheme={toggleTheme}
      />
    </div>
  );
}
