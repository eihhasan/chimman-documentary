import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TIMELINE_DATA } from "../constants";

const JourneyTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate the total height needed for smooth transitions
  const containerHeight = `${TIMELINE_DATA.length * 100}vh`;

  return (
    <section
      ref={containerRef}
      className="relative bg-black overflow-hidden"
      style={{ height: containerHeight }}
    >
      {/* Fixed heading */}
      <div className="fixed top-24 left-10 md:left-24 z-50 pointer-events-none">
        <h2 className="text-white text-5xl md:text-8xl font-black uppercase tracking-tighter italic leading-none">
          Journey <br /> Archive
        </h2>
        <div className="flex items-center gap-4 mt-4">
          <div className="h-px w-12 bg-zinc-700" />
          <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.4em] font-bold">
            Spatial Timeline
          </p>
        </div>
      </div>

      {/* Timeline cards container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-4xl h-[600px] flex items-center justify-center">
          {TIMELINE_DATA.map((item, index) => {
            const totalItems = TIMELINE_DATA.length;

            // Better spacing calculation with overlap
            const cardSpacing = 0.7; // 70% of viewport per card (30% overlap)
            const start = index * (1 / totalItems) * cardSpacing;
            const end = start + (1 / totalItems) * cardSpacing;

            // 3D Motion Values with smoother transitions
            const z = useTransform(
              scrollYProgress,
              [start, start + (end - start) * 0.5, end],
              [-800, 0, 800]
            );

            const opacity = useTransform(
              scrollYProgress,
              [start, start + 0.1, end - 0.1, end],
              [0, 1, 1, 0]
            );

            const rotateY = useTransform(
              scrollYProgress,
              [start, end],
              [index % 2 === 0 ? -20 : 20, index % 2 === 0 ? 20 : -20]
            );

            const rotateX = useTransform(
              scrollYProgress,
              [start, end],
              [10, -10]
            );

            const y = useTransform(scrollYProgress, [start, end], [50, -50]);

            const scale = useTransform(
              scrollYProgress,
              [start, start + (end - start) * 0.5, end],
              [0.8, 1, 0.8]
            );

            // Calculate z-index for proper stacking
            const zIndex = useTransform(
              scrollYProgress,
              [start, start + 0.01],
              [totalItems - index, totalItems + index]
            );

            return (
              <motion.div
                key={item.id}
                style={{
                  position: "absolute",
                  translateZ: z,
                  rotateY,
                  rotateX,
                  y,
                  opacity,
                  scale,
                  zIndex,
                  transformStyle: "preserve-3d",
                }}
                className="w-[85vw] md:w-[500px] p-8 md:p-12 bg-zinc-900/95 border border-zinc-800/50 rounded-xl shadow-2xl backdrop-blur-sm"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="space-y-2">
                    <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.3em] font-black">
                      {item.date}
                    </span>
                    <h3 className="text-white text-2xl md:text-4xl font-black uppercase tracking-tighter italic leading-tight">
                      {item.destination}
                    </h3>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-3xl md:text-4xl filter drop-shadow-lg">
                      {item.emotionTag}
                    </span>
                    <span className="text-[10px] text-zinc-500 font-black uppercase mt-1 tracking-widest">
                      {item.emotion}
                    </span>
                  </div>
                </div>

                <p className="text-zinc-400 text-base md:text-lg leading-relaxed italic border-l-2 border-white/30 pl-6 py-2">
                  "{item.highlight}"
                </p>

                <div className="mt-8 pt-6 border-t border-zinc-800/50 flex justify-between items-center">
                  <span className="text-[10px] text-zinc-600 font-black uppercase tracking-[0.5em]">
                    RECORD_0{item.id}_VERIFIED
                  </span>
                  <div className="w-16 h-[1px] bg-zinc-800/50" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-40 pointer-events-none">
        <div className="flex flex-col items-center gap-2">
          <span className="text-zinc-600 font-mono text-xs uppercase tracking-widest">
            SCROLL
          </span>
          <div className="w-px h-20 bg-gradient-to-b from-zinc-600 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
