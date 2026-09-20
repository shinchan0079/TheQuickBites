import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Splash & Onboarding
import Splash from './pages/Splash';
import OnBoarding from './pages/OnBoarding';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import Profile from './pages/Profile';

const App = () => {
  const [screen, setScreen] = useState("Splash");
  const [zoom, setZoom] = useState(false);
  const [currentBoard, setCurrentBoard] = useState(0);

  useEffect(() => {
    // Zoom effect on Splash after 800ms
    const zoomTimer = setTimeout(() => {
      setZoom(true);
    }, 800);

    // Transition to Onboarding after 1500ms
    const screenTimer = setTimeout(() => {
      setScreen("OnBoarding");
    }, 1500);

    return () => {
      clearTimeout(zoomTimer);
      clearTimeout(screenTimer);
    };
  }, []);

  const board = [
    {
      _id: 1,
      text: "Street Food Ab Aapke",
      green: "Mobile par",
      para: "Apne aas-pass ke thele aur redi wale ka authentic khana ab ek hi app par.",
      images: "/images/redi.png",
    },
    {
      _id: 2,
      text: "Har Mood Ke Liye",
      green: "Khana!",
      para: "Chaat, burger, momos, paratha, chole aur bahut kuch ek hi jagah.",
      images: "/images/image2.png",
    },
    {
      _id: 3,
      text: "Local Thele",
      green: "Real Taste",
      para: "Seedhe thele se, bina extra charges ke , Fresh , Hygienic aur dil se bana Khana.",
      images: "/images/image3.png",
    },
  ];

  const handleSwipe = (direction) => {
    if (direction === "left" && currentBoard < board.length - 1) {
      setCurrentBoard((prev) => prev + 1);
    }
    if (direction === "right" && currentBoard > 0) {
      setCurrentBoard((prev) => prev - 1);
    }
  };

  const finishOnboarding = () => {
    setScreen("Main");
  };

  if (screen === "Splash") {
    return <Splash zoom={zoom} />;
  }

  if (screen === "OnBoarding") {
    return (
      <OnBoarding
        board={board}
        currentBoard={currentBoard}
        onSwipe={handleSwipe}
        onGoTo={setCurrentBoard}
        login={finishOnboarding}
      />
    );
  }

  // Main App (screen === "Main")
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Login />} />
        
        {/* Main App Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;