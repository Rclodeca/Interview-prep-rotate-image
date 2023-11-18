import "./styles.css";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <RotatableImg />
    </div>
  );
}

const RotatableImg = () => {
  const [rotated, setRotated] = React.useState(0);

  return (
    <>
      <img
        id="myImage"
        style={{
          transform: `rotate(${rotated}deg)`
        }}
        onMouseOver={() => {
          setRotated((cur) => {
            return cur + 180;
          });
        }}
        src="https://i.stack.imgur.com/BLkKe.jpg"
        width="100"
        height="100"
      />
    </>
  );
};
