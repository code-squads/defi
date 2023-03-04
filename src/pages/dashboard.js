import React from "react";
import { useState } from "react";
import { useEffect } from "react";
const https = require("https");

const Dashboard = () => {
  const [maticVal, setMaticVal] = useState({});
  const [usdVal, setUsdVal] = useState({});
  var myHeaders = new Headers();
  myHeaders.append("X-CoinAPI-Key", "272E2537-42DC-4DE3-BB31-89072ACE051D");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  useEffect(() => {
    fetch("https://rest.coinapi.io/v1/exchangerate/BTC/MATIC/", requestOptions)
      .then((response) => response.text())
      .then((result) => setMaticVal(result))
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    fetch("https://rest.coinapi.io/v1/exchangerate/BTC/USD/", requestOptions)
      .then((response) => response.text())
      .then((result) => setUsdVal(result))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div>
      <div className="text-black">Welcome</div>
    </div>
  );
};

export default Dashboard;
