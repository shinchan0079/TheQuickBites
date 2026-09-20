import React from 'react';
import Navbar from '../components/common/Navbar';
import BottomNav from '../components/common/BottomNav';
import { IoMdArrowRoundBack } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate, Link } from 'react-router-dom';

const Cart = ({ cartItems, addToCart, decreaseQuantity }) => {
  const navigate = useNavigate();

  // Calculate totals
  const itemTotal = cartItems.reduce((total, item) => total + (Number(item.price) * item.quantity), 0);
  const deliveryFee = itemTotal > 0 ? 10 : 0;
  const platformFee = itemTotal > 0 ? 5 : 0;
  const grandTotal = itemTotal + deliveryFee + platformFee;

  return (
    <div className="main-layout pb-5 mb-5">
      <Navbar />
      
      <main className="container mt-4">
        <div className="cart-outer text-start">
          <div className="top-bar-outer d-flex justify-content-between align-items-center mb-4">
            <div className="icon-content-outer d-flex align-items-center" style={{gap: '10px', cursor: 'pointer'}} onClick={() => navigate(-1)}>
                <IoMdArrowRoundBack size={22} />
                <span className="fw-bold fs-5">Your Cart</span>
            </div>
            <div className="icon-content" style={{cursor: 'pointer'}}>
              <RiDeleteBinLine size={22} color="red" />
            </div>
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center mt-5">
              <h4 className="text-muted">Your cart is empty</h4>
              <p className="text-muted small">Looks like you haven't added anything yet.</p>
              <Link to="/" className="btn btn-success mt-3 px-4 rounded-pill fw-bold">Explore Food</Link>
            </div>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.id} className="cart-outer-item d-flex align-items-center mb-3 p-2 border rounded shadow-sm bg-white">
                  <div className="image-section" style={{width: '70px', height: '70px', borderRadius: '10px', overflow: 'hidden'}}>
                    <img src={item.image} alt={item.name} className="w-100 h-100 object-fit-cover" />
                  </div>
                  <div className="content-section flex-grow-1 px-3">
                    <span className="fw-bold">{item.name}</span><br />
                    <span className="text-muted">₹{item.price}</span>
                  </div>
                  <div className="btn-section">
                      <div className="btns d-flex align-items-center border rounded-pill px-2 py-1 bg-light">
                          <div 
                            className="dcr-btn px-2 fw-bold text-success cursor-pointer" 
                            style={{cursor: 'pointer'}}
                            onClick={() => decreaseQuantity(item.id)}
                          >
                            -
                          </div>
                          <div className="value px-2 fw-bold">{item.quantity}</div>
                          <div 
                            className="inr-btn px-2 fw-bold text-success cursor-pointer" 
                            style={{cursor: 'pointer'}}
                            onClick={() => addToCart(item)}
                          >
                            +
                          </div>
                      </div>
                  </div>
                </div>
              ))}

              <div className="price-main-outer mt-4 p-3 border rounded shadow-sm bg-white">
                <div className="item-price d-flex justify-content-between mb-2 text-muted">
                  <span>Item Total</span>
                  <span>₹{itemTotal}</span>
                </div>
                <div className="item-price d-flex justify-content-between mb-2 text-muted">
                  <span>Delivery Fee</span>
                  <span>₹{deliveryFee}</span>
                </div>
                <div className="item-price d-flex justify-content-between mb-2 text-muted">
                  <span>Platform Fee</span>
                  <span>₹{platformFee}</span>
                </div>
                <hr />
                <div className="item-total d-flex justify-content-between fw-bold fs-5 text-dark">
                  <span>Total</span>
                  <span>₹{grandTotal}</span>
                </div>
              </div>
              
              <div className="main-btn mt-4">
                <button className="btn btn-success w-100 py-3 fw-bold rounded-3 shadow-sm" onClick={() => navigate('/payment')}>
                  Proceed To Pay (₹{grandTotal})
                </button>
              </div>
            </>
          )}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Cart;