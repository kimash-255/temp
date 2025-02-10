import Head from "next/head";

const SEO = ({ title, description, keywords, url, image, type }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};

// Set Home Page Details as Default
SEO.defaultProps = {
  title: "MsLabDesigns | Creative & Digital Solutions for Your Brand",
  description:
    "Thank you for choosing MsLabDesigns! We specialize in graphic design, digital marketing, web development, and virtual assistant services to elevate your brand.",
  keywords:
    "graphic design, digital marketing, virtual assistant, web development, branding, social media management, SEO",
  url: "https://www.mslabdesigns.com",
  image: "https://www.mslabdesigns.com/banner.jpg", // Replace with actual branded image
  type: "website",
};

export default SEO;
