import Image from "next/image";
import Link from "next/link";

const HighlightServices = () => {
  const services = [
    {
      icon: "/assets/images/mslabdesigns-feature-icon-1.png",
      title: "Our Mission",
      description:
        "To empower businesses with impactful designs and digital strategies that resonate with their audience.",
      className: "feature-red",
    },
    {
      icon: "/assets/images/mslabdesigns-feature-icon-2.png",
      title: "Our Vision",
      description:
        "Crafting your brand's visual identity with precision, creativity, and innovation. We aspire to empower businesses with designs and digital solutions that resonate, inspire, and leave a lasting impact.",
      className: "feature-red",
    },
    // {
    //   icon: "/assets/images/mslabdesigns-feature-icon-3.png",
    //   title: "Integrity",
    //   description: "Building trust through transparent processes.",
    // },
  ];

  return (
    <section className="main-core-features">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="core-features-content">
              <div className="core-features-title">
                <h2 className="h2-subtitle">Core Values</h2>
                <h2 className="h2-title">
                  {/* See Our <br />
                  Mission & Vision{" "} */}
                </h2>
              </div>
              <div className="core-features-boxes">
                {services?.map((service, index) => (
                  <div
                    key={index}
                    className={`core-features-box ${
                      index === services.length - 1 ? "mb-0" : ""
                    }`}
                  >
                    <div className={`core-feature-icon ${service.className}`}>
                      <img src={service.icon} alt="icon" />
                    </div>
                    <div className="core-feature-text">
                      <h3 className="h3-title">{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="core-features-img"
        style={{
          backgroundImage: "url('/assets/images/mslabdesigns-mission.jpg')",
        }}
      ></div>
    </section>
  );
};

export default HighlightServices;
