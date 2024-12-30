import React from "react";
import { FaArrowCircleRight, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  const buildId = process.env.NETLIFY_BUILD_ID || 'local';
  const deployId = process.env.CONTEXT || 'development';

  return (
    <div
      className="h-fit mt-[80px] px-[30px] md:px-[10%] "
      style={{ background: "linear-gradient(180deg, #fff 15%, #fdf3ed 100%)" }}
    >
      <div className="sm:flex sm:flex-col xl:flex-row md:p-20" data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500">
        <div className="flex flex-col bg-white  md:px-20 py-10 items-center xl:items-start">
          <div className="uppercase text-sm w-fit bg-white text-[#8a61ff] rounded-lg border py-1 px-4 my-4 font-semibold">
            <span className="text-lg uppercase">👋</span> Don't Miss Out
          </div>
          <div className="xl:text-left text-center">
            <h1 className="text-5xl lg:text-5xl font-semibold">
              Unleash your
              <span className="text-[#FE8162]"> Potential </span>
              with us
            </h1>
          </div>
          <div className="py-4 text-[#767575] text-lg font-semibold">
            <p className="xl:text-left text-center">
              Join our community of ambitious individuals and organizations
              eager to make a difference.
            </p>
          </div>
          <div className="w-full flex justify-center xl:justify-start">
            <button className="bg-[#8247FF] md:max-w-[200px] rounded-xl text-white w-[50%] py-3 flex gap-2 justify-center shadow items-center font-semibold transition ease-in duration-150 hover:ease-out">
              Try out now
              <FaArrowCircleRight />
            </button>
          </div>
        </div>
        <div className="flex flex-col md:p-20 xl:p-3 justify-evenly items-center bg-white">
          <div className="bg-white p-3 rounded-lg my-2">
            <h1 className="text-2xl font-semibold border p-2 shadow-md">
              <span className="text-[#8a61ff]">200+ </span> Happy users
            </h1>
          </div>
          <div>
            <div className="max-w-screen-lg mx-auto px-6 flex justify-center">
              <img
                className="w-[80%] h-auto rounded-lg"
                src={require("../images/img6.png")}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 px-[10%] md:flex gap-20 flex-col">
        <div className="flex flex-col items-center md:flex-row md:justify-between gap-5">
          <img
            className="h-[45px] lg:block max-w-[200px]"
            alt="logo"
            src={require("../images/sm-logo.png")}
          />
          <div className="flex flex-col gap-1 text-center md:text-left">
            <div>Features</div>
            <div>FAQ</div>
            <div>Pricing</div>
            <div>Testimonials</div>
          </div>
        </div>
        <div className="mt-10 py-5 md:justify-between flex gap-5 justify-center items-center flex-col md:flex-row">
          <p>© 2022 ManageWise, Inc.</p>
          <div className="flex gap-3">
            <FaInstagram size={25} />
            <FaSquareXTwitter size={25} />
            <FaLinkedin size={25} />
          </div>
        </div>
        <div>
          <p>Build: {buildId}</p>
          <p>Environment: {deployId}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
