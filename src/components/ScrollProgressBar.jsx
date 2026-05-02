import React from 'react';
import { motion, useScroll } from 'framer-motion';

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-brand-yellow origin-left z-[100]"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgressBar;
