import React from "react"
import "./index.css";
import Navbar from "./components/Navbar";
import Homes from "./components/Homes";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
function App() {

  return (
    <>
    <Navbar></Navbar>
    <Homes/>
    <About/>
    <Portfolio/>
    <Experience/>
    <Contact/>
    </>
  )
}

export default App
