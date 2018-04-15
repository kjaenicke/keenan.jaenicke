import React from "react";
import injectSheet from "react-jss";
import Menu from "../components/Menu";

const classes = {
  app: {
    display: "grid",
    gridTemplateColumns: "25% auto",
    width: "100vw",
    height: "100vh",

    "@media (max-width: 720px)": {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "75px auto"
    }
  },
  menu: {
    display: "grid",
    boxShadow:
      "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",
    "@media (max-width: 720px)": {
      boxShadow: "none"
    }
  },
  content: {
    flexDirection: "column",
    overflowY: "scroll",
    overflowX: "hidden"
  }
};

class App extends React.Component {
  render() {
    const {
      children,
      sheet: { classes }
    } = this.props;

    return (
      <div className={classes.app}>
        <div className={classes.menu}>
          <Menu />
        </div>
        <div className={classes.content}>{children}</div>
      </div>
    );
  }
}

export default injectSheet(classes)(App);
