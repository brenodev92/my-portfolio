import React from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 15,
    background: "#233",
    display: "flex",
    flexWrap: "wrap",
    color: "#fff",
    justifyContent: "center",
  },
  cardContainer: {
    width: 300,
    height: 300,
    margin: 5,
  },
}));

export default function Portfolio() {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.container}>
      <Card className={classes.cardContainer}>
        <CardMedia></CardMedia>
        <CardContent>
          <Typography>ola</Typography>
        </CardContent>
      </Card>
      <Card className={classes.cardContainer}>
        <CardMedia></CardMedia>
        <CardContent>
          <Typography>ola</Typography>
        </CardContent>
      </Card>
      <Card className={classes.cardContainer}>
        <CardMedia></CardMedia>
        <CardContent>
          <Typography>ola</Typography>
        </CardContent>
      </Card>
      <Card className={classes.cardContainer}>
        <CardMedia></CardMedia>
        <CardContent>
          <Typography>ola</Typography>
        </CardContent>
      </Card>
      <Card className={classes.cardContainer}>
        <CardMedia></CardMedia>
        <CardContent>
          <Typography>ola</Typography>
        </CardContent>
      </Card>
      <Card className={classes.cardContainer}>
        <CardMedia></CardMedia>
        <CardContent>
          <Typography>ola</Typography>
        </CardContent>
      </Card>
      <Card className={classes.cardContainer}>
        <CardMedia></CardMedia>
        <CardContent>
          <Typography>ola</Typography>
        </CardContent>
      </Card>
      <Card className={classes.cardContainer}>
        <CardMedia></CardMedia>
        <CardContent>
          <Typography>ola</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
