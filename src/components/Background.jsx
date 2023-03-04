import React from "react";
import Spline from "@splinetool/react-spline";

const Background = () => {
  return (
    <>
      <div className="h-[100vh] bg-black">
        <div className="fixed top-0 z-[-1] h-screen w-screen overflow-hidden">
          <Spline scene="https://prod.spline.design/R7u20LxCiHGFBQGE/scene.splinecode" />
        </div>

        <div className="z-10 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-[#362DB5] to-[#A047B0]">
          fewf
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Background;
