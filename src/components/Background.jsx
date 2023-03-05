import React from "react";
import Spline from "@splinetool/react-spline";
import LendingSs from "../assets/lendingSs.jpeg";
import Image from "next/Image";
import BorrowSs from "../assets/borrowSs.jpeg";

const Background = () => {
  return (
    <>
      <div className="z-[0] absolute top-0 h-[95vh] w-screen  ">
        <Spline
          scene="https://prod.spline.design/R7u20LxCiHGFBQGE/scene.splinecode"
          className="z-[0]"
        />
      </div>

      <div className="flex flex-row items-center ">
        <div className="z-[2] w-1/2 flex-1 m-16 relative font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-[#362DB5] to-[#A047B0]">
          lorejbafba jhaifbaiufgba jafb afaoi
        </div>
        <div className="z-[2] w-1/2 flex-1 m-16 mr-0 relative overflow-x-clip">
          <Image
            src={LendingSs}
            alt="gg"
            className=" h-5/6 w-5/6  opacity-75 drop-shadow-xl rounded-lg"
          />
          <Image
            src={BorrowSs}
            alt=""
            className="absolute h-96 w-auto top-[65%] left-[20%] drop-shadow-[0_35px_35px_rgba(54,45,101,0.7)] rounded-lg overflow-hidden z-[1]"
          />
        </div>
      </div>
    </>
  );
};

export default Background;
