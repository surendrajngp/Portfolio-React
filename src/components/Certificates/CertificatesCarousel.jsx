import React, { useState, useEffect } from "react";
import {
  ImageCarouselContainer,
  LeftArrow,
  RightArrow,
  Slide,
  Img,
} from "./CertificatesCarouselElements";
import { certificates } from "../../Data/data";

const CertificatesCarousel = () => {
  const [active, setActive] = useState(0); // active slide
  const length = certificates.length; // lenght of certificates

  // if (!Array.isArray(certificates) || certificates.length <= 0) {
  //   return null;
  // }

  // Next Slide
  const nextSlide = () => {
    setActive(active === length - 1 ? 0 : active + 1);
  };

  // previous Slide
  const previousSlide = () => {
    setActive(active === 0 ? length - 1 : active - 1);
  };

  // Auto Play
  useEffect(() => {
    const id = setTimeout(() => setActive(nextSlide), 5000);
    return () => clearTimeout(id);
  }, [active]);

  return (
    <ImageCarouselContainer className="row">
      <h3>Certifications</h3>
      <div className="col-sm-9 col-12 position-relative">
        <LeftArrow size={40} onClick={previousSlide} />
        <RightArrow size={40} onClick={nextSlide} />

        {certificates.map((certificate, index) => {
          return (
            <Slide
              className={index === active ? "activeSlide text-center" : ""}
              key={index}
            >
              {index === active && (
                <Img
                  src={certificate.src}
                  alt={certificate.alt}
                  className="img-fluid shadow"
                  loading="lazy"
                />
              )}
            </Slide>
          );
        })}
      </div>
    </ImageCarouselContainer>
  );
};

export default CertificatesCarousel;
