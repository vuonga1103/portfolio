import { Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import constants from "../../../constants";

const { orange } = constants;

const useStyles = makeStyles({
  container: {
    // width: 700,
    // textAlign: "left",
    padding: "0 10px",
    marginBottom: 10,
  },
});
export default function ProjectInfo({ project }) {
  const { container } = useStyles();
  const { name, description, github, demo } = project;
  return (
    <div className={container}>
      <Typography variant="h5" align="center" style={{ color: orange }}>
        {name}
      </Typography>
      <Link href={github} target="_blank">
        Github
      </Link>{" "}
      ||{" "}
      <Link href={demo} target="_blank">
        Demo
      </Link>
      <div>
        {" "}
        <span style={{}}></span>
        {description}
      </div>
    </div>
  );
}
