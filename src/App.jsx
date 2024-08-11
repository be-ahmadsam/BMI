import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>BMI calculator</h2>
      <form>
        <div>
          <label >Weight</label>
          <input type="text" placeholder="Enter your Weight in kg"  />
        </div>
        <div>
          <label >Height</label>
          <input type="text" placeholder="Enter your Height in cm"  />
        </div>
        <div className="button">
          <button className="btn" type='submit'>Submit</button>
          <button className="btn btn-outline" type='submit'>Reload</button>
        </div>
        <div className="center">
          <h3>Your BMI is: btaenge</h3>
          <p>message to be printed</p>
        </div>
      </form>
  </>
  )
}

export default App
