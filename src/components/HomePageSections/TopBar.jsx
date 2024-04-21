import React from "react";

import PhoneIcon from "../../assets/icon/teliphone.svg";
import Mail from "../../assets/icon/Group.svg";
import Globe from "../../assets/icon/globe.svg";
import Fb from "../../assets/icon/fb.svg";
import Tw from "../../assets/icon/tw.svg";
import Pinterest from "../../assets/icon/pinterest.svg";
import { SlSocialInstagram } from "react-icons/sl";

const TopBar = () => {
  return (
    <>
      <div
        className="topbar  theme-color d-md-flex d-none align-items-center"
        style={{ height: "50px" }}
      >
        <div className="container-lg">
          <div className="row justify-content-between">
            <div className="col d-flex justify-content-start">
              <img src={PhoneIcon} alt="React Logo" className="me-2" />
              <span>supprot@gmail.com</span>

              <img src={Mail} alt="React Logo" className="ms-4 me-2" />
              <span>supprot@gmail.com</span>
            </div>

            <div className="col justify-content-end d-flex">
              <img src={Globe} alt="React Logo" className="me-1" />
              <span>English</span>
              <a href="#" className="ms-5 me-4">
                SignUp/SignIn
              </a>

              <div className="social-icon d-flex align-items-center gx-1">
                <SlSocialInstagram className="me-1" />
                <img src={Fb} alt="React Logo" className="me-1" />
                <img src={Tw} alt="React Logo" className="me-1" />
                <img src={Pinterest} alt="React Logo" className="me-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
