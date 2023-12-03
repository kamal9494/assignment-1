import React from "react";

const Card = ({ text, name, role }) => {
  return (
    <div className="w-[300px] m-2 rounded-md h-fit p-10 py-15 border">
      <div className="break-words">
      <p>
        {text}
      </p>
      </div>
      <div className="flex py-3">
        <img
          className="w-[50px]"
          src={require("../images/profile.png")}
          alt="profile"
        />
        <div className="flex flex-col px-4">
          <div>{name}</div>
          <div>{role}</div>
        </div>
      </div>
    </div>
  );
};


export default Card;
