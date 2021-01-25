import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

function AlertComponent(props) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

// type="success">This is a success message!
// type="error">This is an error message!
// type="warning">This is a warning message!
// type="info">This is an information message!

const Notification = ({ type, message, time }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  if (!type || !message || !time) {
    return null;
  }

  return (
    <div className={classes.root} style={{ position: "fixed" }}>
      <Snackbar
        open={open}
        autoHideDuration={time}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: `${window.innerWidth <= 575 ? "center" : "right"}`,
        }}
      >
        <AlertComponent onClose={handleClose} severity={type}>
          {message}
        </AlertComponent>
      </Snackbar>
    </div>
  );
};

export default Notification;
