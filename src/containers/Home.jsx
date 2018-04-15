import React from "react";
import Home from "../components/Home";

const brickColors = [
  "#55efc4",
  "#0984e3",
  "#a29bfe",
  "#fdcb6e",
  "#fab1a0",
  "#636e72"
];

class HomeContainer extends React.Component {
  state = {
    numColumns: this.getRandomNumber(5, 10)
  };

  componentWillUnmount() {
    clearInterval(this.renderInterval);
  }

  componentDidMount() {
    // Grab reference to interval to clear later
    this.renderInterval = setInterval(() => {
      this.setState({
        numColumns: this.getRandomNumber(5, 10)
      });
    }, 5000);
  }

  getRandomNumber(start, max) {
    return Math.floor(Math.random() * max) + start;
  }

  renderBricks() {
    const { numColumns } = this.state;
    const bricks = [];
    const brickCount = this.getRandomNumber(1, 50);

    for (let i = 1; i <= brickCount; i++) {
      bricks.push(
        <div
          key={`brick-${i}`}
          className="brick"
          style={{
            backgroundColor: brickColors[this.getRandomNumber(0, 5)],
            gridColumn: `span ${this.getRandomNumber(1, 3)}`,
            gridRow: `span ${this.getRandomNumber(1, 3)}`,
            opacity: "0.7"
          }}
        />
      );
    }

    return (
      <div
        style={{
          display: "grid",
          height: "100%",
          width: "100%",
          backgroundColor: "black",
          gridGap: "20px",
          gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
          gridAutoColumns: "auto",
          gridTemplateRows: `repeat(3, 100px, 200px)`,
          gridAutoFlow: "dense",
          zIndex: -1,
          position: "fixed"
        }}
      >
        {bricks}
      </div>
    );
  }

  render() {
    return (
      <div style={{ height: "100%" }}>
        {this.renderBricks()}
        <Home />
      </div>
    );
  }
}

export default HomeContainer;
