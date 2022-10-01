import { Routes, Route } from "react-router-dom";
import About from "../../pages/About";
import Projects from "../../pages/Projects";
import "./style.css";

import classNames from "classnames";

import Logo from "../../img/android-chrome-512x512.png";
import { useState } from "react";

export default function Header() {
  const [isOpened, setIsopened] = useState(false);
  return (
    <div className="bg-gray-900 flex justify-between  items-center text-white w-full h-[70px] md:h-[75px]   sticky top-0">
      <div className="w-[50%] h-full flex justify-center items-center text-border mb-3 md:mb-3 transition-all ">
        <img src={Logo} className="w-40 " alt="" />
      </div>

      <div
        className={classNames({
          "bg-gray-700 md:hidden burger transition-all overflow-hidden  flex justify-start items-center absolute w-full ": true,
          "top-[70px] h-[170px]": isOpened,
          "top-[70px] h-0": !isOpened,
        })}
      >
        <ul className="z-20 pl-32  mt-4">
          <li className="mb-6 text-xl">
            <a
              className="  mx-2 hover:opacity-60 transition-all duration-300"
              href="#about"
            >
              About
            </a>
          </li>
          <li className="mb-6 text-xl">
            <a
              className=" mr-3 mx-2 hover:opacity-60 transition-all duration-300"
              href="#services"
            >
              Services
            </a>
          </li>
          <li className="mb-6 text-lg">
            <a
              className="w-24    h-6 rounded-2xl flex items-center justify-center   hover:opacity-80  transition-all font-semibold bg-sky-500"
              href="#contact"
            >
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>

      <nav className="w-[50%] hidden md:flex justify-center items-center  h-full text-center text-sm">
        <a
          className="mx-2   hover:opacity-60 transition-all duration-300"
          href="#about"
        >
          About
        </a>
        <a
          className="mx-2 mr-3  hover:opacity-60 transition-all duration-300"
          href="#services"
        >
          Services
        </a>

        <a
          className="w-20 text-sm rounded-2xl h-6 flex items-center justify-center   hover:opacity-80  transition-all font-semibold bg-sky-500"
          href="#contact"
        >
          <span>Contact</span>
        </a>
      </nav>
      <button
        onClick={() => setIsopened(!isOpened)}
        className="md:hidden  mx-9"
      >
        <svg width="32" height="32" viewBox="0 0 512 512">
          <path
            fill="currentColor"
            d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"
          />
        </svg>
      </button>
    </div>
  );
}
