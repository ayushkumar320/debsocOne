import { useState } from 'react'
import React from 'react'
import './App.css'
import Founder from './components/Founder.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    < Founder/>
  )
}

export default App
