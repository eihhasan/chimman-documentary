
import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../constants';

const StatsSection: React.FC = () => {
  return (
    <section className="bg-black py-40 border-y border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
        {STATS.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex flex-col items-center text-center space-y-4"
          >
            <div className="relative">
              <span className="text-6xl md:text-8xl font-black text-white tracking-tighter">
                {stat.value}
              </span>
              <div className="absolute -top-4 -right-4 w-12 h-px bg-white/20 rotate-45" />
            </div>
            <span className="text-[10px] text-zinc-500 font-black uppercase tracking-[0.5em]">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
