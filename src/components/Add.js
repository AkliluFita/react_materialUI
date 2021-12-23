import { AddAlarm } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import {
  Alert,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  tooltip: {
    position: "fixed",
    bottom: 20,
    right: 20,
  },
  icon: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    padding: theme.spacing(1.2),
    borderRadius: "50%",
  },

  modalBox: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 400,
    backgroundColor: "white",
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    boxShadow: "3px 3px 2px 0px rgba(207, 204, 188, 1)",
    [theme.breakpoints.down("sm")]: {
      width: 300,
      height: 300,
    },
  },
  item: {
    marginTop: "13px",
  },
}));

export default function Add() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  return (
    <>
      <Tooltip title="Add" arrow className={classes.tooltip}>
        <AddIcon className={classes.icon} onClick={() => setOpen(true)} />
      </Tooltip>

      <Modal
        open={open}
        // onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.modalBox}>
          <div className={classes.item}>
            <TextField
              id="outlined-basic"
              label="title"
              variant="outlined"
              size="small"
              style={{ width: "100%" }}
              className={classes.textField}
            />
          </div>

          <div className={classes.item}>
            <TextField
              id="outlined-basic"
              multiline
              rows={4}
              label="description"
              variant="outlined"
              size="small"
              style={{ width: "100%" }}
              className={classes.textField}
            />
          </div>
          <div className={classes.item}>
            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              helperText="Please select your currency"
              value="public"
              className={classes.select}
            >
              <MenuItem value="public">public</MenuItem>
              <MenuItem value="private">private</MenuItem>
              <MenuItem value="private">private</MenuItem>
            </TextField>
          </div>
          <div className={classes.item} className={classes.select}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Who can comment?</FormLabel>
              <RadioGroup row>
                <FormControlLabel
                  value="everyone"
                  control={<Radio size="small" />}
                  label="everyone"
                />
                <FormControlLabel
                  value="friends"
                  control={<Radio size="small" />}
                  label="friends"
                />
                <FormControlLabel
                  value="none"
                  control={<Radio size="small" />}
                  label="none"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className={classes.item}>
            <Button
              variant="outlined"
              style={{ marginRight: "20px" }}
              onClick={() => setOpenAlert(true)}
            >
              create
            </Button>
            <Button
              variant="outlined"
              className={classes.button}
              color="error"
              onClick={() => setOpen(false)}
            >
              cancel
            </Button>
          </div>
        </Box>
      </Modal>

      <Snackbar
        open={openAlert}
        autoHideDuration={4000}
        onClose={handleClose}
        message="the post has been created"
      />
    </>
  );
}
