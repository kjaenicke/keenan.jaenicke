import React from "react";
import injectSheet from "react-jss";

import Menu from "../components/Menu";

const classes = {
  app: {
    display: "grid",
    gridTemplateColumns: "25% auto",
    width: "100vw",
    height: "100vh",

    "@media (max-width: 480px)": {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "repeate(2, 1fr)"
    }
  },
  menu: {
    display: "grid",
    boxShadow:
      "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",

    "@media (max-width: 480px)": {
      boxShadow: "none"
    }
  },
  content: {
    flexDirection: "column",
    overflowY: "auto",
    "@media (max-width: 480px)": {
      width: "100%"
    }
  }
};

const App = ({ sheet: { classes }, children }) => (
  <div className={classes.app}>
    <div className={classes.menu}>
      <Menu />
    </div>
    <div className={classes.content}>{children}</div>
  </div>
);

export default injectSheet(classes)(App);
