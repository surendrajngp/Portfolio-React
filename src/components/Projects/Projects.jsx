import React, { useEffect, useState } from "react";
import { ProjectsSection } from "./ProjectsElements";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

import { projects } from "../../Data/data";

// buttons
const Button = ({ category, handleFilter }) => {
  return (
    <button
      className="btn btn-danger"
      onClick={() => {
        handleFilter(category);
      }}
    >
      {category}
    </button>
  );
};

const Projects = () => {
  const [category, setCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);

  console.log(projects);
  useEffect(() => {
    category === "All"
      ? setFilteredProjects(projects)
      : setFilteredProjects(
          projects.filter((project) => project.category === category)
        );
  }, [category]);

  return (
    <ProjectsSection id="projects">
      <div className="container">
        <div className="row justify-content-center">
          <div className="d-flex justify-content-center gap-3 pb-5">
            <Button category="All" handleFilter={setCategory}></Button>
            <Button category="Static" handleFilter={setCategory}></Button>
            <Button category="React" handleFilter={setCategory}></Button>
            <Button category="Wordpress" handleFilter={setCategory}></Button>
          </div>
        </div>
        <SimpleReactLightbox>
          <SRLWrapper>
            <div className="row">
              {filteredProjects.map((item, idx) => {
                return (
                  <div className="col-sm-4 col-11 mb-3 mx-auto mx-sm-0">
                    <img
                      className="shadow img-thumbnail"
                      src={item.src}
                      alt={item.title}
                    />
                  </div>
                );
              })}
            </div>
          </SRLWrapper>
        </SimpleReactLightbox>
      </div>
    </ProjectsSection>
  );
};

export default Projects;
