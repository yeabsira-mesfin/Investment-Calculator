import {React, useState} from "react";

const Input = () => {
    const [inputValue, setInputValue] = useState();
  return (
   <section id="user-input">
    <div className="input-group"> 
        <p>
            <label>INITIAL INVESTMENT</label>
            <input type="text" value={inputValue} required/>
        </p>
        <p>
            <label>ANNUAL INVESTMENT</label>
            <input type="text" value={inputValue} required/>
        </p>
    </div>
    <div className="input-group"> 
        <p>
            <label>EXPECTED RETURN</label>
            <input type="text"value={inputValue} required />
        </p>
        <p>
            <label>DURATION</label>
            <input type="text" value={inputValue} required/>
        </p>
    </div>
   </section>
  );
};

export default Input;
