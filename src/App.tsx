import Header from "./components/Header";
import Homepage from "./components/Homepage";
import React, { useState } from "react";
import { ethers } from "ethers";
import { payContractAddress, payContractABI, paiContractABI, paiContractAddress } from "./contract-details";

interface Props {
  handlePay: React.FormEventHandler;
  bill: Number;
  cash: React.MouseEventHandler<HTMLButtonElement>;
  connectWallet: React.MouseEventHandler<HTMLButtonElement>;
  userAccount: string;
  walletConnected: boolean;
}

export const TokenContext = React.createContext({} as Props);

function App() {
  let [bill, setBill] = useState(0);
  let [userAccount, setUserAccount] = useState("");
  let [walletConnected, setWalletConnected] = useState(false);
  const merchant = "0xf40072D5D56dd8C6964a11a23D0186c2b64491DF";

  const connectWallet: React.MouseEventHandler = async (e) => {
    e.preventDefault();
    if (window.ethereum) {
      console.log("connecting waallet");
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setUserAccount(accounts[0]);
      setWalletConnected(true);
    } else {
      alert("Please install MetaMask");
    }
  };

  const getPayContract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const payContract = new ethers.Contract(
      payContractAddress,
      payContractABI,
      signer
    );
    return payContract;
  };

  const getPaiContract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const paiContract = new ethers.Contract(
      paiContractAddress,
      paiContractABI,
      signer
    );
    return paiContract;
  };

  const cash: React.MouseEventHandler = (e) => {
    e.preventDefault();
    let items = document.querySelectorAll<HTMLInputElement>("input.item-input");
    let price = 0;
    for (let i = 0; i < items.length; i++) {
      if (items[i].checked) {
        price += Number(items[i].value);
      }
    }
    setBill(price);
  };

  const payBill = async (amount: number) => {
    try {
      const payContract = getPayContract();
      const paiContract = getPaiContract();
      const payAddress = (await payContract).address
      const pAmount = ethers.utils.parseEther(amount.toString());
      const custbal = await( (await paiContract).functions.balanceOf(userAccount));
      console.log(`typeof custbal = ${typeof(custbal)}, custbal value = ${ethers.utils.formatEther(custbal.toString())}`);
      //console.log(ethers.utils.pacustbal);

      //  Approve payment
      // const approve = (await paiContract).functions.approve(payAddress, pAmount);
      // (await approve).wait();
      
      // // Make payment
      // const payHash = (await payContract).functions.makePayment(pAmount);
      // console.log("txnHash loading ");
      // (await payHash).wait();
      // alert("payment successful.");
    } catch (error) {
      console.log(error);
      alert("Error making payment, please ensure your wallet is connected and try again.");
      process.exit(1);
    }
  };

  const handlePay: React.FormEventHandler = (e) => {
    e.preventDefault();
    payBill(bill);
  };

  return (
    <TokenContext.Provider
      value={{
        bill,
        cash,
        userAccount,
        walletConnected,
        connectWallet,
        handlePay,
      }}
    >
      <div>
        <Header />
        <Homepage />
      </div>
    </TokenContext.Provider>
  );
}

export default App;
