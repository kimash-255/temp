import Link from "next/link";
import { useState, useEffect } from "react";
import NavMenu from "./NavMenu";
import services from "@/data/services.json";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const menuItems = [
    { label: "Home", href: "/", title: "Home" },
    { label: "About Us", href: "/about", title: "About Us" },
    {
      label: "Services",
      href: "/services",
      title: "Services",
      items: services, // Using the services JSON here
    },
    { label: "Blog", href: "/blog", title: "Blog" },
    { label: "Contact Us", href: "/contact", title: "Contact Us" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

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
      <div class="header-bottom">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-3">
              {/* <!-- Site Logo Start --> */}
              <div className="site-branding">
                <Link href="/" title="Mslabdesigns">
                  <img src="/assets/images/mslabdesigns-logo.png" alt="Logo" />
                </Link>
              </div>
              {/* <!-- Site Logo End --> */}
            </div>
            <div class="col-lg-9">
              <div class="header-menu">
                <nav
                  className={`main-navigation ${
                    isMenuOpen ? "toggle-menu" : ""
                  }`}
                >
                  <button
                    className="toggle-button"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                  >
                    <span></span>
                    <span class="toggle-width"></span>
                    <span></span>
                  </button>

                  <NavMenu menuItems={menuItems} />
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
