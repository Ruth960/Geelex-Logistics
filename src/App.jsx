import './App.css'
import Home from '/src/pages/home'
import Header from './components/header'
import Footer from './components/footer'  
import { Route, Routes } from "react-router-dom";
import About from './pages/about'
import Services from './pages/services'
import ServicesDetails from './pages/servicesDetails'
import Tracking from './pages/trackshipment'
import Contacts from './pages/contacts'

function App() {
  return (
    <>
     
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/services" element={<Services />} />
      <Route path="/services/:serviceId" element={<ServicesDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contacts />} />
      <Route path="/track" element={<Tracking />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App