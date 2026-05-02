import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, HardHat, Hammer, Building, Users, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, ChevronDown, Paintbrush, Ruler, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFormik } from 'formik';
import ConstImage from '../assets/Const.jpg';
import AboutImage from '../assets/const1.jpg';
import AboutImageNew from '../assets/Const4.jpg';
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
import EnquiryImage from '../assets/Cont5.jpg';
import EnquiryImageFinal from '../assets/const6.jpg';
import MangalmImage from '../assets/mangalm2.jpg';
import StatsSection from '../components/StatsSection';

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      constructionType: '',
      area: '',
      fileType: '',
      message: ''
    },
    validate: values => {
      const errors = {};
      if (!values.fullName) errors.fullName = 'Required';
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (!values.phone) errors.phone = 'Required';
      if (!values.constructionType) errors.constructionType = 'Required';
      if (!values.area) errors.area = 'Required';
      if (!values.message) errors.message = 'Required';
      return errors;
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      formik.resetForm();
    },
  });

  const heroTabs = [
    {
      title: "STRUCTURAL MASTERY",
      heading: ["Building The", "Skeletons of", "Tomorrow"],
      img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1600&auto=format&fit=crop"
    },
    {
      title: "HEAVY ENGINEERING",
      heading: ["Engineering", "World Class", "Infrastructure"],
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop"
    },
    {
      title: "INDUSTRIAL POWER",
      heading: ["Massive Scale", "Unmatched", "Performance"],
      img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1600&auto=format&fit=crop"
    },
    {
      title: "CIVIL EXCELLENCE",
      heading: ["Precision", "Driven", "Construction"],
      img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1600&auto=format&fit=crop"
    },
    {
      title: "URBAN SKYLINES",
      heading: ["Building", "Icons of", "The Future"],
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop"
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % heroTabs.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused, heroTabs.length]);

  return (
    <div className="bg-white min-h-screen font-outfit">

      {/* Unified SLIDE Hero Section - CLEAN LIGHT THEME */}
      <section
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative h-[75vh] md:h-screen overflow-hidden bg-slate-50"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full flex items-center"
          >
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0 overflow-hidden ">
              <img
                src={heroTabs[activeTab].img}
                alt="Construction Site"
                className="w-full h-full object-cover opacity-90 transition-all duration-[2000ms]"
              />
              {/* Subtle Linear Gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/20 to-transparent" />
            </div>

            {/* Content Container */}
            <div className="container relative z-10 pt-32 md:pt-48">
              <div className="max-w-6xl mx-auto md:mx-0 px-4 md:px-8">
                <div className="mb-6 flex items-center">
                  <span className="text-sm md:text-base font-black tracking-[0.5em] text-brand-secondary uppercase">
                    {heroTabs[activeTab].title}
                  </span>
                </div>

                <div className="mb-10">
                  {heroTabs[activeTab].heading.map((line, i) => (
                    <h1 key={i} className="text-4xl md:text-5xl lg:text-[6rem] font-bold tracking-tighter text-slate-800/80 leading-[0.85] uppercase">
                      {line}
                    </h1>
                  ))}
                </div>

                {/* No Button as requested */}
                <div className="h-2" />

              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Indicators */}
        <div className="absolute bottom-8 md:bottom-12 left-0 w-full z-30 px-4 md:px-10">
          <div className="container flex items-center space-x-2 md:space-x-4 overflow-x-auto pb-2 hide-scrollbar">
            {heroTabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`flex-1 min-w-[120px] md:min-w-0 py-2 md:py-4 text-left transition-all ${activeTab === i ? 'opacity-100 scale-105 border-b-2 border-brand-primary' : 'opacity-30'}`}
              >
                <span className="text-[9px] md:text-[10px] font-black tracking-[0.1em] md:tracking-[0.2em] text-slate-900 mt-2 md:mt-3 block uppercase whitespace-nowrap">{tab.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* About Us Section */}
      <section className="py-16 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[14px] font-black text-brand-primary uppercase tracking-[0.4em] block mb-6">About Us</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] uppercase tracking-tighter mb-8">
              We are committed to <br />
              <span className="text-brand-primary">superior quality</span> <br />
              and results.
            </h2>
            <div className="space-y-6">
              <h3 className="text-lg font-black text-slate-700 uppercase tracking-widest border-l-4 border-brand-primary pl-6 py-2 bg-slate-50">
                Fastest Growth in Jaipur
              </h3>
              <p className="text-slate-500 leading-relaxed text-lg">
                M/S JKB Constructions was established in the year 2015. Though a young player in the sector, we have achieved the fastest growth in Jaipur, recognized for our technical excellence and timely project completion.
              </p>
              <div className="grid grid-cols-2 gap-8 py-4">
                <div>
                  <span className="text-3xl font-black text-brand-primary block">25L+</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Sqft Delivered</span>
                </div>
                <div>
                  <span className="text-3xl font-black text-slate-900 block">30L+</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Sqft Ongoing</span>
                </div>
              </div>
              <p className="text-slate-500 leading-relaxed text-lg">
                As a premier construction organisation, we hold expertise in residential, commercial, and hospitality sectors. Our core objective is to continually innovate, adopting new technologies to build modern Jaipur.
              </p>
            </div>

            <div className="mt-12">
              <Link to="/about" className="inline-flex items-center space-x-4 group">
                <span className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-brand-primary group-hover:border-brand-primary transition-all">
                  <ArrowRight size={20} className="text-slate-900 group-hover:text-white transition-all" />
                </span>
                <span className="text-[14px] font-black uppercase tracking-[0.3em] text-slate-900">Read More</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Side: Image with Decorative Elements */}
          {/* Right Side: Dual Photo Layout */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Background Decorative Element */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl animate-pulse" />

            <div className="relative overflow-hidden rounded-[24px] shadow-2xl">
              <img
                src={AboutImageNew}
                alt="JKB Construction Site"
                className="w-full h-[600px] object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* Projects Overview Section - Exact Screenshot Alignment */}
      <section className="relative min-h-[600px] lg:min-h-[750px] flex flex-col lg:flex-row items-stretch overflow-hidden">
        {/* Fixed Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-fixed bg-center bg-cover"
          style={{ 
            backgroundImage: `url(${MangalmImage})`,
            backgroundAttachment: 'fixed' 
          }}
        >
          <div className="absolute inset-0 bg-slate-900/40" />
        </div>

        {/* Left Side: Empty Space (Shows Fixed Background) */}
        <div className="w-full lg:w-1/2 relative z-10 min-h-[200px] lg:min-h-0" />

        {/* Right Side: Content Area (Matching Screenshot Exactly) */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start relative z-10">
          <div className="bg-white w-full h-[95%] lg:h-[90%] p-8 lg:p-24 flex flex-col justify-center shadow-[-20px_0_50px_rgba(0,0,0,0.1)]">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <span className="text-[12px] font-black text-brand-primary uppercase tracking-[0.4em] block mb-6">Portfolio Selection</span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 uppercase tracking-tighter mb-8 leading-none break-words">
                Architectural <br /> Milestones
              </h2>
              <p className="text-slate-500 text-base font-medium leading-relaxed mb-16 max-w-lg">
                A legacy of architectural excellence and engineering precision delivered across the pink city.
              </p>

              {/* Two Precise Boxes Grid - Maximum Visibility */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Ongoing Card */}
                <Link to="/projects?filter=ongoing" className="block group">
                  <div className="bg-slate-100/80 p-10 rounded-[2rem] relative transition-all duration-500 border border-slate-200 shadow-md hover:bg-white hover:shadow-2xl">
                    {/* Top Right Action Icon - Dark Style */}
                    <div className="absolute top-8 right-8 w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-white transition-all">
                      <ArrowUpRight size={16} />
                    </div>
                    
                    <div className="mb-10">
                      <Building size={32} className="text-slate-700" />
                    </div>
                    
                    <h3 className="text-sm font-black text-slate-900 mb-2 uppercase tracking-widest">Ongoing</h3>
                    <p className="text-slate-500 text-[11px] leading-tight font-medium">Precision in progress.</p>
                  </div>
                </Link>

                {/* Completed Card */}
                <Link to="/projects?filter=completed" className="block group">
                  <div className="bg-slate-100/80 p-10 rounded-[2rem] relative transition-all duration-500 border border-slate-200 shadow-md hover:bg-white hover:shadow-2xl">
                    {/* Top Right Action Icon - Matching Ongoing Style */}
                    <div className="absolute top-8 right-8 w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-white transition-all">
                      <ArrowUpRight size={16} />
                    </div>
                    
                    <div className="mb-10">
                      <HardHat size={32} className="text-slate-700" />
                    </div>
                    
                    <h3 className="text-sm font-black text-slate-900 mb-2 uppercase tracking-widest">Completed</h3>
                    <p className="text-slate-500 text-[11px] leading-tight font-medium">Delivered excellence.</p>
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
          {/* Bottom Gap Area */}
          <div className="w-full h-[5%] lg:h-[10%] pointer-events-none" />
        </div>
      </section>


      {/* Our Services Section */}
      <section className="pt-16 md:pt-32 pb-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-20">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[14px] font-black text-brand-primary uppercase tracking-[0.4em] block mb-4"
            >
              Our Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter"
            >
              Building Future <br className="md:hidden" /> Infrastructure
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
            {[
              { icon: <Building size={24} strokeWidth={1.5} />, title: "Residential", desc: "Crafting luxury villas and modern apartments with unparalleled attention to detail.", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80" },
              { icon: <Users size={24} strokeWidth={1.5} />, title: "Commercial", desc: "Designing and building high-performance office spaces and retail environments.", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" },
              { icon: <HardHat size={24} strokeWidth={1.5} />, title: "Industrial", desc: "Engineered solutions for massive manufacturing plants and heavy logistics hubs.", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" },
              { icon: <Paintbrush size={24} strokeWidth={1.5} />, title: "Interior Design", desc: "Aesthetic and functional interior transformations that reflect your identity.", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80" },
              { icon: <Hammer size={24} strokeWidth={1.5} />, title: "Renovations", desc: "Modernizing legacy structures with sustainable and smart technologies.", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80" },
              { icon: <Ruler size={24} strokeWidth={1.5} />, title: "Consulting", desc: "Strategic project management and architectural planning for seamless delivery.", img: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=600&q=80" }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[24px] relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.1)] border border-brand-primary/20 hover:border-brand-primary/40 transition-all duration-500 h-auto md:h-[300px] group flex flex-col md:flex-row"
              >
                {/* Image Container - Top on Mobile, Right on Desktop */}
                <div
                  className="relative w-full h-40 md:h-full md:absolute md:top-0 md:right-0 md:bottom-0 md:w-[55%] z-0 overflow-hidden"
                  style={{
                    WebkitMaskImage: window.innerWidth < 768 
                      ? 'linear-gradient(to top, transparent 0%, black 30%)' 
                      : 'linear-gradient(to right, transparent 0%, black 40%)',
                    maskImage: window.innerWidth < 768 
                      ? 'linear-gradient(to top, transparent 0%, black 30%)' 
                      : 'linear-gradient(to right, transparent 0%, black 40%)'
                  }}
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover object-center opacity-90 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />
                </div>

                {/* Content - Bottom on Mobile, Left on Desktop */}
                <div className="relative z-10 flex flex-col w-full md:w-[55%] px-5 pt-5 pb-1 md:p-8 -mt-6 md:mt-0 h-full">
                  {/* Icon */}
                  <div className="w-[52px] h-[52px] bg-white rounded-[16px] shadow-[0_8px_20px_rgb(0,0,0,0.06)] flex items-center justify-center text-brand-primary mb-4 border border-slate-50">
                    {service.icon}
                  </div>

                  <h3 className="text-[17px] font-black text-brand-secondary uppercase tracking-tight mb-2 pr-2">{service.title}</h3>
                  <p className="text-slate-700 text-[13px] md:text-sm leading-relaxed font-semibold pr-2 mb-0 md:flex-grow">
                    {service.desc}
                  </p>

                  {/* Bottom Section */}
                  <div className="mt-3 md:mt-auto w-fit">
                    <div className="w-6 group-hover:w-full h-[2px] bg-brand-primary mb-3 transition-all duration-500 ease-out" />
                    <Link to="/services" className="inline-flex items-center space-x-2 cursor-pointer group/btn">
                      <span className="text-[12px] font-black text-slate-900 group-hover/btn:text-brand-primary transition-colors">Learn More</span>
                      <div className="w-[20px] h-[20px] rounded-full bg-white border border-slate-900 text-slate-900 flex items-center justify-center group-hover/btn:bg-brand-primary group-hover/btn:border-brand-primary group-hover/btn:text-white group-hover/btn:scale-110 transition-all duration-300 shadow-sm group-hover/btn:shadow-brand-primary/30">
                        <ArrowRight size={10} strokeWidth={3} />
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Dotted Pattern - Desktop Only */}
                <div className="hidden md:block absolute top-6 right-6 opacity-[0.15] z-10 transition-opacity duration-500 group-hover:opacity-30">
                  <div className="grid grid-cols-3 gap-[4px]">
                    {[...Array(9)].map((_, idx) => <div key={idx} className="w-1 h-1 bg-slate-500 rounded-full" />)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Valued Clients & Partners Section - Premium Redesign */}
      <section className="pt-16 pb-16 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-20">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[12px] font-black text-brand-primary uppercase tracking-[0.4em] block mb-4"
            >
              Our Network
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter"
            >
              Valued Clients & Partners
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Manglam Ananda",
              "Garh Aangan",
              "Business 18",
              "Utsav"
            ].map((brand, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative h-44 group"
              >
                {/* Featured Project Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <span className="bg-brand-primary text-white text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-brand-primary/20 whitespace-nowrap">
                    Featured Project
                  </span>
                </div>
                
                {/* Card Body */}
                <div className="h-full bg-[#FFF3E8] border-2 border-brand-primary rounded-[32px] flex items-center justify-center p-8 shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer hover:bg-white group">
                  <span className="text-xl md:text-2xl font-black text-slate-900 text-center uppercase tracking-tighter leading-tight group-hover:text-brand-primary transition-colors">
                    {brand}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Enquiry Section */}
      <section className="pt-16 pb-12 bg-slate-50 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Left: Image & Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="aspect-video rounded-3xl overflow-hidden shadow-lg border border-slate-200">
                <img
                  src={EnquiryImageFinal}
                  alt="JKB Network"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-[14px] font-black text-brand-primary uppercase tracking-[0.4em] block mb-4">Enquiry</span>
                <h2 className="text-5xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter mb-8 leading-none">
                  Start Your <br /> Project With Us
                </h2>
                <div className="flex flex-wrap gap-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-primary">
                      <Phone size={20} />
                    </div>
                    <span className="font-bold text-slate-700">+91 141 1234567</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-primary">
                      <Mail size={20} />
                    </div>
                    <span className="font-bold text-slate-700 break-all">info@jkbconstructions.com</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-12 rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100"
            >
              <form onSubmit={formik.handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Full Name</label>
                  <input
                    name="fullName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName}
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl focus:border-brand-primary outline-none transition-all"
                  />
                  {formik.touched.fullName && formik.errors.fullName ? <div className="text-red-500 text-xs font-bold">{formik.errors.fullName}</div> : null}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</label>
                    <input
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl focus:border-brand-primary outline-none transition-all"
                    />
                    {formik.touched.email && formik.errors.email ? <div className="text-red-500 text-xs font-bold">{formik.errors.email}</div> : null}
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Phone Number</label>
                    <input
                      name="phone"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.phone}
                      type="tel"
                      placeholder="+91 00000 00000"
                      className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl focus:border-brand-primary outline-none transition-all"
                    />
                    {formik.touched.phone && formik.errors.phone ? <div className="text-red-500 text-xs font-bold">{formik.errors.phone}</div> : null}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Construction Type</label>
                    <div className="relative">
                      <select 
                        name="constructionType"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.constructionType}
                        className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl focus:border-brand-primary outline-none transition-all appearance-none cursor-pointer text-slate-500"
                      >
                        <option value="" disabled>Select Type</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="industrial">Industrial</option>
                        <option value="infrastructure">Infrastructure</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <ChevronDown size={18} />
                      </div>
                    </div>
                    {formik.touched.constructionType && formik.errors.constructionType ? <div className="text-red-500 text-xs font-bold">{formik.errors.constructionType}</div> : null}
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Area (Sq. Ft.)</label>
                    <input
                      name="area"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.area}
                      type="text"
                      placeholder="e.g. 5000"
                      className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl focus:border-brand-primary outline-none transition-all"
                    />
                    {formik.touched.area && formik.errors.area ? <div className="text-red-500 text-xs font-bold">{formik.errors.area}</div> : null}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">File Type</label>
                    <div className="relative">
                      <select 
                        name="fileType"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.fileType}
                        className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl focus:border-brand-primary outline-none transition-all appearance-none cursor-pointer text-slate-500"
                      >
                        <option value="" disabled>Select Format</option>
                        <option value="pdf">PDF Files</option>
                        <option value="image">Image Files</option>
                        <option value="cad">CAD Files</option>
                        <option value="excel">Excel Files</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <ChevronDown size={18} />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Upload Project File</label>
                    <input
                      type="file"
                      className="w-full bg-slate-50 border border-slate-100 p-[11px] rounded-xl focus:border-brand-primary outline-none transition-all text-xs file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-[10px] file:font-black file:uppercase file:bg-slate-900 file:text-white hover:file:bg-brand-primary cursor-pointer"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Project Details</label>
                  <textarea
                    name="message"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                    rows="3"
                    placeholder="Briefly describe your project requirements..."
                    className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl focus:border-brand-primary outline-none transition-all resize-none"
                  ></textarea>
                  {formik.touched.message && formik.errors.message ? <div className="text-red-500 text-xs font-bold">{formik.errors.message}</div> : null}
                </div>

                <button type="submit" className="w-full bg-brand-primary text-white py-4 rounded-xl font-black uppercase tracking-widest flex items-center justify-center hover:bg-slate-900 transition-colors group">
                  Submit Details
                  <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
