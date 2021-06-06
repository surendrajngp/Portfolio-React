import React, { useEffect, useState } from "react";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLink,
  NavLogo,
  NavMenu,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import { animateScroll } from "react-scroll";
const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const backToTop = () => {
    animateScroll.scrollToTop(10);
  };

  return (
    <React.Fragment>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo onClick={backToTop} to="/">
            SKJ
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to="home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="services">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="skills">Skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="projects">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="contact">Contact</NavLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </React.Fragment>
  );
};

export default Navbar;
