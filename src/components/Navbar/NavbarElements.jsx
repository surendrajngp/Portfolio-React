import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

// Nav
export const Nav = styled.nav`
  background-color: black;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.5s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  padding: 0 24px;
  width: 100%;
  max-width: 1140px;
`;

export const NavLogo = styled(LinkR)`
  display: flex;
  justify-self: flex-start;
  align-items: center;
  cursor: pointer;
  color: #5088da;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  margin-left: 20px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    color: white;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  } ;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLink = styled(LinkS)`
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 1rem;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s ease-in-out;

  &:hover {
    border-bottom: 2px solid white;
    transition: 0.3s ease-in-out;
  }
  &.active {
    border-bottom: 2px solid red;
  }
`;
