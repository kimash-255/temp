import React from "react";
import AboutUs from "@/components/aboutus";
import Cta from "@/components/cta";
import Hero from "@/components/hero";
import HighlightServices from "@/components/highlightservices";
import Layout from "@/components/layout";
import Patner from "@/components/patner";
import Solutions from "@/components/solutions";
import Testimonial from "@/components/testimonial";

const Home = ({ seoData }) => {
  return (
    <>
      <Layout>
        <Hero />
        <Solutions />
        <AboutUs />
        <HighlightServices />
        <Patner />
        <Testimonial />
        {/* <Blog /> */}
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
        title: "MsLabDesigns | Creative & Digital Solutions for Your Brand",
        description:
          "Thank you for choosing MsLabDesigns! We specialize in graphic design, digital marketing, web development, and virtual assistant services to elevate your brand.",
        keywords:
          "graphic design, digital marketing, virtual assistant, web development, branding, social media management, SEO",
        url: "https://www.mslabdesigns.com",
        image: "https://www.mslabdesigns.com/assets/images/mslabdesigns.png",
        type: "website",
      },
    },
  };
}

export default Home;
