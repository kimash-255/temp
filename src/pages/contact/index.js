import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout";
import Contact from "@/components/contact";
import Cta from "@/components/cta";

const ContactPage = () => {
  return (
    <Layout>
      <Contact />
      <Cta />
    </Layout>
  );
};
export default ContactPage;
