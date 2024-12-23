import { useRouter } from "next/router";
import Link from "next/link";
import services from "../../components/data/service.json";
import Layout from "@/components/layout";
import Cta from "@/components/cta";

const ServiceDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const service = id ? services.find((item) => item.id === id) : null;

  if (!service) {
    return <p>Loading...</p>;
  }

  return (
    <Layout>
      <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/font-awesome.min.css" />
      <link rel="stylesheet" href="/assets/css/slick.css" />
      <link rel="stylesheet" href="/assets/css/slick-theme.css" />
      <link rel="stylesheet" href="/assets/css/animate.min.css" />
      <link rel="stylesheet" href="/assets/css/magnific-popup.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />

      <section>
        <section className="main-banner-in">
          <span className="shape-1 animate-this">
            <img src="/assets/images/shape-1.png" alt="shape" />
          </span>
          <span className="shape-2 animate-this">
            <img src="/assets/images/shape-2.png" alt="shape" />
          </span>
          <span className="shape-3 animate-this">
            <img src="/assets/images/shape-3.png" alt="shape" />
          </span>
          <span className="shape-4 animate-this">
            <img src="/assets/images/shape-4.png" alt="shape" />
          </span>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="h1-title">{service.title}</h1>
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
                    <li>{service.title}</li>
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
                  <h2 className="h2-title">{service.title}</h2>
                  <div className="course-detail-img">
                    <img src={service.image} alt={service.title} />
                  </div>
                  <h3 className="h3-title">About this Service</h3>
                  <p>{service.description}</p>

                  <div className="course-detail-point">
                    <h3 className="h3-title">What will you learn?</h3>
                    <ul>
                      {service.features.map((feature, index) => (
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
                      <h3 className="h3-title">${service.price} USD</h3>
                      <p>{service.discount && `${service.discount}% OFF`}</p>
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
                        .filter((item) => item.id !== id)
                        .slice(0, 4)
                        .map((relatedService) => (
                          <li key={relatedService.id}>
                            <div className="recent-course-img">
                              <img
                                src={relatedService.image}
                                alt={relatedService.title}
                              />
                            </div>
                            <div className="recent-course-text">
                              <Link href={`/services/${relatedService.id}`}>
                                <p>{relatedService.title}</p>
                              </Link>
                              <span>${relatedService.price}</span>
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
        <Cta />
      </section>
    </Layout>
  );
};

export default ServiceDetail;
