import { useEffect, useState } from "react";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
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
