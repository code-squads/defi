import axios from "axios";
import { useState } from "react";

export const API_URL = process.env.SERVER_URL || '';

const customAxios = axios.create({
  baseURL: API_URL,
});
export const sendOTP = async phone => {

    console.log("Hii");

    const response = await customAxios.post('/apis/sendOTP', {phone});
    // console.log(response);
    console.log(response.data.data);

    if(response.status === 400 || response.status === 500)
        return false;
    return true;
}

export const verifyOTP = async (phone, code) => {
    const response = await customAxios.post('/apis/verifyOTP', {phone, code});
    console.log(response.data.success);
    if(response.status === 400 || response.data.success === false)
        return false;
    return true;
}

if(typeof window !== 'undefined'){
    window.sendOTP = sendOTP;
    window.verifyOTP = verifyOTP;
}