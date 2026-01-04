import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GALLERY_IMAGES } from "../constants";

const HorizontalCarousel: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate the horizontal shift. -70% is usually safe for 6-8 images
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.2]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-zinc-950">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Background Title - Pushed back and dimmed */}
        <motion.div
          style={{ opacity: titleOpacity }}
          className="absolute top-24 left-10 md:left-24 z-0 pointer-events-none"
        >
          <h2 className="text-white text-[10vw] md:text-[15vw] font-black tracking-tighter opacity-10 leading-none uppercase italic">
            Visual <br /> Records
          </h2>
        </motion.div>

        <motion.div
          style={{ x }}
          className="flex gap-16 px-10 md:px-24 relative z-10"
        >
          {GALLERY_IMAGES.map((src, i) => (
            <div
              key={i}
              className="group relative h-[350px] w-[280px] md:h-[550px] md:w-[400px] flex-shrink-0 overflow-hidden rounded-none bg-zinc-900 border border-zinc-800 shadow-2xl"
            >
              <img
                src={src}
                alt={`Archive ${i}`}
                className="h-full w-full object-cover  transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                <span className="text-[10px] text-zinc-400 font-black uppercase tracking-[0.4em] mb-3">
                  CAPTURE_0{i + 1}
                </span>
                <h4 className="text-white font-black text-3xl uppercase italic leading-none tracking-tighter">
                  Unfiltered <br /> Perspective
                </h4>
                <div className="mt-6 w-12 h-1 bg-white" />
              </div>
            </div>
          ))}
          {/* Spacer to allow seeing the last image comfortably */}
          <div className="w-[10vw] flex-shrink-0" />
        </motion.div>

        {/* Scroll Progress Bar at Bottom */}
        <div className="absolute bottom-12 left-10 md:left-24 right-10 md:right-24 h-[1px] bg-zinc-800">
          <motion.div
            className="h-full bg-white"
            style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HorizontalCarousel;
