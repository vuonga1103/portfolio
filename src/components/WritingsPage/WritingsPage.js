import React, { useEffect, useState } from "react";
import axios from "axios";
import constants from "../../constants";
import { makeStyles, Typography } from "@material-ui/core";
import Typing from "react-typing-animation";
import AnimatedHeader from "../AnimatedHeader/AnimatedHeader";

const { mediumURL, orange, heading, container } = constants;

const useStyles = makeStyles({
  container,
});

export default function WritingsPage() {
  const { container } = useStyles();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((result) => setPosts(result));
  }, []);

  async function getPosts() {
    try {
      const response = await axios.get(mediumURL);
      const data = await response.data.items;
      return data;
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <div className={container}>
      <AnimatedHeader name="My Writings" />
      {}
    </div>
  );
}
