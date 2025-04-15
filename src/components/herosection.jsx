import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array to store slide contents
  const slides = [
    {
      title: 'We Provide the Best Courier Services',
      description: `At Geelex, we understand that in logistics, timing, precision, and reliability are everything. 
                    That’s why we go above and beyond to ensure your packages reach their destination safely, 
                    on time, and with unmatched efficiency.`,
    },
    {
      title: 'Delivering Excellence,Every Mile of the Way',
      description: `Whether you're managing complex supply chains or simple deliveries, our cutting-edge technology and expert team are here to streamline your operations`,
    },
    {
      title: 'Your Trusted Partner in Seamless Logistics',
      description: `Whether you’re looking to streamline your local deliveries or expand countrywide, our tailored logistics solutions are designed to meet the demands of your 
      business, ensuring peace of mind every step of the way. Let us handle the logistics, so you can focus on what matters most—growing your business.`,
    },
  ];

  // Automatically change slide every 5 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval); // Clear interval when component is unmounted
  }, []);

  // Function to change slide manually
  const changeSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section>
      <div
        style={{
          position: 'relative',
          height: 500,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          backgroundColor:'rgba(242, 242, 243, 0.9)', // Dark background for contrast
          opacity:'0.5'
        }}
      >
        {/* Background image with opacity */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url(fevicon.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.9, // Adjust opacity here
            zIndex: -1,
          }}
        ></div>

        {/* Slide container without the wipe effect */}
        <div
          style={{
            display: 'flex',
            width: '100%',
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              style={{
                width: '100%',
                padding: '20px',
                color: 'white',
                textAlign: 'center',
                display: currentSlide === index ? 'block' : 'none', // Show the current slide only
              }}
            >
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
            </div>
          ))}
        </div>

        {/* Pagination buttons */}
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '10px',
          }}
        >
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => changeSlide(index)}
              style={{
                width: '1',
                height: '1',
                //borderRadius: '50%',
                backgroundColor: currentSlide === index ? 'aqua' : 'white',
                transform: currentSlide === index ? 'scale(1)' : 'scale(1)',
                transition: 'all 0.3s ease',
                border: 'none',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
