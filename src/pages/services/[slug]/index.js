import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "@/components/layout";
import Cta from "@/components/cta";
import services from "@/data/services.json";
import ServiceDetailBox from "@/components/sevices/ServiceDetailBox";
import ServiceCategories from "@/components/sevices/ServiceCategories";
import RelatedServices from "@/components/sevices/RelatedServices";
import ShowcaseSlider from "@/components/sevices/ShowcaseSlider";

const ServiceDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  const service = slug ? services.find((item) => item.slug === slug) : null;
  const showcaseImages = service?.showcase?.map(
    (image) => `/assets/images/services/${image}`
  );

  return (
    <Layout>
      <section>
        <section className="main-banner-in">
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
                <ServiceDetailBox service={service} />
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="course-detail-sidebar">
                  <div className="get-the-course">
                    <div className="get-course-price">
                      <h3 className="h3-title">
                        Ready to Transform Your Vision? Discover How We Can Help
                        You
                      </h3>
                    </div>
                    <Link href="/contact" className="sec-btn">
                      Let's Get Started
                    </Link>
                  </div>

                  {service?.items && (
                    <ServiceCategories items={service?.items} />
                  )}
                  <RelatedServices services={services} slug={slug} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <ShowcaseSlider showcaseImages={showcaseImages} />
      </section>

      <Cta />
    </Layout>
  );
};

export default ServiceDetail;
