import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
export const MobileMenuContainer = styled.aside`
  position: fixed;
  left: -100;
  top: 0;
  z-index: 99;
  height: 100%;
  width: 100%;
  background-color: #0d0d0d;
  display: grid;
  align-items: center;
  transition: 0.4s ease-in-out;

  /* opacity if mobile menu is open */
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const MobileMenuWrapper = styled.div`
  color: #fff;
`;

export const MobileMenuLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);

  @media screen and (max-width: 400px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const MobileLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  color: white;
  transition: 0.2s ease-in-out;

  &:hover {
    color: blue;
    transition: 0.2s ease-in-out;
  }
`;
