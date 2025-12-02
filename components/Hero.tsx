import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <header className="relative min-h-screen flex flex-col justify-center items-center bg-white text-nakBlack pt-16 overflow-hidden">
      {/* Gradient Glow Effect - "Manifesto List" Inspiration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-manifesto-glow opacity-60 pointer-events-none blur-3xl rounded-full"></div>

      <div className="max-w-6xl w-full px-6 relative z-10 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-nakYellow text-xs font-bold uppercase tracking-widest mb-6 border border-black">
             4-Week Workshop
          </span>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.9] mb-8 text-nakBlack">
            DEFINE<br />
            YOUR<br />
            <span className="relative inline-block">
              CORE
              <svg className="absolute w-full h-4 -bottom-1 left-0 text-nakYellow -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid md:grid-cols-12 gap-12 items-end border-t border-nakDarkGray/20 pt-12"
        >
          <div className="md:col-span-7">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-nakDarkGray">
              Navigate. Align. Knack.
            </h2>
            <p className="text-xl md:text-2xl text-nakBlack leading-relaxed font-medium keep-all">
              겉도는 고민을 멈추고<br />
              내면의 핵심을 단단하게 정의하는 곳.
            </p>
          </div>
          <div className="md:col-span-5 flex flex-col justify-end items-start md:items-end">
            <p className="text-base text-nakDarkGray mb-8 font-medium text-left md:text-right">
              당신만의 <span className="bg-nakYellow/50 px-1">Manifesto List</span>를<br/>
              완성하는 4주간의 여정
            </p>
            <a href="#who" className="group flex items-center gap-3 bg-nakBlack text-white px-8 py-4 rounded-full font-bold text-sm uppercase hover:bg-nakYellow hover:text-black hover:scale-105 transition-all duration-300 shadow-lg">
              Start Journey <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  );
};