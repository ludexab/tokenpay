import { FaBtc, FaDollarSign } from "react-icons/fa";
import calabash from "../images/calabash.png";
import ape from "../images/ape.png";
import tortoise from "../images/tortoise.png";
import mortar from "../images/mortar.png";
import bird from "../images/bird.png";
import horse from "../images/horse.png";

interface Props {
  handlePay: React.FormEventHandler;
  bill: Number;
  cash: React.MouseEventHandler<HTMLButtonElement>;
}
const dollarSign = " $";

const Homepage = ({ handlePay, bill, cash }: Props) => {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-red-100 to-gray-400 justify-center items-center">
      <div
        id="cards"
        className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5"
      >
        <div className="rounded overflow-hidden shadow-lg bg-white w-48 h-96 justify-self-center items-center">
          <img src={calabash} className="w-full h-48" alt="item 1" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Calabash</div>
            <p className="text-black text-base">This is a calabash picture.</p>
          </div>
          <div className="px-6 pt-2 pb-1">
            <span className="self-end inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <input className="item-input" type="checkbox" value={3500} />
              {`${dollarSign}3,500`}
            </span>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg bg-white w-48 h-96 justify-self-center  justify-center items-center">
          <img src={mortar} className="w-full h-48" alt="item 1" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Mortar</div>
            <p className="text-black text-base">This is a mortar picture.</p>
          </div>
          <div className="px-6 pt-2 pb-1">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <input className="item-input" type="checkbox" value={3000} />
              {`${dollarSign}3,000`}
            </span>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg bg-white w-48 h-96 justify-self-center  justify-center items-center">
          <img src={bird} className="w-full h-48" alt="item 1" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Bird</div>
            <p className="text-black text-base">This is a bird picture.</p>
          </div>
          <div className="px-6 pt-2 pb-1">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <input className="item-input" type="checkbox" value={2500} />
              {`${dollarSign}2,500`}
            </span>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg bg-white w-48 h-96 justify-self-center  justify-center items-center">
          <img src={horse} className="w-full h-48" alt="item 1" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Horse</div>
            <p className="text-black text-base">This is a horse picture.</p>
          </div>
          <div className="px-6 pt-2 pb-1">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <input className="item-input" type="checkbox" value={3200} />
              {`${dollarSign}3,200`}
            </span>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg bg-white w-48 h-96 justify-self-center  justify-center items-center">
          <img src={ape} className="w- h-48" alt="item 1" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Ape</div>
            <p className="text-black text-base">This is a ape picture.</p>
          </div>
          <div className="px-6 pt-2 pb-1">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <input className="item-input" type="checkbox" value={3100} />
              {`${dollarSign}3,100`}
            </span>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg bg-white w-48 h-96 justify-self-center  justify-center items-center">
          <img src={tortoise} className="w- h-48" alt="item 1" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Tortoise</div>
            <p className="text-black text-base">This is a tortoise picture.</p>
          </div>
          <div className="px-6 pt-2 pb-1">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <input className="item-input" type="checkbox" value={2000} />
              {`${dollarSign}2,000`}
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          className=" rounded-full bg-green-800 p-3 font-bold text-2xl text-white"
          onClick={cash}
        >
          CASH
        </button>
      </div>
      <form className="flex justify-center items-center">
        <div className="grid grid-cols-2 inline-block px-6 pt-2 pb-1">
          <label className="font-bold bg-black text-2xl mr-5 mb-4 text-center text-white p-4 rounded-full">
            <FaDollarSign className="w-16 h-16 text-white justify-center pt-1 pb-1 ml-5" />
            {bill.toString()}
          </label>
          <button
            type="button"
            onClick={handlePay}
            className="grid grid-cols-2 mb-3 auto-rows-max bg-yellow-500 flex rounded-full justtify-center"
          >
            <FaBtc className="w-16 h-16 text-black justify-center pt-1 mt-6 pb-1 ml-3" />
            <span className="inline-block mt-8 px-2 py-1 text-3xl font-bold text-blue-700 mr-2 mb-2">
              <h1>PAY</h1>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Homepage;
