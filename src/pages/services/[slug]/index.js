import { useRouter } from "next/router";
import Link from "next/link";
import services from "@/data/services.json";
import Layout from "@/components/layout";
import Cta from "@/components/cta";
import Image from "next/image";
import { motion } from "framer-motion";

const ServiceDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  const service = slug ? services.find((item) => item.slug === slug) : null;

  // Dynamically fetch the showcase images from the 'showcase' property in JSON
  const showcaseImages = service?.showcase?.map(
    (image) => `/assets/images/services/${image}`
  );

  return (
    <Layout>
      <section>
        <section className="main-banner-in">
          <span className="shape-1 animate-this">
            <img src="/assets/images/mslabdesigns-shape-1.png" alt="shape" />
          </span>
          <span className="shape-2 animate-this">
            <img src="/assets/images/mslabdesigns-shape-2.png" alt="shape" />
          </span>
          <span className="shape-3 animate-this">
            <img src="/assets/images/mslabdesigns-shape-3.png" alt="shape" />
          </span>
          <span className="shape-4 animate-this">
            <img src="/assets/images/mslabdesigns-shape-4.png" alt="shape" />
          </span>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="h1-title">{service?.title}</h1>
              </div>
            </div>
          </div>
        </section>

        <div className="main-banner-breadcrum">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="banner-breadcrum">
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </li>
                    <li>
                      <Link href="/services">Services</Link>
                    </li>
                    <li>
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </li>
                    <li>{service?.title}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="main-course-detail-in">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-7">
                <div className="course-detail-box">
                  <h2 className="h2-title">{service?.title}</h2>
                  <h6 className="">{service?.description}</h6>
                  <div className="course-detail-img">
                    <img src={service?.image} alt={service?.title} />
                  </div>
                  <h3 className="h3-title">About this Service</h3>
                  <p>{service?.content}</p>

                  <div className="course-detail-point">
                    <h3 className="h3-title">What we offer?</h3>
                    <ul>
                      {service?.features.map((feature, index) => (
                        <li key={index}>
                          <i
                            className="fa fa-check-circle"
                            aria-hidden="true"
                          ></i>
                          <p>{feature}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="course-detail-sidebar">
                  <div className="get-the-course">
                    <div className="get-course-price">
                      <h3 className="h3-title">${service?.price} USD</h3>
                      <p>{service?.discount && `${service?.discount}% OFF`}</p>
                    </div>
                    <Link href="/contact" className="sec-btn">
                      Order Now
                    </Link>
                  </div>
                  <div className="recent-course-box">
                    <div className="courses-sidebar-title">
                      <h3 className="h3-title">Related Services</h3>
                    </div>
                    <ul>
                      {services
                        .filter((item) => item.slug !== slug)
                        .slice(0, 4)
                        .map((relatedService) => (
                          <li key={relatedService?.slug}>
                            <div className="recent-course-img">
                              <img
                                src={relatedService?.image}
                                alt={relatedService?.title}
                              />
                            </div>
                            <div className="recent-course-text">
                              <Link href={`/services/${relatedService?.slug}`}>
                                <p>{relatedService?.title}</p>
                              </Link>
                              <span>${relatedService?.price}</span>
                            </div>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Showcase Section */}
        <div
          className="main-showcase"
          style={{
            backgroundColor: "#fff",
            padding: "20px 0",
            zIndex: 2,
            position: "relative",
          }}
        >
          <div className="container">
            <div
              className="showcase-bg"
              style={{
                backgroundColor: "#fff",
                padding: "10px",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <motion.div
                className="showcase-slider"
                style={{
                  display: "flex",
                  whiteSpace: "nowrap",
                }}
                animate={{ x: ["0%", "-100%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 15,
                  ease: "linear",
                }}
              >
                {showcaseImages?.map((src, index) => (
                  <div
                    key={index}
                    className="showcase-box"
                    style={{
                      flexShrink: 0,
                      width: "200px",
                      marginRight: "10px",
                    }}
                  >
                    <Image
                      src={src}
                      alt={`showcase-${index + 1}`}
                      width={200}
                      height={100}
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </Layout>
  );
};

export default ServiceDetail;
