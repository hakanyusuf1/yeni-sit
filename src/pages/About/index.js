import React from "react";
import Profile from "../../img/T02S46713PX-U02SUTVEJ9K-2f6554e3383c-512.jpg";

export default function About() {
  return (
    <div
      id="about"
      className="   flex flex-col md:flex-row items-center   w-full justify-center pt-4 h-[600px] gap-5 bg-slate-800 text-white"
    >
      <div className="box-border border-2 rounded-full  overflow-w">
        <img
          className=" overflow-hidden p-2 rounded-full w-[10rem] mx-auto md:mx-0"
          src={Profile}
          alt=""
        />
      </div>

      <div className="w-[80%]  md:w-[60%]">
      <h1 className="text-center mb-5 font-bold text-3xl">About me</h1>
        <p className=" font-semibold box-border w-[100%] break-words text-center">
          I am Hakan Yusuf, who learned software development at the age of 21
          and will continue to learn throughout his life, and who works nonstop,
          determinedly and confidently to realize his dreams. I am a software
          developer candidate who currently knows PYTHON, HTML, CSS, JavaScript
          and will work nonstop on behalf of his dreams and plans, who see
          himself in the beautiful parts of the software world.
        </p>
      </div>
    </div>
  );
}
