import React from 'react'
import './App.css'
import Header from "./components/Header.js"
import Home from "./pages/Home.js"
import Footer from "./components/Footer.js"


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
