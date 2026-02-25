import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from "./pages/Home"
import JobsPage from './pages/JobsPage'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/jobs" element={<JobsPage/>} />
      </Routes>
    </>
  )
}

export default App