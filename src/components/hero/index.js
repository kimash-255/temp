import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section class="main-banner">
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
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="banner-content">
              <h2
                class="h2-subtitle wow fadeInUp animated"
                data-wow-delay=".4s"
              >
                Welcome to MsDesignLab
              </h2>
              <h1 class="h1-title wow fadeInUp animated" data-wow-delay=".5s">
                "Your vision, our creative solutions."
                <span>
                  <img src="assets/images/banner-line.png" alt="line" />
                </span>
              </h1>
              <p class="wow fadeInUp animated" data-wow-delay=".6s">
                Your one-stop destination for creative graphic design, strategic
                digital marketing, SEO solutions, and custom website
                development. We help businesses like yours stand out in a
                competitive digital landscape.
              </p>
              <div
                class="banner-btn wow fadeInUp animated"
                data-wow-delay=".7s"
              >
                <Link href="/services" class="sec-btn">
                  Explore Our Services
                </Link>
                <Link href="/contact" class="sec-btn btn-2">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div
              class="banner-img-box wow fadeInRight animated"
              data-wow-delay=".4s"
            >
              <div class="aliment-1">
                <div class="aliment-icon-red">
                  <img
                    src="assets/images/banner-aliment-icon-1.png"
                    alt="icon"
                  />
                </div>
                <div class="aliment-content">
                  <h3 class="h3-title">Welcome Aboard</h3>
                  <p>Your Creative Journey Begins!</p>
                </div>
              </div>
              <div class="aliment-2">
                <div class="aliment-icon-purple">
                  <img
                    src="assets/images/banner-aliment-icon-2.png"
                    alt="icon"
                  />
                </div>
                <div class="aliment-content">
                  <h3 class="h3-title">Crafting Exceptional Experiences</h3>
                  <p>Designing Impactful Solutions for Your Brand</p>
                </div>
              </div>
              <div class="aliment-3">
                <div class="aliment-icon-green">
                  <img
                    src="assets/images/banner-aliment-icon-3.png"
                    alt="icon"
                  />
                </div>
                <div class="aliment-content">
                  <h3 class="h3-title">Proven Success</h3>
                  <p>Helping Over Clients Achieve Their Goals</p>
                </div>
              </div>
              <div class="aliment-4">
                <img src="assets/images/banner-aliment-icon-4.png" alt="icon" />
              </div>
              <div class="banner-img">
                <img src="assets/images/banner-img.png" alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
