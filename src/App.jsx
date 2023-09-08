import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar'
import MainContent from './MainContent'
import './App.css'

function App() {


  return (
    <div className='container'>
      <Navbar />
      <MainContent />
    </div>
  )
}

export default App
