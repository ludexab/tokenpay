import { MdShoppingCart } from "react-icons/md";
const Header = () => {
  return (
    <div>
      <header className="bg-black p-5 shadow-xl justify-center items-center flex">
        <MdShoppingCart className="w-16 h-16 text-red-800" />
        <h1 className="text-bold text-5xl text-red-800 font-bold">TokenPay</h1>
      </header>
    </div>
  );
};

export default Header;
