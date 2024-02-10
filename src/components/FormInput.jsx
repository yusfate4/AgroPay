import React from 'react'

const FormInput = ({label, type, name, defaultValue, size, }) => {
  return (
    <div className="grid place-self-center ">
      <label htmlFor="email" className={`text-[#B8B8B8] capitalize text-base pl-2`}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`py-4 px-2 rounded-sm  text-[#B8B8B8] mb-4 ${size} `}
      />
    </div>
  )
}

export default FormInput