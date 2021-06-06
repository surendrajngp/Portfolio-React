import React, { useEffect } from "react";
import {
  HeroSectionContent,
  HeroContainer,
  Row,
  Col,
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
    "Computer Science Engineer.",
    "Front-End Developer.",
    "SQL Developer.",
  ];

  useEffect(() => {
    const myElement = document.querySelector("#myElement");
    init(myElement, {
      showCursor: false,
      strings: domains,
      typeSpeed: 150,
    });
  });

  return (
    <HeroSectionContent>
      <HeroContainer className="container">
        <Row>
          <Col>
            <div>
              <Hello>HEY! I AM</Hello>
              <Hero>Surendra Jangid !</Hero>
              <HeroDomain>
                I'm a <HeroDynamicDomain id="myElement"></HeroDynamicDomain>
              </HeroDomain>
              <Overview>
                Dorem ipsum dolor sitamet, consectetur adipiscing elit, sed do
                eiusm tempor incididunt ulabore et dolore magna aliqua.
              </Overview>
              <ProfileDownload>Download</ProfileDownload>
            </div>
          </Col>
          <Col>
            <div></div>
          </Col>
        </Row>
      </HeroContainer>
    </HeroSectionContent>
  );
};

export default HeroSection;
