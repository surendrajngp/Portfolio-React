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

  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos < 150) {
      document.getElementById("navbar").style.boxShadow = "none";
      // document.getElementById("navbar").style.backgroundColor = "transparent";
    } else {
      document.getElementById("navbar").style.boxShadow =
        "-1px 10px 18px -11px rgba(199, 187, 187, 0.808)";
      // document.getElementById("navbar").style.backgroundColor = "#fff";
    }
    prevScrollpos = currentScrollPos;
  };
  return (
    <React.Fragment>
      <Nav scrollNav={scrollNav} id="navbar">
        <NavbarContainer className="container">
          <NavLogo onClick={backToTop} to="/">
            Diamond Engineer
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink
                to="home"
                smooth={true}
                duration={100}
                spy={true}
                offset={-80}
                exact="true"
                activeClass="active1"
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="about"
                smooth={true}
                duration={100}
                spy={true}
                offset={-80}
                exact="true"
                activeClass="active1"
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="resume"
                smooth={true}
                duration={100}
                spy={true}
                offset={-80}
                exact="true"
                activeClass="active1"
              >
                Resume
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="skills"
                smooth={true}
                duration={100}
                spy={true}
                offset={-80}
                exact="true"
              >
                Skills
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="projects"
                smooth={true}
                duration={100}
                spy={true}
                offset={-80}
                exact="true"
              >
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="contact"
                smooth={true}
                duration={100}
                spy={true}
                offset={-80}
                exact="true"
              >
                Contact
              </NavLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </React.Fragment>
  );
};

export default Navbar;
