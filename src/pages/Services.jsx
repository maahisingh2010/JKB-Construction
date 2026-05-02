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
    <div className="bg-white min-h-screen text-slate-900 pt-24 pb-20">
      {/* Services Hero - LIGHT */}
      <section className="relative py-16 md:py-32 overflow-hidden bg-slate-50 border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#F15A2405_0%,_transparent_70%)] opacity-50" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="text-brand-primary font-black tracking-[0.4em] uppercase text-sm mb-6 block">Capabilities</span>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-none mb-10 text-slate-800/90">
              End-to-End <br /> <span className="text-brand-primary">Solutions.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              We provide a full spectrum of construction and engineering services powered by cutting-edge technology and decades of expertise.
            </p>
          </motion.div>
        </div>
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
              className="bg-slate-50 p-12 rounded-3xl group transition-all duration-500 hover:bg-white hover:shadow-2xl border border-slate-100"
            >
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-10 transition-all duration-500 bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-white">
                {React.cloneElement(service.icon, { className: 'h-10 w-10' })}
              </div>
              <h3 className="text-3xl font-black mb-6 text-slate-900 group-hover:text-brand-primary transition-colors">{service.title}</h3>
              <p className="text-slate-500 text-lg leading-relaxed group-hover:text-slate-600 transition-colors">
                {service.desc}
              </p>
              <div className="w-0 h-1 mt-10 transition-all duration-700 group-hover:w-full bg-brand-primary" />
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
