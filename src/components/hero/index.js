import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("Creative graphic design");
  const phrases = [
    "Creative graphic design",
    "Strategic digital marketing",
    "SEO solutions",
    "Custom website development",
    "Virtual assistance solutions",
    "Transcription solutions",
    "Translation solutions",
    "Epr systems design",
    "Photography solutions",
  ];
  const switchInterval = 1500; // Time in ms to switch between phrases
  const textRef = useRef(null); // Reference to the text element

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % phrases.length;
      setDisplayedText(phrases[currentIndex]);
    }, switchInterval); // Switch every 2 seconds

    return () => clearInterval(interval); // Clean up the interval
  }, []);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        {
          width: 0, // Start with a width of 0
          opacity: 1, // Ensure full opacity
        },
        {
          duration: 1, // Set typing speed (time for full text to appear)
          width: "auto", // Animate to full width
          ease: "none", // Linear easing for a smooth animation
        }
      );
    }
  }, [displayedText]);

  return (
    <section className="main-banner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="banner-content">
              <h2
                className="h2-subtitle wow fadeInUp animated"
                data-wow-delay=".4s"
              >
                Welcome to MsLabDesigns
              </h2>
              <h1
                className="h1-title wow fadeInUp animated relative"
                data-wow-delay=".5s"
              >
                Your one-stop destination for
              </h1>
              <h1
                className="h1-title wow fadeInUp animated relative"
                data-wow-delay=".5s"
              >
                <span className="animated-text" ref={textRef}>
                  {displayedText}
                  <Image
                    src="/assets/images/mslabdesigns-banner-line.png"
                    alt="line"
                    width={200}
                    height={5}
                    className="hover-line"
                  />
                </span>
              </h1>
              {/* <p className="wow fadeInUp animated" data-wow-delay=".6s">
                Your one-stop destination for creative graphic design, strategic
                digital marketing, SEO solutions, and custom website
                development. We help businesses like yours stand out in a
                competitive digital landscape.
              </p> */}
              <div
                className="banner-btn wow fadeInUp animated"
                data-wow-delay=".7s"
              >
                <Link href="/services" className="sec-btn">
                  Explore Our Services
                </Link>
                <Link href="/contact" className="sec-btn btn-2">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="banner-img-box wow fadeInRight animated"
              data-wow-delay=".4s"
            >
              <div className="banner-img">
                <Image
                  src="/assets/images/mslabdesigns-home.png"
                  alt="banner"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animated-text {
          display: inline-block;
          position: relative;
          font-size: 2.5rem;
          font-weight: bold;
          overflow: hidden;
          white-space: nowrap;
          font-family: "Poppins", sans-serif;
        }
        @media (max-width: 768px) {
          /* Adjust for tablets and smaller screens */
          .animated-text {
            font-size: 1.8rem; /* Smaller font size */
          }
        }

        @media (max-width: 480px) {
          /* Further adjust for mobile screens */
          .animated-text {
            font-size: 1.2rem; /* Even smaller for very small screens */
          }
        }

        .hover-line {
          display: block;
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: transparent;
          transition: width 0.3s ease;
        }

        .animated-text:hover .hover-line {
          width: 100%;
          background: #ff5722;
        }

        .h1-title {
          position: relative;
        }

        @keyframes blink {
          50% {
            border-color: transparent;
          }
        }

        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap");
      `}</style>
    </section>
  );
};

export default Hero;
