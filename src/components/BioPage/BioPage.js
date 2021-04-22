import { Link, makeStyles } from "@material-ui/core";
import React from "react";
import constants from "../../constants";
import AnimatedHeader from "../AnimatedHeader/AnimatedHeader";
import profileImg from "../Intro/Profile/profile.png";
const { container, orange } = constants;

const useStyles = makeStyles({
  container,
  img: {
    width: 250,
    float: "left",
    margin: "10px 20px",
    borderRadius: "5%",
    "@media (max-width: 799px)": {
      width: 175,
    },
  },
  bioContainer: {
    maxWidth: 700,
    margin: "0 30px",
    textAlign: "justify",
    lineHeight: 1.5,
  },
});
export default function BioPage() {
  const { container, img, bioContainer } = useStyles();
  return (
    <div className={container}>
      <AnimatedHeader name="About Me" />
      <div className={bioContainer}>
        <img
          src={profileImg}
          className={img}
          alt="Smiling young lady in front of green grass"
        />
        <p>
          I earned my BS in Disability Studies from Stony Brook University and
          then went on to study occupational therapy (OT) at SUNY Downstate. In
          the OT field, I worked with a wide range of people, from adults with
          physical or psychological disorders to children with learning
          disabilities. I helped these individuals regain their functional
          skills and find ways to be more independent in their daily tasks,
          sometimes with the aid of some pretty cool technology.{" "}
        </p>
        <p>
          Assistive technology captured my interest, and I found myself wanting
          to be involved in the creation of softwares that make it possible for
          people to live meaningful lives. I began to teach myself to code, then
          subsequently trained at the Flatiron School. At the Flatiron School
          and now beyond, I am putting to use my fullstack development skills to
          bring to life projects that matter. Currently, I am working as a frontend software engineer for Pulse Analytics, a software company that provides decision support tools for market access in oncology and specialty therapeutics.
        </p>
        <p>
          In my personal life, I enjoy learning about theater arts and science,
          reading, free-writing, and occasionally, running.{" "}
        </p>
      </div>
    </div>
  );
}
