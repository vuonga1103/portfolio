import { makeStyles } from "@material-ui/core";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import constants from "../../../constants";
import "./Project.css";

const { orange } = constants;

const useStyles = makeStyles({
  container: {
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    padding: 10,
  },
});

export default function Project({ project }) {
  const { container } = useStyles();
  const { name, description, photos, technologies } = project;

  const displayImages = () => {
    return photos.map((url) => (
      <div key={url}>
        <img
          src={url}
          alt="Project"
          style={{ height: "100%", objectFit: "cover" }}
        />
      </div>
    ));
  };

  return (
    <div className={container}>
      <Carousel
        showArrows={true}
        // onChange={onChange}
        // onClickItem={onClickItem}
        // onClickThumb={onClickThumb}
      >
        {displayImages()}
      </Carousel>
    </div>
  );
}
