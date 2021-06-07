import React from "react";
import {
  AboutContainer,
  AboutHeading,
  AboutImg,
  AboutMe,
  AboutSectionContent,
  Info,
  MyInfo,
} from "./AboutElements";
import { info } from "../../Data/data";

const AboutSection = () => {
  return (
    <AboutSectionContent id="about">
      <AboutContainer className="container">
        <div className="row align-items-center">
          <div className="col-sm-6">
            <div>
              <AboutImg
                src="https://cobra-vue-nuxt-portfolio.netlify.app/assets/img/about-area/about.jpg"
                alt="HeroImg"
              />
            </div>
          </div>
          <div className="col-sm-6 mt-5 mt-md-0">
            <div>
              <AboutHeading>
                <h2>About Me</h2>
              </AboutHeading>
              <AboutMe>
                I’m a Front End Developer. I have a Passion for Creating Clean,
                Beautiful, Interactive, Minimalistic, Responsive and User
                Friendly UI, Developed by Modular, Scalable and Functional Code.
              </AboutMe>
              <MyInfo>
                {info.map((value, idx) => {
                  return (
                    <Info key={idx}>
                      <span className="title">{value.name}:</span>
                      <span className="text">{value.text}</span>
                    </Info>
                  );
                })}
              </MyInfo>
            </div>
          </div>
        </div>
      </AboutContainer>
    </AboutSectionContent>
  );
};

export default AboutSection;
