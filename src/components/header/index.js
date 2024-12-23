import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header class="site-header bg-white">
      {/* <!-- Top start --> */}
      <div class="header-top">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="top-contact">
                <div class="top-location">
                  <div class="top-location-icon">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                  </div>
                  <div class="top-location-content">
                    <Link href="javascript:void(0);" title="location">
                      <p>12/7 Aabot, Poor Street, Mumbai</p>
                    </Link>
                  </div>
                </div>
                <div class="top-mail">
                  <div class="top-mail-icon">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                  </div>
                  <div class="top-mail-content">
                    <Link href="javascript:void(0);" title="mail">
                      <p>info@gmail.com</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="Social-midea">
                <Link href="javascript:void(0);" title="Facebook">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </Link>
                <Link href="javascript:void(0);" title="Instagram">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </Link>
                <Link href="javascript:void(0);" title="Twitter">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </Link>
                <Link href="javascript:void(0);" title="Whatsapp">
                  <i class="fa fa-whatsapp" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Top End -->
      <!--Navbar Start  --> */}
      <div class="header-bottom">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-3">
              {/* <!-- Sit Logo Start --> */}
              <div class="site-branding">
                <Link href="/" title="Msdesignlabs">
                  <img src="/assets/images/logo.png" alt="Logo" />
                </Link>
              </div>
              {/* <!-- Sit Logo End --> */}
            </div>
            <div class="col-lg-9">
              <div class="header-menu">
                <nav class="main-navigation">
                  <button class="toggle-button">
                    <span></span>
                    <span class="toggle-width"></span>
                    <span></span>
                  </button>
                  <ul class="menu">
                    <li class="active">
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                    <li class="sub-items">
                      <Link href="javascript:void(0);" title="Services">
                        Services
                      </Link>
                      <ul class="sub-menu">
                        <li>
                          <Link href="/services" title="Services">
                            Services List
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/1" title="Services detail">
                            Services Detail
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li class="sub-items">
                      <Link href="javascript:void(0);" title="Blog">
                        Blog
                      </Link>
                      <ul class="sub-menu">
                        <li>
                          <Link href="/blog" title="Blog List">
                            Blog List
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog/1" title="Blog Detail">
                            Blog Detail
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </nav>
                <div class="black-shadow"></div>
                <div class="header-btn">
                  <Link href="/contact" class="sec-btn">
                    Try For Free
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--Navbar End  --> */}
    </header>
  );
};
export default Header;
