import React from "react";
import {
  HeroSectionContent,
  HeroContainer,
  Row,
  Col,
  Hello,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroSectionContent>
      <HeroContainer className="container">
        <Row>
          <Col>
            <div>
              <Hello>HEY! I AM</Hello>
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
