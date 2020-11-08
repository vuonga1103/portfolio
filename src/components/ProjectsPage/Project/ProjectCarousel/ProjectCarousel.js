import { makeStyles } from "@material-ui/core";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ProjectCarousel.css";

const useStyles = makeStyles({});

export default function Project({ project }) {
  const {} = useStyles();
  const { name, description, photos, technologies } = project;

  const displayImages = () => {
    return photos.map((url) => (
      <div key={url} style={{ height: "100%" }}>
        <img
          src={url}
          alt="project"
          style={{ height: "100%", objectFit: "cover" }}
        />
      </div>
    ));
  };

  return (
    <div
      style={{
        minWidth: 250,
        maxWidth: 500,
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        padding: 10,
      }}
    >
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
