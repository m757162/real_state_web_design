import React, { useRef,useEffect } from "react";

import StoreImg from "../../assets/image/storeImg.png";
import { motion, useInView,useAnimate } from "framer-motion";

const Blog = () => {

  const [scope, animate] = useAnimate()
  const [scope2, animate2] = useAnimate()
 

  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const isInView = useInView(ref);
  const isInView2 = useInView(ref2);
  const isInView3 = useInView(ref3);
  const isInView4 = useInView(ref4);
  const isInView5 = useInView(scope);

  useEffect(() => {
    if (isInView5) {
      animate(scope.current, { opacity: 1,y:0 },{duration: 0.8 })
      animate2(scope2.current, { opacity: 1,y:0 },{duration: 0.8})
      
    }else{
      animate(scope.current, { opacity: 0,y:-100 })
      animate2(scope2.current, { opacity: 0,y:100 },{duration: 0.8})
    }
 }, [isInView5])
  return (
    <>
      <section className="py-5 mt-5 bg-body-secondary overflow-x-hidden">
        <div className="container-lg ">
          <div className="h1 my-2" ref={scope}>
            Renting Made Easy for Residents and Property Managers
          </div>
          <div className="color-ash" ref={scope2}>
            Our articles, guides, and videos help you through the process, start
            to finish.
          </div>
          <div className="row mt-4 g-2">
            <div className="col-md-6 col-lg-4">
              <motion.div
                className="bg_primary rounded-4 p-5"
                ref={ref}
                animate={{ scale: isInView ? 1 : 0 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
              >
                <div className="h2">Tips for Renters</div>
                <div className="color-ash">
                  Find answers to all of your renting questions with the best
                  renter’s guide in the galaxy.
                </div>
                <button className="btn btn-outline-light mt-2 rounded-5">
                  Browse Article
                </button>
              </motion.div>
            </div>
            <div className="col-md-6 col-lg-4">
              <motion.div className="bg_primary rounded-4 p-5"
              ref={ref2}
              animate={{ scale: isInView2 ? 1 : 0 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
              >
                <div className="h2">Tips for Renters</div>
                <div className="color-ash">
                  Find answers to all of your renting questions with the best
                  renter’s guide in the galaxy.
                </div>
                <button className="btn btn-outline-light mt-2 rounded-5">
                  Browse Article
                </button>
              </motion.div>
            </div>
            <div className="col-md-6 col-lg-4">
              <motion.div className="bg_primary rounded-4 p-5"
              ref={ref3}
              animate={{ scale: isInView3 ? 1 : 0 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 50 }}>
                <div className="h2">Tips for Renters</div>
                <div className="color-ash">
                  Find answers to all of your renting questions with the best
                  renter’s guide in the galaxy.
                </div>
                <div className="mt-2">
                  <img height="41rem" src={StoreImg} alt="" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
