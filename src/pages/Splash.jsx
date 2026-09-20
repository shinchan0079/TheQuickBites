import React from "react";
import "./CSS/Splash.css";

const Splash = ({ zoom }) => {
  return (
    <div className={`splash-container ${zoom ? "zoom-active" : ""}`}>
      <div className="image">
        <img
          src="/images/bgimagesplash.png"
          alt="QuickBite Background"
        />

        <div className="logo">
          <img
            src="/images/logo.png"
            alt="QuickBite Logo"
          />
        </div>

        <p>Good Food&nbsp; • &nbsp;Good Mood</p>
      </div>
    </div>
  );
};

export default Splash;