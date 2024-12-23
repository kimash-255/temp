import Cta from "@/components/cta";
import Layout from "@/components/layout";
import Services from "@/components/sevices";
import Image from "next/image";
import Link from "next/link";

const ServicePage = () => {
  return (
    <Layout>
      <Services />
      <Cta />
    </Layout>
  );
};
export default ServicePage;
