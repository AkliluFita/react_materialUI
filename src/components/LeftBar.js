import {
  Home,
  DynamicForm,
  CameraAlt,
  VideoCameraBack,
  Apps,
  Collections,
  Storefront,
  Settings,
} from "@mui/icons-material";
import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Person } from "@mui/icons-material";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
    cursor: "pointer",
    border: "1px solid #ccd1c6",
    width: "100%",
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
    },
  },
  text: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  icons: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
}));

export default function LeftBar() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.icons} />
        <Typography className={classes.text}>Homepage</Typography>
      </div>
      <div className={classes.item}>
        <Person className={classes.icons} />
        <Typography className={classes.text}>Friends</Typography>
      </div>
      <div className={classes.item}>
        <DynamicForm className={classes.icons} />
        <Typography className={classes.text}>Lists</Typography>
      </div>
      <div className={classes.item}>
        <CameraAlt className={classes.icons} />
        <Typography className={classes.text}>Camera</Typography>
      </div>
      <div className={classes.item}>
        <VideoCameraBack className={classes.icons} />
        <Typography className={classes.text}>Videos</Typography>
      </div>
      <div className={classes.item}>
        <Apps className={classes.icons} />
        <Typography className={classes.text}>App</Typography>
      </div>
      <div className={classes.item}>
        <Collections className={classes.icons} />
        <Typography className={classes.text}>Collections</Typography>
      </div>
      <div className={classes.item}>
        <Storefront className={classes.icons} />
        <Typography className={classes.text}>Market Place</Typography>
      </div>
      <div className={classes.item}>
        <Settings className={classes.icons} />
        <Typography className={classes.text}>Settings</Typography>
      </div>
    </Container>
  );
}
