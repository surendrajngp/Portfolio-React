import React from "react";
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

const Navbar = ({ toggle }) => {
  return (
    <React.Fragment>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">SKJ</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to="/">Home</NavLink>
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
