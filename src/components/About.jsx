import React from "react";
import injectSheet from "react-jss";
import colors from "../theme/colors";

const classes = {
  about: {
    padding: "0 10%"
  },
  pageHeading: {
    display: "flex",
    justifyContent: "center",
    borderTop: "1px solid #fc1da7",
    borderBottom: "1px solid #fba506",
    textTransform: "uppercase"
  },
  whack: {
    fontFamily: "Permanent Marker, cursive",
    display: "inline-block",
    marginLeft: "20px",
    marginRight: "20px",
    color: "#F5A74C"
  },
  skills: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "1fr",
    gridGap: "1.5rem",

    "@media (max-width: 720px)": {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "repeat(3, 1fr)"
    }
  },
  skillsHeading: {
    textTransform: "uppercase",
    textAlign: "center",
    textDecoration: "underline",
    textDecorationColor: colors.darkGrey
  },
  skillsColumn: {
    listStyle: "none",
    paddingLeft: 0,
    textAlign: "center",
    "& li": {
      margin: "10px 0 10px 0",
      fontWeight: "bold",
      fontSize: "1.5rem"
    }
  },
  interests: {
    display: "flex",
    flexDirection: "column",
    marginTop: "5%",
    "& > img": {
      alignSelf: "center"
    }
  },
  me: {
    textAlign: "center",
    height: "50%",
    width: "50%",
    padding: "10px",
    background: colors.white,
    border: `1px solid ${colors.mediumGrey}`,
    borderRadius: "5px",
    "@media (max-width: 480px)": {
      height: "75%",
      width: "75%"
    }
  }
};

const About = ({ sheet: { classes } }) => (
  <div className={classes.about}>
    <h2 className={classes.pageHeading}>
      <span className={classes.whack}> && </span> About{" "}
      <span className={classes.whack}> && </span>
    </h2>
    <section className={classes.skills}>
      <div>
        <h4 className={classes.skillsHeading}>Skills</h4>
        <ul className={classes.skillsColumn}>
          <li>JavaScript (ES6+)</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Node.js</li>
          <li>C#</li>
          <li>MSSQL Server</li>
          <li>Postgres</li>
        </ul>
      </div>
      <div>
        <h4 className={classes.skillsHeading}>Frameworks & Libraries</h4>
        <ul className={classes.skillsColumn}>
          <li>React</li>
          <li>React Native</li>
          <li>.NET Core</li>
          <li>Ruby on Rails</li>
          <li>Express</li>
          <li>Bootstrap, MaterialUI</li>
        </ul>
      </div>
      <div>
        <h4 className={classes.skillsHeading}>Other</h4>
        <ul className={classes.skillsColumn}>
          <li>Docker</li>
          <li>Agile Development</li>
          <li>Heroku</li>
          <li>Azure</li>
        </ul>
      </div>
    </section>
    <section className={classes.interests}>
      <h2 className={classes.pageHeading}>
        <span className={classes.whack}> && </span> Interests{" "}
        <span className={classes.whack}> && </span>
      </h2>
      <p>
        I'm Keenan Jaenicke. I'm a fullstack web developer from the midwest US.
        I love building applications that put user experience at the forefront
        and that solve difficult problems. I chose the title of this site
        "Always Creating" due to my love for learning new technologies through
        building. Taking an project from an idea to a working application can be
        an awesome experience with undoubtly some learning along the way. I'm
        always looking for the next challenge!
      </p>
      <img
        alt="me_at_yosemite_nat_park"
        className={classes.me}
        src="yosemite.jpg"
      />
      <p>
        In my free time I enjoy trail running, hiking, playing guitar, tabletop
        gaming, and spending time with my fiancée and our dogs. Being active
        outdoors is a nature balance to my career and helps me "reset". I love
        getting out on my local trails and doing some miles to think or listen
        to podcasts/audiobooks/music.
      </p>
    </section>
  </div>
);

export default injectSheet(classes)(About);
