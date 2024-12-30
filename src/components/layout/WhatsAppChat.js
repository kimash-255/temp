import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const WhatsAppChat = () => {
  const [flipped, setFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const whatsappMessage =
    "Hello, I’d like to start a project with you. Could you share more details about how we can proceed?";
  const phoneNumber = "+254748066918";

  // URL for WhatsApp API
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  // Glowing and pulsing effect for the button
  const glowingStyle = {
    animation: !isHovered ? "pulseGlow 1.5s ease-in-out infinite" : "none",
  };

  // Flip image effect
  const flipImageStyle = {
    transform: flipped ? "scaleX(-1)" : "none",
    transition: "transform 0.3s ease",
  };

  // Hover and mouse leave functions to manage flip and hover states
  const handleHover = () => {
    setIsHovered(true);
    setFlipped(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
    setFlipped(false);
  };

  const handleClick = () => {
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.div
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        zIndex: 9999,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        boxShadow: "0 0 10px rgba(0, 255, 0, 0.5)", // Green glow when not hovered
        ...glowingStyle,
        transition: "transform 0.3s ease",
      }}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseOut}
      onClick={handleClick}
      initial={{ scale: 1 }}
      animate={{
        scale: isHovered ? 1.05 : 1, // Slight scale increase on hover
        transition: { type: "spring", stiffness: 300, damping: 15 },
      }}
    >
      {/* CTA Text Box always visible */}
      <motion.div
        style={{
          backgroundColor: "#1c6b32", // Darker green for better contrast
          color: "#fff",
          padding: "5px 10px",
          borderRadius: "5px",
          marginRight: "10px",
          fontSize: "14px",
          opacity: isHovered ? 1 : 0.8, // Slight opacity change on hover
          transition: "opacity 0.3s ease-in-out",
        }}
        initial={{ opacity: 0.8 }}
        animate={{
          opacity: isHovered ? 1 : 0.8,
          transition: { type: "spring", stiffness: 300, damping: 15 },
        }}
      >
        Need Help? Chat with us!
      </motion.div>

      {/* WhatsApp Image with flip and glowing effect */}
      <motion.div
        style={{
          position: "relative",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "#1c6b32", // Darker green background
          boxShadow: isHovered
            ? "0 0 10px rgba(0, 255, 0, 0.3)" // Subtle glow on hover
            : "0 0 15px rgba(0, 255, 0, 0.7)", // Stronger glow when not hovered
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          ...glowingStyle,
        }}
        initial={{ scale: 1 }}
        animate={{
          scale: isHovered ? 1.05 : 1,
          boxShadow: isHovered
            ? "0 0 10px rgba(0, 255, 0, 0.3)"
            : "0 0 15px rgba(0, 255, 0, 0.7)", // Green glow when not hovered
          transition: { type: "spring", stiffness: 300, damping: 15 },
        }}
      >
        <Image
          src="/assets/images/mslabdesigns-whatsapp.png"
          alt="WhatsApp"
          width={40}
          height={40}
          style={flipImageStyle}
        />
      </motion.div>

      {/* Wave-Like Background Animation */}
      <motion.div
        style={{
          position: "absolute",
          top: "-20px",
          left: "-20px",
          right: "-20px",
          bottom: "-20px",
          borderRadius: "50%",
          background: "rgba(0, 0, 0, 0.1)", // Black with transparency for wave effect
          zIndex: -1, // Send the wave effect to the background
        }}
        initial={{
          scale: 1, // Start at normal size
          opacity: 0.2, // Start slightly visible
        }}
        animate={{
          scale: isHovered ? 1.1 : 1, // Slight scale increase on hover
          opacity: isHovered ? 0.4 : 0.2,
          transition: { type: "spring", stiffness: 300, damping: 20 },
        }}
      />
    </motion.div>
  );
};

export default WhatsAppChat;
