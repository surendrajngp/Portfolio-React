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
          <MobileLink onClick={toggle} to="/">
            Home
          </MobileLink>
          <MobileLink onClick={toggle} to="about">
            About
          </MobileLink>
          <MobileLink onClick={toggle} to="services">
            Services
          </MobileLink>
          <MobileLink onClick={toggle} to="skills">
            Skills
          </MobileLink>
          <MobileLink onClick={toggle} to="projects">
            Projects
          </MobileLink>
          <MobileLink onClick={toggle} to="contact">
            Contact
          </MobileLink>
        </MobileMenuLinks>
      </MobileMenuWrapper>
    </MobileMenuContainer>
  );
};

export default MobileMenu;
