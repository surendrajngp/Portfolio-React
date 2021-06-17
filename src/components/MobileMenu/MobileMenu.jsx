import React from "react";
import {
  CloseIcon,
  Icon,
  MobileMenuContainer,
  MobileMenuWrapper,
  MobileMenuLinks,
  MobileLink,
} from "./MobileMenuElements";

const MobileMenu = ({ isOpen, toggle }) => {
  return (
    <MobileMenuContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <MobileMenuWrapper>
        <MobileMenuLinks>
          <MobileLink
            to="home"
            smooth={true}
            duration={100}
            spy={true}
            offset={-80}
            exact="true"
            activeClass="active2"
            onClick={toggle}
          >
            Home
          </MobileLink>
          <MobileLink
            to="about"
            smooth={true}
            duration={100}
            spy={true}
            offset={-35}
            exact="true"
            activeClass="active2"
            onClick={toggle}
          >
            About
          </MobileLink>
          <MobileLink
            to="resume"
            smooth={true}
            duration={100}
            spy={true}
            offset={-35}
            exact="true"
            activeClass="active2"
            onClick={toggle}
          >
            Resume
          </MobileLink>
          <MobileLink
            to="certificate"
            smooth={true}
            duration={100}
            spy={true}
            offset={-35}
            exact="true"
            activeClass="active2"
            onClick={toggle}
          >
            certificate
          </MobileLink>
          <MobileLink
            to="home"
            smooth={true}
            duration={100}
            spy={true}
            offset={-35}
            exact="true"
            activeClass="active2"
            onClick={toggle}
          >
            Projects
          </MobileLink>
          <MobileLink
            to="home"
            smooth={true}
            duration={100}
            spy={true}
            offset={-35}
            exact="true"
            activeClass="active2"
            onClick={toggle}
          >
            Contact
          </MobileLink>
        </MobileMenuLinks>
      </MobileMenuWrapper>
    </MobileMenuContainer>
  );
};

export default MobileMenu;
