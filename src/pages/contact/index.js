import React from "react";
import Layout from "@/components/layout";
import Contact from "@/components/contact";
import Cta from "@/components/cta";

const ContactPage = ({ seoData }) => {
  return (
    <>
      <Layout>
        <Contact />
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
        title: "Contact Us | MsLabDesigns - Get in Touch",
        description:
          "Have questions or need assistance? Contact MsLabDesigns today for expert graphic design, digital marketing, and web development solutions.",
        keywords:
          "contact MsLabDesigns, get in touch, customer support, graphic design, digital marketing, web development",
        url: "https://www.mslabdesigns.com/contact",
        image:
          "https://www.mslabdesigns.com/assets/images/mslabdesigns-contact.png", // Replace with actual image URL
        type: "website",
      },
    },
  };
}

export default ContactPage;
