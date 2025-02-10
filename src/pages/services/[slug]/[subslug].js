import { useRouter } from "next/router";
import Link from "next/link";
import services from "@/data/services.json";
import Layout from "@/components/layout";
import Cta from "@/components/cta";
import { useEffect, useState } from "react";

import ServiceDetailBox from "@/components/sevices/ServiceDetailBox";
import RelatedServices from "@/components/sevices/RelatedServices";
import ShowcaseSlider from "@/components/sevices/ShowcaseSlider";

const ServiceDetail = ({ seoData, servicemainData }) => {
  const router = useRouter();
  const { slug, subslug } = router.query;

  // State for the main service, individual service, and showcase images
  const [servicemain, setServicemain] = useState(servicemainData);
  const [service, setService] = useState(null);
  const [showcaseImages, setShowcaseImages] = useState([]);

  // Update the state when slug or subslug changes
  useEffect(() => {
    if (slug) {
      const foundService = services.find((item) => item.slug === slug);
      setServicemain(foundService);

      if (subslug && foundService) {
        const foundSubService = foundService.items.find(
          (item) => item.slug === subslug
        );
        setService(foundSubService);
        setShowcaseImages(
          foundSubService?.showcase?.map(
            (image) => `/assets/images/services/${image}`
          ) || []
        );
      } else {
        // If no subslug, use the main service
        setService(foundService);
        setShowcaseImages(
          foundService?.showcase?.map(
            (image) => `/assets/images/services/${image}`
          ) || []
        );
      }
    }
  }, [slug, subslug]);

  return (
    <>
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
                      {subslug && (
                        <>
                          <li>
                            <i
                              className="fa fa-angle-right"
                              aria-hidden="true"
                            ></i>
                          </li>
                          <li>{service?.title}</li>
                        </>
                      )}
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

                  <RelatedServices
                    services={servicemain?.items}
                    slug={subslug}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <ShowcaseSlider showcaseImages={showcaseImages} />

        <Cta />
      </Layout>
    </>
  );
};

export default ServiceDetail;

export async function getStaticPaths() {
  const paths = [];

  services.forEach((service) => {
    if (service.items && service.items.length > 0) {
      // If sub-services exist, add paths for them
      service.items.forEach((subservice) => {
        paths.push({
          params: { slug: service.slug, subslug: subservice.slug },
        });
      });
    } else {
      // If no sub-services, provide `subslug` as an empty string (required to match `[subslug]?`)
      paths.push({
        params: { slug: service.slug, subslug: "" },
      });
    }
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug, subslug = "" } = params; // Ensure `subslug` is always defined

  const servicemain = services.find((item) => item.slug === slug);
  if (!servicemain) {
    return { notFound: true };
  }

  let service = servicemain;
  if (subslug && servicemain.items) {
    service = servicemain.items.find((item) => item.slug === subslug) || null;
  }

  return {
    props: {
      seoData: {
        title: `${
          service?.title || servicemain.title
        } | MsLabDesigns - Professional Services`,
        description:
          service?.description ||
          servicemain.description ||
          "Explore our expert services tailored to your business needs.",
        keywords: `${service?.title || servicemain.title}, MsLabDesigns, ${
          service?.label || servicemain.label
        }, digital solutions, creative services`,
        url: `https://www.mslabdesigns.com/services/${slug}${
          subslug ? `/${subslug}` : ""
        }`,
        image:
          `https://www.mslabdesigns.com${
            service?.image || servicemain.image
          }` ||
          "https://www.mslabdesigns.com/assets/images/services/cover/mslabdesigns-social-media.jpeg",
        type: "article",
      },
      servicemainData: servicemain,
    },
  };
}
