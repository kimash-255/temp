import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const socialLinks = [
    // { href: "#", iconClass: "fa fa-brands fa-tiktok", label: "Tiktok" },
    {
      href: "https://www.instagram.com/msdesignlab/profilecard/?igsh=MWNxbXl5b29zOGk4Mg==",
      iconClass: "fa fa-instagram",
      label: "Instagram",
    },
    {
      href: "https://api.whatsapp.com/send/?phone=%2B254748066918&text=Hello%2C+I%E2%80%99d+like+to+start+a+project+with+you.+Could+you+share+more+details+about+how+we+can+proceed%3F&type=phone_number&app_absent=0",
      iconClass: "fa fa-whatsapp",
      label: "Whatsapp",
    },
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
              <p>Crafting your brand's visual Identity</p>
              <ul>
                {socialLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div>
                        <i className={link.iconClass} aria-hidden="true"></i>
                      </div>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="https://www.tiktok.com/@mslabdesigns"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
          <div className="col-md-6">
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
