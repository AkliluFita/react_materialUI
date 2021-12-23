import {} from "@mui/icons-material";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./App.css";
import Add from "./components/Add";
import Feed from "./components/Feed";
import LeftBar from "./components/LeftBar";
import NavBar from "./components/NavBar";
import RightBar from "./components/RightBar";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    marginTop: theme.spacing(10),
  },
  rightBar: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <NavBar />
      <Grid container spacing={2} className={classes.gridContainer}>
        <Grid item sm={2} xs={2}>
          <LeftBar className={classes.leftBar} />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed className={classes.feed} />
        </Grid>
        <Grid item sm={3} className={classes.rightBar}>
          <RightBar className={classes.rightBar} />
        </Grid>
      </Grid>
      <Add />
    </div>
  );
}

export default App;
