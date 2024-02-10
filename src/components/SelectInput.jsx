
import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const SelectInput = () => {
   const [phoneNumber, setPhoneNumber] = useState('')

   const handleOnChange = (value, country) => {
     console.log(value, country)
     setPhoneNumber(value)
   }
  return (
    <div className="flex gap-x-4">
      
      <div className="">
        
        <PhoneInput
          country={'ng'}
          value={phoneNumber}
          onChange={handleOnChange}
          inputStyle={{
            width: '6rem',
            paddingTop: '1.6rem',
            paddingBottom: '1.6rem',
            color: '#B8B8B8',
          }}
        />
      </div>
      <input
        type="text"
        name="number"
        defaultValue="5960493953"
        className="w-full pl-4 rounded-sm"
      />
    </div>
  )
}

export default SelectInput
