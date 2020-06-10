import React, { useState } from "react";
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  ListItemIcon,
} from "@material-ui/core";
import {
  MdArrowBack,
  MdAssignmentInd,
  MdHome,
  MdApps,
  MdContactMail,
  MdMenu,
} from "react-icons/md";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import profile from "../assets/images/profile.jpg";

const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(18),
    height: theme.spacing(18),
  },
  listItem: {
    color: "tan",
  },
}));

const menuItems = [
  {
    listIcon: <MdHome size={24} />,
    listText: "Home",
    listPath: "/",
    listTitle: "home",
  },
  {
    listIcon: <MdAssignmentInd size={24} />,
    listText: "Resume",
    listPath: "/resume",
    listTitle: "resume",
  },
  {
    listIcon: <MdApps size={24} />,
    listText: "Portfolio",
    listPath: "/portfolio",
    listTitle: "portfolio",
  },
  {
    listIcon: <MdContactMail size={24} />,
    listText: "Contacts",
    listPath: "/contacts",
    listTitle: "contacts",
  },
];

function Navbar() {
  const classes = useStyles();

  const [state, setState] = useState({
    right: false,
  });

  const toggleSlider = (slider, open) => () => {
    setState({
      ...state,
      [slider]: open,
    });
  };

  const sideList = (slider) => (
    <Box
      component="div"
      className={classes.menuSliderContainer}
      onClick={toggleSlider(slider, false)}
    >
      <Avatar src={profile} alt="Breno G S Lopes" className={classes.avatar} />
      <Divider />
      <List>
        {menuItems.map((item, i) => (
          <ListItem
            button
            key={i}
            component={Link}
            to={item.listPath}
            title={item.listTitle}
          >
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText
              primary={item.listText}
              className={classes.listItem}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <MdMenu color="tomato" />
            </IconButton>
            <Typography variant="h5" style={{ color: "tan" }}>
              Portfolio
            </Typography>
            <MobilRightMenuSlider
              open={state.right}
              onClose={toggleSlider("right", false)}
              anchor="right"
            >
              {sideList("right")}
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Navbar;
