import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function FormPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    instagram: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#050000] text-[#C42121] flex items-center justify-center p-6 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="fixed inset-0 opacity-[0.02]" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl relative z-10"
        >
          {/* Animated Circle */}
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="relative mx-auto mb-12"
          >
            <div className="w-32 h-32 border-2 border-[#C42121] rounded-full mx-auto flex items-center justify-center relative">
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-4 h-4 bg-[#C42121] rounded-full shadow-[0_0_20px_#C42121]" 
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                className="absolute inset-0 border-t-2 border-[#C42121] rounded-full"
              />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]"
          >
            ACCESS<br/>REQUESTED
          </motion.h2>

          {/* Divider */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="w-48 h-[2px] bg-[#C42121] mx-auto mb-8"
          />

          {/* Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="space-y-4 mb-12"
          >
            <p className="text-xl font-light opacity-90">
              Your request has been received.
            </p>
            <p className="text-sm tracking-[0.3em] opacity-60 uppercase">
              We will contact you if you are selected
            </p>
          </motion.div>

          {/* Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="p-8 border border-[#C42121]/30 bg-[#C42121]/5 mb-12 backdrop-blur-sm"
          >
            <p className="text-xs leading-relaxed opacity-70">
              Check your email in the next 48 hours.<br/>
              Remember: Discretion is mandatory.
            </p>
          </motion.div>

          {/* Return Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-[#C42121] px-12 py-4 text-sm tracking-widest hover:bg-[#C42121] hover:text-black transition-all uppercase font-bold"
          >
            RETURN TO MAIN
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050000] text-[#C42121] selection:bg-[#C42121] selection:text-black">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-[0.03]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Header */}
      <nav className="fixed top-0 w-full p-6 md:p-10 z-50">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-xs tracking-widest hover:opacity-70 transition-opacity uppercase"
        >
          <ArrowLeft className="w-4 h-4" />
          BACK
        </button>
      </nav>

      {/* Form Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-2xl"
        >
          {/* Title Section */}
          <div className="text-center mb-16">
            <div className="w-3 h-3 bg-[#C42121] rounded-full mx-auto mb-8 animate-pulse shadow-[0_0_20px_#C42121]" />
            <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter leading-[0.85]">
              JOIN<br/>US
            </h1>
            <div className="w-32 h-[2px] bg-[#C42121] mx-auto my-6" />
            <p className="text-sm tracking-[0.4em] opacity-50 uppercase">
              Exclusive Access • Limited Capacity
            </p>
          </div>

          {/* Info Text */}
          <div className="mb-12 p-6 border border-[#C42121]/20 bg-[#C42121]/5">
            <p className="text-xs leading-relaxed opacity-70 text-center">
              By joining THECIRCLE, you agree to maintain absolute discretion.
              <br/>
              No photos. No guests. Total silence.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Field */}
            <div className="relative group">
              <label className="block text-xs tracking-widest mb-2 opacity-60 uppercase">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-[#333] py-4 text-[#C42121] text-xl focus:outline-none focus:border-[#C42121] transition-all"
                placeholder="John Doe"
              />
            </div>

            {/* Email Field */}
            <div className="relative group">
              <label className="block text-xs tracking-widest mb-2 opacity-60 uppercase">
                Email *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-[#333] py-4 text-[#C42121] text-xl focus:outline-none focus:border-[#C42121] transition-all"
                placeholder="john@example.com"
              />
            </div>

            {/* Phone Field */}
            <div className="relative group">
              <label className="block text-xs tracking-widest mb-2 opacity-60 uppercase">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-[#333] py-4 text-[#C42121] text-xl focus:outline-none focus:border-[#C42121] transition-all"
                placeholder="+34 123 456 789"
              />
            </div>

            {/* Instagram Field */}
            <div className="relative group">
              <label className="block text-xs tracking-widest mb-2 opacity-60 uppercase">
                Instagram
              </label>
              <input
                type="text"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-[#333] py-4 text-[#C42121] text-xl focus:outline-none focus:border-[#C42121] transition-all"
                placeholder="@username"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-8">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-[#C42121] text-black font-black text-xl py-6 px-20 uppercase tracking-widest hover:bg-[#ff3333] transition-all overflow-hidden shadow-[0_0_30px_rgba(196,33,33,0.3)]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  REQUEST ACCESS
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </div>
          </form>

          {/* Footer Note */}
          <div className="mt-16 space-y-4">
            <p className="text-center text-xs tracking-widest opacity-40 uppercase">
              Your data will be kept confidential
            </p>
            <div className="flex justify-center gap-8 text-[10px] tracking-widest opacity-30 uppercase">
              <span>Valencia</span>
              <span>•</span>
              <span>Vol. II</span>
              <span>•</span>
              <span>2024</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full p-6 flex justify-center z-40 opacity-50">
        <div className="text-xs tracking-widest">
          © 2024 THECIRCLE
        </div>
      </footer>
    </div>
  );
}

