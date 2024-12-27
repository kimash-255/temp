import AboutUs from "@/components/aboutus";
import Blog from "@/components/blog";
import Cta from "@/components/cta";
import Hero from "@/components/hero";
import HighlightServices from "@/components/highlightservices";
import Layout from "@/components/layout";
import Patner from "@/components/patner";
import Solutions from "@/components/solutions";
import Testimonial from "@/components/testimonial";
import React from "react";

const Home = () => {
  return (
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
  );
};
export default Home;
