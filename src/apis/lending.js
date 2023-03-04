import { hasWindow } from "../util/next-utils";
import { ethToWei, usdtToUnits } from "../util/units";
import { CallerFn } from "./factory";


export function PayableSenderFn(method, senderAddress, debug, payableAmountWei, ...params){
  return new Promise((resolve, reject) => {
    const tx = Contract.methods[method](...params);
    if(debug)
      console.log("Prepared transaction: ", tx);

    tx
    .send({
      from: senderAddress,
      value: payableAmountWei,
    })
    .then((receipt) => {
      console.log(`${method} - Tx Receipt`, receipt);
      console.log(`Transaction hash: ${receipt?.transactionHash}`);
      console.log(
        `View the transaction here: `,
        linkFromTxHash(receipt?.transactionHash)
      );
      return resolve(receipt);
    })
    .catch((err) => {
      console.log(`Some error sending ${method} with params \n`, params, err);
      reject(new Error(`Couldn't send tx for ${method}`));
    });
  });
}

export const borrowRequest = (address, payableAmountWei, usdtLoanAmount, repayDays) => {
  if(!address)
    return console.log("Address invalid");
  if(!usdtLoanAmount)
    return console.log("Loan amount invalid");
  if(!repayDays)
    return console.log("Repay days invalid");
  return PayableSenderFn('createLoan', address, true, payableAmountWei, usdtToUnits(usdtLoanAmount), repayDays);
}

if(hasWindow()){
  window.borrowRequest = () => borrowRequest(
    '0xabd8EeD5b630578F72eEB06c637dB7179576A811',
    ethToWei(0.3),
    25,
    3
  ); 
}