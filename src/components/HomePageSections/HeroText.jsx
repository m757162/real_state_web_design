import React from 'react';
import { motion } from "framer-motion";

const HeroText = () => {
    return (
        <>
            <motion.div
                className="h2 hero-header fw-bold"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5}}
              >
                Discover Your New <span className="color-primary">Home</span>
              </motion.div>
              <p className="f300 mb-5 text-ash">
                Helping 100 million renters find their perfect fit.
              </p>
        </>
    );
}

export default HeroText;
