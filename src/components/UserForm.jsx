import React from 'react';
import { useFormik } from 'formik';
import { User, Mail, Phone, Calendar, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const UserForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phoneno: '',
      dob: ''
    },
    validate: values => {
      const errors = {};
      
      if (!values.name) {
        errors.name = 'Required';
      }
      
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      
      if (!values.phoneno) {
        errors.phoneno = 'Required';
      } else if (!/^[0-9]{10}$/.test(values.phoneno)) {
        errors.phoneno = 'Must be exactly 10 digits';
      }

      if (!values.dob) {
        errors.dob = 'Required';
      }

      return errors;
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      formik.resetForm();
    },
  });

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto p-8 bg-white rounded-3xl shadow-xl border border-slate-100"
    >
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-2">
          User Information
        </h2>
        <p className="text-slate-500 text-sm">Please fill out the form below</p>
      </div>

      <form onSubmit={formik.handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
            <User size={14} /> Full Name
          </label>
          <input 
            name="name"
            type="text" 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className={`w-full bg-slate-50 border ${formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-slate-200'} p-4 rounded-xl focus:border-brand-primary outline-none transition-all text-slate-900`}
            placeholder="John Doe"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-xs font-bold">{formik.errors.name}</div>
          ) : null}
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
            <Mail size={14} /> Email Address
          </label>
          <input 
            name="email"
            type="email" 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={`w-full bg-slate-50 border ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-slate-200'} p-4 rounded-xl focus:border-brand-primary outline-none transition-all text-slate-900`}
            placeholder="john@example.com"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-xs font-bold">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Phone Number Field */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <Phone size={14} /> Phone Number
            </label>
            <input 
              name="phoneno"
              type="tel" 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneno}
              className={`w-full bg-slate-50 border ${formik.touched.phoneno && formik.errors.phoneno ? 'border-red-500' : 'border-slate-200'} p-4 rounded-xl focus:border-brand-primary outline-none transition-all text-slate-900`}
              placeholder="9876543210"
              maxLength="10"
            />
            {formik.touched.phoneno && formik.errors.phoneno ? (
              <div className="text-red-500 text-xs font-bold">{formik.errors.phoneno}</div>
            ) : null}
          </div>

          {/* Date of Birth Field */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <Calendar size={14} /> Date of Birth
            </label>
            <input 
              name="dob"
              type="date" 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.dob}
              className={`w-full bg-slate-50 border ${formik.touched.dob && formik.errors.dob ? 'border-red-500' : 'border-slate-200'} p-4 rounded-xl focus:border-brand-primary outline-none transition-all text-slate-600`}
            />
            {formik.touched.dob && formik.errors.dob ? (
              <div className="text-red-500 text-xs font-bold">{formik.errors.dob}</div>
            ) : null}
          </div>
        </div>

        <button 
          type="submit" 
          className="bg-brand-primary text-white w-full py-5 rounded-xl font-black uppercase tracking-[0.3em] flex items-center justify-center space-x-3 hover:bg-slate-900 transition-all group shadow-xl shadow-brand-primary/20 mt-8"
        >
          <span>Submit Information</span>
          <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </form>
    </motion.div>
  );
};

export default UserForm;
