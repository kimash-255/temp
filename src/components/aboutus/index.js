import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  const alimentData = [
    {
      id: 1,
      iconSrc: "/assets/images/banner-aliment-icon-1.png",
      title: "Congratulations",
      description: "Your Design Journey Begins",
      iconClass: "aliment-icon-red",
    },
    {
      id: 3,
      iconSrc: "/assets/images/banner-aliment-icon-3.png",
      title: "10k+",
      description: "Clients Empowered, Success Achieved!",
      iconClass: "aliment-icon-green",
    },
  ];

  const aboutList = [
    "Expertise in modern graphic design solutions.",
    "Innovative digital marketing strategies tailored to you.",
    "Comprehensive web development services.",
  ];

  return (
    <section className="main-about-us">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-lg-6">
            <div
              className="about-img-box wow fadeInLeft animated"
              data-wow-delay=".4s"
            >
              {alimentData.map((aliment) => (
                <div className={`aliment-${aliment.id}`} key={aliment.id}>
                  <div className={aliment.iconClass}>
                    <img src={aliment.iconSrc} alt="icon" />
                  </div>
                  <div className="aliment-content">
                    <h3 className="h3-title">{aliment.title}</h3>
                    <p>{aliment.description}</p>
                  </div>
                </div>
              ))}
              <div className="about-img">
                <img src="/assets/images/about-img.png" alt="about us" />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-lg-6">
            <div className="about-us-content">
              <div className="about-us-title">
                <h2 className="h2-subtitle">About Us</h2>
                <h2 className="h2-title">
                  Empowering Creativity and Innovation
                </h2>
              </div>
              <p>
                MsDesignLab is a creative powerhouse that thrives on delivering
                cutting-edge solutions in graphic design, digital marketing, and
                web development. With a passion for creativity and technology,
                we help businesses establish a strong brand presence.
              </p>
              <ul>
                {aboutList.map((item, index) => (
                  <li key={index}>
                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
              <Link href="/about">
                <div className="sec-btn">Explore More</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
