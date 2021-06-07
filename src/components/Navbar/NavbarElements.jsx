import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

// Nav
export const Nav = styled.nav`
  background-color: #f9f9ff;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky !important;
  top: 0;
  width: 100%;
  z-index: 10;
  transition: 0.3s all ease;
  position: relative;

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
`;

export const NavLogo = styled(LinkR)`
  display: flex;
  justify-self: flex-start;
  align-self: center;
  cursor: pointer;
  color: #e45447;
  font-size: 1.5rem;
  height: auto;
  width: max-content;
  font-weight: bold;
  text-decoration: none;
  padding: 0 10px;
  border: 1px solid red;

  @media screen and (max-width: 960px) {
    margin: 0;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    color: #e45447;
    transform: translate(-100%, 40%);
    font-size: 1.8rem;
    cursor: pointer;
  } ;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin: 0;
  margin-right: -22px;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLink = styled(LinkS)`
  color: #222222;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  height: 100%;
  padding: 0 1rem;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s ease-in-out;
  &:hover {
    color: inherit;
  }
`;
