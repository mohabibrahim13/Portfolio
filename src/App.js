import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portoflio from "./components/Portoflio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SocialLinks from "./components/SocialLinks";


function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Portoflio/>
      <Experience/>
      <Contact/>
      <Footer/>
      <SocialLinks/> 
    </div>
  );
}

export default App;
