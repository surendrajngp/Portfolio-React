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
} from "./ResumeElements";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    year: "2018-2022",
    degree: "B.E Computer Science Engineering",
    college:
      "S. B. Jain Institute Of Technology. Management & Research, Nagpur",
  },
  {
    year: "2016-2018",
    degree: "12th Computer Science",
    college: "ST Paul Jr College Hudkeshwar",
  },
];

const experience = [
  {
    duration: "Sep 2020 - Dec 2020",
    organization: "IIoT Labz, Nagpur",
    rolw: "Web Developement Intern",
  },
];
const ResumeSection = () => {
  return (
    <ResumeSectionContent>
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
              <Education key={idx} className="col-sm-9 col-11">
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
          <h3>Experience</h3>
          {experience.map((value, idx) => {
            return (
              <Experience key={idx} className="col-sm-9 col-11">
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
      </ResumeContainer>
    </ResumeSectionContent>
  );
};

export default ResumeSection;