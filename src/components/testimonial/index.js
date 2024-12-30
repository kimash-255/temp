import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Testimonial = () => {
  const testimonials = [
    {
      text: "Thanks to the strategic digital marketing and SEO services, our business saw a significant increase in online visibility and traffic. The team really helped us reach the right audience and stand out in a crowded digital space.",
      name: "Proalliance Healthcare Staffing",
      role: "CEO, Proalliance Healthcare Staffing",
      image: "assets/images/mslabdesigns-client-1.jpg",
    },
    {
      text: "The custom website development and creative graphic design services we received were exceptional. Our website now looks amazing and works flawlessly, providing a great experience for our visitors and customers.",
      name: "Bizrates Tours and Safaris",
      role: "Founder, Bizrates Tours and Safaris",
      image: "assets/images/mslabdesigns-client-2.jpg",
    },
    {
      text: "We trusted them with our digital marketing, and they exceeded expectations. From SEO to social media campaigns, they’ve helped our business grow and thrive in the digital landscape. Highly recommended!",
      name: "Myspace Properties",
      role: "Owner, Myspace Properties",
      image: "assets/images/mslabdesigns-client-3.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Set up automatic testimonial switching
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000); // 5000ms = 5 seconds

    return () => clearInterval(interval); // Clear interval when component unmounts
  }, []);

  return (
    <section className="main-testimonial">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="testimonial-title">
              <h2 className="h2-subtitle">Testimonial</h2>
              <h2 className="h2-title">What Our Client Says About Us</h2>
              <p>
                Our clients love the work we do. We make sure that we exceed
                their expectations and deliver the best results.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="testimonial-slider">
              {/* Keep the box static, only animate the content */}
              <motion.div
                className="testimonial-box"
                key={currentIndex} // Forces Framer Motion to re-render each testimonial
              >
                {/* Animate the testimonial content using motion.div */}
                <motion.div
                  className="testimonial-content"
                  initial={{ opacity: 0, y: 20 }} // Start slightly lower (y-axis) and hidden
                  animate={{ opacity: 1, y: 0 }} // Animate to full opacity and y position
                  exit={{ opacity: 0, y: -20 }} // Slide up and fade out
                  transition={{ duration: 0.6, ease: "easeInOut" }} // Smooth, visually appealing transition
                >
                  <p>&quot;{testimonials[currentIndex].text}&quot;</p>
                  <div className="testimonial-client">
                    {/* <div className="testimonial-client-img-box">
                      <div className="testimonial-img">
                        <motion.img
                          src={testimonials[currentIndex].image}
                          alt="client"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </div> */}
                    <div className="testimonial-client-name">
                      <h3 className="h3-title">
                        {testimonials[currentIndex].role}
                      </h3>
                      {/* <span>{testimonials[currentIndex].role}</span> */}
                    </div>
                  </div>
                  <div className="testimonial-quote">
                    <img
                      src="assets/images/mslabdesigns-quote.png"
                      alt="quote"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
