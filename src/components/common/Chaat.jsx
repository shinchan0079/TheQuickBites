import React from 'react';
import { FaStar } from "react-icons/fa6";

const Chaat = ({ text, image, price, range, rating }) => {
  return (
    <div className="item1 d-flex flex-column border rounded shadow-sm bg-white overflow-hidden h-100" style={{minWidth: '160px'}}>
      {/* Food Image */}
      <div className="item-inner1 position-relative" style={{height: '140px'}}>
        <img src={image} alt={text} className="w-100 h-100 object-fit-cover" />
        <div className="position-absolute top-0 end-0 m-2 bg-white rounded-pill px-2 py-1 shadow-sm d-flex align-items-center" style={{fontSize: '12px'}}>
          <FaStar color="orange" className="me-1" />
          <span className="fw-bold">{rating}</span>
        </div>
      </div>

      {/* Food Details */}
      <div className="item-inner2 p-3 d-flex flex-column flex-grow-1">
        <h6 className="fw-bold text-truncate mb-1">{text}</h6>
        <span className="text-muted small mb-2">{range}</span>
        
        <div className="d-flex justify-content-between align-items-end mt-auto">
          <span className="fw-bold fs-5">{price}</span>
          {/* Add Button */}
          <div className="item-inner3 btn btn-success btn-sm rounded-circle d-flex align-items-center justify-content-center fw-bold shadow-sm" style={{width: '32px', height: '32px', cursor: 'pointer'}}>
            +
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chaat;
