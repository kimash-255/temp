import { useEffect, useState } from "react";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import SEO from "@/components/seo"; // Ensure this import exists

// Prevent FontAwesome from auto-adding its CSS globally
config.autoAddCss = false;
library.add(fas, far, fab);

export default function App({ Component, pageProps }) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <>
      {/* {pageProps.seoData && <SEO {...pageProps.seoData} />} */}
      {isHydrated ? (
        <>
          {/* Render SEO component using props if available */}

          <div id="example-id">Welcome to MsLabDesigns</div>
          <Component {...pageProps} />
        </>
      ) : (
        <div style={{ textAlign: "center", padding: "50px" }}></div>
      )}
    </>
  );
}
