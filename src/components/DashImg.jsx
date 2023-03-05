// import Image from "next/Image";
import React from "react";

export const DashImg = () => {
  return (
    <div className="flex justify-center">
      <img
        src='/assets/DashImg.jpeg'
        alt="DashBoardImg"
        className="h-[35rem] w-max drop-shadow-[0_15px_20px_rgba(54,45,101,0.7)] rounded-2xl hover:scale-125 transition-all duration-500"
      />
    </div>
  );
};
