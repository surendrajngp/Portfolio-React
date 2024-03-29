const { default: styled } = require("styled-components");

export const HeroSectionContent = styled.section`
  background: #f9f9ff;
`;

export const HeroContainer = styled.div`
  height: calc(100vh - 60px);
  @media screen and (max-width: 767px) {
    height: auto;
  }
`;

export const Hello = styled.span`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  color: #94b3db;
  letter-spacing: 4px;
  font-family: "Roboto", sans-serif;
  line-height: 1.625em;
`;

export const Hero = styled.h1`
  font-size: 60px;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  color: #222222;
  line-height: 1.2;

  @media screen and (max-width: 768px) {
    font-size: 42px;
  }

  @media screen and (max-width: 768px and (max-width: 991px)) {
    font-size: 55px;
  }
`;

export const HeroDomain = styled.div`
  color: #e45447;
  font-weight: 600;
  font-size: 28px;
  line-height: 42px;
  margin-bottom: 30px;
  display: flex;
  z-index: -1;
  @media screen and (max-width: 767px) {
    font-size: 22px;
  }
`;

export const HeroDynamicDomain = styled.span`
  display: flex;
  align-items: center;
`;

export const Overview = styled.p`
  margin-bottom: 45px;
  color: #777777;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.625em;
  padding-right: 100px;

  @media screen and (max-width: 769px) {
    text-align: justify;
    padding: 0;
  }
`;

export const ProfileDownload = styled.a`
  text-decoration: none;
  cursor: pointer;
  padding: 22px 40px;
  border-radius: 30px;
  background: #90acd1;
  color: #fff;
  text-transform: capitalize;
  display: inline-block;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 0;
  transition: 0.3s ease-in-out;
  position: relative;
  z-index: 1;
  overflow: hidden;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;

  &:hover {
    color: white;
    background: #e45447;
    transition: 0.3s ease-in-out;
  }
`;

export const HeroImg = styled.img`
  width: 70%;
`;
