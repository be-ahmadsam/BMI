import { useState } from 'react'
import './App.css'
// import React, {useState} from 'react';

function App() {
  //making state
  const [weight, setWeight] = useState(); 
  const [height, setHeight] = useState(); 
  const [bmi, setBmi] = useState(0); 
  const [message, setMessage] = useState(0); 

  //Logic
  let calcBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert('Enter valid weight and height');
    } else {
      // Convert height from cm to meters
      let heightInMeters = height / 100;
      let bmi = weight / (heightInMeters * heightInMeters);
      setBmi(bmi.toFixed(1));
  
      // Determine the message based on BMI value
      if (bmi < 18.5) {
        setMessage("You are Underweight");
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage("You have a Healthy weight");
      } else {
        setMessage("You are Overweight");
      }
    }
  };

  //reload

  let reload = () => {
    window.location.reload()
  }

  




  return (
    <>
      <h2>BMI calculator</h2>
      <form onSubmit={calcBmi}>
        <div>
          <label >Weight</label>
          <input type="text" placeholder="Enter your Weight in kg"  
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div>
          <label >Height</label>
          <input type="text" placeholder="Enter your Height in cm" 
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="button">
          <button className="btn" type='submit'>Submit</button>
          <button className="btn btn-outline" type='submit'>Reload</button>
        </div>
        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
      </form>
  </>
  )
}

export default App
