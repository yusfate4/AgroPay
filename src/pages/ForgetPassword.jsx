import React from 'react'
import { SectionHeading, FormInput, SignUpBtn } from '../components'
import { Link } from 'react-router-dom'

const ForgetPassword = () => {
  return (
    <div className="mx-auto px-6 bg-gradient-to-b from-[#489179] to-[#5E8083] h-full max-w-lg w-96 pt-2 rounded-2xl  mt-4 mb-4 ">
      <SectionHeading text="Insert your email to reset your password" />
      <div className="pt-[40px]">
        <FormInput
          name="email"
          type="email"
          label="email"
          defaultValue="mail@mail.com"
        />
      </div>

      <div className="pt-[33px] pb-36">
        <Link to="/reset">
          <SignUpBtn text="reset" />
        </Link>

        <p className="pt-[30px] text-center text-lg tracking-wide text-[#4C4C4C]">
          Don't have an account?
          <Link to="/signin">
            <span className="text-[#FFFCFC] pl-2 text-lg">Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default ForgetPassword
