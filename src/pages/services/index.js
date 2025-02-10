import React from "react";
import SEO from "@/components/seo";
import Layout from "@/components/layout";
import Services from "@/components/sevices";
import Cta from "@/components/cta";

const ServicePage = () => {
  return (
    <>
      <SEO
        title="Our Services | MsLabDesigns - Creative & Digital Solutions"
        description="Explore our expert services, including graphic design, digital marketing, web development, social media management, and virtual assistant solutions."
        keywords="MsLabDesigns services, graphic design, digital marketing, web development, social media management, branding, virtual assistant"
        url="https://www.mslabdesigns.com/services"
        image="https://www.mslabdesigns.com/assets/images/services/cover/mslabdesigns-social-media.jpeg"
        type="website"
      />
      <Layout>
        <Services />
        <Cta />
      </Layout>
    </>
  );
};

export default ServicePage;
