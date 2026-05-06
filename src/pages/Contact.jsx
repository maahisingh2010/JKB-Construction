import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import { Mail, Phone, MapPin, Send, ChevronDown, ArrowRight } from 'lucide-react';
import ConstImage from '../assets/Const.jpg';
import ContactImg from '../assets/const22.jpg';

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      phone: '',
      email: '',
      requirement: '',
      message: ''
    },
    validate: values => {
      const errors = {};
      if (!values.fullName) errors.fullName = 'Required';
      if (!values.phone) errors.phone = 'Required';
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (!values.requirement) errors.requirement = 'Required';
      if (!values.message) errors.message = 'Required';
      return errors;
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      formik.resetForm();
    },
  });

  return (
    <div className="min-h-screen relative font-outfit overflow-hidden bg-[#0A1128] pt-20">
      {/* Full Page Animated Background Image */}
      <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
        <motion.img 
          src="/contact_us_bg.jpg" 
          alt="Contact Background" 
          animate={{ 
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="w-full h-full object-cover opacity-60"
        />
        {/* Dark overlay with slight blur to make bright images work beautifully with white text */}
        <div className="absolute inset-0 bg-[#0A1128]/60 backdrop-blur-[3px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128]/80 via-[#0A1128]/40 to-[#0A1128]" />
      </div>

      <div className="container relative z-10 px-6 py-12 lg:py-24 max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-16 lg:mb-24">
          {/* Left Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-brand-primary/20 border border-brand-primary/30 text-brand-primary text-[10px] font-black uppercase tracking-[0.3em] mb-6 shadow-[0_0_15px_rgba(242,101,34,0.3)]">
              GET IN TOUCH
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white leading-tight mb-6 drop-shadow-2xl">
              Start Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-400">Project.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 font-medium max-w-lg leading-relaxed mb-8">
              Whether you have a visionary commercial hub or a luxury residential complex in mind, our engineering experts are ready to build your dreams.
            </p>
            <button className="px-8 py-4 bg-brand-primary hover:bg-orange-600 text-white rounded-full font-black uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(242,101,34,0.4)] hover:shadow-[0_0_30px_rgba(242,101,34,0.6)] flex items-center justify-center gap-2 group">
              Contact Us <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:flex justify-end"
          >
            {/* Clean Frame Wrapper */}
            <div className="relative p-3 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-sm shadow-[0_20px_50px_rgba(0,0,0,0.3)] max-w-xl w-full ml-auto">
              {/* Decorative accent */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-primary/20 rounded-full blur-2xl z-0" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl z-0" />
              
              <div className="relative rounded-[2rem] overflow-hidden h-[400px] lg:h-[550px] z-10 border border-white/5">
                <img 
                  src={ContactImg} 
                  alt="Construction Site" 
                  className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-105"
                />
                {/* Image Inner Gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/60 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section: Contact Cards & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Contact Information Cards */}
          <div className="lg:col-span-5 space-y-4">
            <motion.a 
              href="tel:+919875001813"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors group flex items-start gap-6 cursor-pointer"
            >
              <div className="w-14 h-14 bg-brand-primary/20 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors shrink-0 shadow-lg">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-1">Call Us</h3>
                <p className="text-slate-400 text-sm mb-2 font-medium">Mon-Fri from 9am to 6pm.</p>
                <p className="text-brand-primary font-bold text-lg group-hover:underline">+91 98750 01813</p>
              </div>
            </motion.a>

            <motion.a 
              href="mailto:jkbjaipur@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors group flex items-start gap-6 cursor-pointer"
            >
              <div className="w-14 h-14 bg-brand-primary/20 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors shrink-0 shadow-lg">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-1">Email Us</h3>
                <p className="text-slate-400 text-sm mb-2 font-medium">We'll respond within 24 hours.</p>
                <p className="text-brand-primary font-bold text-lg break-all group-hover:underline">jkbjaipur@gmail.com</p>
              </div>
            </motion.a>

            <motion.a 
              href="https://maps.google.com/?q=Mall+of+Jaipur,+Vaishali+Nagar,+Jaipur"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors group flex items-start gap-6 cursor-pointer"
            >
              <div className="w-14 h-14 bg-brand-primary/20 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors shrink-0 shadow-lg">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-1">Visit Office</h3>
                <p className="text-slate-400 text-sm mb-2 font-medium">Come say hello at our HQ.</p>
                <p className="text-brand-primary font-bold text-lg group-hover:underline">733- 7th Floor, Mall of Jaipur, Vaishali Nagar</p>
              </div>
            </motion.a>
          </div>

          {/* Form Section - Glassmorphism Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 backdrop-blur-2xl bg-white/10 border border-white/20 rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] relative overflow-hidden"
          >
            {/* Form Background Accent */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

            <div className="mb-10 relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-2">Send a Message</h2>
              <p className="text-slate-400">Fill out the form below and we will get back to you shortly.</p>
            </div>

            <form onSubmit={formik.handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input 
                    name="fullName"
                    type="text" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:bg-white/10 focus:border-brand-primary outline-none transition-all placeholder-transparent peer" 
                    id="fullName"
                    placeholder="Full Name"
                  />
                  <label htmlFor="fullName" className="absolute left-5 -top-2.5 bg-[#0e1630] px-2 text-[10px] text-brand-primary uppercase tracking-widest font-bold transition-all peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:-top-2.5 peer-focus:bg-[#0e1630] peer-focus:text-[10px] peer-focus:text-brand-primary rounded-md">Full Name</label>
                  {formik.touched.fullName && formik.errors.fullName && <div className="text-red-400 text-xs mt-1 font-bold pl-2">{formik.errors.fullName}</div>}
                </div>
                
                <div className="relative group">
                  <input 
                    name="phone"
                    type="tel" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:bg-white/10 focus:border-brand-primary outline-none transition-all placeholder-transparent peer" 
                    id="phone"
                    placeholder="Phone"
                  />
                  <label htmlFor="phone" className="absolute left-5 -top-2.5 bg-[#0e1630] px-2 text-[10px] text-brand-primary uppercase tracking-widest font-bold transition-all peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:-top-2.5 peer-focus:bg-[#0e1630] peer-focus:text-[10px] peer-focus:text-brand-primary rounded-md">Phone Number</label>
                  {formik.touched.phone && formik.errors.phone && <div className="text-red-400 text-xs mt-1 font-bold pl-2">{formik.errors.phone}</div>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input 
                    name="email"
                    type="email" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:bg-white/10 focus:border-brand-primary outline-none transition-all placeholder-transparent peer" 
                    id="email"
                    placeholder="Email"
                  />
                  <label htmlFor="email" className="absolute left-5 -top-2.5 bg-[#0e1630] px-2 text-[10px] text-brand-primary uppercase tracking-widest font-bold transition-all peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:-top-2.5 peer-focus:bg-[#0e1630] peer-focus:text-[10px] peer-focus:text-brand-primary rounded-md">Email Address</label>
                  {formik.touched.email && formik.errors.email && <div className="text-red-400 text-xs mt-1 font-bold pl-2">{formik.errors.email}</div>}
                </div>
                
                <div className="relative group">
                  <select 
                    name="requirement"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.requirement}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:bg-white/10 focus:border-brand-primary outline-none transition-all appearance-none relative z-10"
                  >
                    <option value="" disabled hidden>Select Requirement</option>
                    <option value="residential" className="text-slate-900">Residential Construction</option>
                    <option value="commercial" className="text-slate-900">Commercial Construction</option>
                    <option value="renovation" className="text-slate-900">Renovation</option>
                    <option value="interior" className="text-slate-900">Interior Design</option>
                    <option value="other" className="text-slate-900">Other</option>
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 z-0" size={18} />
                  {formik.touched.requirement && formik.errors.requirement && <div className="text-red-400 text-xs mt-1 font-bold pl-2">{formik.errors.requirement}</div>}
                </div>
              </div>

              <div className="relative group">
                <textarea 
                  name="message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  rows={4} 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:bg-white/10 focus:border-brand-primary outline-none transition-all placeholder-transparent peer resize-none" 
                  id="message"
                  placeholder="Message"
                />
                <label htmlFor="message" className="absolute left-5 -top-2.5 bg-[#0e1630] px-2 text-[10px] text-brand-primary uppercase tracking-widest font-bold transition-all peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:-top-2.5 peer-focus:bg-[#0e1630] peer-focus:text-[10px] peer-focus:text-brand-primary rounded-md">Your Message</label>
                {formik.touched.message && formik.errors.message && <div className="text-red-400 text-xs mt-1 font-bold pl-2">{formik.errors.message}</div>}
              </div>

              <button type="submit" className="w-full bg-brand-primary text-white py-4 rounded-xl font-black uppercase tracking-widest hover:bg-orange-600 transition-all duration-300 shadow-[0_0_20px_rgba(242,101,34,0.3)] hover:shadow-[0_0_30px_rgba(242,101,34,0.5)] flex items-center justify-center gap-2 group">
                Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
