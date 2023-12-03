import React from "react";
import Card from "./Card";
import Marquee from "react-fast-marquee";

const Testimonals = () => {
  return (
    <>
      <div
        className="mt-[100px] px-[30px] md:px-[10%]"
        data-aos="fade-up"
        data-aos-duration="2000"
        id="testimonals"
      >
        <div>
          <div className="w-fit uppercase text-sm py-1 px-4 border rounded bg-white text-[#8a61ff] font-semibold">
            🧡 TESTIMONIALS
          </div>
        </div>
        <div className="w-full py-2 flex">
          <h1 className="text-4xl lg:text-6xl font-semibold text-left">
            Hear from our
            <span className="text-[#FE8162]"> Satisfied </span>
            clients
          </h1>
        </div>
        <div className="py-4 text-[#767575] max-w-[600px] text-lg font-semibold">
          Discover why our clients love working with us. Read their testimonials
          and learn how we has helped businesses.
        </div>
        <div className="shadow-md">
        <MarqueeEffect />
        </div>
      </div>
    </>
  );
};

const MarqueeEffect = () => {
  const data = [
    {
      name: "Alex",
      role: "IT Manager",
      text: `"I cant imagine running my business without this product. The automation features have saved me hours of manual work, allowing me to focus on strategic tasks.`,
    },
    {
      name: "Alex",
      role: "IT Manager",
      text: `"I cant imagine running my business without this product. The automation features have saved me hours of manual work, allowing me to focus on strategic tasks.`,
    },
    {
      name: "Alex",
      role: "IT Manager",
      text: `"I cant imagine running my business without this product. The automation features have saved me hours of manual work, allowing me to focus on strategic tasks.`,
    },
    {
      name: "Alex",
      role: "IT Manager",
      text: `"I cant imagine running my business without this product. The automation features have saved me hours of manual work, allowing me to focus on strategic tasks.`,
    },
    {
      name: "Alex",
      role: "IT Manager",
      text: `"I cant imagine running my business without this product. The automation features have saved me hours of manual work, allowing me to focus on strategic tasks.`,
    },
  ];
  return (
    <Marquee direction="right">
      {data.map((ele, index) => {
        return (
          <Card key={index} role={ele.role} name={ele.name} text={ele.text} />
        );
      })}
    </Marquee>
  );
};

export default Testimonals;
