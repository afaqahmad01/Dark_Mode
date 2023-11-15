import React, { useState, useEffect } from "react";
import LogoDark from "../assets/img/logo-dark.svg";
import LogoWhite from "../assets/img/logo-white.svg";
import { BsFillSunFill, BsMoonFill, BsCheck } from "react-icons/bs";
import GirlImage from "../assets/img/girl.png";
const Hero = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "light");
    }
  }, []);
  const html = document.querySelector("html");

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      html.classList.add("dark");
      setTheme("dark");
    } else {
      html.classList.remove("dark");
      setTheme("light");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    if (localStorage.getItem("theme") === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };
  return (
    <section className="min-h-[740px] w-full bg-heroLight bg-cover bg-center bg-no-repeat overflow-hidden dark:bg-heroDark">
      <div className="container mx-auto px-4 lg:px-0">
        <header className="flex items-center justify-between py-8">
          <div>
            <a href="#">
              {theme === "light" ? (
                <img src={LogoDark} />
              ) : (
                <img src={LogoWhite} />
              )}
            </a>
          </div>
          <button
            onClick={handleThemeSwitch}
            className="p-4 bg-accent text-white rounded-full w-12 h-12 flex justify-center"
          >
            {theme === "light" ? <BsMoonFill /> : <BsFillSunFill />}
          </button>
        </header>
        <div className="flex flex-col items-center lg:flex-row min-h-[740px]">
          <div className="flex-1 flex flex-col items-start">
            <h1 className="text-5xl text-primary font-bold mb-6 leading-[60px] dark:text-white">
              Online Accounting <br />
              <span className="text-accent">Fast & Uncomplicated</span>{" "}
            </h1>
            <p className="font-ligh text-grey mb-12 max-w-[597px] dark:text-white">
              We specialize in small businessess. Our goal is to eliminate
              bureaucracy, creating a modern relationship between your comapany
              and the accountant.
            </p>
            <div className="flex flex-col gap-y-6 mb-12">
              <div className="flex items-center gap-x-2">
                <div className="bg-accent/10 text-accent w-[20px] h-[20px] rounded-full flex justify-center items-center dark:bg-accent/70 dark:text-white ">
                  <BsCheck />
                </div>
                <p className="text-base font-light dark:text-white">
                  Have your accounting 100% online.
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <div className="bg-accent/10 text-accent w-[20px] h-[20px] rounded-full flex justify-center items-center dark:bg-accent/70 dark:text-white ">
                  <BsCheck />
                </div>
                <p className="text-base font-light dark:text-white">
                  Save with plans strting at $10/month.
                </p>
              </div>
            </div>
            <button className="btn">Discover your plans</button>
          </div>
          <div className="hidden lg:flex self-end">
            <img src={GirlImage} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
