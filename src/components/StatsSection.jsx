import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const StatNumber = ({ value, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "0px" });

  const numValue = parseFloat(value.replace(/[^0-9.]/g, '')) || 0;
  const suffix = value.replace(/[0-9.]/g, '');

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(0, numValue, {
        duration: 2,
        delay: delay,
        ease: "easeOut",
        onUpdate(latest) {
          setDisplayValue(Math.floor(latest));
        },
      });
      return () => controls.stop();
    } else {
      setDisplayValue(0);
    }
  }, [inView, numValue, delay]);

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const stats = [
    { value: '100+', label: 'Complete projects', bg: 'bg-[#f47a4d]', text: 'text-white' },
    { value: '25LT', label: 'Sq.ft Area', bg: 'bg-slate-800', text: 'text-white' },
    { value: '600+', label: 'Happy Families', bg: 'bg-[#f47a4d]', text: 'text-white' },
    { value: '30+', label: 'Ongoing Projects', bg: 'bg-slate-800', text: 'text-white' },
  ];

  return (
    <section className="w-full grid grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: i * 0.1 }}
          className={`${stat.bg} ${stat.text} py-12 md:py-24 px-2 md:px-6 text-center relative overflow-hidden group`}
        >
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 transition-all group-hover:scale-[25] duration-700" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-black mb-3 tracking-tighter">
              <StatNumber value={stat.value} delay={i * 0.2 + 0.3} />
            </h2>
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] opacity-80">
              {stat.label}
            </p>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default StatsSection;
