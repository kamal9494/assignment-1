import React from "react";
import { MdPlayCircle } from "react-icons/md";
import { FaArrowCircleRight } from "react-icons/fa";
// import { gsap } from "gsap";
// import SplitType from "split-type";

const Hero = () => {
  return (
    <div
      className="h-fit"
      style={{ background: "linear-gradient(180deg, #fdf3ed 35%, #fff 100%)" }}
    >
      <div className="ani pt-[90px] w-full h-fit max-auto text-center gap-6 flex flex-col items-center">
        <div className="uppercase text-sm  px-4 bg-white text-[#8a61ff] font-semibold">
          <span className="text-lg">👋</span> Welcome to Manage wise!
        </div>
        <div className="w-full p-2">
          <h1 className="text-5xl lg:text-6xl lg:px-[20%] font-semibold text-center ">
            Empower your business with
            <span className="text-[#FE8162]"> Strategic </span>
            insights
          </h1>
        </div>
        <div className="px-16 py-4 text-[#767575] lg:px-[30%] text-lg font-semibold">
          <p className="text-center">
            Powerful management platform designed to streamline your business
            operations, boost productivity, and drive success
          </p>
        </div>
        <div className="w-full text-lg px-5 flex flex-col justify-center gap-6 md:flex-row">
          <button className="bg-[#8247FF]  md:max-w-[200px] rounded-xl text-white w-full py-3 flex gap-2 justify-center shadow items-center font-semibold transition ease-in duration-150 hover:ease-out">
            Get Started
            <FaArrowCircleRight />
          </button>
          <button className="bg-[#fff] md:max-w-[200px] rounded-xl w-full py-3 flex gap-1 justify-center shadow items-center font-semibold border border-white  hover:border-black ease-in">
            Watch Demo
            <MdPlayCircle />
          </button>
        </div>
        <div className="max-w-screen-lg mx-auto px-6">
          <img
            className="w-full h-auto rounded-lg"
            src={require("../images/img1.png")}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
