import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const handleResize = () => {
      setNav(true);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className={
        !nav
          ? `h-screen bg-[#fff] flex flex-col px-6 py-3 transition ease-in-out duration-300`
          : `h-fit bg-[#fdf3ed] flex justify-between items-center px-6 py-3 transition ease-in-out duration-300`
      }
    >
      <div className="flex justify-between w-full items-center">
        <img
          className="h-[45px] hidden md:block lg:hidden"
          alt="logo"
          src={require("../images/logo.png")}
        />
        <img
          className="h-[45px] block md:hidden lg:block"
          alt="logo"
          src={require("../images/sm-logo.png")}
        />

        <div className="contents  p-2 md:hidden" onClick={handleNav}>
          {!nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </div>

      <div
        className={
          !nav
            ? `mt-14 flex md:hidden justify-center gap-8 font-semibold w-full flex-col items-center text-[1.1rem]`
            : `hidden gap-6 justify-center items-center mt-10 text-[1.1rem]`
        }
      >
        <a href="#section2">
          <p className="transition cursor-pointer hover:text-[#8247ff] duration-700">
            Features
          </p>
        </a>

        {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="width: 100%; height: 100%" viewBox="0 0 4 5" preserveAspectRatio="none" width="100%" height="100%"><use href="#svg-819241569_136"></use></svg> */}

        <a href="#faq">
          <p className="transition cursor-pointer hover:text-[#8247ff] duration-700">
            FAQ
          </p>
        </a>
        <a href="#pricing">
          <p className="transition cursor-pointer hover:text-[#8247ff] duration-700">
            Pricing
          </p>
        </a>

        <a href="#testimonals">
          <p className="transition cursor-pointer hover:text-[#8247ff] duration-700">
            Testimonials
          </p>
        </a>

        <button className="mt-3 bg-[#8247ff] text-white rounded-xl w-full py-3 px-10 flex justify-center shadow items-center font-semibold border-2 border-white transition duration-150 hover:border-[#8247ff] ease-in">
          Buy Template
        </button>
      </div>

      <div className="hidden md:flex items-center gap-5 text-[1.1rem]">
        <div className="p-2">
          <a href="#section2">
            <p className="transition duration-150 cursor-pointer hover:text-[#8247ff] ease-in">
              Features
            </p>
          </a>
        </div>
        <p className="w-fit text-[#dacec2]">•</p>
        <div className="p-2">
          <a href="#faq">
            <p className="transition duration-150 cursor-pointer hover:text-[#8247ff] ease-in">
              FAQ
            </p>
          </a>
        </div>
        <p className="w-fit text-[#dacec2]">•</p>
        <div className="p-2">
          <a href="#pricing">
            <p className="transition duration-150 cursor-pointer hover:text-[#8247ff] ease-in">
              Pricing
            </p>
          </a>
        </div>
        <p className="w-fit text-[#dacec2]">•</p>
        <div className="p-2">
          <a href="#testimonals">
            <p className="transition duration-150 cursor-pointer hover:text-[#8247ff] ease-in">
              Testimonials
            </p>
          </a>
        </div>
        <div className="p-2">
          <p className="bg-white h-10 w-[150px] rounded-lg px-5 py-3 flex justify-center items-center font-semibold cursor-pointer shadow border border-white transition duration-150 hover:border-black ease-in">
            Buy Template
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
