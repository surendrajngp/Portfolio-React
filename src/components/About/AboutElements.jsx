import styled from "styled-components";

export const AboutSectionContent = styled.section`
  background: #f9f9ff;
  padding: 90px 0;
`;

export const AboutContainer = styled.div``;

export const AboutImg = styled.img`
  outline: 10px solid #90acd1;
  outline-offset: -54px;
  border: 44px solid transparent;
  border-width: 0px 10px 0px 85px;
  max-width: 90%;
  height: auto;
`;

export const AboutHeading = styled.div`
  text-align: left;
  margin-bottom: 50px;

  & > h2 {
    color: #222222;
    font-weight: 700;
    position: relative;
    margin-bottom: 70px;
    font-size: 45px;
    line-height: 44px;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: -31px;
      width: 100px;
      height: 2px;
      background: #e45447;
    }
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -35px;
      width: 10px;
      height: 10px;
      border-radius: 8px;
      background: #e45447;
    }
  }
`;

export const AboutMe = styled.p`
  color: #777777;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.625em;
  text-align : justify;
`;

export const MyInfo = styled.ul`
  margin-top: 1.5rem !important;
  list-style: none;
  padding: 0;
`;

export const Info = styled.li`
  display: flex;
  margin-bottom: 10px;

  & > .title {
    font-size: 16px;
    font-weight: 600;
    color: #222222;
    width: 130px;
  }

  & > .text {
    width: calc(100% - 130px);
  }
`;
