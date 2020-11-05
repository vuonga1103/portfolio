import React, { useEffect, useState } from "react";
import {
  Button,
  AppBar,
  Typography,
  IconButton,
  Link,
  MenuItem,
  Drawer,
} from "@material-ui/core";
import ToolBar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import { LabelImportantOutlined } from "@material-ui/icons";

const useStyles = makeStyles({
  appBar: {
    backgroundColor: "rgba(116, 73, 103, 0.2)",
    color: "white",
    padding: "5px 10px",
    "@media (min-width: 799px)": {
      padding: "0 70px",
    },
  },
  name: {
    fontFamily: "'Lobster', cursive",
    fontWeight: "bold",
  },
  menuButton: {
    fontSize: 16,
    fontWeight: 500,
    "&:hover": {
      color: "#e69456",
    },
  },

  toolBarDesktop: {
    display: "flex",
    justifyContent: "space-between",
  },
  toolbarMobile: {},
  menuDrawer: {
    marginRight: 10,
  },
  drawerContainer: {
    padding: "20px 30px",
    textTransform: "uppercase",
    fontWeight: 500,
    height: "100%",
    backgroundImage: "linear-gradient(#3f254a, black)",
    color: "white",
  },
  drawerChoice: {
    "&:hover": {
      color: "#e69456",
    },
  },
});

export default function NavBar() {
  const {
    appBar,
    name,
    menuButton,
    toolBarDesktop,
    toolbarMobile,
    menuDrawer,
    drawerContainer,
    drawerChoice,
  } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 799
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const menuData = [
    { label: "Bio", href: "/bio" },
    { label: "Projects", href: "/projects" },
    { label: "Writings", href: "/writings" },
    { label: "Say Hello", href: "/contact" },
  ];

  const displayMenuButtons = () => {
    return menuData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            className: menuButton,
            component: RouterLink,
            "aria-label": label,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  const logo = (
    <Typography variant="h3" component="h1" className={name} color="primary">
      <Link
        {...{
          component: RouterLink,
          to: "/",
          color: "inherit",
          style: { textDecoration: "none" },
        }}
      >
        Anh
      </Link>
    </Typography>
  );

  const displayDesktop = () => {
    return (
      <ToolBar className={toolBarDesktop}>
        <div>{logo}</div>
        <div>{displayMenuButtons()}</div>
      </ToolBar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <ToolBar className={toolbarMobile}>
        <IconButton
          {...{
            edge: "start",
            className: menuDrawer,
            "data-testid": "drawer-button",
            color: "inherit",
            "aria-label": "menu",
            onClick: handleDrawerOpen,
            "aria-haspopup": "true",
          }}
        >
          <MenuIcon color="secondary" />
        </IconButton>

        <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>{logo}</div>
      </ToolBar>
    );
  };

  const getDrawerChoices = () => {
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return menuData.map(({ label, href: to }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
            onClick: handleDrawerClose,
            className: drawerChoice,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  return (
    <AppBar className={appBar}>
      {mobileView ? displayMobile() : displayDesktop()}
    </AppBar>
  );
}
