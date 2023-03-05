import React from "react";
import Spline from "@splinetool/react-spline";
import LendingSs from "../assets/lendingSs.jpeg";
import Image from "next/Image";
import BorrowSs from "../assets/borrowSs.jpeg";
import { TypeAnimation } from "react-type-animation";

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
        <div className="z-[2] w-[80px] flex-1 m-16 relative font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-[#362DB5] to-[#A047B0]">
          <TypeAnimation
            // Same String at the start will only be typed once, initially
            sequence={[
              "Make the most of your MATIC",
              2000,
              "Make the most of your ETH",
              2000,
              "Make the most of your USDT",
              2000,
            ]}
            speed={50} // Custom Speed from 1-99 - Default Speed: 40
            style={{ fontSize: "2em" }}
            wrapper="span" // Animation will be rendered as a <span>
            repeat={Infinity} // Repeat this Animation Sequence infinitely
          />
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
            className="absolute h-5/6 w-5/6 top-[50%] ml-[-35%] right-[35%] opacity-80 drop-shadow-xl rounded-lg overflow-hidden z-[-1]"
          />
        </div>
      </div>
    </>
  );
};

export default Background;
