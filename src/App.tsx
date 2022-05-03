import Header from "./components/Header";
import Homepage from "./components/Homepage";
import { useState } from "react";
import Web3 from "web3";
import React from "react";
import { ethers } from "ethers";
import { contractAddress, contractABI } from "./contract-details";

//  export const AppContext = React.createContext();

function App() {
  let [bill, setBill] = useState(0);
  let [userAccount, setUserAccount] = useState("");
  let [walletConnected, setWalletConnected] = useState(false);
  const merchant = "0x49Df6596D72973EF711e8b61F6b74660302cf86E";

  const connectWallet = async () => {
    if (window.ethereum) {
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
      contractAddress,
      contractABI,
      signer
    );
    return payContract;
  };

  const cash: React.MouseEventHandler = () => {
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
      const pAmount = ethers.utils.parseEther(amount.toString());
      await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: userAccount,
            to: merchant,
            gas: "0x5208", //21000 GWEI
            value: pAmount._hex,
          },
        ],
      });

      const payHash = (await payContract).functions.pay(pAmount);
      console.log("txnHash loading ");
      (await payHash).wait();
      console.log("payment successful");
      process.exit(0);
    } catch (error) {
      alert("Error, please ensure your wallet is connected");
      process.exit(1);
    }
  };

  const handlePay: React.FormEventHandler = (e) => {
    e.preventDefault();
    payBill(bill);
  };

  return (
    <div className="App">
      <Header />
      <Homepage
        bill={bill}
        cash={cash}
        userAccount={userAccount}
        walletConnected={walletConnected}
        connectWallet={connectWallet}
        handlePay={handlePay}
      />
    </div>
  );
}

export default App;
