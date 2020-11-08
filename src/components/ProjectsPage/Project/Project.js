import React from "react";
import "./Project.css";
import ProjectCarousel from "./ProjectCarousel/ProjectCarousel";
import ProjectInfo from "./ProjectInfo/ProjectInfo";

export default function Project({ project }) {
  return (
    <div>
      <ProjectCarousel project={project} />
      <ProjectInfo project={project} />
    </div>
  );
}
