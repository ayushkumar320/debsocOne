import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Founder from './components/founder'

function App() {
  const [count, setCount] = useState(0)

  return (
    < Founder/>
  )
}

export default App
