import React, { useEffect } from "react";
import {
  HeroSectionContent,
  HeroContainer,
  Hello,
  Hero,
  HeroDomain,
  HeroDynamicDomain,
  Overview,
  ProfileDownload,
} from "./HeroElements";
import { init } from "ityped";

const HeroSection = () => {
  const domains = [
    "Computer  Engineer.",
    "Front-End Developer.",
    "SQL Developer.",
  ];

  useEffect(() => {
    const myElement = document.querySelector("#myElement");
    init(myElement, {
      showCursor: false,
      strings: domains,
      typeSpeed: 150,
      showCursor: true,
      cursorChar: "|",
    });
  });

  return (
    <HeroSectionContent>
      <HeroContainer className="container">
        <div className="row d-flex align-items-center h-100">
          <div className="col-sm-6">
            <div>
              <Hello>HEY! I AM</Hello>
              <Hero>Surendra Jangid</Hero>
              <HeroDomain>
                I'm a&nbsp;
                <HeroDynamicDomain id="myElement"></HeroDynamicDomain>
              </HeroDomain>
              <Overview>
                Dorem ipsum dolor sitamet, consectetur adipiscing elit, sed do
                eiusm tempor incididunt ulabore et dolore magna aliqua.
              </Overview>
              <ProfileDownload>Download</ProfileDownload>
            </div>
          </div>
          <div className="col-sm-6">
            <div></div>
          </div>
        </div>
      </HeroContainer>
    </HeroSectionContent>
  );
};

export default HeroSection;
