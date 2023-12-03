import React from "react";
import { FiSmartphone } from "react-icons/fi";
import { FaBell } from "react-icons/fa";
import { BsFire } from "react-icons/bs";

const Section3 = () => {
  return (
    <div className="md:px-[9%] md:py-[10%] px-[20px] bg-[#1c1c1c] text-white flex flex-col items-start justify-center">
      <div className="mt-[20px] uppercase text-sm rounded-lg border px-4 my-2 bg-white text-[#8a61ff] border-[#e6daff] font-semibold">
        <span className="text-lg">🤩</span>
        AND MORE...
      </div>
      <div>
        <h1 className="text-4xl lg:text-6xl font-semibold text-left">
          Explore an array of features that elevate your{" "}
          <span className="text-[#FE8162]"> Productivity </span> to new heights
        </h1>
      </div>
      <div className="w-full text-left py-4 text-[#767575] max-w-[600px] text-lg font-semibold">
        Discover the tools that will revolutionize the way you manage and
        optimize your operations
      </div>

      <div className="w-full xl:flex">
        <div
          className="bg-[#212121] p-8 flex flex-col items-center justify-center m-10 rounded-xl"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="bg-[#8247ff] rounded-xl p-4 ">
            <FiSmartphone size={25} />
          </div>
          <h2 className="font-bold text-2xl text-center p-3 mt-4">
            Cross-Platform Compatibility
          </h2>
          <p className="text-center text-[#767575] p-3">
            Enjoy the flexibility of cross-platform compatibility. Our product
            works seamlessly across desktop, web, and mobile devices, allowing
            you to work from your preferred device
          </p>
        </div>

        <div
          className="bg-[#212121] p-8 flex flex-col items-center justify-center m-10 rounded-xl"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="bg-[#8247ff] rounded-xl p-4 ">
            <FaBell size={25} />
          </div>
          <h2 className="font-bold text-2xl text-center p-3 mt-4">
            Stay Informed with Essential Notifications
          </h2>
          <p className="text-center text-[#767575] p-3">
            Automate support from first customer contact to closing the ticket.
            Drastically improve time to resolution.Automate support from first
            customer contact to closing the ticket.
          </p>
        </div>

        <div
          className="bg-[#212121] p-8 flex flex-col items-center justify-center m-10 rounded-xl"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="bg-[#8247ff] rounded-xl p-4 ">
            <BsFire size={25} />
          </div>
          <h2 className="font-bold text-2xl text-center p-3 mt-4">
            Secure Data Encryption at all times
          </h2>
          <p className="text-center text-[#767575] p-3">
            Trust in our robust data encryption to keep your sensitive
            information safe and secure. Rest easy knowing your data is
            protected at all times.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
