const { default: styled } = require("styled-components");

export const HeroSectionContent = styled.section`
  background: #f9f9ff;
`;

export const HeroContainer = styled.div`
  height: calc(100vh - 80px);
`;

export const Row = styled.div`
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: -15px;
  margin-left: -15px;
`;

export const Col = styled.div`
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
`;

export const Hello = styled.span`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  color: #90acd1;
  letter-spacing: 4px;
  font-family: "Roboto", sans-serif;
  line-height: 1.625em;
`;

export const Hero = styled.h1`
  font-size: 60px;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  color: #222222;
  line-height: 1.5;
  font-weight: bold;
`;

export const HeroDomain = styled.div`
  color: #e45447;
  font-weight: 400;
  font-size: 30px;
  line-height: 42px;
  margin-bottom: 30px;
  display: flex;
  white-space: pre;
`;

export const HeroDynamicDomain = styled.span`
  position: relative;
  display: flex;
  align-items: center;

  &::after {
    content: "";
    position: absolute;
    left: calc(100% + 5px);
    width: 2px;
    height: 35px;
    border-right: 3px solid #e45447;
  }
`;

export const Overview = styled.p`
  margin-bottom: 45px;
  padding-right: 155px;
  color: #777777;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.625em;
`;

export const ProfileDownload = styled.a`
  cursor: pointer;
  padding: 25px 43px;
  border-radius: 30px;
  background: #90acd1;
  color: #fff;

  text-transform: capitalize;
  display: inline-block;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 0;
  transition: color 0.4s linear;
  position: relative;
  z-index: 1;
  border: 0;
  overflow: hidden;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
`;

export const HeroImg = styled.img``;
