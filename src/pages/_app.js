import { useEffect, useState } from "react";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import FontAwesome styles
import Head from "next/head";

// Prevent FontAwesome from auto-adding its CSS globally
config.autoAddCss = false;

// Add icons to the FontAwesome library
library.add(fas, far, fab);

export default function App({ Component, pageProps }) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Set hydration to true after mounting
    setIsHydrated(true);
  }, []);

  return (
    <>
      <Head>
        <title>MsLabDesigns</title>
        <meta name="keywords" content="MsLabDesigns" />
        <meta name="description" content="MsLabDesigns - Creative Solutions" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      {/* Render the component only after hydration to avoid mismatches */}
      {isHydrated ? (
        <>
          {/* Add an element to demonstrate safe style manipulation */}
          <div id="example-id">Welcome to MsLabDesigns</div>
          <Component {...pageProps} />
        </>
      ) : (
        <div style={{ textAlign: "center", padding: "50px" }}></div>
      )}
    </>
  );
}
