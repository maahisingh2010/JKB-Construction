import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HardHat } from 'lucide-react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center"
          >
            <div className="w-24 h-24 bg-jkb-orange/10 rounded-full flex items-center justify-center mb-6">
               <HardHat className="h-12 w-12 text-jkb-orange" />
            </div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tighter">
              JKB<span className="text-jkb-orange">CONSTRUCTIONS</span>
            </h1>
            <p className="text-[10px] font-bold text-jkb-green tracking-[0.3em] uppercase mt-4">
              Building The Future
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
