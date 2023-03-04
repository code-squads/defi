import React from "react";
import pfp from "../../assets/nft.jpeg";
import matic from "../../assets/matic.png";
import usdc from "../../assets/usdc.png";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import { Container } from "@mui/material";
const https = require("https");

const DashLeft = () => {
  const [maticVal, setMaticVal] = useState({});
  const [usdVal, setUsdVal] = useState({});
  const dummyMatic = "3260.351432121505620812986766";
  var myHeaders = new Headers();
  myHeaders.append("X-CoinAPI-Key", "647D5F57-3B4D-47C1-9DD1-96D18F069E07");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  useEffect(() => {
    fetch("https://rest.coinapi.io/v1/exchangerate/BTC/MATIC/", requestOptions)
      .then((response) => response.text())
      .then((result) => setMaticVal(JSON.parse(result)))
      .catch((error) => console.log("error", error));

    fetch("https://rest.coinapi.io/v1/exchangerate/BTC/USD/", requestOptions)
      .then((response) => response.text())
      .then((result) => setUsdVal(JSON.parse(result)))
      .catch((error) => console.log("error", error));
  }, []);

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
          <div className="text-3xl ml-3">Vansh</div>
        </div>
        <div>wallet address</div>
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
                {maticVal.rate !== undefined
                  ? maticVal.rate
                  : Math.round(dummyMatic).toFixed(2)}
              </div>
            </div>
          </div>
          <div className="m-2">code</div>
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
              <span className="m-2">MATIC</span>
            </div>
            <div>
              <div>Price</div>
              <div>
                {usdVal.rate !== undefined
                  ? usdVal.rate
                  : Math.round(dummyMatic).toFixed(2)}
              </div>
            </div>
          </div>
          <div className="mt-2">code</div>
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
              <div>
                {maticVal.rate !== undefined
                  ? maticVal.rate
                  : Math.round(dummyMatic).toFixed(2)}
              </div>
            </div>
          </div>
          <div className="m-2">code</div>
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
              <span className="m-2">MATIC</span>
            </div>
            <div>
              <div>
                {usdVal.rate !== undefined
                  ? usdVal.rate
                  : Math.round(dummyMatic).toFixed(2)}
              </div>
            </div>
          </div>
          <div className="mt-2">code</div>
        </div>
      </Container>
    </div>
  );
};

export default DashLeft;
