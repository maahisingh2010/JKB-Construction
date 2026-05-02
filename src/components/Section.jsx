import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ children, className = '', id = '', bg = 'white' }) => {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-brand-light',
    dark: 'bg-brand-dark text-white',
    yellow: 'bg-brand-yellow text-brand-dark',
  };

  return (
    <section id={id} className={`py-20 md:py-28 ${bgColors[bg]} ${className}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export const SectionHeader = ({ title, subtitle, centered = false, light = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <span className={`uppercase tracking-wider text-sm font-bold mb-2 block ${light ? 'text-brand-yellow' : 'text-brand-yellow'}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${light ? 'text-white' : 'text-brand-dark'}`}>
        {title}
      </h2>
      <div className={`h-1 w-20 bg-brand-yellow mt-6 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default Section;
