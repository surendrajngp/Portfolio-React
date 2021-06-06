import styled from "styled-components";

export const ResumeSectionContent = styled.section`
  padding: 90px 0;
`;

export const ResumeContainer = styled.div``;

export const ResumeHeading = styled.div`
  margin-bottom: 50px;
  & > div {
    display: flex;
    justify-content: center;
    & > h1 {
      color: #222222;
      font-weight: 700;
      position: relative;
      margin-bottom: 70px;
      font-size: 45px;
      line-height: 44px;

      &::before {
        content: "";
        position: absolute;
        bottom: -31px;
        left: 50%;
        width: 100px;
        height: 2px;
        background: #e45447;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
      }

      &::after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: -35px;
        width: 10px;
        height: 10px;
        border-radius: 8px;
        background: #e45447;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
      }
    }
  }
`;

export const EducationContainer = styled.div`
  display: flex;
  justify-content: center;

  & > h3 {
    font-weight: 700;
    margin-bottom: 30px;
    font-size: 24px;
  }
`;

export const EducationIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: #90acd1;
  border-radius: 50%;
  color: #fff;
`;

export const Education = styled.div`
  display: flex;
  margin-bottom: 30px;
  background-color: #f9f9ff;
  padding: 40px 30px;
  border-radius: 10px;
  transition: 0.3s all ease-in-out;
  color: #222222;

  &:hover {
    background-color: #90acd1;
    transition: 0.3s all ease-in-out;
    color: #fff;
    & ${EducationIcon} {
      color: #90acd1;
      background-color: #fff;
    }
  }
`;

export const EducationDetails = styled.div`
  width: calc(100% - 100px);
  padding-left: 10px;
  padding-bottom: 10px;

  & span {
    font-weight: 700;
    font-size: 16px;
  }

  & > h4 {
    font-size: 20px;
    font-weight: 700;
  }
`;

export const ExperienceContainer = styled.div`
  display: flex;
  justify-content: center;

  & > h3 {
    font-weight: 700;
    margin-bottom: 30px;
    font-size: 24px;
  }
`;

export const ExperienceIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: #90acd1;
  border-radius: 50%;
  color: #fff;
`;

export const Experience = styled.div`
  display: flex;
  margin-bottom: 30px;
  background-color: #f9f9ff;
  padding: 40px 30px;
  border-radius: 10px;
  transition: 0.3s all ease-in-out;
  color: #222222;

  &:hover {
    background-color: #90acd1;
    transition: 0.3s all ease-in-out;
    color: #fff;
    & ${ExperienceIcon} {
      color: #90acd1;
      background-color: #fff;
    }
  }
`;

export const ExperiencenDetails = styled.div`
  width: calc(100% - 100px);
  padding-left: 10px;
  padding-bottom: 10px;

  & span {
    font-weight: 700;
    font-size: 16px;
  }

  & > h4 {
    font-size: 20px;
    font-weight: 700;
  }
`;
