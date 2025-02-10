import React from "react";
import SEO from "@/components/seo";
import About from "@/components/about";
import Cta from "@/components/cta";
import Layout from "@/components/layout";
import Partner from "@/components/patner";
import Solutions from "@/components/solutions";
import Testimonial from "@/components/testimonial";

const AboutPage = () => {
  return (
    <>
      <SEO
        title="About Us | MsLabDesigns - Creative & Digital Solutions"
        description="Discover more about MsLabDesigns, our expertise in graphic design, digital marketing, web development, and virtual assistant services."
        keywords="about MsLabDesigns, graphic design, digital marketing, web development, virtual assistant, branding"
        url="https://www.mslabdesigns.com/about"
        image="https://www.mslabdesigns.com/assets/images/mslabdesigns-mission.jpg" // Replace with an actual image URL
        type="website"
      />
      <Layout>
        <About />
        <Solutions />
        <Partner />
        <Testimonial />
        <Cta />
      </Layout>
    </>
  );
};

export default AboutPage;
