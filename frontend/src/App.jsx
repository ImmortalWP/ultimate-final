import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Profile from './pages/profile'
import SignIn from './pages/signin'
import Listing from './pages/listing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/listing" element={<Listing />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;