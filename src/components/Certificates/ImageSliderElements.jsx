import styled from "styled-components";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

export const ImageSliderSetion = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  background: transparent;
  position: relative;
  &::before {
    content: "";
    height: 100%;
    width: 50%;
    top: 0;
    left: 0;
    position: absolute;
    background: #e45447;
    z-index: -1;
    clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
  }

  &::after {
    content: "";
    height: 100%;
    width: 50%;
    top: 0;
    right: 0;
    position: absolute;
    background: #90acd1;
    z-index: -1;
    clip-path: polygon(25% 0%, 100% 1%, 100% 100%, 25% 100%, 0% 50%);
  }
`;

export const RightArrow = styled(FaRegArrowAltCircleRight)`
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 100px;
  color: #fff;
  z-index: 10;
  user-select: none;
  font-size: 1.5rem;
  @media screen and (max-width: 768px) {
    right: 20px;
  }
`;

export const LeftArrow = styled(FaRegArrowAltCircleLeft)`
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 100px;
  color: #fff;
  z-index: 10;
  user-select: none;
  font-size: 1.5rem;
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
