import React from 'react'
import Header from './components/Header'
import Input from './components/Input'
import Result from './components/Result'
import {calculateInvestmentResults} from './util/investment'
const App = () => {
  return (
    <>
    <Header/>
    <Input calculateInv= {calculateInvestmentResults}/>
    <Result/>
    </>
  )
}

export default App