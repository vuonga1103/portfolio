import React from "react";
import Typing from "react-typing-animation";
import constants from "../../constants";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import projectsData from "./projectsData";
import ProjectInfo from "./ProjectInfo/ProjectInfo";
import Project from "./Project/Project";
import AnimatedHeader from "../AnimatedHeader/AnimatedHeader";

const { orange, heading, container } = constants;

const useStyles = makeStyles({
  container,
});

export default function ProjectsPage() {
  const { container } = useStyles();

  const displayProjects = () => {
    return projectsData.map((p) => (
      <Grid item xs={11} sm={8} md={6} key={p.name}>
        <ProjectInfo project={p} />
        <Project project={p} />
      </Grid>
    ));
  };

  return (
    <div className={container}>
      <AnimatedHeader name="My Projects" />

      {displayProjects()}
    </div>
  );
}
