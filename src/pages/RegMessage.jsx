import React from 'react'
import { MdClose } from 'react-icons/md'
import { SignUpBtn } from '../components'
import img from '../assets/Images/pana.svg'
import { Link } from 'react-router-dom'

const RegMessage = () => {
  return (
    <div className="mx-auto  px-6 bg-gradient-to-b from-[#429777] to-[#6D7589]  mt-2 mb-2  max-w-lg rounded-lg w-96 h-full">
      <div className="flex justify-end py-2 ">
        <MdClose className="rounded-full bg-[#D6D7D9] w-6 h-6 sm:w-7 sm:h-7 text-[rgb(61,155,118)]" />
      </div>

      <div className="flex flex-col justify-center items-center pt-16 pb-32">
        <p className="capitalize text-3xl sm:text-4xl tracking-wide text-white">
          Success
        </p>
        <img src={img} className="w-32 h-32 sm:w-36 sm:h-36 mt-8" />
        <p className="text-[#FFFAFA] mb-8 text-lg sm:text-2xl mt-4 flex flex-wrap">
          Welcome to your digital farm!
        </p>
        {/*LINK TO HOMEPAGE */}
        <Link to="/">
          <SignUpBtn text="continue" size="w-64" space="py-4 sm:py-5" />
        </Link>
      </div>
    </div>
  )
}

export default RegMessage
