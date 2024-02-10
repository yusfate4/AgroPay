import React from 'react'
import {
  FormInput,
  SectionHeading,
  SignUpBtn,
  SelectInput,
  FormCheckBox,
} from '../components'

import { Link } from 'react-router-dom'

const SigninEmail = () => {
  return (
    <div className="bg-gradient-to-b from-[#49917A] to-[#677A87] h-full mx-auto px-6  rounded-2xl flex flex-col max-w-lg w-96 mt-4 mb-4 pb-10 pt-2">
      <SectionHeading text="Welcome back to your digital farm" />

      <div className="pt-8">
        <div className="flex gap-x-10 pb-4">
          <FormCheckBox defaultValue="checked" label="email" />
          <FormCheckBox label="phone number" />
        </div>

        <FormInput name="email" type="text" defaultValue="mail@gmail.com" />

        <FormInput
          name="password"
          type="password"
          label="password"
          defaultValue="password"
        />

        <Link to="/reset">
          <p className="text-center text-[#4C4C4C] capitalize mt-[18px]">
            {' '}
            forget password?
          </p>
        </Link>

        <div className="pt-16 w-full pb-20">
          <SignUpBtn text="sign in" />

          <p className="pb-8 text-center text-base text-[#4C4C4C]   pt-2 tracking-wide">
            Don’t have an account?
            <Link to="/signup">
              <span className="text-white pl-2">Sign up </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SigninEmail
