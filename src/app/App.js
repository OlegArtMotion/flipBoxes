import "./App.css";
import React, { useState } from "react";

function App() {
  const [isReveresed, setIsReversed] = useState(false);

  const reverse = () => {
    setIsReversed(!isReveresed);
  };

  return (
    <div className="container">
      {isReveresed ? (
        <>
          <div onClick={reverse} className="blue-container">
            <p>יניב הגבר</p>
          </div>
          <div onClick={reverse} className="red-container">
            <p>red</p>
          </div>
        </>
      ) : (
        <>
          <div onClick={reverse} className="red-container">
            <p>red</p>
          </div>
          <div onClick={reverse} className="blue-container">
            <p>blue</p>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
