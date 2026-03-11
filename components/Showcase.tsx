import React from "react";
import { motion } from "framer-motion";
import { FEATURESS } from "../constants";

const Showcase: React.FC = () => {
  return (
    <section className="bg-black py-16 md:py-32 px-6 md:px-24" id="vlogs" aria-label="Chimman Documentary Past Vlogs">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-white text-4xl md:text-8xl font-black leading-none mb-6 md:mb-8">
              RAW, REAL, & UNFILTERED.
            </h2>
            <p className="text-zinc-400 text-base md:text-xl leading-relaxed">
              No fake lifestyle, only real experiences. My vlogs are a mix of
              documentary-style storytelling, historical exploration, and the
              inevitable comedy that happens when you travel remote India.
            </p>
          </div>
          <div className="text-zinc-600 font-mono text-sm uppercase">
            [ Past Vlogs / Records ]
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {FEATURESS.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-video overflow-hidden bg-zinc-900 mb-8 rounded-lg">
                <img
                  src={feature.imageUrl}
                  alt={`Documentary exploration at ${feature.title} - ${feature.subtitle}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  loading="lazy"
                />
              </div>
              <div className="border-l-2 border-white pl-6">
                <span className="text-[10px] text-zinc-500 font-black uppercase tracking-[0.3em] mb-2 block">
                  {feature.subtitle}
                </span>
                <h3 className="text-white text-2xl font-black mb-4 uppercase italic tracking-tighter">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-lg font-medium">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
