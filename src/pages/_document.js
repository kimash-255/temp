import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>
          MsLabDesigns | Creative & Digital Solutions for Your Brand
        </title>
        <meta
          name="description"
          content="Thank you for choosing MsLabDesigns! We specialize in graphic design, digital marketing, web development, and virtual assistant services to elevate your brand."
        />
        <meta
          name="keywords"
          content="graphic design, digital marketing, virtual assistant, web development, branding, social media management, SEO"
        />
        <meta property="og:url" content="https://www.mslabdesigns.com" />
        <meta
          property="og:image"
          content="https://www.mslabdesigns.com/assets/images/mslabdesigns.png"
        />
        <meta property="og:type" content="website" />

        <link
          rel="icon"
          href="/assets/images/favicon.png"
          type="image/gif"
          sizes="16x16"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/bootstrap.min.css"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/font-awesome.min.css"
        />

        <link rel="stylesheet" type="text/css" href="/assets/css/slick.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/slick-theme.css"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/animate.min.css"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/magnific-popup.min.css"
        />

        <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

        {/* Add Tailwind CSS */}
        {/* <link
          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css"
          rel="stylesheet"
        /> */}
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />

        <script src="/assets/js/bootstrap.min.js" async></script>
        <script src="/assets/js/popper.min.js" async></script>
        <script src="/assets/js/custom.js" async></script>
        <script src="/assets/js/slick.min.js" async></script>
        <script src="/assets/js/wow.min.js" async></script>
        <script src="/assets/js/bg-moving.js" async></script>
        <script src="/assets/js/magnific-popup.js" async></script>
        <script src="/assets/js/custom-magnific-popup.js" async></script>
        {/* <script src="/assets/js/smooth-scroll.js" async></script> */}
        <script src="/assets/js/jquery.min.js" async></script>
      </body>
    </Html>
  );
}
