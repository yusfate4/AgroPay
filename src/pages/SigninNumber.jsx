import React from 'react'
import {
  FormInput,
  SectionHeading,
  SignUpBtn,
  SelectInput,
  FormCheckBox,
} from '../components'

import { Link } from 'react-router-dom'

const SigninNumber = () => {
  return (
    <div className="bg-gradient-to-b from-[#49917A] to-[#5F8083]  mx-auto px-6  rounded-2xl flex flex-col w-96 max-w-xl mt-4 mb-4 pb-10 pt-2">
      <SectionHeading text="Welcome back to your digital farm" />

      <div className="pt-8 ">
        <div className="flex gap-x-10 pb-3">
          <FormCheckBox label="email" />
          <FormCheckBox label="phone number" defaultValue="checked" />
        </div>

        <div className="mb-4">
          <SelectInput />
        </div>

        <FormInput
          name="password"
          type="password"
          label="password"
          defaultValue="password"
        />

        <Link to="/forget">
          <p className="text-center text-[#4C4C4C] capitalize mt-[18px]">
            forget password?
          </p>
        </Link>

        <div className="pt-16 w-full pb-20">
          <SignUpBtn text="sign in" />

          <p className="pb-8 text-center text-base text-[#4C4C4C]   pt-2 tracking-wide">
            Don't have an account?
            <Link to="/signup">
              <span className="text-white pl-2">Sign up </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SigninNumber
