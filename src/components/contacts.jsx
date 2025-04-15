
export default function Contacts(){

    return(
        <section id="contact" style={{ padding: "4rem 1rem" }}>

            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <h2 style={{ fontSize: "2.25rem", marginBottom: "2rem", color:'black'}}>CONTACT US</h2>
                
            <div>
            <form>
              <div style={{ marginBottom: "1rem", elevation: 10, alignItem:'left' }}>
                <input
                  type="text"
                  placeholder="Your Name"
                  style={{
                    width: "40%",
                    padding: "0.75rem 1rem",
                    backgroundColor:'white',
                    border: "1px solid rgb(211, 221, 241)",
                    borderRadius: "0.25rem",
                  }}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <input
                  type="text"
                  placeholder="Phone Number"
                  style={{
                    width: "40%",
                    padding: "0.75rem 1rem",
                    backgroundColor:'white',
                    border: "1px solid rgb(211, 221, 241)",
                    borderRadius: "0.25rem",
                    elevation:10,
                  
                  }}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <input
                  type="email"
                  placeholder="Email Address"
                  style={{
                    width: "40%",
                    padding: "0.75rem 1rem",
                    backgroundColor:'white',
                    border: "1px solid rgb(211, 221, 241)",
                    borderRadius: "0.25rem",
                  }}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  style={{
                    width: "40%",
                    padding: "0.75rem 1rem",
                    backgroundColor:'white',
                    border: "1px solid rgb(211, 221, 241)",
                   
                    borderRadius: "0.25rem",
                    elevation: 10,
                    
                  }}
                ></textarea>
              </div>
              <button
                style={{
                  backgroundColor: "#17a2b8",
                  color: "white",
                  padding: "0.75rem 2rem",
                  border: "none",
                  borderRadius: "0.25rem",
                  cursor: "pointer",
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        
        </div>


    </section>
    )
}
