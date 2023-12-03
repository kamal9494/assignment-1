import React from "react";
import Aos from "aos";
import "aos";

const Section2 = () => {
  Aos.init();
  return (
    <div id="section2" className="px-[30px] md:px-[10%] md:py-[10%] flex flex-col items-center justify-center p-20">
      <div
        className="bg-white w-full h-fit max-auto text-center flex flex-col items-center"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="uppercase text-sm py-1 px-4 border rounded bg-white text-[#8a61ff] font-semibold">
          🔥 Premier features
        </div>
        <div className="w-full p-2 flex justify-center items-center">
          <h1 className="text-4xl  lg:text-6xl font-semibold text-center">
            Discover our product's
            <span className="text-[#FE8162]"> Capabilities </span>
          </h1>
        </div>
        <div className="px-16 py-4 text-[#767575] max-w-[600px] text-lg font-semibold">
          Don't settle for mediocrity - embrace the future of management with
          Manage Wise
        </div>
      </div>

      <div className="mt-10 sm:px-[10%] xl:px-[0%] xl:flex gap-10 justify-between text-center">
        <div
          className="bg-[#ededfa] xl:w-[50%] p-10 flex flex-col rounded-2xl"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="mt-10 bg-white w-fit rounded-[20px]">
            <p className="bg-white rounded-[20px] text-xl w-fit p-3">⭐</p>
          </div>
          <h2 className="mt-3 h-fit text-left text-2xl md:text-4xl text-black font-semibold">
            Boost productivity and streamline workflow with us. Enjoy our
            intuitive interface and robust features.
          </h2>
        </div>
        <div className="xl:w-[50%]">
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img
              className="w-full h-auto rounded-lg"
              src={require("../images/img2.png")}
              alt="img"
            />
            <div className="text-left flex flex-col gap-3 p-5">
              <p className="text-xl font-bold">Smart Task Management</p>
              <p className="text-[#767575]">
                Say goodbye to chaos with our smart task management system
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 sm:px-[10%] xl:px-[0%] xl:flex gap-10 justify-between text-center">
        <div className="rounded-[20px] mt-4" data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500">
          <img
            className="w-full h-auto rounded-lg"
            src={require("../images/img3.png")}
            alt="img"
          />
          <div className="text-left flex flex-col gap-3 p-5">
            <p className="text-xl font-bold">Flexible Scheduling</p>
            <p className="text-[#767575]">
              Stay productive with our flexible scheduling system
            </p>
          </div>
        </div>

        <div className="rounded-[20px] mt-4" data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500">
          <img
            className="w-full h-auto rounded-lg"
            src={require("../images/img4.png")}
            alt="img"
          />
          <div className="text-left flex flex-col gap-3 p-5">
            <p className="text-xl font-bold">Easy Communication</p>
            <p className="text-[#767575]">
              Collaborate seamlessly with your team in real-time
            </p>
          </div>
        </div>

        <div className="rounded-[20px] mt-4" data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500">
          <img
            className="w-full h-auto rounded-lg"
            src={require("../images/img5.png")}
            alt="img"
          />
          <div className="text-left flex flex-col gap-3 p-5">
            <p className="text-xl font-bold">Analytics</p>
            <p className="text-[#767575]">
              Gain valuable insights with our advanced analytics feature
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
