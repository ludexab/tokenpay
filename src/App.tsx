import Header from "./components/Header";
import Homepage from "./components/Homepage";
import { useState } from "react";
import Web3 from "web3";

function App() {
  let [bill, setBill] = useState(0);
  // const web3 = new Web3("ws://localhost:8546");

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
  const handlePay: React.FormEventHandler = (e) => {
    e.preventDefault();
    if (window.ethereum) {
      window.ethereum.request({ method: "eth_requestAccounts" });
    }
  };

  return (
    <div className="App">
      <Header />
      <Homepage bill={bill} cash={cash} handlePay={handlePay} />
    </div>
  );
}

export default App;
