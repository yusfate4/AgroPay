import React from 'react'
import { SectionHeading, FormInput, SignUpBtn} from '../components'

import img from '../assets/Images/pana.svg'
import { Link } from 'react-router-dom'


const ResetPassword = () => {
  return (
    <div className="mx-auto px-6 bg-gradient-to-b from-[#4A8F7A] to-[#5E8183] h-full py-2 rounded-2xl max-w-lg w-96 mb-4 mt-4">
      <SectionHeading text="Input your new password" />
      <div className="pt-[40px]">
        <FormInput
          name="password"
          type="password"
          label="new password"
          defaultValue="password"
        />
        <FormInput
          name="password"
          type="password"
          label=" confirm password"
          defaultValue="password"
        />
      </div>

      <div className="pt-[33px] pb-32">
        <Link to="/password">
          <SignUpBtn text="continue" />
        </Link>

        <Link to="/signup">
          <p className="text-[#4C4C4C] text-center pt-[30px] text-lg">
            create a new account
          </p>
        </Link>
      </div>
    </div>
  )
}

export default ResetPassword