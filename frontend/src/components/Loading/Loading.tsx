import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: "200px",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function Loading() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
}
