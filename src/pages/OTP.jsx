import React from 'react'
import { SectionHeading, FormInput, SignUpBtn } from '../components'
import { Link } from 'react-router-dom'

const OTP = () => {
  return (
    <div className="bg-gradient-to-b from-[#419877] to-[#667A86] h-full mx-auto px-6  rounded-2xl flex flex-col max-w-xl mt-4 mb-4 pb-10 pt-4">
      <SectionHeading
        text="Input the one time code sent"
        label="to m***@mail.com or 070********938"
      />

      <div className="pt-4 ">
        <div className="flex flex-col w-full mx-auto mt-4">
          <div className="mb-4 ml-16">
            <label className="text-[#B8B8B8] ">OTP</label>
          </div>
          <div className="flex justify-center w-full flex-wrap gap-y-4">
            <input className="mx-1 w-12 h-12 sm:h-16 md:w-16 rounded-md" />
            <input className="mx-1  w-12 h-12 sm:h-16 md:w-16 rounded-md" />
            <input className="mx-1  w-12 h-12 sm:h-16 md:w-16 rounded-md" />
            <input className="mx-1  w-12 h-12 sm:h-16 md:w-16 rounded-md " />
            <input className="mx-1  w-12 h-12 sm:h-16 md:w-16 rounded-md" />
            <input className="mx-1  w-12 h-12 sm:h-16 md:w-16 rounded-md" />
          </div>
        </div>

        <div className="pt-12 w-full pb-60 grid place-items-center">
          <Link to="/reg">
            <SignUpBtn text="continue" size=" w-48 sm:w-80" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default OTP
