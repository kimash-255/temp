import React from "react";
import Layout from "@/components/layout";
import Services from "@/components/sevices";
import Cta from "@/components/cta";

const ServicePage = ({ seoData }) => {
  return (
    <>
      <Layout>
        <Services />
        <Cta />
      </Layout>
    </>
  );
};

// Pass SEO data as JSON-serializable props
export async function getStaticProps() {
  return {
    props: {
      seoData: {
        title: "Our Services | MsLabDesigns - Creative & Digital Solutions",
        description:
          "Explore our expert services, including graphic design, digital marketing, web development, social media management, and virtual assistant solutions.",
        keywords:
          "MsLabDesigns services, graphic design, digital marketing, web development, social media management, branding, virtual assistant",
        url: "https://www.mslabdesigns.com/services",
        image:
          "https://www.mslabdesigns.com/assets/images/services/cover/mslabdesigns-social-media.jpeg",
        type: "website",
      },
    },
  };
}

export default ServicePage;
