import Contract, { linkFromTxHash } from "./Contract";

export function CallerFn(method, debug, ...params){
  return new Promise((resolve, reject) => {
    Contract.methods[method](...params)
      .call()
      .then((res) => {
        if(debug){
          console.log(`Called ${method} with params`, params, `\nResult:`, res);
        }
        resolve(res);
      }).catch((err) => {
          if(debug)
            console.log(`Some error calling ${method} with params \n`, params, err);
          reject(new Error(`Couldn't fetch results for ${method}`));
      });
  });
}

export function SenderFn(method, senderAddress, debug, ...params){
  return new Promise((resolve, reject) => {
    const tx = Contract.methods[method](...params);
    if(debug)
      console.log("Prepared transaction: ", tx);

    tx
    .send({
      from: senderAddress,
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


export function CallerFactory(method, debug){
  return (...params) => CallerFn(method, debug, ...params);
}
export function SenderFactory(method, debug){
  return (address, ...params) => SenderFn(method, address, debug, ...params)
}