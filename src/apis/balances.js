import { hasWindow } from "../util/next-utils";
import { web3 } from "./Contract";
import TokenABI from '../contracts/UsdtABI.json';

const UsdtContract = new web3.eth.Contract(TokenABI, '0X466DD1E48570FAA2E7F69B75139813E4F8EF75C2');
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