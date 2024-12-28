import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <section>
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
              <h1 class="h1-title">Contact Us</h1>
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
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="main-contact-page-in">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5">
              <div class="contact-detail-box">
                <h3 class="h3-title">Contact Detail</h3>
                <p>
                  Give us a call or drop by anytime, we endeavour to answer all
                  enquiries within 24 hours on business days. We will be happy
                  to answer your questions.
                </p>
                <ul>
                  <li>
                    <div class="contact-detail-icon">
                      <img
                        src="/assets/images/contact-mail.png"
                        alt="location"
                      />
                    </div>
                    <div class="contact-detail-content">
                      <p>Our Mailbox:</p>
                      <h3 class="contact-text">info@mslabdesigns.com</h3>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-7">
              <div class="get-touch-box">
                <div class="get-touch-title">
                  <h2 class="h2-subtitle">Get In Touch</h2>
                  <h2 class="h2-title">Ready To Get Started</h2>
                </div>
                <div class="get-touch-form">
                  <form>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-box">
                          <input
                            type="text"
                            name="Full Name"
                            class="form-input"
                            placeholder="Full Name"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-box">
                          <input
                            type="email"
                            name="EmailAddress"
                            class="form-input"
                            placeholder="Email Address"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-box">
                          <input
                            type="text"
                            name="Phone No"
                            class="form-input"
                            placeholder="Phone No."
                            required
                          />
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-box">
                          <textarea
                            class="form-input"
                            placeholder="Message..."
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-box mb-0">
                          <button type="submit" class="sec-btn">
                            <span>Submit Now</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
