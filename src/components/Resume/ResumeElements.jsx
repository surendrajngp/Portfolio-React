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
    background-color: #3d5a80;
    transition: 0.3s all ease-in-out;
    color: #fff;
    cursor:pointer;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
    & ${EducationIcon} {
      color: #3d5a80;
      background-color: #fff;
    }
  }
`;

export const EducationDetails = styled.div`
  width: calc(100% - 100px);
  padding-left: 15px;
  padding-bottom: 10px;

  & span {
    font-weight: 700;
    font-size: 16px;
  }

  & > h4 {
    font-size: 20px;
    font-weight: 700;
  }

  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;

export const ExperienceContainer = styled.div`
  display: flex;
  justify-content: center;

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
    background-color: #3d5a80;
    transition: 0.3s all ease-in-out;
    color: #fff;
    cursor:pointer;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
    & ${ExperienceIcon} {
      color: #3d5a80;
      background-color: #fff;
    }
  }
`;

export const ExperiencenDetails = styled.div`
  width: calc(100% - 100px);
  padding-left: 15px;
  padding-bottom: 10px;

  & span {
    font-weight: 700;
    font-size: 16px;
  }

  & > h4 {
    font-size: 20px;
    font-weight: 700;
  }
  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;

// Skills
export const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
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

export const ProgressWrapper = styled.div`
  /* width: 100%; */
  margin-bottom: 30px;

  & > h5 {
    font-size: 16px;
    margin-bottom: 10px;
    font-weight: 500;
  }
`;

export const Progress = styled.div`
  height: 6px;
  background: #e6e6e6;
  overflow: visible;
  font-size: 0.75rem;
  display: flex;
  font-size: 0.75rem;
  border-radius: 0.25rem;
`;

export const ProgressBar = styled.div`
  background: #56ab91;
  /* position: relative; */
  font-size: 12px;
  line-height: 1.2;
  color: #000000;
  font-weight: 600;
  position: relative;
  overflow: visible;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  text-align: center;
  white-space: nowrap;
  transition: widh 1.6s ease;
  width: ${({ prog }) => (prog ? prog : "0")};
  
  & > span {
    position: absolute;
    top: -38px;
    right: 0;
    font-size: 14px;
    font-weight: 600;
    color: #3d5a80;
    line-height: 1.2;
    text-align: center;
    white-space: nowrap;

    &::after {
      content: "";
      position: absolute;
      top: 36px;
      right: 0;
      width: 10px;
      height: 10px;
      content: "";
      background: #e45447;
      border-radius: 50%;
    }
  }
`;
