import { header } from 'express-validator'
import headerImg from '../assets/investment-calculator-logo.png'
import React from 'react'

const Header = () => {
  return (
   <header id='header'>
    <img src={headerImg} alt="" />
    <h1>Investment Calculator</h1>
   </header>
  )
}

export default Header