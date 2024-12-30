import { useRouter } from "next/router";
import Link from "next/link";
import services from "@/data/services.json";
import Layout from "@/components/layout";
import Cta from "@/components/cta";
import { useEffect, useState } from "react";

import ServiceDetailBox from "@/components/sevices/ServiceDetailBox";
import RelatedServices from "@/components/sevices/RelatedServices";
import ShowcaseSlider from "@/components/sevices/ShowcaseSlider";

const ServiceDetail = () => {
  const router = useRouter();
  const { slug, subslug } = router.query;

  // State for the main service, individual service, and showcase images
  const [servicemain, setServicemain] = useState(null);
  const [service, setService] = useState(null);
  const [showcaseImages, setShowcaseImages] = useState([]);

  // Update the state when slug or subslug changes
  useEffect(() => {
    if (slug) {
      // Find the main service based on the slug
      const foundService = services.find((item) => item.slug === slug);
      setServicemain(foundService);

      if (subslug && foundService) {
        // Find the specific service if subslug is present
        const foundSubService = foundService.items.find(
          (item) => item.slug === subslug
        );
        setService(foundSubService);

        // Update the showcase images if available
        if (foundSubService?.showcase) {
          const images = foundSubService.showcase.map(
            (image) => `/assets/images/services/${image}`
          );
          setShowcaseImages(images);
        }
      }
    }
  }, [slug, subslug]);

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
                    <li>
                      <Link href={servicemain?.href || ""}>
                        {servicemain?.title}
                      </Link>
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
      </section>

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

                <RelatedServices services={servicemain?.items} slug={subslug} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ShowcaseSlider showcaseImages={showcaseImages} />

      <Cta />
    </Layout>
  );
};

export default ServiceDetail;
