import React from "react";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typed from "react-typed";

import profile from "../assets/images/profile.jpg";
import CustomParticles from "./CustomParticles";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    textAlign: "center",
    zIndex: 1,
  },
}));

function Main() {
  const classes = useStyles();
  return (
    <>
    <CustomParticles />
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar
          className={classes.avatar}
          src={profile}
          alt="Breno G S Lopes"
        />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Breno Guilherme de Souza Lopes"]} typeSpeed={40} />
      </Typography>
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Front-End Developer",
            "Javascript",
            "React",
            "React Native",
          ]}
          backSpeed={40}
          loop
        />
      </Typography>
    </Box>
    </>
  );
}

export default Main;
