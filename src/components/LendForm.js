import React, { useState } from "react";

function LendForm(props) {
  const [lendAmount, setLendAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Code to submit form data
    console.log("Submitted", lendAmount, interestRate, duration);
    props.onClose();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Lend Form</h2>
        <label>
          Lend Amount:
          <input
            type="number"
            value={lendAmount}
            onChange={(e) => setLendAmount(e.target.value)}
          />
        </label>
        <label>
          Interest Rate:
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </label>
        <label>
          Duration (in months):
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <button onClick={props.onClose}>Close</button>
    </div>
  );
}

export default LendForm;
