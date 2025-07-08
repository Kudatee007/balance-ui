import { useState } from 'react'
import './App.css'
import Sidebar from "./components/Sidebar.jsx"
import Header from "./components/Header.jsx"
import Home from "./pages/Home.jsx"
import Footer from "./components/Footer.jsx"


function App() {


  return (
    <>
     <h1 className=''>
      {/* <Sidebar /> */}
      <Header />
      <Home />
      <Footer />
     </h1>
    </>
  )
}

export default App
