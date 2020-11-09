import { makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "./profile.png";
import Typing from "react-typing-animation";
import TextLoop from "react-text-loop";
import constants from "../../../constants";

const { orange, montserratFont } = constants;

const useStyles = makeStyles({
  container: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  profileImage: {
    width: 200,
    borderRadius: "50%",
  },
  greeting: {
    textAlign: "center",
    height: 160,
    width: 500,
    fontSize: 45,
    fontWeight: "bold",
    "@media (max-width: 799px)": {
      fontSize: 30,
      height: 120,
    },
  },
  iAm: {
    marginTop: 20,
    fontSize: 26,
    "@media (max-width: 799px)": {
      fontSize: 18,
    },
  },
  rolesContainer: {
    height: 30,
    "@media (max-width: 799px)": {
      marginBottom: 0,
    },
  },
  rolesLoop: {
    fontSize: 26,
    color: orange,
    fontFamily: montserratFont,
    fontWeight: "bold",
    "@media (max-width: 799px)": {
      fontSize: 20,
      marginTop: -5,
    },
  },
  cursor: {
    color: orange,
  },
  profilePhotoContainer: {
    marginTop: 50,
  },
});

export default function Profile() {
  const {
    container,
    profileImage,
    greeting,
    cursor,
    profilePhotoContainer,
    iAm,
    rolesContainer,
    rolesLoop,
  } = useStyles();

  const [hideRolesLoop, setHideRolesLoop] = useState(true);

  const handleShowRolesLoop = () => {
    setTimeout(() => setHideRolesLoop(false), 1000);
  };

  return (
    <div className={container}>
      <Typing
        {...{
          speed: 30,
          cursorClassName: cursor,
          onFinishedTyping: handleShowRolesLoop,
        }}
      >
        <div className={greeting}>
          <div>Hello, world.</div>
          <Typing.Delay ms={300} />
          <div>
            My name is <span style={{ color: orange }}>Anh.</span>
          </div>

          <Typing.Delay ms={300} />

          <div className={iAm}>I am a...</div>
        </div>
      </Typing>

      <div className={rolesContainer}>
        <div hidden={hideRolesLoop}>
          <Typography>
            <TextLoop
              {...{
                interval: 1500,
                springConfig: { stiffness: 180, damping: 15 },
                children: ["web developer.", "therapist.", "lifelong learner."],
                className: rolesLoop,
              }}
            />{" "}
          </Typography>
        </div>
      </div>

      <div className={profilePhotoContainer}>
        <Link to="/bio">
          <img
            src={img}
            alt="Smiling young lady in front of green grass"
            className={profileImage}
          />
        </Link>
      </div>
    </div>
  );
}
