import React from "react";
import asset from "../../assets/bro.svg";
import { GoDotFill } from "react-icons/go";
import Logo from "../../assets/AP.svg";
function Wallet({ goToPage1 }) {
  return (
    <div className="px-4 py-2">
      <div>
        <img src={Logo} alt="" className="w-12 h-12" />
      </div>
      <div className="mt-20">
        <img src={asset} alt="" className="w-80 h-80" />
        <p className="text-white font-semibold text-3xl py-5">
          Manage Your <br /> Wallet
        </p>
      </div>
      <div className="flex flex-row items-center justify-between mt-10">
        <div className="dots flex flex-row ">
          <GoDotFill className="text-black w-5 h-5" />
          <GoDotFill className="text-black w-5 h-5" />
          <GoDotFill className="text-white w-5 h-5" />
        </div>
        <button
          onClick={goToPage1}
          className="bg-yellow-500 text-white text-2xl rounded-3xl px-5 py-2 border-2 font-semibold"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Wallet;
