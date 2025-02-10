import { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { thumbnailPlugin } from "@react-pdf-viewer/thumbnail";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/thumbnail/lib/styles/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ShowcaseSlider = ({ showcaseImages }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const thumbnailPluginInstance = thumbnailPlugin();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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

  const isPDF = (file) => file.toLowerCase().endsWith(".pdf");

  const openModal = (fileSrc) => {
    setSelectedFile(fileSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFile(null);
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
            {showcaseImages?.map((file, index) => (
              <div
                key={index}
                className="showcase-box"
                style={{
                  flexShrink: 0,
                  width: "400px",
                  padding: "10px",
                  textAlign: "center",
                  cursor: "pointer",
                }}
                onClick={() => openModal(file)}
              >
                {isPDF(file) ? (
                  <div
                    style={{
                      padding: "10px",
                      backgroundColor: "#f5f5f5",
                      borderRadius: "8px",
                      overflow: "hidden",
                      position: "relative",
                      height: "300px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Worker
                      workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
                    >
                      <Viewer
                        fileUrl={file}
                        plugins={[thumbnailPluginInstance]}
                        defaultScale={0.5}
                        initialPage={0}
                        style={{
                          height: "100%",
                          width: "100%",
                          borderRadius: "8px",
                        }}
                      />
                    </Worker>
                  </div>
                ) : (
                  <Image
                    src={file}
                    alt={`showcase-${index + 1}`}
                    width={300}
                    height={300}
                  />
                )}
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Modal for Image or PDF */}
      {isModalOpen && (
        <div
          className="file-modal"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
          onClick={closeModal}
        >
          {isPDF(selectedFile) ? (
            <iframe
              src={selectedFile}
              style={{
                width: "80%",
                height: "90%",
                borderRadius: "8px",
                backgroundColor: "#fff",
              }}
              title="PDF Viewer"
            />
          ) : (
            <img
              src={selectedFile}
              alt="Full-screen"
              style={{
                maxWidth: "90%",
                maxHeight: "90%",
                borderRadius: "8px",
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ShowcaseSlider;
