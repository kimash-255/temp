import Image from "next/image";
import { motion } from "framer-motion";

const Partner = () => {
  const partnerImages = Array.from(
    { length: 6 },
    (_, i) => `/assets/images/patner-${i + 1}.png`
  );

  return (
    <div
      className="main-partner-logo"
      style={{
        backgroundColor: "#fff",
        padding: "20px 0",
        marginBottom: "-100px", // Negative margin to overlap the next section
        zIndex: 2, // Ensure it appears above the next section
        position: "relative", // Necessary for stacking contexts
      }}
    >
      <div className="container">
        <div
          className="partner-bg"
          style={{
            backgroundColor: "#fff",
            padding: "10px",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <motion.div
            className="partner-slider"
            style={{
              display: "flex",
              whiteSpace: "nowrap",
            }}
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "linear",
            }}
          >
            {partnerImages.concat(partnerImages).map((src, index) => (
              <div
                key={index}
                className="partners-box"
                style={{
                  flexShrink: 0,
                  width: "200px",
                  marginRight: "10px",
                }}
              >
                <Image
                  src={src}
                  alt={`patner-${(index % 6) + 1}`}
                  width={200}
                  height={100}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
