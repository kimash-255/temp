import Blogg from "@/components/blog/blogg";
import Cta from "@/components/cta";
import Layout from "@/components/layout";
import Image from "next/image";
import Link from "next/link";

const BlogPage = ({ posts }) => {
  return (
    <Layout>
      <Blogg />
      <Cta />
    </Layout>
  );
};
export default BlogPage;
