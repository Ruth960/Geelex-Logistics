import Header from "../components/header";
import HeroSection from "../components/herosection";
import Footer from "../components/footer";
 import About from "../components/about";
 import  Services from "../components/services";
 import Tracking from "../components/trackshipment";
 import Contacts from "../components/contacts";

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
