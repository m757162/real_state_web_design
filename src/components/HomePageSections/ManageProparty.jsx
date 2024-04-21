import React, { useRef, useEffect } from "react";
import { motion, useInView,useAnimationFrame  } from "framer-motion";

const ManageProparty = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView = useInView(ref);
  const isInView2 = useInView(ref2);

 
  return (
    <>
      <div className="container-lg mt-5">      
        <div className="row g-2">
          <div className="col-md-6 ">
            <motion.div
              ref={ref}
              className="mng1"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="h1">
                The Perfect Place to Manage Your Property
              </div>
              <span className="text-ash">
                Work with the best suite of property management tools on the
                market.
              </span>
            </motion.div>
          </div>
          <div
            className="col-md-6 overflow-x-hidden"            
          >
            <motion.div
              className="manage-sec-img rounded-4"
              ref={ref2}              
              animate={{ x: isInView2 ? 0 : "110px" }}
              transition={{ duration: 0.5 }}
            ></motion.div>
          </div>
          <div className="col-md-6 ">
            <div className="bg_primary rounded-4 p-5">
              <div className="h2">Advertise Your Rental</div>
              <div className="text-ash">
                Connect with more than 75 million renters looking for new homes
                using our comprehensive marketing platform. List Your Property
              </div>
              <button className="btn btn-outline-light rounded-5 mt-2">
                Find Out More
              </button>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="bg-dark text-light rounded-4 p-5">
              <div className="h2">Lease 100% Online</div>
              <div className="text-ash">
                Connect with more than 75 million renters looking for new homes
                using our comprehensive marketing platform. List Your Property
              </div>
              <button className="btn btn-outline-light rounded-5 mt-2">
                Find Out More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageProparty;
