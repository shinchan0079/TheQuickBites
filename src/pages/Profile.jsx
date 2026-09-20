import React from 'react';
import './CSS/Profile.css';
import { MdArrowForwardIos } from "react-icons/md";
import { PiCodesandboxLogoLight } from "react-icons/pi";
import { IoWalletOutline } from "react-icons/io5";
import { PiAddressBook } from "react-icons/pi";
import { MdOutlineSupportAgent } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaUserCheckSolid } from "react-icons/lia";
import BottomNav from '../components/common/BottomNav';

const Profile = () => {
  return (
    <div className="main-layout pb-5 mb-5">
        <div className="profile-page-outer">
          <div className="user-box-outer">
            <div className="profile-photo">
              <img src="/images/avter-logo.png" alt="" />
            </div>
            <div className="username">
              <h3>Abhay Singh</h3>
              <br />
              <p>+91 8506017646</p>
            </div>
          </div>

          <div className="user-section-outer">

            <div className="section">
              <div className="activity-section-outer">
                <div className="activity-logo-outer"><PiCodesandboxLogoLight /></div>
                <div className="activity-outer">My Orders</div>
              </div>
              <div className="activity-arrow"><MdArrowForwardIos /></div>
            </div>

             <div className="section">
              <div className="activity-section-outer">
                <div className="activity-logo-outer"><IoWalletOutline /></div>
                <div className="activity-outer">Wallet & Offers</div>
              </div>
              <div className="activity-arrow"><MdArrowForwardIos /></div>
            </div>

             <div className="section">
              <div className="activity-section-outer">
                <div className="activity-logo-outer"><PiAddressBook /></div>
                <div className="activity-outer">Address Book</div>
              </div>
              <div className="activity-arrow"><MdArrowForwardIos /></div>
            </div>

             <div className="section">
              <div className="activity-section-outer">
                <div className="activity-logo-outer"><MdOutlineSupportAgent /></div>
                <div className="activity-outer">Help & Support</div>
              </div>
              <div className="activity-arrow"><MdArrowForwardIos /></div>
            </div>

             <div className="section">
              <div className="activity-section-outer">
                <div className="activity-logo-outer"><IoSettingsOutline /></div>
                <div className="activity-outer">Settings</div>
              </div>
              <div className="activity-arrow"><MdArrowForwardIos /></div>
            </div>

             <div className="section">
              <div className="activity-section-outer">
                <div className="activity-logo-outer"><LiaUserCheckSolid /></div>
                <div className="activity-outer1">About TheQuickBites</div>
              </div>
              <div className="activity-arrow"><MdArrowForwardIos /></div>
            </div>

          </div>
        </div>
        
        <BottomNav />
    </div>
  )
}

export default Profile;