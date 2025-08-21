import Header from "../components/header";
import HeroSection from "../components/herosection";
import Footer from "../components/footer";
 import About from "./about";
 import  Services from "./services";
 import Tracking from "./trackshipment";
 import Contacts from "./contacts";

export default function Home(){

    return(
        <div style={{
            backgroundColor:'white',
        }}>
          
           
          <HeroSection/>
          <Services/>
           <About /> 
           <Tracking/>
           <Contacts/>
           

        </div>
    )
}
