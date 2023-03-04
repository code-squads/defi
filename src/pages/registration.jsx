import { TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
// import { useMetamaskAuth, withConnectedRoute } from "../auth/authConfig";
import { JUST_LOGGED_IN } from "../constants/routes";
import AddImages from "./addImages";
import { sendOTP, verifyOTP } from "./api/otpVerification";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const invalidNumber = () => {toast("Enter a Valid No.")};

// import { sendOTP, verifyOTP } from "../pages/api/otpVerification.js";

const Registration = () => {
  // const { metaState, isProcessingLogin, refreshAuthStatus } = useMetamaskAuth();

  const router = useRouter();
  const [date, setDate] = useState(null);
  const [otp, setOTP] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [phone, setPhone] = useState("");
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [correctOtp, setCorrectOtp] = useState(false);

  const onClickOtp = () => {
    sendOTP(phone);
  };

  const onCreateAccountHandler = (e) => {
    e.preventDefault();
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
    <div className="flex h-[calc(100vh-55px)] flex-row">
      <div className="h-[100%] w-[50%]"></div>

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
          <div className="flex flex-row flex-wrap gap-y-[40px] gap-x-[40px] mt-[40px]">
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
              disabled={!correctOtp}
              className={
                correctOtp
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
  );
};

export default Registration;
