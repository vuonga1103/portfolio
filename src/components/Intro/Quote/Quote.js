import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import constants from "../../../constants";

const { orange, purple } = constants;

const useStyles = makeStyles({
  container: {
    textAlign: "center",
    marginTop: 20,
  },
  quote: {
    fontSize: 18,
    textAlign: "center",
  },
  author: {
    fontSize: 20,
    color: orange,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default function Quote() {
  const { container, quote, author } = useStyles();
  return (
    <Grid container className={container}>
      <Grid item xs={1} sm={2} md={3} />
      <Grid item xs={10} sm={8} md={6}>
        <div className={quote}>
          "Even if I knew that tomorrow the world would to to pieces, I would
          still plant my apple tree."
        </div>
        <div className={author}>Martin Luther</div>
      </Grid>
      <Grid item xs={1} sm={2} md={3} />
    </Grid>
  );
}
