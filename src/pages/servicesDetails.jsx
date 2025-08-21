import { useParams, Link } from "react-router-dom";

export default function ServiceDetail() {
    const { serviceId } = useParams();
    
    // Service details object
    const serviceDetails = {
        'safety-transport': {
            title: "Safety Transport",
            content: `We prioritize your safety and ensure that your transportation is handled with care and caution. 
            Our Safe Transport services guarantee a secure journey with experienced drivers, real-time tracking, and round-the-clock customer support.
            
            Safety is our top priority at Geelex Logistics. We understand that entrusting your goods or yourself to a transport service requires confidence
            in our safety measures. That's why we've implemented comprehensive safety protocols at every stage of the transportation process.
            
            Our fleet of vehicles undergoes rigorous maintenance checks and regular servicing to ensure they meet the highest safety standards.
            Each driver in our team is professionally trained, fully licensed, and has undergone extensive background checks.
            
            We utilize state-of-the-art tracking technology that allows both us and you to monitor the journey in real-time,
            providing peace of mind and immediate alerts in case of any unexpected events.
            
            In addition, our 24/7 customer support team is always available to address any concerns and provide assistance
            whenever you need it. With Geelex Logistics' Safety Transport service, you can rest assured that your transportation
            needs are being handled with the utmost care and attention to safety.`
        },
        'real-time-tracking': {
            title: "Real Time Tracking",
            content: `Whether you're sending packages across town or countrywide, you can monitor the exact location of your goods
            in real-time through our user-friendly tracking system. With instant updates on the status of your shipment,
            you can rest assured that you're always informed about its journey, delivery progress, and expected arrival time.
            
            Our advanced tracking system provides unprecedented visibility into your shipment's journey. Using GPS technology
            and our proprietary software, we track every movement of your goods from the moment they leave the pickup location
            until they reach their final destination.
            
            The user-friendly interface of our tracking portal allows you to access real-time information on your computer or mobile device.
            You'll receive automatic notifications at key milestones in the delivery process, including pickup confirmation,
            transit updates, and delivery confirmation.
            
            For businesses, our tracking technology integrates seamlessly with most inventory management systems,
            allowing for efficient supply chain management and improved customer satisfaction through accurate delivery estimates.
            
            With Geelex Logistics' Real-time Tracking service, uncertainty is eliminated from the shipping process,
            giving you complete control and peace of mind.`
        },
        'trucks-transport': {
            title: "Trucks Transport",
            content: `Whether you're storing sensitive documents, valuable goods, or seasonal inventory, we offer a range of flexible storage options
            to suit your requirements. Our facilities are equipped with state-of-the-art security systems, including 24/7 surveillance,
            climate control, and restricted access, ensuring that your items remain protected at all times.
            
            Our truck transport service is designed to handle cargo of all sizes with maximum efficiency and reliability.
            We operate a diverse fleet of vehicles including light-duty trucks for urban deliveries, medium-duty trucks for
            regional transport, and heavy-duty trucks for long-haul and oversized shipments.
            
            Each vehicle is equipped with appropriate securing mechanisms to ensure your cargo remains stable throughout transit,
            and our drivers are trained in proper loading and unloading techniques to prevent damage.
            
            For temperature-sensitive items, we offer refrigerated trucks with precise climate control capabilities
            that maintain the required temperature throughout the journey.
            
            We understand that different industries have different trucking needs, which is why we offer specialized solutions
            for retail distribution, construction materials, industrial equipment, and more.
            
            With Geelex Logistics' Truck Transport service, you can count on your goods arriving safely,
            on time, and in perfect condition.`
        },
        'custom-clearance': {
            title: "Custom Clearance",
            content: `We handle all the necessary documentation and compliance procedures to ensure that your goods are cleared efficiently
            and without delays. Our experienced team works closely with customs authorities to resolve any issues and expedite the process,
            minimizing your risk of fines or hold-ups.
            
            Navigating the complex world of customs regulations can be challenging, but with our Custom Clearance service,
            you can leave the complexities to us. Our team of customs experts stays up-to-date with the latest international
            trade regulations and compliance requirements to ensure smooth border crossings for your shipments.
            
            We prepare and submit all required documentation on your behalf, including commercial invoices,
            packing lists, certificates of origin, and any specialized permits or licenses required for your specific goods.
            
            Our established relationships with customs authorities worldwide and our electronic filing capabilities
            help expedite the clearance process, reducing wait times and avoiding costly storage fees at ports and terminals.
            
            We also offer pre-clearance services, tariff classification assistance, and customs valuation support to
            help you optimize your import/export operations and potentially reduce duty payments through legitimate means.
            
            Whether you're new to international shipping or looking to improve your existing processes,
            Geelex Logistics' Custom Clearance service removes the uncertainty and complications from cross-border trade.`
        }
    };
    
    const service = serviceDetails[serviceId];
    
    if (!service) {
        return (
            <div style={{
                padding: '40px 20px',
                textAlign: 'center'
            }}>
                <h1>Service Not Found</h1>
                <p>The service you are looking for does not exist.</p>
                <Link to="/services">
                    <button>Back to Services</button>
                </Link>
            </div>
        );
    }
    
    return (
        <div style={{
            padding: '40px 20px',
            maxWidth: '1200px',
            margin: '0 auto'
        }}>
            <h1>{service.title}</h1>
            <div style={{
                backgroundColor: 'rgb(233, 229, 241)',
                borderRadius: 10,
                padding: 20,
                marginTop: 20,
                textAlign: 'justify',
                color: '#333',
                lineHeight: 1.6
            }}>
                {service.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} style={{ marginBottom: '20px' }}>{paragraph}</p>
                ))}
            </div>
            <div style={{ marginTop: '30px' }}>
                <Link to="/services">
                    <button>Back to All Services</button>
                </Link>
            </div>
        </div>
    );
}