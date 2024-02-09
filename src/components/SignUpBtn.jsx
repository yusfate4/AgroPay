import React from 'react'

const SignUpBtn = ({text, size, space}) => {
  return (
    <button
      type="submit"
      className={`w-full py-2 px-12 rounded-full bg-[#FFC100] text-white font-medium capitalize text-lg ${size} ${space}`}
    >
     {text}
    </button>
  )
}

export default SignUpBtn