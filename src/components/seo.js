import Head from "next/head";

const SEO = ({
  title,
  description,
  keywords,
  url,
  image = "https://www.mslabdesigns.com/mslabdesigns.jpg",
  type,
}) => {
  const linkedinLink = "https://www.linkedin.com/company/mslabdesigns";
  const twitterLink = "https://twitter.com/mslabdesigns";
  const instagramLink = "https://www.instagram.com/mslabdesigns/";
  const facebookLink = "https://www.facebook.com/mslabdesigns/";
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Softleek" />
      <meta name="robots" content="index, follow" />
      <meta name="robots" content="max-image-preview:large" />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="800" />
      <meta property="og:site_name" content={title} />
      <meta property="og:type" content="website" />
      <meta property="twitter:creator" content={twitterLink} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mslabdesigns" />
      <meta name="twitter:creator" content="@mslabdesigns" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta property="linkedin:profile" content={linkedinLink} />
      <meta property="linkedin:title" content={title} />
      <meta property="linkedin:description" content={description} />
      <meta property="linkedin:image" content={image} />
      <meta property="instagram:account" content={instagramLink} />
      <meta property="facebook:page" content={facebookLink} />
      <meta property="facebook:title" content={title} />
      <meta property="facebook:description" content={description} />
      <meta property="facebook:image" content={image} />
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
  image: "https://www.mslabdesigns.com/assets/images/mslabdesigns.png", // Replace with actual branded image
  type: "website",
};

export default SEO;
