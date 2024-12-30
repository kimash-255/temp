import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Partner = () => {
  const partnerImages = [
    {
      src: "/assets/images/mslabdesigns-upendo-logo.jpg",
      name: "Upendo Logo",
    },
    {
      src: "/assets/images/mslabdesigns-sunpark-logo.png",
      name: "Sunpark Logo",
    },
    {
      src: "/assets/images/mslabdesigns-standardmedia-logo.png",
      name: "SMG Logo",
    },
    {
      src: "/assets/images/mslabdesigns-nairobian.png",
      name: "Nairobian Logo",
    },
    {
      src: "/assets/images/mslabdesigns-truth-wifi-logo.png",
      name: "Truth Wifi Logo",
    },
    { src: "/assets/images/mslabdesigns-apex-logo.png", name: "Apex Logo" },
    {
      src: "/assets/images/mslabdesigns-myspace-logo.png",
      name: "MySpace Logo",
    },
    {
      src: "/assets/images/mslabdesigns-paragon-logo.png",
      name: "Paragon Logo",
    },
    {
      src: "/assets/images/mslabdesigns-proalliance-logo.png",
      name: "Proalliance Logo",
    },
    {
      src: "/assets/images/mslabdesigns-mytown-logo.png",
      name: "Mytown Logo",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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

  return (
    <div className="main-partner-logo">
      <div className="container">
        <div className="row partner-bg partner-slider slick-initialized slick-slider">
          <Slider {...settings}>
            {partnerImages.map((partner, index) => (
              <div key={index}>
                {" "}
                <div
                  key={index}
                  style={{
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={150}
                    height={50}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Partner;
