import React from 'react';
import { motion } from 'framer-motion';
import { Building, Users, PenTool, HardHat, Ruler, Truck } from 'lucide-react';
import Section, { SectionHeader } from '../components/Section';

const Services = () => {
  const serviceList = [
    { icon: <Building />, title: 'Residential Construction', desc: 'From luxury villas to high-rise apartments, we build spaces that define modern living.' },
    { icon: <Users />, title: 'Commercial Infrastructure', desc: 'Developing office complexes, retail centers, and industrial hubs that drive economic growth.' },
    { icon: <PenTool />, title: 'Smart Renovations', desc: 'Transforming legacy structures into intelligent, sustainable, and modern environments.' },
    { icon: <HardHat />, title: 'Project Management', desc: 'Precision-driven management ensuring every project is delivered on time and within budget.' },
    { icon: <Ruler />, title: 'Architectural Design', desc: 'Conceptualizing future-ready designs that blend aesthetic brilliance with structural integrity.' },
    { icon: <Truck />, title: 'Logistics & Equipment', desc: 'Global supply chain solutions and a fleet of advanced construction machinery.' },
  ];

  return (
    <div className="bg-white min-h-screen text-slate-900 pb-20">
      {/* Services Hero - FULL SCREEN ANIMATED IMAGE */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src="/services_hero.jpg" 
            alt="End-to-End Solutions" 
            className="w-full h-full object-cover object-[20%_center] md:object-center"
          />
        </motion.div>
        
        {/* Optional overlay if text is hard to read, but since text is built-in we can leave it mostly clear. 
            Adding a very subtle gradient at the top so navbar is visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-transparent pointer-events-none" />
      </section>

      {/* Services Grid - LIGHT */}
      <Section bg="white" className="py-20 md:py-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-50 p-8 rounded-3xl group transition-all duration-500 hover:bg-white hover:shadow-2xl border border-brand-primary/30 hover:border-brand-primary flex flex-col"
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-white">
                {React.cloneElement(service.icon, { className: 'h-8 w-8' })}
              </div>
              <h3 className="text-2xl font-black mb-4 text-slate-900 group-hover:text-brand-primary transition-colors">{service.title}</h3>
              <p className="text-slate-500 text-base leading-relaxed group-hover:text-slate-600 transition-colors flex-grow">
                {service.desc}
              </p>
              <div className="w-0 h-1 mt-6 transition-all duration-700 group-hover:w-full bg-brand-primary" />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Quality Banner - COMPACT PREMIUM LOOK */}
      <section className="py-16 md:py-24 bg-[#f47a4d] text-white relative overflow-hidden clip-slant">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
              Quality is our <br /> <span className="text-slate-900 underline decoration-white/20">Foundation.</span>
            </h2>
            <div className="space-y-8">
              <p className="text-xl md:text-2xl font-bold text-white leading-relaxed max-w-xl">
                We don't just build structures; we build trust through engineering precision and unmatched safety standards.
              </p>
              
              <div className="flex flex-wrap gap-8 pt-4">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 min-w-[160px]">
                  <div className="text-4xl md:text-5xl font-black mb-1 text-white">ISO</div>
                  <div className="uppercase tracking-[0.3em] text-[10px] font-black opacity-70">Certified</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 min-w-[160px]">
                  <div className="text-4xl md:text-5xl font-black mb-1 text-white">A+</div>
                  <div className="uppercase tracking-[0.3em] text-[10px] font-black opacity-70">Safety Grade</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
