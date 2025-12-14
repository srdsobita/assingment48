import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Logo from './../../assets/Logo.png'
import Button from './../Button';
import { FiChevronDown } from "react-icons/fi"
const Headers = () => {
  return (
    <>
    <div className="">
    <Container>
      <Flex>
       <div className="">
       <Image src={Logo}/>
       </div>
       <div className="m-auto">
        <ul className='flex gap-x-5 items-center'>
        <li className='flex items-end '><link className='hober: text-[#FF7628]' rel="stylesheet" href="/" />Home<FiChevronDown/></li>
        <li className='flex items-end'><link rel="stylesheet" href="#" />Home<FiChevronDown/></li>
        <li className='flex items-end'><link rel="stylesheet" href="#" />Home<FiChevronDown/></li>
        <li className='flex items-end'><link rel="stylesheet" href="#" />Home<FiChevronDown/></li>
        <li className='flex items-end'><link rel="stylesheet" href="#" />Home<FiChevronDown/></li>
       </ul>
       </div>
       <div className="">
        <Button />
       </div>
             </Flex>
    </Container>
    </div>
    </>
  )
}
export default Headers





