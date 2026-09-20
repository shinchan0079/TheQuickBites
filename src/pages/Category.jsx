import React from 'react';
import './CSS/Category.css';
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/common/BottomNav';

const Category = () => {
  const navigate = useNavigate();

  return (
    <div className="main-layout pb-5 mb-5">
        <div className="category-page-outer">

            <div className="heading-outer">
              <FaArrowLeft id='arrow' onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
              <h2>All Categories</h2>
            </div>

            <div className="all-category-outer">

              <div className="category-card">
                <div className="category-image-outer">
                  <img src="/images/chaat.png" alt="" />
                </div>
                <div className="category-name-outer">Chaat</div>
              </div>

              <div className="category-card">
                <div className="category-image-outer">
                  <img src="/images/momos.png" alt="" />
                </div>
                <div className="category-name-outer">Momos</div>
              </div>

              <div className="category-card">
                <div className="category-image-outer">
                  <img src="/images/burger.png" alt="" />
                </div>
                <div className="category-name-outer">Burger</div>
              </div>

              <div className="category-card">
                <div className="category-image-outer">
                  <img src="/images/paratha.png" alt="" />
                </div>
                <div className="category-name-outer">Paratha</div>
              </div>

              <div className="category-card">
                <div className="category-image-outer">
                  <img src="/images/samosha.png" alt="" />
                </div>
                <div className="category-name-outer">Samosha</div>
              </div>

              <div className="category-card">
                <div className="category-image-outer">
                  <img src="/images/snecks.png" alt="" />
                </div>
                <div className="category-name-outer">Snacks</div>
              </div>

              <div className="category-card">
                <div className="category-image-outer">
                  <img src="/images/drink.png" alt="" />
                </div>
                <div className="category-name-outer">Drink</div>
              </div>

              <div className="category-card">
                <div className="category-image-outer">
                  <img src="/images/more.png" alt="" id='more' />

                </div>
                <div className="category-name-outer">More</div>
              </div>

            </div>

        </div>
        
        <BottomNav />
    </div>
  )
}

export default Category;