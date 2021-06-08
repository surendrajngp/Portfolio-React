import React from "react";
import {
  HeroSectionContent,
  HeroContainer,
  Hello,
  Hero,
  HeroDomain,
  HeroDynamicDomain,
  Overview,
  ProfileDownload,
  HeroImg,
} from "./HeroElements";
import HeroTop from "../../images/HeroTop.svg";
// import { init } from "ityped";
const ReactRotatingText = require("react-rotating-text");

const HeroSection = () => {
  const domains = [
    "Computer  Engineer.",
    "Front-End Developer.",
    "SQL Developer.",
  ];

  // useEffect(() => {
  //   const myElement = document.querySelector("#myElement");
  //   init(myElement, {
  //     showCursor: false,
  //     strings: domains,
  //     typeSpeed: 150,
  //     showCursor: true,
  //     cursorChar: "|",
  //   });
  // });

  return (
    <HeroSectionContent id="home">
      <HeroContainer className="container">
        <div className="row d-flex align-items-center h-100">
          <div className="col-sm-6">
            <div>
              <Hello>HEY! I AM</Hello>
              <Hero>Surendra Jangid</Hero>
              <HeroDomain>
                I'm a&nbsp;
                <HeroDynamicDomain id="myElement">
                  <ReactRotatingText
                    items={domains}
                    pause={500}
                    typingInterval={100}
                  />
                </HeroDynamicDomain>
              </HeroDomain>
              <Overview>
                Dorem ipsum dolor sitamet, consectetur adipiscing elit, sed do
                eiusm tempor incididunt ulabore et dolore magna aliqua.
              </Overview>
              <ProfileDownload>Download</ProfileDownload>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="d-flex justify-content-center">
              <HeroImg src={HeroTop} />
            </div>
          </div>
        </div>
      </HeroContainer>
    </HeroSectionContent>
  );
};

export default HeroSection;
