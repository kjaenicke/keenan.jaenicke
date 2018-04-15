import React from "react";
import injectSheet from "react-jss";

const classes = {
  "@global": {
    "html, body, div#root, [data-reactroot]": {
      fontFamily: "'Slabo 27px', serif"
    },
    body: {
      overflow: "hidden",
      margin: 0,
      boxSizing: "border-box"
    },
    "#root": {},
    // Font scaling
    // https://css-tricks.com/rems-ems/
    // Document level adjustments
    html: {
      fontSize: "17px"
    },
    "@media (max-width: 900px)": {
      html: { fontSize: "15px" }
    },
    "@media (max-width: 400px)": {
      html: { fontSize: "13px" }
    },
    // Type will scale with document
    h1: {
      fontSize: "3rem"
    },
    h2: {
      fontSize: "2.5rem"
    },
    h3: {
      fontSize: "2.25rem"
    },
    h4: {
      fontSize: "2rem"
    },
    p: {
      fontSize: "1.25rem",
      lineHeight: "1.7"
    },
    "span.byline": {
      fontSize: ".875rem"
    }
  }
};

const GlobalStyleSheet = ({ sheet: { classes }, children }) => (
  <div>{children}</div>
);
export default injectSheet(classes)(GlobalStyleSheet);
