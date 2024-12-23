import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const socialLinks = [
    { href: "#", iconClass: "fa fa-facebook", label: "Facebook" },
    { href: "#", iconClass: "fa fa-instagram", label: "Instagram" },
    { href: "#", iconClass: "fa fa-twitter", label: "Twitter" },
    { href: "#", iconClass: "fa fa-youtube-play", label: "YouTube" },
  ];

  const ourLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Courses" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact Us" },
  ];

  const otherLinks = [
    { href: "/faq", label: "FAQ" },
    { href: "/about", label: "Privacy Policy" },
    { href: "/about", label: "Terms & Conditions" },
  ];

  return (
    <section className="main-footer">
      <div className="container">
        <div className="row">
          {/* Footer Logo and Social Links */}
          <div className="col-lg-3 col-md-6">
            <div className="footer-logo-content">
              <Link href="/">
                <img src="/assets/images/logo-footer.png" alt="Educater" />
              </Link>
              <p>
                Let’s bring your vision to life. Contact us today for a
                consultation!
              </p>
              <ul>
                {socialLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>
                      <div>
                        <i className={link.iconClass} aria-hidden="true"></i>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Links - Our Link */}
          <div className="col-lg-3 col-md-6">
            <div className="footer-our-link">
              <h3 className="h3-title">Our Link</h3>
              <ul>
                {ourLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>
                      <div>{link.label}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Links - Other Link */}
          <div className="col-lg-3 col-md-6">
            <div className="footer-other-link">
              <h3 className="h3-title">Other Link</h3>
              <ul>
                {otherLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>
                      <div>{link.label}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Subscribe Section */}
          <div className="col-lg-3 col-md-6">
            <div className="footer-subscribe">
              <h3 className="h3-title">Subscribe Now</h3>
              <div className="footer-subscribe-form">
                <input
                  type="email"
                  name="email"
                  className="form-input subscribe-input"
                  placeholder="Email Address"
                  required
                />
                <button type="submit" className="sec-btn">
                  <i className="fa fa-paper-plane" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Copyright Section */}
      <div className="footer-copyright-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <span className="copyright-text">
                Copyright &copy; 2021{" "}
                <Link
                  href="https://www.softleek.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>Made with 💎 by Softleek.</div>
                </Link>{" "}
                All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
