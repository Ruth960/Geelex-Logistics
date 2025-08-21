import { Link } from "react-router-dom";

export default function Services() {
    return(
        <div>
            <h1>Our Services</h1>
            <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
           
           <div style={{
            display: 'flex',
            flexWrap: 'wrap', 
            justifyContent: 'space-between',
           }}>
            <div style={{
                backgroundColor:'rgb(233, 229, 241)',
                borderRadius:5,
                elevation:5,
                padding:10,
                margin:10,
                textAlign:'justify',
                color:'#333',
                fontSize: '16',
                flex: '1 1 calc(50% - 20px)', 
                boxSizing: 'border-box',
            }}>
                <h2>Safety Transport</h2>
                <p>We prioritize your safety and ensure that your transportation is handled 
                    with care and caution. Our Safe Transport services guarantee a 
                    secure journey with experienced drivers, real-time tracking, and round-the-clock customer support.
                </p>
                <Link to="/services/safety-transport">
                    <button>Read More</button>
                </Link>
            </div>

            <div style={{
                backgroundColor:'rgb(233, 229, 241)',
                borderRadius:5,
                elevation:5,
                padding:10,
                margin:10,
                textAlign:'justify',
                color:'#333',
                fontSize: '16',
                flex: '1 1 calc(50% - 20px)', 
                boxSizing: 'border-box',
            }}>
                <h2>Real time Tracking</h2>
                <p>
                Whether you're sending packages across town or countrywide, you can monitor the exact location of 
                your goods in real-time through our user-friendly tracking system. With instant updates on the status 
                of your shipment, you can rest assured that you're always informed about its journey, delivery progress, and
                 expected arrival time.
                </p>
                <Link to="/services/real-time-tracking">
                    <button>Read More</button>
                </Link>
            </div>
            <div style={{
                backgroundColor:'rgb(233, 229, 241)',
                borderRadius:5,
                elevation:5,
                padding:10,
                margin:10,
                textAlign:'justify',
                color:'#333',
                fontSize: '16',
                flex: '1 1 calc(50% - 20px)', 
                boxSizing: 'border-box',
            }}>
                <h2>Trucks Transport</h2>
                <p>
                Whether you're storing sensitive documents, valuable goods, or seasonal inventory, we offer a range of 
                flexible storage options to suit your requirements. Our facilities are equipped with state-of-the-art security 
                systems, including 24/7 surveillance, climate control, and restricted access, ensuring that your items remain 
                protected at all times. With our secure storage, you can trust that your goods are in good hands.
                </p>
                <Link to="/services/trucks-transport">
                    <button>Read More</button>
                </Link>
            </div>
            <div style={{
                backgroundColor:'rgb(233, 229, 241)',
                borderRadius:5,
                elevation:5,
                padding:10,
                margin:10,
                textAlign:'justify',
                color:'#333',
                fontSize: '16',
                flex: '1 1 calc(50% - 20px)', 
                boxSizing: 'border-box',
            }}>
                <h2>Custom Clearance</h2>
                <p>
                We handle all the necessary documentation and compliance procedures to ensure that your goods are cleared efficiently 
                and without delays. Our experienced team works closely with customs authorities to resolve any issues and expedite the 
                process, minimizing your risk of fines or hold-ups. Whether you're importing or exporting, our customs clearance service 
                helps ensure a seamless, hassle-free experience from start to finish.
                </p>
                <Link to="/services/custom-clearance">
                    <button>Read More</button>
                </Link>
            </div>
           </div>
        </div>
    )
}