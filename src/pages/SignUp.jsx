import React from 'react'
import { FormInput, SectionHeading, SignUpBtn, SelectInput} from '../components'
import { Link } from 'react-router-dom'




const SignUp = () => {
  return (
    <div className="bg-gradient-to-b from-[#439678] to-[#607F83] mb-4 rounded-b-2xl h-full mx-auto px-6  rounded-2xl flex flex-col  max-w-lg mt-4 py-2">
      <SectionHeading
        text="Create your account and start Investing"
        label="today"
      />

      <div className="pt-4 ">
        <FormInput
          name="email"
          type="text"
          label="email"
          defaultValue="mail@gmail.com"
        />

        <div className="pb-4">
          <label className="text-[#B8B8B8] capitalize text-base pl-2">
            phone number
          </label>
          <SelectInput />
        </div>

        <FormInput
          name="password"
          type="password"
          label="password"
          defaultValue="password"
        />
        <div className="pt-16">
          <SignUpBtn text="sign up" />
        </div>
        <p className="pb-20 text-center text-sm sm:text-lg pt-4 tracking-wide">
          Already have an account?
          <Link to="/signin">
            <span className="text-white pl-2">Sign In </span>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp
