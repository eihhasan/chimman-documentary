import React, { useRef, useLayoutEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GALLERY_IMAGES } from "../constants";

const HorizontalCarousel: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);

  // Recalculate how far we need to scroll whenever images/window resize
  useLayoutEffect(() => {
    const calcOffset = () => {
      if (!trackRef.current) return;
      const trackWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      // We only need to shift by the overflow — not the full track width
      setTranslateX(trackWidth - viewportWidth);
    };

    calcOffset();
    window.addEventListener("resize", calcOffset);
    return () => window.removeEventListener("resize", calcOffset);
  }, []);

  const { scrollYProgress } = useScroll({ target: targetRef });

  // Shift in px so the last card aligns with the right edge (no gap, no overshoot)
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -translateX]
  );

  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <section
      ref={targetRef}
      // height drives scroll distance — tweak multiplier if you have more/fewer images
      style={{ height: `${GALLERY_IMAGES.length * 60}vh` }}
      className="relative bg-zinc-950"
      aria-label="Visual Records Gallery"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Faded background wordmark */}
        <motion.div
          style={{ opacity: titleOpacity }}
          className="absolute top-16 left-8 md:left-20 z-0 pointer-events-none select-none"
          aria-hidden="true"
        >
          <span className="text-white text-[12vw] font-black tracking-tighter opacity-[0.07] leading-none uppercase italic block">
            Visual
            <br />
            Records
          </span>
        </motion.div>

        {/* Scrolling track — NO leading/trailing spacer divs */}
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex gap-6 md:gap-10 pl-8 md:pl-20 pr-8 md:pr-20 relative z-10 will-change-transform"
        >
          {GALLERY_IMAGES.map((src, i) => (
            <div
              key={i}
              className="group relative flex-shrink-0 overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl"
              style={{
                width: "clamp(260px, 35vw, 420px)",
                height: "clamp(320px, 55vh, 580px)",
              }}
            >
              <img
                src={src}
                alt={`Chimman Documentary Visual Record ${i + 1} – Exploring India and Uttar Pradesh`}
                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-10">
                <span className="text-[10px] text-zinc-400 font-black uppercase tracking-[0.4em] mb-2">
                  CAPTURE_0{i + 1}
                </span>
                <span className="text-white font-black text-2xl md:text-3xl uppercase italic leading-none tracking-tighter block">
                  Unfiltered
                  <br />
                  Perspective
                </span>
                <div className="mt-5 w-10 h-[2px] bg-white" />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Progress bar */}
        <div className="absolute bottom-10 left-8 md:left-20 right-8 md:right-20 h-px bg-zinc-800">
          <motion.div
            className="h-full bg-white origin-left"
            style={{ scaleX: scrollYProgress }}
          />
        </div>

        {/* Index counter */}
        <motion.div
          className="absolute bottom-6 right-8 md:right-20 text-[10px] text-zinc-600 font-mono tracking-widest"
          aria-hidden="true"
        >
          {GALLERY_IMAGES.length.toString().padStart(2, "0")} FRAMES
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalCarousel;