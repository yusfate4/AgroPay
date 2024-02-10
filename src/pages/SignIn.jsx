import React from 'react'
import img from '../assets/Images/image.png'
import { MdArrowOutward } from 'react-icons/md'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div className="grid max-w-2xl  mx-auto px-4 mt-4">
      <div>
        <div className="bg-signupImage bg-cover w-full h-screen bg-bottom  rounded-t-2xl relative">
          <div className="grid place-items-center absolute bottom-10 w-full">
            <h2 className="text-3xl sm:text-5xl text-center font-bold text-white flex flex-wrap">
              The Money App for <br />
              Farmers
            </h2>
            <p className="text-[#FEF9FC] text-sm sm:text-base text-center pt-[10px]">
              revolutionize the landscape of agricultural <br />
              finance in Africa
            </p>
          </div>
        </div>

        <div className="pb-20 pt-[40px]  grid place-items-center bg-gradient-to-b from-[#3D9B76] to-[#6C7789] mb-4 rounded-b-2xl ">
          <div>
            <h4 className="text-[#FFFCFE] text-xl sm:text-2xl md:text-3xl pb-[46px] flex flex-wrap justify-center capitalize">
              sign in
              <span className="grid place-content-center bg-white text-[rgb(61,155,118)] p-1 rounded-lg ml-2">
                <Link to="/signup">
                  <MdArrowOutward />
                </Link>
              </span>
            </h4>
          </div>

          <p className="pb-[30px] flex text-[#463140] text-2xl opacity-30">
            OR
          </p>

          <div className="grid w-full px-6 ">
            <button
              type="submit"
              className="  py-2 px-12 rounded-sm bg-[#FFC100] text-white font-medium capitalize text-sm sm:text-lg mb-4 flex justify-center items-center "
            >
              <Link className="flex" to="/otp">
                <FcGoogle className="w-6 h-6 sm:w-8 sm:h-8 mr-4" />
                <h4 className="capitalize">continue with google</h4>
              </Link>
            </button>

            <button
              type="submit"
              className="py-2 px-12 rounded-sm bg-none  font-medium text-sm sm:text-lg mb-4 border  border-slate-300 text-[#FBFBFF]"
            >
              <Link to="/SigninEmail">
                <p>Continue with email or phone</p>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
