
export default function About(){
    return(
        <section id="about" style={{ padding: "4rem 1rem" }}>
        <div
        style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            alignItems: "center",
            color:'#333',
            textAlign: "justify",
        }}
        >
        <div>
            <h2 style={{ fontSize: "2.25rem", marginBottom: "1.5rem" }}>
            <span style={{ color: "#000" }}>About </span>
            <span style={{ color: "#17a2b8" }}>Us</span>
            </h2>
            <p style={{ marginBottom: "1rem", lineHeight: "1.6" }}>
            At Geelex, we are dedicated to transforming logistics into a seamless and reliable experience. With years of
            expertise and a countrywide network, we provide customized supply chain solutions that meet the unique needs
            of each business. Our team leverages cutting-edge technology, a robust fleet, and a commitment to
            sustainability to ensure that your goods are delivered on time and in perfect condition.
            </p>
            <p style={{ marginBottom: "1rem", lineHeight: "1.6" }}>
            From freight forwarding to last-mile delivery, we pride ourselves on offering efficient, transparent, and
            cost-effective logistics services that help businesses grow and thrive. At the core of everything we do is a
            customer-first approach, and we are driven by our mission to be your trusted logistics partner, no matter
            where you are or how complex your needs may be.
            </p>
        </div>
        <div style={{ position: "relative", height: "400px" }}>
            <img
            src="/aboutimg.jpg"
            alt="Logistics trucks on highway"
            fill
            style={{ objectFit: "cover",
                 borderRadius: "0.5rem",
                 width: 600,
                 height:400,
                }}
            />
        </div>
        </div>
    </section>
    )
}