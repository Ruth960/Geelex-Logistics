import './App.css'
import Home from '/src/pages/home'
import HeroSection from './components/herosection'
import Header from './components/header'
import Footer from './components/footer'  
import { Route, Routes } from "react-router-dom";
import About from './components/about'
import Services from './components/services'
import Tracking from './components/trackshipment'
import Contacts from './components/contacts'
import { Truck } from "lucide-react";

function App() {

  return (
    <>
     <div style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            
            fontSize:'1.1rem',
            backgroundColor:'#002642',
            color:'white',
            padding: 10
      }}>
            <p>+254123456789</p>
            <p>abc@gmail.com</p>
            <p>Location</p>
       </div>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/" element={<HeroSection />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
     <Route path="/contact" element={<Contacts />} />
      <Route path="/track" element={<Tracking />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
