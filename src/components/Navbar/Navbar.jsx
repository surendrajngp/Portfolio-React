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
        "0 10px 15px rgb(25 25 25 / 10%)";
      // document.getElementById("navbar").style.backgroundColor = "#fff";
    }
    prevScrollpos = currentScrollPos;
  };
  return (
    <React.Fragment>
      <Nav scrollNav={scrollNav} id="navbar">
        <NavbarContainer className="container">
          <NavLogo onClick={backToTop} to="/">
            S J
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
                offset={-70}
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
                offset={-60}
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
                offset={-60}
                exact="true"
                activeClass="active1"
              >
                Resume
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="projects"
                smooth={true}
                duration={100}
                spy={true}
                offset={-60}
                exact="true"
                activeClass="active1"
              >
                Projects
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink
                to="contact"
                smooth={true}
                duration={100}
                spy={true}
                offset={-60}
                exact="true"
                activeClass="active1"
              >
                Contact
              </NavLink>
            </NavItem> */}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </React.Fragment>
  );
};

export default Navbar;
