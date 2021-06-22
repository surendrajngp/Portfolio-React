import styled from "styled-components";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

export const ImageCarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  position: relative;
  & > h3 {
    color: #222222;
    font-weight: 700;
    margin: 30px 0 50px 0;
    font-size: 24px;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: auto;
      margin-left: 20px;
      width: 5%;
      height: 3px;
      background-color: #e45447;
    }
  }

  
`;

export const RightArrow = styled(RiArrowRightSLine)`
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  color: #222222;
  z-index: 10;
  user-select: none;
  @media screen and (max-width: 768px) {
    right: 20px;
  }
`;

export const LeftArrow = styled(RiArrowLeftSLine)`
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  color: #222222;
  z-index: 10;
  user-select: none;
  @media screen and (max-width: 768px) {
    left: 20px;
  }
`;

export const Slide = styled.div`

  opacity: 0;
  transition-duration: 1s ease;
  transform: scale(0.9);
  /* transform: translate(
    ${({ slideToLeft }) => (slideToLeft ? "100%" : "-100%")}
  ); */

  /* transform: translate(100%); */
`;

export const Img = styled.img`
  height: 28rem;
  width: 44rem;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    /* width: 70% !important; */
    height: 12rem;
    width: 16rem;
  }
`;
