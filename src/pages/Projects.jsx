import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { ArrowRight, Maximize2, HardHat, Hammer, Building, ChevronLeft, ChevronRight } from 'lucide-react';
import Section, { SectionHeader } from '../components/Section';

import Ongo1 from '../assets/const12.jpg';
import Ongo2 from '../assets/const13.jpg';
import Ongo3 from '../assets/const14.jpg';
import Ongo4 from '../assets/const15.jpg';
import Ongo5 from '../assets/const16.jpg';
import Comp1 from '../assets/const17.jpg';
import Comp2 from '../assets/const18.jpg';
import Comp3 from '../assets/const19.jpg';
import Comp4 from '../assets/const20.jpg';
import Comp5 from '../assets/const21.jpg';

const Projects = () => {
  const location = useLocation();
  const [filter, setFilter] = useState('All');
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const filterParam = params.get('filter');
    if (filterParam === 'ongoing') setFilter('Ongoing Projects');
    else if (filterParam === 'completed') setFilter('Completed Projects');
    else setFilter('All');
  }, [location.search]);

  const categories = ['All', 'Ongoing Projects', 'Completed Projects'];

  const projects = [
    // ONGOING PROJECTS
    {
      id: 1,
      title: 'Signature Sangam',
      category: 'Ongoing Projects',
      desc: 'Modern commercial development with high-end retail spaces and premium office suites.',
      img: Ongo2,
    },
    {
      id: 2,
      title: 'JKB Skyline',
      category: 'Ongoing Projects',
      desc: 'State-of-the-art residential tower featuring sustainable architecture and luxury living.',
      img: Ongo1,
    },
    {
      id: 3,
      title: 'Urban Heights',
      category: 'Ongoing Projects',
      desc: 'Strategic mixed-use development designed for the future of urban living.',
      img: Ongo3,
    },
    {
      id: 4,
      title: 'Corporate Plaza',
      category: 'Ongoing Projects',
      desc: 'Iconic corporate headquarters featuring advanced engineering and glass facade.',
      img: Ongo4,
    },
    {
      id: 5,
      title: 'Heritage Residency',
      category: 'Ongoing Projects',
      desc: 'Premium residential project combining traditional aesthetics with modern construction techniques.',
      img: Ongo5,
    },

    // COMPLETED PROJECTS
    {
      id: 6,
      title: 'JKB Residency',
      category: 'Completed Projects',
      desc: 'Premium residential complex delivered with world-class amenities and structural excellence.',
      img: Comp1,
    },
    {
      id: 7,
      title: 'Grand Plaza',
      category: 'Completed Projects',
      desc: 'Iconic commercial hub featuring grand architecture and sustainable infrastructure.',
      img: Comp2,
    },
    {
      id: 8,
      title: 'Skyline Apartments',
      category: 'Completed Projects',
      desc: 'A landmark residential project offering panoramic city views and modern lifestyle.',
      img: Comp3,
    },
    {
      id: 9,
      title: 'Elite Enclave',
      category: 'Completed Projects',
      desc: 'Exclusive gated community with bespoke architectural design and luxury finishing.',
      img: Comp4,
    },
    {
      id: 10,
      title: 'Rooftop Garden Estate',
      category: 'Completed Projects',
      desc: 'Innovative living space featuring rooftop amenities and vertical garden concepts.',
      img: Comp5,
    },
  ];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="bg-white min-h-screen text-slate-900 font-outfit">
      {/* Hero Section - JointVenture Style (Flush to Top) */}
      <section className="relative h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={Ongo1}
            className="w-full h-full object-cover opacity-80"
            alt="Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-[12px] font-black text-brand-primary uppercase tracking-[0.5em] block mb-4">Our Portfolio</span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] uppercase tracking-tighter mb-6"
            >
              {filter === 'All' ? (
                <>Discover Our <br /> <span className="text-brand-primary">Premium Projects</span></>
              ) : filter === 'Ongoing Projects' ? (
                <>Explore Our <br /> <span className="text-brand-primary">Ongoing Projects</span></>
              ) : (
                <>View Our <br /> <span className="text-brand-primary">Completed Projects</span></>
              )}
            </motion.h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl">
              Scroll down to explore our diverse range of residential and commercial developments that redefine modern infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-32 px-6 max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-20">
          {/* Left Side: Explore Info */}
          <div className="lg:w-1/4 sticky top-32 h-fit">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-6xl font-black text-slate-900 mb-6 leading-none">Explore</h2>
                <h3 className="text-xl font-bold text-brand-primary uppercase tracking-widest mb-8">
                  {filter === 'All' ? 'Our Portfolio' : `Our ${filter}`}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  Discover how JKB Constructions is redefining excellence in every square foot. From massive infrastructure to luxury living, we build with purpose.
                </p>

                {/* Wavy Line Decoration */}
                <div className="hidden lg:block absolute -right-20 top-1/2 translate-y-1/2">
                  <svg width="100" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 20C20 20 30 5 50 5C70 5 80 35 100 35" stroke="#0f172a" strokeWidth="2" strokeDasharray="4 4" />
                  </svg>
                </div>
              </motion.div>

              <div className="mt-20 space-y-4">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`block w-full text-left px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-all ${filter === cat
                      ? 'bg-slate-900 text-white shadow-xl translate-x-4'
                      : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Project Cards */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, idx) => (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white group cursor-pointer border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 px-4 py-1 bg-white/90 backdrop-blur-md text-[10px] font-black uppercase tracking-widest">
                        {project.category}
                      </div>
                    </div>

                    <div className="p-8 border-t border-slate-50">
                      <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-3 group-hover:text-brand-primary transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-6">
                        {project.desc}
                      </p>
                      <div className="flex items-center text-slate-900 font-bold text-[10px] uppercase tracking-[0.3em] group-hover:translate-x-2 transition-transform">
                        Explore Project <ArrowRight size={14} className="ml-3 text-brand-primary" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
