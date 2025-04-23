import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import LearningComponent from "./LearningComponent.jsx"

function App() {
  return (
    <>
    <module title= "Flexbox pattern"/>
    <module title= "Book library"/>
    <module title= "Wordguessing game"/>

    <module img= "./images/screendump1.jpg"/>
    <module img= "./images/screendump2.jpg"/>
    <module img= "./images/screendump3.jpg"/>

    <module text= "In this assignment we were asked to design a flexbox layout accordingly to a figma file."/>
    <module text= "bla bla" />
    <module text= "bla bla" /> 
    <module link= <Link to="https://github.com/TrooperLooper/Assignment_16.0">click this link</Link>/>
    <module link= <Link to="https://github.com/TrooperLooper/Assignment_20.0">click this link</Link>/>
    <module link= <Link to="https://github.com/TrooperLooper/Assignment_22.0">click this link</Link>/>

    </>    
  );

}

//verkar vara konflikt?

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App;
