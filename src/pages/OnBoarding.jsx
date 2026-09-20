import React, { useRef } from "react";
import "./CSS/OnBoarding.css";

const OnBoarding = ({ board, currentBoard, onSwipe, onGoTo,login }) => {

  const startX = useRef(0);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;

    const distance = startX.current - endX;

    if (Math.abs(distance) < 50) return;

    if (distance > 0) {
      onSwipe("left");
    } else {
      onSwipe("right");
    }

    startX.current = 0;
  };

  return (
    <main
      className="onboarding"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >

      <div
        className="onboarding-track"
        style={{
          transform: `translateX(-${currentBoard * 100}%)`
        }}
      >

        {board.map((item) => (
          <section className="onboarding-slide" key={item._id}>
            
            <button className="skip-button" onClick={login}>Skip</button>
            {currentBoard === board.length - 1 && (
    <button onClick={login} className="getstarted">
    Get Started
    </button>
      )}
            <div className="onboarding-content">

              <h1>
                {item.text}
                <br />
                <span>{item.green}</span>
              </h1>

              <p>{item.para}</p>

              <div className="food-image">
                <img src={item.images} alt={item.green} />
              </div>

            </div>

          </section>
        ))}

      </div>

      <div className="dots">

        {board.map((item, index) => (
          <button
            key={item._id}
            className={index === currentBoard ? "active" : ""}
            onClick={() => onGoTo(index)}
          />
        ))}

      </div>
      

    </main>
  );
};

export default OnBoarding;