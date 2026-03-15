import React, { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");

  const getScoreBarStyle = () => {
    const numericValue = Number(value);
    const newValue = Number.isFinite(numericValue) ? numericValue : "";
    // 1- Compute width
    const scoreWidth = `${(newValue * 100) / 10}%`;

    // 2- Compute color (optional)
    let scoreColor;
    if (newValue <= 2) scoreColor = `#f3bc47`
    else if (newValue <= 4) scoreColor = `#CFB219`;
    else if (newValue <= 6) scoreColor = `#B0D711`;
    else if (newValue <= 8) scoreColor = `#70E010`;
    else if (newValue <= 10) scoreColor = `#0AF510`;

    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input type="number" min="0" max="10" value={value}
          onChange={(event) => {
            const inputValue = Number(event.target.value);
            const newInput = Number(inputValue);
            if (Number.isNaN(newInput)) {
              setValue('');
              return;
            }
            const verifyMin = Math.min(10, newInput);
            const verifyMax = Math.max(0, verifyMin);
            setValue(verifyMax);
          }}
        ></input>

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}