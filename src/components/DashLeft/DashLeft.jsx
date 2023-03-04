import React from "react";
import pfp from "../../assets/nft.jpeg";
import matic from "../../assets/matic.png";
import usdc from "../../assets/usdc.png";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import { Container } from "@mui/material";
import { useMetamaskAuth } from "../../auth/authConfig";
import Loader from "../Loader/Loader";
import { getUsdtBalance, getMaticBalance } from "../../apis/balances";
const https = require("https");


const randPriceFluctuations = range => Number((Math.random() * (range*2 + 1)-range).toFixed(2));

const DashLeft = () => {
  const [maticVal, setMaticVal] = useState({ rate: 1500 +  randPriceFluctuations(3)});
  const [usdVal, setUsdVal] = useState({ rate: 1 + Number((randPriceFluctuations(1)/100).toFixed(2)) });
  const [maticBalance, setMaticBalance] = useState(0);
  const [usdtBalance, setUsdtBalance] = useState(0);
  const { profile, isLoggedIn, isProcessingLogin } = useMetamaskAuth();

  const dummyMatic = "3260.351432121505620812986766";
  var myHeaders = new Headers();
  myHeaders.append("X-CoinAPI-Key", "272E2537-42DC-4DE3-BB31-89072ACE051D");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  useEffect(() => {
    // fetch("https://rest.coinapi.io/v1/exchangerate/ETH/USD/", requestOptions)
    //   .then((response) => response.text())
    //   .then((result) => setMaticVal(JSON.parse(result)))
    //   .catch((error) => console.log("error", error))

    // fetch("https://rest.coinapi.io/v1/exchangerate/USDT/USD/", requestOptions)
    //   .then((response) => response.text())
    //   .then((result) => setUsdVal(JSON.parse(result)))
    //   .catch((error) => console.log("error", error))
  }, []);

  console.log(maticVal);
  console.log(usdVal);

  useEffect(() => {
    if(!profile)  return;
    getMaticBalance(profile.address)
      .then(setMaticBalance);
    getUsdtBalance(profile.address)
      .then(setUsdtBalance);
  }, [profile]);

  if(!isLoggedIn || isProcessingLogin || !profile)
    return <Loader size="80px" />
  
  return (
    <div className="w-[100%] h-[100%] font-inter overflow-auto" style={{backgroundColor : '#12131A'}}>
      {/* PROFILE */}
      <Container className="text-white">
        <div className="flex p-5">
          <Image
            src={pfp}
            alt="image"
            width="50"
            height="50"
            style={{ borderRadius: "50px" }}
          />
          <div className="text-3xl ml-3">
            { profile.name }
          </div>
        </div>
        <div>
          { profile.address }
        </div>
      </Container>

      {/* CARDS */}
      <Container
        className="bg-slate-300 m-10 p-5"
        style={{
          maxWidth: "90%",
          backgroundColor: "#1b1e29",
          borderRadius: "20px",
          color: "#c7cad9",
        }}
      >
        <div>
          <div className="flex justify-between">
            <div className="flex">
              <Image
                src={matic}
                alt="matic"
                width="50"
                height="50"
                style={{ borderRadius: "50px" }}
              />
              <span className="m-2">MATIC</span>
            </div>
            <div>
              <div style={{ color: "#696c80" }}>Price</div>
              <div>
                { maticVal.rate.toFixed(2) }
              </div>
            </div>
          </div>
          <div className="m-2 h-1"></div>
        </div>
        <hr style={{ background: "#C77DFF", height: "0.05px" }} />

        <div>
          <div className="flex justify-between mt-3">
            <div className="flex">
              <Image
                src={usdc}
                alt="matic"
                width="50"
                height="50"
                style={{ borderRadius: "50px" }}
              />
              <span className="m-2">USDT</span>
            </div>
            <div>
              <div>Price</div>
              <div>
                { usdVal.rate.toFixed(2) }
              </div>
            </div>
          </div>
          <div className="mt-2">
            0x466DD1e48570FAA2E7f69B75139813e4F8EF75c2
          </div>
        </div>
      </Container>

      {/* User's balance details  */}
      <Container
        className="bg-slate-300 m-10 rounded-xl p-5 "
        style={{
          maxWidth: "90%",
          backgroundColor: "#1b1e29",
          borderRadius: "20px",
          color: "#c7cad9",
        }}
      >
        <div className="flex justify-between mb-5" style={{ color: "#696c80" }}>
          <div>My tokens</div>
          <div>Current Value</div>
        </div>
        <div>
          <div className="flex justify-between">
            <div className="flex">
              <Image
                src={matic}
                alt="matic"
                width="50"
                height="50"
                style={{ borderRadius: "50px" }}
              />
              <span className="m-2">MATIC</span>
            </div>
            <div>
              <div></div>
              <div className="mt-1">
                { maticBalance.toFixed(4) } (${ (maticVal.rate * maticBalance).toFixed(2) })
              </div>
            </div>
          </div>
          <div className="m-2 h-1"></div>
        </div>
        <hr style={{ background: "#C77DFF", height: "0.05px" }} />
        <div>
          <div className="flex justify-between mt-3">
            <div className="flex">
              <Image
                src={usdc}
                alt="matic"
                width="50"
                height="50"
                style={{ borderRadius: "50px" }}
              />
              <span className="m-2">USDT</span>
            </div>
            <div>
              <div className="mt-2">
                { usdtBalance.toFixed(2) } (${ (usdVal.rate * usdtBalance).toFixed(2) })
              </div>
            </div>
          </div>
          <div className="mt-2"></div>
        </div>
      </Container>
    </div>
  );
};

export default DashLeft;
