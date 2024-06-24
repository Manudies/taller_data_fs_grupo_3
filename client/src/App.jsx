import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from "./components/form/Form"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Housing Price Prediction</h1>
      <Form/>
      
    </>
  )
}

export default App
