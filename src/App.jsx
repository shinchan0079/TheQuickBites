import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Splash & Onboarding start
import Splash from './pages/Splash';
import OnBoarding from './pages/OnBoarding';

// Pages start
import Home from './pages/Home';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import Profile from './pages/Profile';
import VendorProfile from './pages/VendorProfile';
import Category from './pages/Category';
import Payment from './pages/Payment';

const App = () => {
  const [screen, setScreen] = useState("Splash");

  // =============== CART STATE (PROP DRILLING) ===============
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("quickBitesCart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("quickBitesCart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add an item to the cart, or increase quantity if it already exists
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  // Decrease quantity, or remove completely if quantity hits 0
  const decreaseQuantity = (id) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === id);
      if (existingItem.quantity === 1) {
        return prevItems.filter((i) => i.id !== id);
      }
      return prevItems.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity - 1 } : i
      );
    });
  };
  const [zoom, setZoom] = useState(false);
  const [currentBoard, setCurrentBoard] = useState(0);

  useEffect(() => {
    // Zoom effect on Splash after 800ms
    const zoomTimer = setTimeout(() => {
      setZoom(true);
    }, 900);

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
    window.history.pushState(null, '', '/');
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
        <Route path="/" element={<Home cartItems={cartItems} addToCart={addToCart} decreaseQuantity={decreaseQuantity} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} addToCart={addToCart} decreaseQuantity={decreaseQuantity} />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/vendor" element={<VendorProfile cartItems={cartItems} addToCart={addToCart} decreaseQuantity={decreaseQuantity} />} />
        <Route path="/category" element={<Category />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
};

export default App;