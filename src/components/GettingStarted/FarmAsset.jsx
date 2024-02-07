import React from "react";
import wallet from "../../assets/cuate.svg";
import { GoDotFill } from "react-icons/go";
import Logo from "../../assets/AP.svg";
function FarmAsset({ goToPage3 }) {
  return (
    <div className="px-4 py-2">
      <div>
        <img src={Logo} alt="" className="w-12 h-12" />
      </div>
    <div className='flex flex-col items-center w-full mx-auto lg:w-1/2'>
    <div className="mt-20 lg:mt-10">
        <img src={wallet} alt="" className="w-80 lg:w-96 h-80 lg:h-96" />
        <p className="text-white font-semibold text-3xl lg:text-4xl py-5 lg:py-7">
          Tokenized Farm <br className='lg:hidden'/> Assets
        </p>
      </div>
      <div className="flex flex-row items-center w-full justify-between md:justify-around mt-10">
        <div className="dots flex flex-row ">
          <GoDotFill className="text-black w-5 h-5" />
          <GoDotFill className="text-white w-5 h-5" />
          <GoDotFill className="text-black w-5 h-5" />
        </div>
        <button
          onClick={goToPage3}
          className="bg-yellow-500 text-white text-2xl rounded-3xl px-8 py-2 border-2 font-semibold"
        >
          Next
        </button>
        <button onClick={goToPage3} className="text-xl">
          Skip
        </button>
      </div>
    </div>
    </div>
  );
}

export default FarmAsset;
