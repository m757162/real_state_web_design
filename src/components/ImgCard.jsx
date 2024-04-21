import React, { useRef } from "react";
import Rectangle from "../assets/image/Rectangle.png";
import { motion, useInView } from "framer-motion";

const ImgCard = ({ animation_direction = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <>
      <div className="h1 fw-bold text-center mt-5">
        The Most Rental Listings
      </div>
      <div className="text-ash">
        Choose from over 1 million apartments, houses, condos, and townhomes for
        rent.
      </div>
      <motion.div
        className="body-center-img my-3 position-relative"
        ref={ref}
        animate={{ x: isInView ? 0 : `${animation_direction}210px` }}
        transition={{ duration: 0.5 }}
      >
        <img className="img-fluid" src={Rectangle} alt="" />
        <div className="img-overly-text">
          <div className="h1 text-white">Renting Made Simple</div>
          <div className="text-white my-2 d-none d-md-block">
            Browse the highest quality listings, apply online, sign your lease,
            and even pay your rent
          </div>
          <button className="btn btn-outline-light rounded-5 mt-2">
            Find Out More
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default ImgCard;
