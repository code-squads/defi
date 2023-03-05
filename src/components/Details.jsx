import Image from "next/image";
import React from "react";
import matic from "../assets/matic.png";
import usdc from "../assets/usdc.png";
import ethLogo from "../assets/ethLogo.png";

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
            Access the financial services with decentralized protocol{" "}
          </div>
          <div
            className="text-[18.7501px]"
            style={{ color: "rgb(111, 132, 152)" }}
          >
            {" "}
            More about tokens supported by this DeFi
          </div>
        </div>
        <div className="w-full flex">
          <div className="text-center max-w-[33.33%] bg-[#000000] m-2 p-10 drop-shadow-[0_15px_20px_rgba(54,45,101,0.7)] opacity-70 rounded-xl">
            <div className="w-[4rem] border- h-[4rem] inline-block relative ">
              <Image
                src={usdc}
                alt="nft"
                className="flex w-[50px] h-[50px] rounded-xl justify-center align-middle"
              />
            </div>
            <div
              className="text-[17px]"
              style={{ color: "rgb(191, 191, 191)" }}
            >
              USDC
            </div>
            <div style={{ color: "#6f8498", letterSpacing: '2px', fontSize: "1.2rem" }}>
              USDC is a fully-reserved stablecoin, which is a type of
              cryptocurrency, or digital asset. Unlike other cryptocurrencies
              that fluctuate in price, USDC is designed to maintain price
              equivalence to the U.S. dollar
            </div>
          </div>
          <div className="text-center p-10 max-w-[33.33%] bg-[#000000] m-2 drop-shadow-[0_15px_20px_rgba(54,45,101,0.7)] opacity-70 rounded-xl">
            <div className="w-[4rem] border- h-[4rem] inline-block relative ">
              <Image
                src={ethLogo}
                alt="nft"
                className="flex w-[50px] h-[50px] rounded-xl justify-center align-middle"
              />
            </div>
            <div
              className="text-[17px]"
              style={{ color: "rgb(191, 191, 191)" }}
            >
              Etherium
            </div>
            <div style={{ color: "#6f8498", letterSpacing: '2px', fontSize: "1.2rem" }}>
              Ethereum is a decentralized, open-source blockchain with smart
              contract functionality. Ether is the native cryptocurrency of the
              platform.
            </div>
          </div>
          <div className="text-center max-w-[33.33%] m-2 p-10 bg-[#000000] drop-shadow-[0_15px_20px_rgba(54,45,101,0.7)] opacity-70 rounded-xl">
            <div className="w-[4rem] border- h-[4rem] inline-block relative ">
              <Image
                src={matic}
                alt="nft"
                className="flex w-[50px] h-[50px] rounded-xl justify-center align-middle"
              />
            </div>
            <div
              className="text-[17px]"
              style={{ color: "rgb(191, 191, 191)" }}
            >
              Matic
            </div>
            <div style={{ color: "#6f8498", letterSpacing: '2px', fontSize: "1.2rem" }}>
              Polygon (MATIC) is an Ethereum token that powers the Polygon
              Network, a scaling solution for Ethereum. Polygon aims to provide
              faster and cheaper transactions on Ethereum using Layer 2
              sidechains
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
