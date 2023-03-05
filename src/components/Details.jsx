import Image from "next/image";
import React from "react";
import nft from "../assets/nft.jpeg";

const Details = () => {
  return (
    <div className="h-[100vh] text-white m-[6rem] mt-[14rem] p-[4rem]">
      <div className="">
        <div className="text-center flex mb-[1.5rem] flex-col justify-center align-middle">
          <div
            className=" text-[52px] mb-6 max-w-[1120px] font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-[#362DB5] to-[#A047B0]"
            // style={{ color: "rgba(54,45,101,0.7)" }}
          >
            {" "}
            The leading non-custodial fixed yield rate protocol{" "}
          </div>
          <div
            className="text-[18.7501px]"
            style={{ color: "rgb(111, 132, 152)" }}
          >
            {" "}
            Here are a few other reasons why you should choose 88mph{" "}
          </div>
        </div>
        <div className="w-full flex">
          <div className="text-center flex-[0 0 33.33%] max-w-[33.33%] bg-[#000000] m-6 p-10 drop-shadow-[0_15px_20px_rgba(54,45,101,0.7)] opacity-70 rounded-xl">
            <div className="w-[4rem] border- h-[4rem] inline-block relative ">
              <Image src={nft} alt="nft" className="flex justify-center align-middle" />
            </div>
            <div
              className="text-[17px]"
              style={{ color: "rgb(191, 191, 191)" }}
            >
              Heading
            </div>
            <div style={{ color: "#6f8498", fontSize: "1.2rem" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              reiciendis commodi rem odit natus sunt cum nam illum optio nemo!
              Sint sit veniam facilis quisquam dolores.
            </div>
          </div>
          <div className="text-center p-10 flex-[0 0 33.33%] max-w-[33.33%] bg-[#000000] m-6 drop-shadow-[0_15px_20px_rgba(54,45,101,0.7)] opacity-70 rounded-xl">
            <div className="w-[4rem] border- h-[4rem] inline-block relative ">
              <Image src={nft} alt="nft" className="flex justify-center align-middle" />
            </div>
            <div
              className="text-[17px]"
              style={{ color: "rgb(191, 191, 191)" }}
            >
              Heading
            </div>
            <div style={{ color: "#6f8498", fontSize: "1.2rem" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              reiciendis commodi rem odit natus sunt cum nam illum optio nemo!
              Sint sit veniam facilis quisquam dolores.
            </div>
          </div>
          <div className="text-center flex-[0 0 33.33%] max-w-[33.33%] m-6 p-10 bg-[#000000] drop-shadow-[0_15px_20px_rgba(54,45,101,0.7)] opacity-70 rounded-xl">
            <div className="w-[4rem] border- h-[4rem] inline-block relative ">
              <Image src={nft} alt="nft" className="flex justify-center align-middle" />
            </div>
            <div
              className="text-[17px]"
              style={{ color: "rgb(191, 191, 191)" }}
            >
              Heading
            </div>
            <div style={{ color: "#6f8498", fontSize: "1.2rem" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              reiciendis commodi rem odit natus sunt cum nam illum optio nemo!
              Sint sit veniam facilis quisquam dolores.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
