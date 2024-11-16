import { useState } from 'react'
import './App.css'
import { Link, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <main className='min-h-screen'>
      <Outlet/>
      </main>
      <footer>Footer</footer>
    </>
  )
}

export default App
