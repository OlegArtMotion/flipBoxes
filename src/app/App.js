import "./App.css";
import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import animationData from "./icon1.json";

function App() {
  const [isReveresed, setIsReversed] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const reverse = () => {
    setIsReversed(!isReveresed);
  };

  return (
    <div className="wrapper">
      {isReveresed ? (
        <>
          <div onClick={reverse} className="blue-container container">
            <p>item1</p>
          </div>

          <div onClick={reverse} className="red-container container">
            <div className="lottie-container">
              <Lottie options={defaultOptions} />
              <p>item2</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div onClick={reverse} className="red-container container">
            <div className="lottie-container">
              <Lottie options={defaultOptions} />
              <p>item2</p>
            </div>
          </div>
          <div onClick={reverse} className="blue-container container">
            <p>item1</p>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
