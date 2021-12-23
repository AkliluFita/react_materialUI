import {
  Mail,
  NotificationAdd,
  Search,
  SearchOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Container,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { alpha } from "@mui/material/styles";
import React, { useState } from "react";
import { display } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  container:{
    backgroundColor:theme.palette.primary.main,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    width: "30%",
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "70%",
    },
  },
  input: {
    marginLeft: theme.spacing(1),
  },
  searchIcon: {
    display: (props) => (props.open ? "flex" : "none"),
    cursor: "pointer",
  },
  icons: {
    border: "1px solid back",
    width: "15%",
    justifyContent: "space-around",
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex"),
  },
}));

export default function NavBar() {
  const [open, setOpen] = useState(true);
  const classes = useStyles({ open });

  console.log(open);

  return (
    <Container>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5" className={classes.logoLg}>
            Abdu Logo
          </Typography>
          <Typography variant="h5" className={classes.logoSm}>
            Abdu
          </Typography>
          <div className={classes.search}>
            <Search />
            <InputBase placeholder="Search…" className={classes.input} />
          </div>
          <Search
            className={classes.searchIcon}
            onClick={() => setOpen(!open)}
          />
          <div className={classes.icons}>
            <Badge color="secondary" badgeContent={9}>
              <Mail />
            </Badge>
            <Badge color="secondary" badgeContent={4}>
              <NotificationAdd />
            </Badge>
            <Avatar
              alt="img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRISxBTQ88B9PvlreCwRY0_wqZK7y4XoG4zIQ&usqp=CAU"
            />
          </div>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
