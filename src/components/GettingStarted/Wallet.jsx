import React from "react";
import asset from "../../assets/bro.svg";
import { GoDotFill } from "react-icons/go";
import Logo from "../../assets/AP.svg";
import { useNavigate } from "react-router-dom";
function Wallet({ goToPage1 }) {
  const navigate = useNavigate()
  const handleStartingPage =()=> {
    navigate('/SignIn')
  }
  return (
    <div className="px-4 py-2">
      <div>
        <img src={Logo} alt="" className="w-12 h-12" />
      </div>
     <div className='flex flex-col items-center mx-auto w-full lg:w-1/2'>
     <div className="mt-20 lg:mt-10">
        <img src={asset} alt="" className="w-80 lg:w-96 h-80 lg:h-96" />
        <p className="text-white font-semibold text-3xl lg:text-4xl py-5 lg:py-7">
          Manage Your <br className='lg:hidden'/> Wallet
        </p>
      </div>
      <div className="flex flex-row items-center w-full justify-between md:justify-around mt-10">
        <div className="dots flex flex-row ">
          <GoDotFill className="text-black w-5 h-5" />
          <GoDotFill className="text-black w-5 h-5" />
          <GoDotFill className="text-white w-5 h-5" />
        </div>
        <button
          onClick={handleStartingPage}
          className="bg-yellow-500 text-white text-2xl rounded-3xl px-5 py-2 border-2 font-semibold"
        >
          Get Started
        </button>
      </div>
     </div>
    </div>
  );
}

export default Wallet;
