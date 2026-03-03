import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignIn from './pages/signIn'
import SignUP from './pages/signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <SignUP />
    </div>
  )
}

export default App
