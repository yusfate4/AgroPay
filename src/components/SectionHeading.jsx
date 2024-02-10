import React from 'react'
import img from '../assets/Images/AP.svg'

const SectionHeading = ({text, label}) => {
  return (
    <div>
      <img src={img} className="h-6 w-6" />
      <div className="grid place-items-center pt-4">
        <img src={img} className="h-26 w-26" />
        <p className="text-center text-slate-200 text-lg leading-tight pt-4">
        {text} <br/> {label}
        </p>
      </div>
    </div>
  )
}

export default SectionHeading
