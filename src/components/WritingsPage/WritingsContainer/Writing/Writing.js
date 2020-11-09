import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid, Link } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 270,
    width: 450,
    backgroundColor: "rgba(116, 73, 103, 0.2)",
    color: "white",
  },
  media: {
    height: 140,
    objectFit: "cover",
  },
  title: {
    height: 50,
  },
  topContainer: {
    cursor: "default",
  },
});

export default function Writing({
  post: { title, link, thumbnail, description },
}) {
  const classes = useStyles();

  return (
    <Grid item>
      <Card className={classes.root}>
        <CardActionArea className={classes.topContainer}>
          <CardMedia className={classes.media} image={thumbnail} />
          <CardContent className={classes.title}>
            <Typography gutterBottom variant="h6" component="h2">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link href={link} target="_blank">
            <Button size="small" color="primary" style={{ fontWeight: "bold" }}>
              Read On Medium
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
}
