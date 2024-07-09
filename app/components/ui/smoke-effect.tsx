import React from "react";
import './SmokeEffect.css'; // Import the CSS file

const SmokeEffect: React.FC = () => {
  const randomDelay = Math.random() * 20;

  return (
    <div className="smoke-container">
      <div className="smoke" style={{ animationDelay: `-${randomDelay}s` }}></div>
    </div>
  );
};

export default SmokeEffect;
