import { React, useState } from "react";

const Input = ({ userInput, handleChange }) => {

  //   function intialInv(event) {
  //     setIntitalInvestMent(event.target.value);
  //   }
  //   function annualInv(event) {
  //     setAnnualInvestment(event.target.value);
  //   }
  //   function expReturn(event) {
  //     setExpectedReturn(event.target.value);
  //   }
  //   function dur(event) {
  //     setDuration(event.target.value);
  //   }
  
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            onChange={(event) =>
              handleChange("initialInvestment", event.target.value)
            }
            value={userInput.initialInvestment}
            required
          />
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            onChange={(event) =>
              handleChange("annualInvestment", event.target.value)
            }
            value={userInput.annualInvestment}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input
            type="number"
            onChange={(event) =>
              handleChange("expectedReturn", event.target.value)
            }
            value={userInput.expectedReturn}
            required
          />
        </p>
        <p>
          <label>DURATION</label>
          <input
            type="number"
            onChange={(event) =>
              handleChange("duration", event.target.value)
            }
            value={userInput.duration}
            required
          />
        </p>
      </div>
    </section>
  );
};

export default Input;
