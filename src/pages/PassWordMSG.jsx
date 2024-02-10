import React from 'react'
import { MdClose } from 'react-icons/md'
import { SignUpBtn } from '../components'
import img from '../assets/Images/key.svg'
import { Link } from 'react-router-dom'

const PassWordMSG = () => {
  return (
    <div className="mx-auto  px-8 bg-[#3C9C75] mt-4 mb-4  max-w-lg w-96 rounded-lg py-6">
      <div className="flex justify-end py-2 ">
        <MdClose className="rounded-full bg-[#D6D7D9] w-7 h-7 text-[rgb(72,183,138)]" />
      </div>

      <div className="flex flex-col justify-center items-center pt-16 pb-20">
        <p className="capitalize text-2xl sm:text-4xl tracking-wide text-white text-center">
          Reset Password
        </p>
        <img src={img} className="w-36 h-36 mt-8" />
        <p className="text-[#FFFBFB] mb-8 text-lg sm:text-xl mt-4 text-center tracking-wider">
          You will receive an email to reset your password
        </p>
      </div>
    </div>
  )
}

export default PassWordMSG
