import React from "react";
import About from "@/components/about";
import Cta from "@/components/cta";
import Layout from "@/components/layout";
import Partner from "@/components/patner";
import Solutions from "./Solutions";
import Testimonial from "@/components/testimonial";

const AboutPage = ({ seoData }) => {
  return (
    <>
      <Layout>
        <About />
        <Solutions />
        <div class="about-us-content-below container">
          <div class="row">
            <h6 class="center">
              At MsLabDesigns, we are passionate about creating design solutions
              that are not just aesthetically pleasing but also strategically
              effective. Our team of talented creatives works closely with you
              to bring your vision to life, ensuring every design element aligns
              with your brand&apos;s goals and speaks directly to your target
              audience.
            </h6>
            <h6 class="center">
              Founded on creativity, innovation, and a deep understanding of
              consumer behavior, we are here to help your business thrive. Let
              us turn your ideas into designs that leave a lasting impression.
            </h6>
          </div>
        </div>
        <Partner />
        <Testimonial />
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
        title: "About Us | MsLabDesigns - Creative & Digital Solutions",
        description:
          "Discover more about MsLabDesigns, our expertise in graphic design, digital marketing, web development, and virtual assistant services.",
        keywords:
          "about MsLabDesigns, graphic design, digital marketing, web development, virtual assistant, branding",
        url: "https://www.mslabdesigns.com/about",
        image: "https://www.mslabdesigns.com/mslabdesigns.jpg", // Replace with an actual image URL
        type: "website",
      },
    },
  };
}

export default AboutPage;
