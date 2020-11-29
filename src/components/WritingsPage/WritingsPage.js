import React from "react";
import constants from "../../constants";
import { makeStyles } from "@material-ui/core";
import AnimatedHeader from "../AnimatedHeader/AnimatedHeader";
import WritingsContainer from "./WritingsContainer/WritingsContainer";
import ScrollUpButton from "react-scroll-up-button";

const { container } = constants;

const useStyles = makeStyles({
  container,
});

export default function WritingsPage() {
  const { container } = useStyles();

  return (
    <div className={container}>
      <AnimatedHeader name="My Writings" />
      <WritingsContainer />
      <ScrollUpButton />
    </div>
  );
}
