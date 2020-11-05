import { makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import img from "./profile.png";

const useStyles = makeStyles({
  container: {
    marginTop: 20,
  },
  profileImage: {
    width: 200,
    borderRadius: "50%",
  },
});
export default function Profile() {
  const { container, profileImage } = useStyles();
  return (
    <div className={container}>
      <Link to="/bio">
        <img
          src={img}
          alt="Smiling young lady in front of green grass"
          className={profileImage}
        />
      </Link>
    </div>
  );
}
