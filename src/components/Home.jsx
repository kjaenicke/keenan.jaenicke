import React from "react";
import injectSheet from "react-jss";
import colors from "../theme/colors";

const classes = {
  home: {
    padding: "0",
    position: "relative",
    display: "flex",
    flex: "1",
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  },
  header: {
    margin: 0,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    "@media (max-width: 480px)": {
      marginTop: "20px"
    }
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  section: {
    backgroundColor: colors.orange,
    width: "100%"
  },
  heading: {
    color: colors.white,
    textAlign: "center",
    width: "50%",
    "@media (max-width: 720px)": {
      width: "75%"
    }
  },
  subtext: {
    margin: "0 0 20px 0",
    color: colors.white,
    textAlign: "center",
    width: "50%",
    "@media (max-width: 720px)": {
      width: "75%"
    }
  },
  classy: {
    backgroundColor: colors.black,
    color: colors.white,
    fontWeight: "bold",
    display: "inline-block",
    padding: "2% 5% 2% 5%",
    marginRight: "10px",
    textAlign: "center"
  },
  link: {
    fontStyle: "italic",
    fontWeight: "bold",
    display: "inline-block",
    textDecoration: "underline",
    textDecorationColor: colors.pink,
    color: colors.white
  }
};

const Home = ({ sheet: { classes } }) => (
  <div className={classes.home}>
    <div className={classes.header}>
      <div className={classes.wrapper}>
        <h2 className={classes.heading}>
          I'm Keenan Jaenicke and I'm a full stack web developer.
        </h2>
        <h3 className={classes.subtext}>
          I love building awesome web applications. Please check out my
          <a className={classes.link} href="#/about">
            skills
          </a>{" "}
          and reach out if you're interested in working together!
        </h3>
      </div>
    </div>
  </div>
);

export default injectSheet(classes)(Home);
