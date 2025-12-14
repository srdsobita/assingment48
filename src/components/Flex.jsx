import React from 'react'

const Flex = ({children, className}) => {
  return (
    <div className={`flex items-center m-auto ${className}`}>{children}</div>
  )
}

export default Flex