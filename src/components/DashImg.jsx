import Image from "next/Image";
import React from "react";
import DImg from "../assets/DashImg.jpeg";

export const DashImg = () => {
  return (
    <div className="flex justify-center">
      <Image
        src={DImg}
        alt="DashBoardImg"
        className="h-[35rem] w-max drop-shadow-[0_15px_20px_rgba(54,45,101,0.7)] rounded-2xl hover:scale-125 transition-all duration-500"
      />
    </div>
  );
};
