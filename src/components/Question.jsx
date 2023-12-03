import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";

const Question = ({ que, ans, show, setShow }) => {
  return (
    <div
      className={
        !show
          ? `h-fit bg-[#f7f8fd] text-[#8247ff] p-3 rounded-md `
          : `h-fit p-3 rounded-md bg-[#f7f8fd] transition ease-in-out duration-300`
      }
    >
      <div
        className="flex w-full justify-between items-center py-1"
        onClick={() => setShow(!show)}
      >
        <div className={!show ? `text-[#8247ff] font-semibold p-2 text-xl` : `text-xl font-semibold p-2`}>{que}</div>
        <div className="contents">
          {show ? <FaPlus className="text-[#8247ff]" size={25} /> : <AiOutlineClose className="text-[#8247ff]" size={25} />}
        </div>
      </div>
      <div className={!show ? "text-black p-3" : "hidden p-3"}>{ans}</div>
    </div>
  );
};

export default Question;
