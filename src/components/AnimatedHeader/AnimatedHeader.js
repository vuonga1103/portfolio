import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Typing from "react-typing-animation";
import constants from "../../constants";

const { orange, heading } = constants;

const useStyles = makeStyles({
  cursor: {
    color: orange,
  },
  title: heading,
});

export default function AnimatedHeader({ name }) {
  const { cursor, title } = useStyles();

  return (
    <div>
      <Typography {...{ variant: "h4", component: "h2" }}>
        <Typing speed={30} cursorClassName={cursor}>
          <div className={title}>
            <div> {name}</div>
          </div>
        </Typing>
      </Typography>
    </div>
  );
}
