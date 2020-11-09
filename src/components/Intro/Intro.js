import React from "react";
import { makeStyles } from "@material-ui/core";
import Quote from "./Quote/Quote";
import Profile from "./Profile/Profile";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 30,
    height: "100vh",
  },
});

export default function Intro() {
  const { container } = useStyles();
  return (
    <div className={container}>
      <Profile />
      <Quote />
    </div>
  );
}
