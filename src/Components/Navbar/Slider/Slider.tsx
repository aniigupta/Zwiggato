import React from "react";
import Slider from "react-slick";

// Import images statically
import image1 from "./assets/Images/1.jpg";
import image2 from "./assets/Images/2.jpg";
import image3 from "./assets/Images/3.jpg";
import image4 from "./assets/Images/4.jpg";
import image5 from "./assets/Images/5.jpg";
import image6 from "./assets/Images/6.jpg";

const ImageSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images: string[] = [image1, image2, image3, image4, image5, image6];
  return (
    <div style={{ width: "80%", margin: "0 auto", borderRadius: "10px", overflow: "hidden" }}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;