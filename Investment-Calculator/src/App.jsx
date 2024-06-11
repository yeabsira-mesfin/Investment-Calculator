import {React, useState} from 'react'
import Header from './components/Header'
import Input from './components/Input'
import Result from './components/Result'

const App = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  const inputIsValid = userInput.duration >=1;
  return (
    <>
    <Header/>
    <Input userInput= {userInput} handleChange = {handleChange}/>
    {inputIsValid?<Result userInput={userInput}/>:<p className='center'>Please enter a duration greater than 0 </p>}
    </>
  )
}

export default App