import React from 'react'

const FormCheckBox = ({ name, label, defaultValue, size }) => {
  return (
    <div className="flex justify-center  items-center gap-x-2 ">
      <input
        type="radio"
        name={name}
        defaultChecked={defaultValue}
        className={`${size} w-6 h-6 `}
      />
      <label htmlFor={name} className="cursor-pointer">
        <span className="capitalize text-[#B8B8B8]">{label}</span>
      </label>
    </div>
  )
}

export default FormCheckBox
