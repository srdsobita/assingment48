import React from 'react'

const Button = ({btntext, className}) => {
  return (
   <button className={`px-7 py-3.5 bg-[#FF7628] rounded-[100px] ${className}`}>{btntext}</button>
  )
}

export default Button