import { makeStyles, Typography, Link } from "@material-ui/core";
// import { Link } from "react-router-dom";
import React from "react";
import constants from "../../constants";
import AnimatedHeader from "../AnimatedHeader/AnimatedHeader";

const { container } = constants;
const useStyles = makeStyles({ container });

export default function NotFoundPage() {
  const { container, orange } = useStyles();
  return (
    <div className={container}>
      <AnimatedHeader name="Oops!" />
      <Typography variant="h6">Sorry. This page cannot be found!</Typography>
      <Link href="/" style={{ color: orange }}>
        Go Home
      </Link>
    </div>
  );
}
