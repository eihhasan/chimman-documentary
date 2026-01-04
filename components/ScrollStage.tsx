import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Cube3D from "./Cube3D";
import { FEATURES, BRAND_NAME } from "../constants";
import { ArrowRight, ChevronDown } from "lucide-react";

const ScrollStage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Background Text Scaling / Fading
  const textScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 1.5]);
  const textX = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-black">
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Decorative Text */}
        <motion.div
          style={{ scale: textScale, x: textX }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0"
        >
          <h2 className="text-[12vw] font-black leading-none opacity-10 text-white whitespace-nowrap uppercase">
            BEYOND
          </h2>
          <h2 className="text-[12vw] font-black leading-none opacity-5 text-zinc-500 whitespace-nowrap uppercase">
            MAPS
          </h2>
        </motion.div>

        {/* The 3D Cube */}
        <div className="relative z-10">
          <Cube3D scrollProgress={scrollYProgress} features={FEATURES} />
        </div>

        {/* Dynamic Text Information */}
        <div className="absolute bottom-12 left-6 right-6 md:left-24 md:right-24 flex flex-col md:flex-row items-end md:items-center justify-between z-20">
          <div className="max-w-md">
            <motion.div key="active-section-info" className="space-y-4">
              <motion.h3
                className="text-white text-3xl md:text-5xl font-black tracking-tighter uppercase "
                style={{
                  opacity: useTransform(
                    scrollYProgress,
                    [0, 0.2, 0.4, 0.6, 0.8, 1],
                    [1, 0.5, 1, 0.5, 1, 1]
                  ),
                }}
              >
                STORYTELLING ON WHEELS
              </motion.h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                Raw experiences, real people, and the history hidden behind the
                dust. Experience travel through the eyes of someone who seeks
                stories, not just sights.
              </p>
            </motion.div>
          </div>

          <div className="mt-8 md:mt-0">
            <button className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-none font-bold transition-all hover:bg-zinc-200 uppercase text-xs tracking-widest">
              Watch Experiences
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-8">
          {FEATURES.map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <motion.div
                className="w-1 bg-white"
                style={{
                  height: useTransform(
                    scrollYProgress,
                    [i * 0.25, (i + 1) * 0.25],
                    ["0px", "40px"]
                  ),
                  opacity: useTransform(
                    scrollYProgress,
                    [(i - 0.1) * 0.25, i * 0.25, (i + 0.1) * 0.25],
                    [0.2, 1, 0.2]
                  ),
                }}
              />
              <span className="text-[10px] text-zinc-500 font-bold">
                VLOG-0{i + 1}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-zinc-500 z-50 pointer-events-none"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
      >
        <span className="text-[10px] uppercase tracking-[0.4em] mb-2 font-black text-white">
          Join the Journey
        </span>
        <ChevronDown className="animate-bounce w-4 h-4" />
      </motion.div>
    </div>
  );
};

export default ScrollStage;
