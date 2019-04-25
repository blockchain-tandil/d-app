import Web3 from "web3";
import { provider } from "web3-providers";

declare global {
  interface Window {
    web3: any | Web3;
    ethereum: provider;
  }
}

let web3;
let ethereum: any | provider = {}
const infura = 'ropsten.infura.io/v3/30bcc3e3bd414c8d9854b64e8da2ca7c'
/**
 * A convenient way of checking whether we are in the browser
 * or on the server.
 *
 * In the node console, `typeof window` returns 'undefined'
 * In the browser, `typeof window` returns Object
 */
if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // We are in the browser and Metamask is installed and running
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    ethereum = window.ethereum;
  }
  // Legacy dapp browsers...
  else if (window.web3) {
    web3 = new Web3(web3.currentProvider);
  }
} else {
  // We are on the server or user not running Metamask
  const provider = new Web3.providers.HttpProvider(
    infura
  );

  web3 = new Web3(provider);
}

export {
  web3,
  ethereum,
};