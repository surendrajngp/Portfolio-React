import styled from "styled-components";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

export const ImageSliderSetion = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  background: transparent;
  position: relative;
  &::before {
    content: "";
    height: 50%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background: #e45447;
    z-index: -1;
    /* clip-path: polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%); */
  }

  &::after {
    content: "";
    height: 50%;
    width: 100%;
    bottom: 0;
    right: 0;
    position: absolute;
    background: #90acd1;
    z-index: -1;
    /* clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%); */
  }
`;

export const RightArrow = styled(RiArrowRightSLine)`
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 100px;
  transform: translate(0,-50%);
  color: #fff;
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
  left: 100px;
  transform: translate(0,-50%);
  color: #fff;
  z-index: 10;
  user-select: none;
  @media screen and (max-width: 768px) {
    left: 20px;
  }
`;

export const Slide = styled.div`
  /* display: flex; */
  /* justify-content: center; */
  opacity: 0;
  transition-duration: 1s ease;
  transform: scale(0.5);
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
