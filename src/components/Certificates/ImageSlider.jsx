import React, { useState } from "react";
import {
  ImageSliderSetion,
  LeftArrow,
  RightArrow,
  Slide,
  Img,
} from "./ImageSliderElements";
import { certificates } from "../../Data/data";

const ImageSlider = () => {
  const [active, setActive] = useState(0); // active slide
  const length = certificates.length; // lenght of certificates
  const activeSlide = "activeSlide text-center";

  if (!Array.isArray(certificates) || certificates.length <= 0) {
    return null;
  }
  
  setTimeout(() => {
    setActive(active === length - 1 ? 0 : active + 1);
  }, 5000);

  const nextSlide = () => {
    setActive(active === length - 1 ? 0 : active + 1);
  };

  const previousSlide = () => {
    setActive(active === 0 ? length - 1 : active - 1);
  };
  
  return (
    <ImageSliderSetion id="certificate">
      <div className="container position-relative">
        <LeftArrow onClick={previousSlide} />
        <RightArrow onClick={nextSlide} />

        {certificates.map((certificate, index) => {
          return (
            <Slide className={index === active ? activeSlide : ""} key={index}>
              {index === active && (
                <Img
                  src={certificate.src}
                  alt={certificate.alt}
                  className="img-fluid shadow"
                />
              )}
            </Slide>
          );
        })}
      </div>
    </ImageSliderSetion>
  );
};

export default ImageSlider;
