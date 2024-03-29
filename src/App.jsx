import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
      </button>
    </>
  )
}

export default App
