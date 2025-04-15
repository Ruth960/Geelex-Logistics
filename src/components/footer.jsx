import {MapPin, Phone, Mail, Linkedin, Facebook, Instagram, Twitter } from "lucide-react";
export default function Footer(){
  return(

    <div>
      <footer style={{
        backgroundColor: "#002642",
        color: "white",
        padding: "2rem 1rem 4rem",
        flexDirection: "row",
        display: "flex",
      }}>
        <div style={{ flexDirection:'row', display:'flex', justifyContent:'space-between', width:'100%', maxWidth:'1200px', margin:'0 auto'}}>
          <div style={{display:'flex', flexDirection:'column', marginBottom:'1rem'}}>
            <h2>Address</h2>
            <div style={{ display: "flex", alignItems: "left", gap: "0.5rem", marginBottom: "1rem" }}>
              <MapPin size={20} />
              <span>Location</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
            <Phone size={20} />
            <span>Call +254723765275</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
            <Mail size={20} />
            <span>info@geelex.co.ke</span>
          </div>
          <div style={{}}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{color:'white'}}><i> <Facebook size={20} /></i></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{color:'white'}}><i ><Twitter size={20} /></i></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{color:'white'}}><i><Instagram size={20} /></i></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{color:'white'}}><i> <Linkedin size={20} /></i></a>

          </div>
            
        </div>
        <div>
        <h3 style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>Info</h3>
        <p >
        Whether you're looking for freight <br/>forwarding, warehousing, or last-<br/>mile delivery services, we offer <br/>
        customizable solutions that ensure <br/>your goods reach their destination <br/>safely and on time.
        </p>
        </div>
        <div>
          <h2>Links</h2>
          <ul style={{ listStyle: "none", padding: 0, color: "white" }}>
            <li><a href="#about" style={{ color: "white", textDecoration: "none" }}>About Us</a></li>
            <li><a href="#services" style={{ color: "white", textDecoration: "none" }}>Services</a></li>
            <li><a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact Us</a></li>
          </ul>

        </div>
        <div style={{display:'flex', flexDirection:'column', marginBottom:'1rem'}}>
          <h2>Newsletter</h2>
          <p style={{lineHeight:'1.6'}}>Subscribe to our newsletter for the latest updates.</p>
          <input type="email" placeholder="Enter your email" style={{ padding: "0.75rem 1rem", border: "none", outline: "none", backgroundColor:'#fff', marginBottom:'1rem' }}/>
          <button style={{backgroundColor:'#17a2b8', color:'white', padding:'0.75rem 1rem', border:'none', outline:'none'}}>Subscribe</button>
        </div>
      </div>


        
      </footer>
      <p style={{color:'black'}}>&copy; {new Date().getFullYear()} All rights reserved by Geelex Logistics Company.</p>
    </div>
  )

}
