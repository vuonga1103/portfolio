import React, { useEffect, useState } from "react";
import axios from "axios";
import constants from "../../../constants";
import Writing from "./Writing/Writing";
import { Grid } from "@material-ui/core";

const { mediumURL } = constants;

export default function WritingsContainer() {
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

  const displayPosts = () => {
    if (posts.length) {
      return posts.map((p) => {
        return <Writing key={p.title} post={p} />;
      });
    }
  };
  return (
    <Grid
      container
      spacing={5}
      direction="row"
      justify="center"
      alignItems="center"
    >
      {displayPosts()}
    </Grid>
  );
}
