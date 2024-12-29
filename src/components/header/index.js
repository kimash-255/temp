import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to determine if scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Check if the page is scrolled
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on first render to check if scrolled

    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`site-header ${
        isScrolled ? "bg-white" : "bg-transparent"
      } transition-all duration-300`}
    >
      {/* <!-- Top start --> */}
      <div className="header-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="top-contact">
                <div className="top-location"></div>
                <div className="top-mail">
                  <div className="top-mail-icon">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </div>
                  <div className="top-mail-content">
                    <Link href="javascript:void(0);" title="mail">
                      <p>info@mslabdesigns.com</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="Social-midea">
                <Link href="javascript:void(0);" title="Whatsapp">
                  <i className="fa fa-whatsapp" aria-hidden="true"></i>
                </Link>
                <Link href="javascript:void(0);" title="Instagram">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Top End --> */}

      {/* <!-- Navbar Start  --> */}
      <div className="header-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              {/* <!-- Site Logo Start --> */}
              <div className="site-branding">
                <Link href="/" title="Mslabdesigns">
                  <img src="/assets/images/logo.png" alt="Logo" />
                </Link>
              </div>
              {/* <!-- Site Logo End --> */}
            </div>
            <div className="col-lg-9">
              <div className="header-menu">
                <nav className="main-navigation">
                  <button className="toggle-button">
                    <span></span>
                    <span className="toggle-width"></span>
                    <span></span>
                  </button>
                  <ul className="menu">
                    <li className="active">
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                    <li className="sub-items relative">
                      <Link
                        href="/services"
                        title="Services"
                        className="block px-4 py-2"
                      >
                        Services
                      </Link>
                      <ul className="sub-menu absolute hidden bg-white shadow-lg">
                        <li>
                          <Link
                            href="/services/1"
                            title="Logo Design"
                            className="block px-4 py-2"
                          >
                            Graphic Design
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/2"
                            title="Digital Marketing"
                            className="block px-4 py-2"
                          >
                            Digital Marketing
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/3"
                            title="SEO"
                            className="block px-4 py-2"
                          >
                            SEO
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/4"
                            title="Social Media Management"
                            className="block px-4 py-2"
                          >
                            Social Media Management
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/5"
                            title="Website Development"
                            className="block px-4 py-2"
                          >
                            Website Development
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/6"
                            title="Content Writing"
                            className="block px-4 py-2"
                          >
                            Content Writing
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/blog">Blog</Link>
                    </li>

                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </nav>
                <div className="black-shadow"></div>
                <div className="header-btn">
                  <Link href="/contact" className="sec-btn">
                    Start a Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Navbar End  --> */}
    </header>
  );
};

export default Header;
