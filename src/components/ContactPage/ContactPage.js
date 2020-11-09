import { makeStyles } from "@material-ui/core";
import React from "react";
import constants from "../../constants";
import AnimatedHeader from "../AnimatedHeader/AnimatedHeader";
import SocialMediaContainer from "./SocialMediaContainer/SocialMediaContainer";

const { container } = constants;

const useStyles = makeStyles({
  container,
});

export default function ContactPage() {
  const { container } = useStyles();

  return (
    <div className={container}>
      <AnimatedHeader name="Contact Me" />
      <SocialMediaContainer />
    </div>
  );
}
