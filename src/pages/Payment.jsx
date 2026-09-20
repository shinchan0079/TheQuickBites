import React from "react";
import "./CSS/Payment.css";

import { FaArrowLeft } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const navigate = useNavigate();

    return (
        <div className="payment-page-outer">

            {/* ================= HEADER ================= */}

            <div className="header">

                <div className="logo-main-outer">

                    <div className="arrow-outer" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}>
                        <FaArrowLeft />
                    </div>

                    <div className="logo-outer">
                        <img
                            src="/images/logo.png"
                            alt="QuickBites"
                        />
                    </div>

                </div>

                <div className="question-outer">
                    <FaRegQuestionCircle />
                </div>

            </div>


            {/* ================= CONTENT ================= */}

            <div className="payment-content">


                {/* ================= DELIVERY ADDRESS ================= */}

                <div className="user-info">

                    <div className="location-outer">
                        <FaLocationDot id="location" />
                    </div>

                    <div className="deliver-to">

                        <h4>Deliver to</h4>

                        <div className="home-icon">
                            <IoMdHome />
                            <span>Home</span>
                        </div>

                        <div className="address">
                            <strong>Shubham Vishwakarma</strong>
                            <br />
                            +91 8506017646
                            <br />
                            House No. 12B, Aliganj, Lucknow,
                            <br />
                            Uttar Pradesh - 226024
                        </div>

                    </div>

                    <div className="change">
                        Change
                        <MdKeyboardArrowRight />
                    </div>

                </div>


                {/* ================= CONTACT DETAILS ================= */}

                <div className="contact-section">

                    <div className="contact-heading">

                        <span>Contact details</span>

                        <div className="edit-contact">
                            Edit
                            <MdKeyboardArrowRight />
                        </div>

                    </div>


                    {/* CALL */}

                    <div className="contact-row">

                        <div className="contact-left">

                            <div className="contact-icon call-color">
                                <IoCall />
                            </div>

                            <div className="contact-text">
                                +91 8506017646
                            </div>

                        </div>

                        <MdKeyboardArrowRight className="contact-arrow" />

                    </div>


                    {/* WHATSAPP */}

                    <div className="contact-row">

                        <div className="contact-left">

                            <div className="contact-icon whatsapp-color">
                                <FaWhatsapp />
                            </div>

                            <div className="contact-text">
                                Get order updates on WhatsApp
                            </div>

                        </div>

                        <div className="toggle active">
                            <div className="toggle-circle"></div>
                        </div>

                    </div>

                </div>


                {/* ================= DELIVERY INSTRUCTIONS ================= */}

                <div className="delivery-instruction">

                    <div className="instruction-icon">
                        <FaRegFileAlt />
                    </div>

                    <div className="instruction-content">

                        <div className="instruction-title">
                            Delivery instructions
                        </div>

                        <div className="instruction-subtitle">
                            Add a note for delivery partner
                        </div>

                    </div>

                    <MdKeyboardArrowRight className="section-arrow" />

                </div>


                {/* ================= OFFERS ================= */}

                <div className="offers-section">

                    <div className="offers-left">

                        <div className="offer-icon">
                            <FaTag />
                        </div>

                        <div>

                            <div className="offer-title">
                                Offers & Coupons
                            </div>

                            <div className="offer-subtitle">
                                View available offers
                            </div>

                        </div>

                    </div>

                    <div className="offer-right">

                        <span className="offer-badge">
                            1 offer available
                        </span>

                        <MdKeyboardArrowRight />

                    </div>

                </div>


                {/* ================= PAYMENT ================= */}

                <div className="payment-section">

                    <div className="payment-heading">

                        <div className="payment-title-left">
                            <FaWallet />
                            <span>Payment</span>
                        </div>

                    </div>


                    {/* CASH ON DELIVERY */}

                    <div className="payment-option selected">

                        <div className="radio">
                            <div className="radio-inner"></div>
                        </div>

                        <div className="payment-option-icon">
                            <FaMoneyBillWave />
                        </div>

                        <div className="payment-option-text">

                            <div className="payment-name">
                                Cash on delivery
                            </div>

                            <div className="payment-subtitle">
                                Pay at your door
                            </div>

                        </div>

                        <span className="most-popular">
                            Most Popular
                        </span>

                    </div>


                    {/* UPI */}

                    <div className="payment-option">

                        <div className="radio"></div>

                        <div className="payment-option-icon">
                            <FaGooglePay />
                        </div>

                        <div className="payment-option-text">

                            <div className="payment-name">
                                UPI
                            </div>

                            <div className="payment-subtitle">
                                Google Pay, PhonePe, Paytm, etc.
                            </div>

                        </div>

                    </div>


                    {/* CARD */}

                    <div className="payment-option">

                        <div className="radio"></div>

                        <div className="payment-option-icon">
                            <FaCreditCard />
                        </div>

                        <div className="payment-option-text">

                            <div className="payment-name">
                                Card
                            </div>

                            <div className="payment-subtitle">
                                Credit / Debit Card
                            </div>

                        </div>

                    </div>


                    {/* WALLET */}

                    <div className="payment-option">

                        <div className="radio"></div>

                        <div className="payment-option-icon">
                            <FaWallet />
                        </div>

                        <div className="payment-option-text">

                            <div className="payment-name">
                                Wallet
                            </div>

                            <div className="payment-subtitle">
                                Wallets like Paytm Wallet, etc.
                            </div>

                        </div>

                    </div>

                </div>


                {/* ================= BILL DETAILS ================= */}

                <div className="bill-section">

                    <div className="bill-heading">

                        <div className="bill-title">
                            <FaRegFileAlt />
                            <span>Bill details</span>
                        </div>

                        <IoInformationCircleOutline />

                    </div>


                    <div className="bill-row">
                        <span>Item total</span>
                        <span>₹70</span>
                    </div>

                    <div className="bill-row">
                        <span>Delivery fee</span>
                        <span>₹10</span>
                    </div>

                    <div className="bill-row">
                        <span>Platform fee</span>
                        <span>₹5</span>
                    </div>

                    <div className="bill-row total-row">
                        <strong>Total</strong>
                        <strong>₹85</strong>
                    </div>

                </div>


                {/* Bottom spacing */}
                <div className="bottom-space"></div>

            </div>


            {/* ================= BOTTOM BAR ================= */}

            <div className="bottom-order-bar">

                <div className="bottom-total">

                    <span>Total Amount</span>

                    <strong>
                        ₹110
                    </strong>

                </div>

                <button className="place-order-btn">
                    Place Order
                    <span>→</span>
                </button>

            </div>

        </div>
    );
};

export default Payment;