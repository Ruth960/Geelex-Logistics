
export default function Tracking(){

    return(
         <section
        style={{
            padding: "4rem 1rem",
            backgroundColor: "rgba(31, 41, 55, 0.9)",
            opacity:0.3,
            position: "relative",
            color: "white",
        }}
        >
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'url(aboutimg.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.9, // Adjust opacity here
                zIndex: -1,
            }}
        >
        </div>
        
            <div  style={{
                maxWidth: "1200px",
                margin: "0 auto",
                position: "relative",
                zIndex: 1,
            }}>
                <h1 style={{ fontSize: "2.25rem", marginBottom: "1.5rem", textAlign:'left' }}>Track Your Shipment</h1>
                <p style={{ maxWidth: "600px", marginBottom: "2rem", lineHeight: "1.6" }}> 
                Stay updated on the status of your shipment with our easy-to-use tracking system. Simply enter your 
                tracking number to view real-time updates on your shipment’s location and estimated delivery time. 
                Receive instant notifications on any changes or delays, so you're always in the loop. Tracking your shipment 
                has never been easier—ensure peace of mind with every delivery.
                </p>
                <div style={{
                display: "flex",
                maxWidth: "600px",
                marginBottom: "2rem",
            }}>
                    <input  type="text"
                        placeholder="Enter Your Tracking Number"
                        style={{
                        flex: "1",
                        padding: "0.75rem 1rem",
                        border: "none",
                        outline: "none",
                        backgroundColor:'#fff',
                        }}/>
                    <button  style={{
                        backgroundColor: "#17a2b8",
                        color: "white",
                        padding: "0.75rem 2rem",
                        border: "none",
                        cursor: "pointer",
                        }}>TRACK</button>
                </div>
            </div>
            </section>
    )
}