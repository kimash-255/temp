import Image from "next/image";
import Link from "next/link";

const HighlightServices = () => {
  const services = [
    {
      icon: "/assets/images/feature-icon-1.png",
      title: "Graphic Design",
      description: "Unique visuals tailored to your brand.",
      className: "feature-blue",
    },
    {
      icon: "/assets/images/feature-icon-2.png",
      title: "Digital Marketing",
      description: "Data-driven strategies for measurable success.",
      className: "feature-pink",
    },
    {
      icon: "/assets/images/feature-icon-3.png",
      title: "24x7 Support",
      description:
        "Our team is always here to help you with any questions or concerns.",
    },
  ];

  return (
    <section className="main-core-features">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="core-features-content">
              <div className="core-features-title">
                <h2 className="h2-subtitle">Highlight Services</h2>
                <h2 className="h2-title">See What Our Mission Are</h2>
              </div>
              <div className="core-features-boxes">
                {services.map((service, index) => (
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
          backgroundImage: "url('/assets/images/coure-features-img.jpg')",
        }}
      ></div>
    </section>
  );
};

export default HighlightServices;
