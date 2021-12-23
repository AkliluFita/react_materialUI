import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(3),
  },
  media: {
    height: 250,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
}));

export default function Post() {
  const classes = useStyles({});

  return (
    <Container className={classes.container}>
      <Card>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            component="img"
            image="https://images.pexels.com/photos/10401243/pexels-photo-10401243.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      <hr />
    </Container>
  );
}
