import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Skills  from "./Components/Skills.jsx";
import Features from "./Components/Features.jsx";
import Contacts from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";
import './Styles/main.css'


function App() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Features />
      <Contacts />
      <Footer />

    </>
  );
}




export default App;
