import React from "react";
import { motion } from "framer-motion";
import { LEARNINGS } from "../constants";

const LearningsSection: React.FC = () => {
  return (
    <section className="bg-zinc-950 py-32 px-6 md:px-24 border-y border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-4xl md:text-6xl font-black mb-20 uppercase  tracking-tighter">
          Learnings & <br /> Realities.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {LEARNINGS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-6 p-8 bg-zinc-900/50 border border-zinc-800"
            >
              <div className="text-zinc-600 font-mono text-xs">
                0{i + 1} / INSIGHT
              </div>
              <h3 className="text-white text-xl font-black uppercase tracking-tight">
                {item.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningsSection;
