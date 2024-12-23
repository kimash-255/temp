import Image from "next/image";
import Link from "next/link";
import Testimonial from "../testimonial";
import Cta from "../cta";
import AboutUs from "../aboutus";

const About = () => {
  return (
    <section class="main-banner-in">
      <span class="shape-1 animate-this">
        <img src="assets/images/shape-1.png" alt="shape" />
      </span>
      <span class="shape-2 animate-this">
        <img src="assets/images/shape-2.png" alt="shape" />
      </span>
      <span class="shape-3 animate-this">
        <img src="assets/images/shape-3.png" alt="shape" />
      </span>
      <span class="shape-4 animate-this">
        <img src="assets/images/shape-4.png" alt="shape" />
      </span>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h1 class="h1-title">About Us</h1>
          </div>
        </div>
      </div>

      <div class="main-banner-breadcrum">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="banner-breadcrum">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutUs />

      <div class="main-partner-logo-in">
        <div class="container">
          <div class="row partner-bg partner-slider">
            <div class="col-lg-3">
              <div class="partners-box">
                <img src="assets/images/brand-1.png" alt="brand-1" />
              </div>
            </div>
            <div class="col-lg-3">
              <div class="partners-box">
                <img src="assets/images/brand-2.png" alt="brand-2" />
              </div>
            </div>
            <div class="col-lg-3">
              <div class="partners-box">
                <img src="assets/images/brand-3.png" alt="brand-3" />
              </div>
            </div>
            <div class="col-lg-3">
              <div class="partners-box">
                <img src="assets/images/brand-4.png" alt="brand-4" />
              </div>
            </div>
            <div class="col-lg-3">
              <div class="partners-box">
                <img src="assets/images/brand-5.png" alt="brand-5" />
              </div>
            </div>
            <div class="col-lg-3">
              <div class="partners-box">
                <img src="assets/images/brand-6.png" alt="brand-5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="main-academics-programs">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="academics-programs-title">
                <h2 class="h2-subtitle">Academics Programs</h2>
                <h2 class="h2-title">Best Academics Programs</h2>
              </div>
            </div>
          </div>
          <div class="row academic-slider">
            <div class="col-lg-3">
              <div class="academic-box">
                <div class="academic-img-box">
                  <div class="academic-img">
                    <img src="assets/images/academic-1.jpg" alt="academic" />
                  </div>
                </div>
                <div class="academic-content">
                  <h3 class="h3-title">Undergraduate</h3>
                  <p>
                    Curabitur pellentesque id nulla sit amet vestibulum
                    estibulum mollis.
                  </p>
                  <Link href="contact-us.html" class="link-btn">
                    Apply Now
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="academic-box">
                <div class="academic-img-box">
                  <div class="academic-img">
                    <img src="assets/images/academic-2.jpg" alt="academic" />
                  </div>
                </div>
                <div class="academic-content">
                  <h3 class="h3-title">PHD Program</h3>
                  <p>
                    Curabitur pellentesque id nulla sit amet vestibulum
                    estibulum mollis.
                  </p>
                  <Link href="contact-us.html" class="link-btn">
                    Apply Now
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="academic-box">
                <div class="academic-img-box">
                  <div class="academic-img">
                    <img src="assets/images/academic-3.jpg" alt="academic" />
                  </div>
                </div>
                <div class="academic-content">
                  <h3 class="h3-title">Postgraduate</h3>
                  <p>
                    Curabitur pellentesque id nulla sit amet vestibulum
                    estibulum mollis.
                  </p>
                  <Link href="contact-us.html" class="link-btn">
                    Apply Now
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="academic-box">
                <div class="academic-img-box">
                  <div class="academic-img">
                    <img src="assets/images/academic-4.jpg" alt="academic" />
                  </div>
                </div>
                <div class="academic-content">
                  <h3 class="h3-title">Continuing Education</h3>
                  <p>
                    Curabitur pellentesque id nulla sit amet vestibulum
                    estibulum mollis.
                  </p>
                  <Link href="contact-us.html" class="link-btn">
                    Apply Now
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonial />
      <Cta />
    </section>
  );
};
export default About;
