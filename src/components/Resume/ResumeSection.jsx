import React from "react";
import {
  Education,
  EducationContainer,
  EducationIcon,
  ResumeContainer,
  ResumeHeading,
  ResumeSectionContent,
  EducationDetails,
  ExperienceContainer,
  Experience,
  ExperienceIcon,
  ExperiencenDetails,
  SkillsContainer,
  ProgressWrapper,
  Progress,
  ProgressBar,
} from "./ResumeElements";
import { FaGraduationCap } from "react-icons/fa";
import { skills, education, experience } from "../../Data/data";
import CertificatesCarousel from "../Certificates/CertificatesCarousel";

const ResumeSection = () => {
  return (
    <ResumeSectionContent id="resume">
      <ResumeContainer className="container">
        <ResumeHeading className="row">
          <div className=" col-lg-12">
            <h1>Resume</h1>
          </div>
        </ResumeHeading>

        <EducationContainer className="row">
          <h3>Education</h3>
          {education.map((value, idx) => {
            return (
              <Education key={idx} className="col-sm-9 col-11 shadow-sm">
                <EducationIcon>
                  <FaGraduationCap size={25} />
                </EducationIcon>
                <EducationDetails>
                  <span>{value.year}</span>
                  <h4>{value.degree}</h4>
                  <span style={{ opacity: "0.8", fontSize: "14px" }}>
                    {value.college}
                  </span>
                </EducationDetails>
              </Education>
            );
          })}
        </EducationContainer>
        {/* ------------ */}
        <ExperienceContainer className="row">
          <h3>Industrial Exposure</h3>
          {experience.map((value, idx) => {
            return (
              <Experience key={idx} className="col-sm-9 col-11 shadow-sm">
                <ExperienceIcon>
                  <FaGraduationCap size={25} />
                </ExperienceIcon>
                <ExperiencenDetails>
                  <span>{value.duration}</span>
                  <h4>{value.organization}</h4>
                  <span style={{ opacity: "0.8", fontSize: "14px" }}>
                    {value.rolw}
                  </span>
                </ExperiencenDetails>
              </Experience>
            );
          })}
        </ExperienceContainer>

        <SkillsContainer className="row">
          <h3>Skills</h3>
          <div className="col-sm-9 col-11">
            <div className="row">
              {skills.map((value, idx) => {
                return (
                  <div key={idx} className="col-md-6">
                    <ProgressWrapper>
                      <h5>{value.skill}</h5>
                      <Progress>
                        <ProgressBar prog={value.progress}>
                          <span>{value.progress}</span>
                        </ProgressBar>
                      </Progress>
                    </ProgressWrapper>
                  </div>
                );
              })}
            </div>
          </div>
        </SkillsContainer>
        <CertificatesCarousel />
      </ResumeContainer>
    </ResumeSectionContent>
  );
};

export default ResumeSection;
