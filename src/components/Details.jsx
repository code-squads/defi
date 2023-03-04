import Image from "next/image";
import React from "react";
import nft from "../assets/nft.jpeg";

const Details = () => {
  return (
    <div className="h-[100vh] text-white m-[6rem] p-[4rem]">
      <div className="">
        <div className="text-center flex mb-[1.5rem] flex-col justify-center align-middle">
          <div
            className="text-6xl text-[52px] mb-6 max-w-[1120px]"
            style={{ color: "rgb(191, 191, 191)" }}
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
          <div className="text-center flex-[0 0 33.33%] max-w-[33.33%]">
            <div className="w-[4rem] border- h-[4rem] inline-block relative shadow-xl shadow-cyan-500/50">
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
          <div className="text-center flex-[0 0 33.33%] max-w-[33.33%]">
            <div className="w-[4rem] border- h-[4rem] inline-block relative shadow-xl shadow-cyan-500/50">
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
          <div className="text-center flex-[0 0 33.33%] max-w-[33.33%]">
            <div className="w-[4rem] border- h-[4rem] inline-block relative shadow-xl shadow-cyan-500/50">
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
