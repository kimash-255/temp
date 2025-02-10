import Blogg from "@/components/blog/blogg";
import Cta from "@/components/cta";
import Layout from "@/components/layout";

const BlogPage = ({ posts }) => {
  return (
    <Layout>
      <Blogg />
      <Cta />
    </Layout>
  );
};

// Pass SEO data as JSON-serializable props
export async function getStaticProps() {
  return {
    props: {
      seoData: {
        title: "Blog | MsLabDesigns - Latest Insights & Trends",
        description:
          "Explore the latest insights, trends, and tips on graphic design, digital marketing, and web development. Stay updated with MsLabDesigns' expert blogs.",
        keywords:
          "MsLabDesigns blog, graphic design trends, digital marketing tips, web development insights, creative strategies",
        url: "https://www.mslabdesigns.com/blog",
        image:
          "https://www.mslabdesigns.com/assets/images/blog/mslabdesigns-the-power-of-graphic-design.jpg", // Replace with actual blog-related image URL
        type: "website",
      },
    },
  };
}

export default BlogPage;
