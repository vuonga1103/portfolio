import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import Quote from "./Quote/Quote";
import Profile from "./Profile/Profile";

// const useStyles = makeStyles({
//   container: {
//     marginTop: 70,
//   },
//   quoteContainer: {
//     justifyContent: "space-evenly",
//     marginTop: 100,
//     textAlign: "center",
//     fontSize: 18,
//     color: "#a77898",
//   },
//   nameContainer: {
//     justifyContent: "space-evenly",
//     textAlign: "center",
//     marginTop: 50,
//   },
//   name: {
//     fontFamily: "'Lobster', cursive",
//   },
// });

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 30,
  },
});

export default function Intro() {
  // const { container, quoteContainer, nameContainer, name } = useStyles();
  const { container } = useStyles();
  return (
    // <div className={container}>

    //   <Grid container className={quoteContainer}>
    //     <Grid item xs={10} sm={6}>
    // "I care that I learn something everyday. If a day goes by and I don’t
    // learn something, that’s a waste of a day. And ideally, you should get
    // your mind blown at least once a week… And so for me, that is how I
    // establish and derive meaning in my life."
    //       <div style={{ color: "#e69456", marginTop: 10 }}>
    //         - Neil deGrasse Tyson
    //       </div>
    //     </Grid>
    //   </Grid>

    //   <Grid container className={nameContainer}>
    //     <Grid item xs={10} sm={6}>
    //       <Typography variant="h2" className={name}>
    //         Hi. My Name is Anh.
    //         <br />I am a web developer.
    //       </Typography>
    //     </Grid>
    //   </Grid>
    // </div>
    <div className={container}>
      <Profile />
      <Quote />
    </div>
  );
}
