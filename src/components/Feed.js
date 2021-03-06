import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Post from "./Post";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    backgroundColor: "#fce4ec",
  },
}));

export default function Feed() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  );
}
