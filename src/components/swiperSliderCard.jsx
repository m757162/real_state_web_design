import React from "react";
import SlideImg from "../assets/image/explor.png";

const swiperSliderCard = ({ id }) => {
  return (
    <>
      <div className="slide_img_sec position-relative">
        <img src={SlideImg} className="img-fluid rounded-2" alt="" srcSet="" />
        <div className="slide_imag_overly_txt text-light">
          <p className="fw-bold">Presidential Towers {id}</p>
          <p className="">555 W Madison St, Chicago, IL 60661</p>
          <div className="d-flex justify-content-between">
            <p>Studio - 2 Beds</p>
            <p className="fw-bold">$1,475 - $6,080</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default swiperSliderCard;
