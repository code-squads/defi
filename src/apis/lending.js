import { hasWindow } from "../util/next-utils";
import { ethToWei, usdtToUnits } from "../util/units";
import { linkFromTxHash } from "./Contract";
import { CallerFn, SenderFn } from "./factory";

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

export const borrowRequest = (address, payableAmountEth, usdtLoanAmount, repayDays) => {
  if(!address)
    return console.log("Address invalid");
  if(!usdtLoanAmount)
    return console.log("Loan amount invalid");
  if(!repayDays)
    return console.log("Repay days invalid");
  return PayableSenderFn('createLoan', address, true, ethToWei(payableAmountEth), usdtToUnits(usdtLoanAmount), repayDays);
}

export const approveRequest = (address, loanId) => {
  if(!address)
    return console.log("Address invalid");
  return SenderFn('approveLoan', address, true, loanId);
}

export const payLoan = (address, loanId) => {
  if(!address)
    return console.log("Address invalid");
  return SenderFn('payLoan', address, true, loanId);
}

export const squareOff = (address, loanId) => {
  if(!address)
    return console.log("Address invalid");
  return SenderFn('squareOff', address, true, loanId);
}

export const getInterestTillDate = loanId => {
  return CallerFn('getInterestTillDate', true, loanId);
}

if(hasWindow()){
  window.approveRequest = approveRequest;
  window.squareOff = squareOff;
  // window.squareOff = ();
  // window.borrowRequest = () => borrowRequest(
  //   '0xabd8EeD5b630578F72eEB06c637dB7179576A811',
  //   0.021,
  //   25,
  //   3
  // ); 
}