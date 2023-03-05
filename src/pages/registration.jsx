import { TextField } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useRouter } from "next/router";
import Image from "next/Image";
import React from "react";
import { useState } from "react";
// import { useMetamaskAuth, withConnectedRoute } from "../auth/authConfig";
import { JUST_LOGGED_IN } from "../constants/routes";
import axios from "axios";
import AddImages from "./addImages";
import TokenImg from "../assets/token.png"

const API_URL = process.env.SERVER_URL || "";


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const invalidNumber = () => {
  toast("Enter a Valid No.");
};



// import { sendOTP, verifyOTP } from "../pages/api/otpVerification.js";

const Registration = () => {
  // const { metaState, isProcessingLogin, refreshAuthStatus } = useMetamaskAuth();

  const router = useRouter();
  const [date, setDate] = useState(null);
  const [receivedOtp, setReceivedOtp] = useState("");
  // const [inputOtp, setInputOTP] = useState('');
  const [successVerify, setSuccessVerify] = useState("");
  const [otp, setOTP] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [phone, setPhone] = useState("");
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [correctOtp, setCorrectOtp] = useState(false);

  const customAxios = axios.create({
    baseURL: API_URL,
  });

  const sendOTP = async (phone) => {
    console.log("Hii");

    const response = await customAxios.post("/apis/sendOTP", { phone });
    setReceivedOtp(response.data.data);
    console.log(response.data.data);

    if (response.status === 400 || response.status === 500) return false;
    return true;
  };

  const verifyOTP = async (phone, code) => {
    const response = await customAxios.post("/apis/verifyOTP", { phone, code });
    console.log(response.data.success);
    setSuccessVerify(response.data.success);
    console.log("Check") 
      
    // console.log (inputOtp === receivedOtp)
    if (response.status === 400 || response.data.success === false)
      return false;
    return true;
  };

  if (typeof window !== "undefined") {
    window.sendOTP = sendOTP;
    window.verifyOTP = verifyOTP;
  }

  const onClickOtp = () => {
    sendOTP(phone);
  };

  const onCreateAccountHandler = (e) => {
    e.preventDefault();
    if (e.target.firstName.value.trim() === undefined || e.target.lastName.value.trim() === undefined){
      return;
    }
    else{
      console.log("SUCCESS LOGIN");
    }
    console.log(e.target.firstName.value);
    console.log(e.target.lastName.value);

    //     if (metaState?.account) {
    //         // Call contract to create user here, with all user fields
    //         setTimeout(() => {
    //             localStorage.setItem(metaState.account[0], "yes");
    //             refreshAuthStatus();
    //             router.push(JUST_LOGGED_IN);
    //         }, 2000);
    //     }
  };

  const onClickVerify = () => {
    verifyOTP(phone, otp);
    // setInputOTP(otp);
    if (verifyOTP) {
      setCorrectOtp(true);
    }
  };

  async function goToOTPSection() {
    setIsProcessing(true);
    try {
      const success = await sendOTP(phone);
      if (success) setProgress(PROGRESS_STATUSES.OTP);
      else alert("Some error sending OTP");
      setIsProcessing(false);
    } catch (err) {
      console.log(err);
      alert("Something went wrong sending the OTP, try again");
      setIsProcessing(false);
    }
  }

  const otpVerificationProcess = async () => {
    if (!otp || typeof otp !== "string" || otp.length !== 6)
      return alert("Enter valid OTP !!");

    setIsProcessing(true);

    try {
      const success = await verifyOTP(phone, otp);
      console.log(success);
      if (!success) {
        alert("Wrong OTP!");
        setIsProcessing(false);
        return;
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong verifying the OTP, Try again");
      setIsProcessing(false);
      return;
    }
  };

  // if (!metaState.account.length) return <center><br/><br/><h1>Connect wallet first :/</h1></center>;

  // if (isProcessingLogin) return <center><br/><br/><h1>Loading ....</h1></center>;

  return (
    <ThemeProvider theme={darkTheme}>
    <div className="flex h-[calc(100vh-55px)] flex-row font-lexend bg-gradient-to-b from-[#12131A] to-[#130d30]">
      <div className="h-[100%] w-[50%] justify-center " >
        <div className=" w-[85%] mt-8 ml-14 mr-14 mb-8 font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-[#362DB5] to-[#A047B0]">
        Join the Decentralized Finance Revolution Today - Sign Up Now!
        </div>
        <Image src={TokenImg} alt="" className=" mb-0 ml-32 mr-32 mt-0 h-auto w-auto"/>
      </div>

      <div className="h-[100%] w-[50%] px-[8%]">
        <form
          className="w-[100%] h-[400px] mt-[120px]"
          onSubmit={onCreateAccountHandler}
        >
          <div className="flex flex-row flex-wrap gap-y-[40px] gap-x-[40px]">
            {/* Account: { metaState.account[0] } */}
            <TextField
              required
              id="outlined-required"
              name="firstName"
              label="First Name"

              placeholder="John"
              size="small"
            />
            <TextField
              required
              id="outlined-required"
              name="lastName"
              label="Last Name"
              placeholder="Doe"
              size="small"
            />
            <TextField
              required
              id="outlined-required"
              name="mobile"
              label="Mobile No."
              autoComplete="nope"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              size="small"
            />
            <button
              type="submit"
              className="bg-blue py-[8px] px-[24px] rounded-lg text-white"
              onClick={onClickOtp}
            >
              Get Otp
            </button>
            <AddImages></AddImages>
          </div>
          <div className="flex flex-row flex-wrap gap-y-[40px] gap-x-[40px] mt-[40px] ">
            <TextField
              required
              id="outlined-required"
              name="otp"
              label="OTP"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
              disabled={isDisabled}
              size="small"
              autoComplete="nope"
            />

            <button
              type="submit"
              disabled={isDisabled}
              className="bg-green-500 py-[8px] px-[24px] rounded-lg text-white"
              onClick={onClickVerify}
            >
              Verify Otp
            </button>
          </div>

          <div className="flex flex-row mt-[40px] items-center font-medium">
            <button
              type="submit"
              disabled={!successVerify}
              className={
                successVerify
                  ? "bg-blue py-[8px] px-[24px] rounded-lg text-white"
                  : "bg-gray-400  py-[8px] px-[24px] rounded-lg text-white"
              }
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
</ThemeProvider>

  );
};

export default Registration;
