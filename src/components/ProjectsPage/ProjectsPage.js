import React from "react";
import Typing from "react-typing-animation";
import constants from "../../constants";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import projectsData from "./projectsData";
import ProjectInfo from "./ProjectInfo/ProjectInfo";
import Project from "./Project/Project";

const { orange, montserratFont } = constants;

const useStyles = makeStyles({
  container: {
    marginTop: 50,
    textAlign: "center",
    marginBottom: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    marginBottom: 30,
    fontSize: 45,
    fontWeight: "bold",
    fontFamily: montserratFont,
    "@media (max-width: 799px)": {
      fontSize: 30,
    },
  },
  cursor: {
    color: orange,
  },
  titleContainer: {
    height: 70,
    "@media (max-width: 799px)": {
      height: 50,
    },
  },
});

export default function ProjectsPage() {
  const { cursor, title, container, titleContainer } = useStyles();

  const displayProjects = () => {
    return projectsData.map((p) => (
      <Grid item xs={11} sm={8} md={6}>
        <ProjectInfo key={p.name} project={p} />
        <Project key={p.name} project={p} />
      </Grid>
    ));
  };

  return (
    <div className={container}>
      <Typography
        {...{ variant: "h4", component: "h1", className: titleContainer }}
      >
        <Typing speed={30} cursorClassName={cursor}>
          <div className={title}>
            <div>My Projects</div>
          </div>
        </Typing>
      </Typography>
      {displayProjects()}
    </div>
  );
}
