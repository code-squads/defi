import { hasWindow } from "../util/next-utils";
import { CallerFn, SenderFn } from "./factory";

export const getProfile = (address) => {
  if(!address)
    console.log("Address invalid");
  return CallerFn('getUser', true, address);
}

export const createProfile = (address, name) => {
  if(!address)
    return console.log("Address invalid");
  if(!name)
    return console.log("Name invalid");
  return SenderFn('registerUser', address, true, name);
}

if(hasWindow()){
  window.getProfile = getProfile;
  window.createProfile = createProfile;  
}