import React from "react";

import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Sslider from "../swiperSlider";

const SlideSec = () => {
  return (
    <>
      <div className="container-xl">
        <div className="d-flex justify-content-between py-2">
          <div className="h1 text-light">Explore Rentals in Chicago, IL</div>
          <div className="text-ash d-flex align-items-center">
            View All <MdKeyboardArrowRight className="fs-4" />
          </div>
        </div>
        <Sslider />
        <div className="text-end mt-4">
          <button
            className={`btn mx-2 p-2  rounded-5 btn-outline-light swiper-explor-button-prev `}
          >
            <MdKeyboardArrowLeft className="fs-4" />
          </button>
          <button
            className={`btn p-2 rounded-5 btn-outline-light swiper-explor-button-next`}
          >
            <MdKeyboardArrowRight className="fs-4" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SlideSec;
