import About from "@/components/about";
import Cta from "@/components/cta";
import Layout from "@/components/layout";
import Partner from "@/components/patner";
import Solutions from "@/components/solutions";
import Testimonial from "@/components/testimonial";

const AboutPage = () => {
  return (
    <Layout>
      <About />
      <Partner />
      <Solutions />
      {/* <Testimonial /> */}
      <Cta />
    </Layout>
  );
};
export default AboutPage;
