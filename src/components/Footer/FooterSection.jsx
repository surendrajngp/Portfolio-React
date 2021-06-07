import React from "react";
import { socialInfo } from "../../Data/data";
import { FaRegHeart } from "react-icons/fa";
import {
  Footer,
  FooterContainer,
  FooterLogo,
  FooterText,
  ReactMe,
  SocialIcon,
  SocialIcons,
} from "./FooterElements";

const FooterSection = () => {
  return (
    <Footer>
      <FooterContainer className="container">
        <div className="row">
          <div className="col-12 col-sm-12">
            <FooterLogo to="home">S J</FooterLogo>
            <ReactMe>Reach Me</ReactMe>
            <SocialIcons>
              {socialInfo.map((item, idx) => {
                return <SocialIcon href={item.url}>{item.icon}</SocialIcon>;
              })}
            </SocialIcons>
          </div>
          <div className="col-12 col-sm-12 d-flex justify-content-center">
            <FooterText>
              Made With &nbsp; <FaRegHeart size={20} color={"#e45447"} /> &nbsp;
              By &nbsp;
              <span> Surendra Jangid</span>
            </FooterText>
          </div>
        </div>
      </FooterContainer>
    </Footer>
  );
};

export default FooterSection;
