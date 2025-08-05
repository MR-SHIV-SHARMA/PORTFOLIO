import { useState, useEffect } from "react";
import "./Preloader.css"; // Make sure this CSS file is present

const Preloader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [fade, setFade] = useState(true);

  const loadingMessages = [
    "Launching the rockets...",
    "Preparing awesomeness...",
    "Fueling creativity...",
    "Almost there...",
    "Ready for takeoff!",
  ];

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentMessage((prev) => (prev + 1) % loadingMessages.length);
        setFade(true);
      }, 300);
    }, 600);

    const progressInterval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 1, 100));
    }, 30);

    const timer = setTimeout(() => {
      onFinish();
      clearInterval(messageInterval);
      clearInterval(progressInterval);
    }, 300);

    return () => {
      clearTimeout(timer);
      clearInterval(messageInterval);
      clearInterval(progressInterval);
    };
  }, [onFinish]);

  return (
    <div className="preloader">
      <div className="rocket-container">
        <div className="rocket">🚀</div>
        <div className="flames"></div>
      </div>

      <h1 className="title">Welcome to the Future</h1>

      <div className={`loading-message ${fade ? "fade-in" : "fade-out"}`}>
        {loadingMessages[currentMessage]}
      </div>

      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="loading-stats">
        <span>System Status: {progress >= 100 ? "GO" : "INITIALIZING"}</span>
        <span>Progress: {progress}%</span>
      </div>
    </div>
  );
};

export default Preloader;
