import { Link } from "react-scroll";
import styled from "styled-components";

export const Footer = styled.footer`
  padding: 60px 0 !important;
  background: #f9f9ff;
  text-align: center !important;
`;

export const FooterContainer = styled.div`
  text-align: center;
`;

export const FooterLogo = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: #e45447;
  font-size: 1.5rem;
  font-weight: bold;
  height: auto;
  width: max-content;
  padding: 0 10px;
  border: 1px solid red;
`;

export const ReactMe = styled.h4`
  font-size: 21px;
  color: #777777;
  font-weight: 700;
  margin-top: 48px;
  display: flex;
  justify-content: center;
`;

export const SocialIcons = styled.div`
  margin: 25px 0px 25px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const SocialIcon = styled.a`
  cursor: pointer;

  & > svg {
    color: #cccccc;
    font-size: 26px;
    transition: all 0.5s ease-in-out\;;
  }

  &:hover {
    & > svg {
      color: #e45447;
      transition: all 0.5s ease-in-out;
    }
  }
`;

export const FooterText = styled.p`
  display: flex;
  align-items: center;
  margin: 0 auto;

  & > span {
    color: #e45447;
  }
`;
