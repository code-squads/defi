import { hasWindow } from "../util/next-utils";
import { UsdtContract, web3 } from "./Contract";

export const getUsdtBalance = async (address) => {
  const balance = await UsdtContract.methods.balanceOf(address).call();
  return balance ? balance / 1000000 : 0.00;
}

export const getMaticBalance = async (address) => {
  const balance = await web3.eth.getBalance(address);
  return balance ? balance / 1000000000000000000 : 0.00;
}

if(hasWindow()){
  window.getUsdtBalance = getUsdtBalance;
  window.getMaticBalance = getMaticBalance;
}