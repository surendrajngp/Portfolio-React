import React from "react";
import { ProjectsSection, FilterProjects } from "./ProjectsElements";
import { projects } from "../../Data/data";
const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <FilterProjects id="myBtnContainer">
        {projects.map((item, idx) => {
          return (
            <button class="btn active" onclick="filterSelection('all')">
              {item.category}
            </button>
          );
        })}
      </FilterProjects>
      <div class="column people">
        <div class="content">
          <img
            src="/w3images/people3.jpg"
            alt="People"
            style={{ width: "100%" }}
          />
          <h4>Woman</h4>
          <p>Lorem ipsum dolor..</p>
        </div>
      </div>
    </ProjectsSection>
  );
};

export default Projects;
