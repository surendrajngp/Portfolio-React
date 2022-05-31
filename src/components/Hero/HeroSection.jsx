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
import { SocialIcons, SocialIcon } from "../Footer/FooterElements";
import { socialInfo } from "../../Data/data";
import HeroTop from "../../images/HeroTop.svg";
import Resume_Surendra_Jangid from "../../Data/Resume_Surendra_Jangid.pdf";

const ReactRotatingText = require("react-rotating-text");

const HeroSection = () => {
  const domains = [
    "Computer Science Engineer",
    "Web Developer",
    "Data Engineering Enthusiast",
  ];
  return (
    <HeroSectionContent id="home">
      <HeroContainer className="container">
        <div className="row d-flex align-items-center flex-column-reverse flex-md-row h-100">
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
                Inquisitive, energetic computer science engineer skilled in
                frontend development, database with a strong foundation in SQL,
                javascript react.js and cross-platform coding.
              </Overview>

              <SocialIcons className="justify-content-start">
                {socialInfo.map((item, idx) => {
                  return (
                    <SocialIcon key={idx} href={item.url} target="_blank">
                      {item.icon}
                    </SocialIcon>
                  );
                })}
              </SocialIcons>
              <ProfileDownload
                href={Resume_Surendra_Jangid}
                target="_blank"
                title="Resume"
              >
                Download
              </ProfileDownload>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="d-flex justify-content-center py-5 py-sm-0">
              <HeroImg src={HeroTop} className="img-fluid" />
            </div>
          </div>
        </div>
      </HeroContainer>
    </HeroSectionContent>
  );
};

export default HeroSection;
