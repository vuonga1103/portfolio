import { Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import constants from "../../../constants";

const { orange } = constants;

const useStyles = makeStyles({
  container: {
    padding: "0 10px",
    marginBottom: 10,
    "@media (max-width: 799px)": {
      fontSize: 13,
    },
  },
  subTitle: {
    marginTop: 3,
  },
});
export default function ProjectInfo({ project }) {
  const { container, subTitle } = useStyles();
  const { name, description, github, demo, technologies } = project;
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
      <div className={subTitle}>
        <span style={{ color: orange }}>// </span>
        {description}
      </div>
      <div className={subTitle}>
        {" "}
        <span style={{ color: orange }}>Technologies: </span>
        {technologies.join(", ")}
      </div>
    </div>
  );
}
