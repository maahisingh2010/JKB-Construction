import React, { useEffect, useState, useRef } from 'react';
import { useInView, animate, motion } from 'framer-motion';

const AnimatedCounter = ({ value, label, duration = 2, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  // Extract number and suffix (like "+", "%")
  const numValue = parseFloat(value.replace(/[^0-9.]/g, '')) || 0;
  const suffix = value.replace(/[0-9.]/g, '');

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(0, numValue, {
        duration: duration,
        delay: delay,
        ease: "easeOut",
        onUpdate(latest) {
          // If the original value had a decimal, keep it, otherwise floor it
          if (value.includes('.')) {
            setDisplayValue(latest.toFixed(1));
          } else {
            setDisplayValue(Math.floor(latest));
          }
        },
      });
      return () => controls.stop();
    }
  }, [inView, numValue, duration, delay, value]);

  return (
    <div ref={ref} className="relative p-6 group">
      <div className="absolute inset-0 border border-white/10 rounded-sm transform scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500" />
      <motion.div 
        initial={{ scale: 0.5, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
        transition={{ type: "spring", delay: delay }}
        className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-brand-yellow to-yellow-600 mb-4 drop-shadow-lg flex justify-center"
      >
        {displayValue}
        <span>{suffix}</span>
      </motion.div>
      <div className="text-gray-400 font-bold text-lg tracking-wide uppercase">{label}</div>
    </div>
  );
};

export default AnimatedCounter;
