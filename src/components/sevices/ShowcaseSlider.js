import { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ShowcaseSlider = ({ showcaseImages }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div
      className="main-showcase"
      style={{
        backgroundColor: "#fff",
        padding: "20px 0",
        position: "relative",
      }}
    >
      <div className="container">
        <div
          className="showcase-bg"
          style={{
            backgroundColor: "#fff",
            padding: "10px",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <Slider {...settings}>
            {showcaseImages?.map((src, index) => (
              <div
                key={index}
                className="showcase-box"
                style={{
                  flexShrink: 0,
                  width: "200px",
                  marginRight: "10px",
                }}
                onClick={() => openModal(src)}
              >
                <Image
                  src={src}
                  alt={`showcase-${index + 1}`}
                  width={200}
                  height={100}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="image-modal"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.8)", // Black background with opacity
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999, // Make sure the modal is on top
          }}
          onClick={closeModal} // Close the modal when clicked outside the image
        >
          <img
            src={selectedImage}
            alt="Full-screen"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "8px",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ShowcaseSlider;
