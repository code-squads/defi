import Web3 from 'web3';
import ContractABI from '../contracts/ContractABI.json';
import TokenABI from '../contracts/UsdtABI.json';
import {
    contractAddress,
    contractDeploymentTx,
    contractDeploymentTxLink
} from '../contracts/deploymentDetails'

if (typeof window != 'undefined' && typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed !');
}

export const linkFromTxHash = txHash => 'https://mumbai.polygonscan.com/tx/' + txHash;

export const web3 = new Web3(Web3.givenProvider);

const Contract = new web3.eth.Contract(ContractABI, contractAddress);

// console.log("Web3", web3);
// console.log("Contract address: ", contractAddress);
// console.log("Contract deployment: ", contractDeploymentTxLink);
// console.log("ABI: \n", ContractABI);
// console.log("Contract: \n", Contract);
// console.log("Contract methods:", Contract.methods);

if(typeof window != 'undefined'){
    window.Contract = Contract;
}

export const UsdtContract = new web3.eth.Contract(TokenABI, '0X466DD1E48570FAA2E7F69B75139813E4F8EF75C2');

export default Contract;