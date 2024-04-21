import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SearchSec = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <>
      <div className="container-lg my-5 overflow-hidden">
        <div className="row justify-content-center">
          <div className="col col-xxl-8">
            <motion.div
              className="bg_primary rounded-5 p-5 search_card position-relative"
              ref={ref}             
              animate={{ scale: isInView ? 1 : 0 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
            >
              <div className="h2 text-light fw-bold">
                Search over 1 million listings
              </div>
              <div className="text-ash">
                Search over 1 million listings including apartments, houses,
                condos, and townhomes available for rent. You’ll find your next
                home, in any style you prefer.
              </div>
              <div className="d-flex mt-3 gap-2">
                <input
                  type="search"
                  className="form-control"
                  placeholder="search Here"
                />
                <button className="btn btn-light rounded-2">search</button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchSec;
