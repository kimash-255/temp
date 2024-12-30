import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const socialLinks = [
    // { href: "#", iconClass: "fa fa-brands fa-tiktok", label: "Tiktok" },
    { href: "#", iconClass: "fa fa-instagram", label: "Instagram" },
    // { href: "#", iconClass: "fa fa-twitter", label: "Twitter" },
    // { href: "#", iconClass: "fa fa-youtube-play", label: "YouTube" },
  ];

  const ourLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
  ];

  const otherLinks = [
    { href: "/contact", label: "Contact Us" },
    { href: "/about", label: "FAQ" },
    { href: "/about", label: "Privacy Policy" },
    { href: "/about", label: "Terms & Conditions" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <section className="main-footer">
      <div className="container">
        <div className="row">
          {/* Footer Logo and Social Links */}
          <div className="col-lg-3 col-md-6">
            <div className="footer-logo-content">
              <Link href="/">
                <img
                  src="/assets/images/mslabdesigns-logo-footer.png"
                  alt="Educater"
                />
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
                <li>
                  <Link href="#">
                    <div>
                      <i
                        className="text-white"
                        style={{ width: "40px", padding: "10px" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path
                            fill="#ffffff"
                            d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"
                          />
                        </svg>
                      </i>
                    </div>
                  </Link>
                </li>
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
                Copyright &copy; {currentYear} All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
