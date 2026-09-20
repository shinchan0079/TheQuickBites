import React from 'react';
import Navbar from '../components/common/Navbar';
import BottomNav from '../components/common/BottomNav';
import { useNavigate } from 'react-router-dom';

const vendorItems = [
  { id: 101, name: 'Pani Puri', price: '30', vendor: 'Sharma Chaat Bhandar', image: '/images/chaat/i1.png' },
  { id: 102, name: 'Dahi Puri', price: '40', vendor: 'Sharma Chaat Bhandar', image: '/images/chaat/i3.png' }
];

const VendorProfile = ({ cartItems = [], addToCart, decreaseQuantity }) => {
  return (
    <div className="main-layout pb-5 mb-5">
      <Navbar />
      
      <main className="container mt-4">
        <div className="vendor-page-outer text-start">
          <div className="poster rounded-4 overflow-hidden shadow-sm mb-3" style={{height: '200px'}}>
            <img src="/images/Stalls/poster.png" alt="Vendor Poster" className="w-100 h-100 object-fit-cover" />
          </div>
          
          <div className="content-outer mt-3">
            <h2 className="fw-bold">Sharma Chaat Bhandar</h2>
            <div className="range-outer text-muted mb-2">
              <span>Starts- ₹22</span> <span className="mx-2">•</span> <span>0.3km</span>
            </div>
            
            <div className="filter-btn-outer d-flex gap-2 mt-3 overflow-auto pb-2" style={{scrollbarWidth: 'none'}}>
              <div className='filter-btn btn btn-outline-success rounded-pill px-3 py-1 text-nowrap'>Chaat</div>
              <div className='filter-btn btn btn-outline-success rounded-pill px-3 py-1 text-nowrap'>Pani Puri</div>
              <div className='filter-btn btn btn-outline-success rounded-pill px-3 py-1 text-nowrap'>Snacks</div>
              <div className='filter-btn btn btn-outline-success rounded-pill px-3 py-1 text-nowrap'>Sweets</div>
            </div>
            
            <div className='about-section mt-4'>
              <h4 className="fw-bold">About</h4>
              <p className="text-muted">Famous for our authentic street food taste. Bringing the best chaat and pani puri to your doorstep with supreme hygiene and quality.</p>
            </div>
            
            <div className="items-outer mt-4">
              <h4 className="fw-bold mb-3">Popular Items</h4>
               <div className='dishes-outer d-flex flex-column gap-3'>
                {vendorItems.map((item) => (
                  <div key={item.id} className="item d-flex align-items-center p-2 border rounded shadow-sm bg-white">
                    <div className="item1-inner" style={{width: '80px', height: '80px', borderRadius: '10px', overflow: 'hidden'}}>
                      <img src={item.image} alt={item.name} className="w-100 h-100 object-fit-cover" />
                    </div>
                    <div className="item2-inner flex-grow-1 px-3 d-flex justify-content-between align-items-center">
                      <div className="inner1-cotent">
                        <span className="fw-bold fs-5">{item.name}</span><br />
                        <span className="text-success fw-bold">₹{item.price}</span>
                      </div>
                      {cartItems.find((i) => i.id === item.id) ? (
                        <div className="d-flex align-items-center border border-success rounded-pill px-2 py-1 bg-white">
                          <div 
                            className="px-2 fw-bold text-success cursor-pointer fs-5" 
                            style={{cursor: 'pointer'}}
                            onClick={() => decreaseQuantity(item.id)}
                          >
                            -
                          </div>
                          <div className="px-2 fw-bold text-success">{cartItems.find((i) => i.id === item.id).quantity}</div>
                          <div 
                            className="px-2 fw-bold text-success cursor-pointer fs-5" 
                            style={{cursor: 'pointer'}}
                            onClick={() => addToCart(item)}
                          >
                            +
                          </div>
                        </div>
                      ) : (
                        <div 
                          className="inner2-cotent btn btn-success btn-sm px-3 rounded-pill fw-bold" 
                          style={{cursor:'pointer'}}
                          onClick={() => addToCart(item)}
                        >
                          ADD
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button className='View-btn btn btn-success w-100 py-3 mt-4 fw-bold rounded-3 shadow-sm'>View Full Menu</button>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default VendorProfile;
