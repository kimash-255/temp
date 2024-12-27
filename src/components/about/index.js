import Image from "next/image";
import Link from "next/link";
import Testimonial from "../testimonial";
import Cta from "../cta";
import AboutUs from "../aboutus";
import blogs from "../data/blog.json";

const About = () => {
  return (
    <section>
      <section class="main-banner-in">
        <span class="shape-1 animate-this">
          <img src="/assets/images/shape-1.png" alt="shape" />
        </span>
        <span class="shape-2 animate-this">
          <img src="/assets/images/shape-2.png" alt="shape" />
        </span>
        <span class="shape-3 animate-this">
          <img src="/assets/images/shape-3.png" alt="shape" />
        </span>
        <span class="shape-4 animate-this">
          <img src="/assets/images/shape-4.png" alt="shape" />
        </span>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h1 class="h1-title">About Us</h1>
            </div>
          </div>
        </div>
      </section>

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

      <section class="main-about-us-in">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div
                class="about-img-box wow fadeInLeft animated"
                data-wow-delay=".4s"
              >
                <div class="about-img">
                  <img
                    src="/assets/images/msdesign-portfolio.png"
                    alt="about us"
                  />
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="about-us-content">
                <div class="about-us-title">
                  <h2 class="h2-subtitle">About Us</h2>
                  <h2 class="h2-title">Thank You for Choosing MsDesignLab!</h2>
                </div>
                <p>
                  We deeply appreciate your trust in us to deliver creative and
                  tailored solutions for your brand. Your referrals mean the
                  world to us—they’re a testament to your confidence in our
                  work.
                </p>
                <ul>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i>
                    <p>Expertise in modern graphic design solutions.</p>
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i>
                    <p>
                      Innovative digital marketing strategies tailored to you.
                    </p>
                  </li>
                  <li>
                    <i class="fa fa-check-circle" aria-hidden="true"></i>
                    <p>Comprehensive web development services.</p>
                  </li>
                </ul>
                <Link href="/contact" class="sec-btn">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
export default About;
