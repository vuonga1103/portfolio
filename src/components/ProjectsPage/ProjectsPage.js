import React from "react";
import Typing from "react-typing-animation";
import constants from "../../constants";
import { makeStyles, Typography } from "@material-ui/core";

import "./ProjectsPage.css";
import projectsData from "./projectsData";
import Project from "./Project/ProjectCarousel/ProjectCarousel";

const { orange } = constants;

const useStyles = makeStyles({
  title: {
    marginTop: 30,
    textAlign: "center",
    marginBottom: 30,
    // fontSize: 30,
  },
  cursor: {
    color: orange,
  },
});

export default function ProjectsPage() {
  const { cursor, title } = useStyles();

  const displayProjects = () => {
    return projectsData.map((p) => <Project key={p.name} project={p} />);
  };

  return (
    <div>
      <Typography variant="h4" component="h1">
        <Typing speed={30} cursorClassName={cursor}>
          <div className={title}>
            <div>my projects</div>
          </div>
        </Typing>
      </Typography>

      {displayProjects()}
    </div>
  );
}
