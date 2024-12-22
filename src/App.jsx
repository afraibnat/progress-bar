import React, { useState } from "react";

export default function App() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState(
    "0% Complete"
  );

  function increaseProgress() {
    const newProgress = Math.min(progress + 10, 100);
    setProgress(newProgress);
    setStatus(`${newProgress} % complete`);
  }

  return (
    <div id="wrapper">
      <h2>Progress Bar</h2>
      <div id="progress-bar-empty-space">
        <div id="progress-bar" style= {{ width: `${progress}%`}} 
          ></div>
        </div>
      <button id="progress-btn" onClick={increaseProgress}>
        Increase Progress</button>
      <p id="status-text">{status}</p>
    </div>
  );
}
