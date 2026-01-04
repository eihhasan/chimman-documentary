import React, { useMemo } from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import { FeatureSection } from "../types";

interface Cube3DProps {
  scrollProgress: MotionValue<number>;
  features: FeatureSection[];
}

const Cube3D: React.FC<Cube3DProps> = ({ scrollProgress, features }) => {
  // Rotate 360 degrees over the course of the scroll
  const rotateX = useTransform(scrollProgress, [0, 1], [0, 360]);
  const rotateY = useTransform(scrollProgress, [0, 1], [0, 360 * 2]);

  // Calculate visibility/opacity for background text based on scroll
  const textOpacity = useTransform(
    scrollProgress,
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 0]
  );

  return (
    <div
      className="relative w-64 h-64 md:w-96 md:h-96"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 bg-zinc-900 border border-zinc-700 overflow-hidden shadow-2xl"
          style={{ transform: "translateZ(128px)" }}
        >
          <img
            src={features[0].imageUrl}
            alt="face1"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="text-white font-black text-xl md:text-3xl tracking-tighter italic">
              VLOGS
            </span>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 bg-zinc-900 border border-zinc-700 overflow-hidden shadow-2xl"
          style={{ transform: "rotateY(180deg) translateZ(128px)" }}
        >
          <img
            src={features[1].imageUrl}
            alt="face2"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="text-white font-black text-xl md:text-3xl tracking-tighter italic"></span>
          </div>
        </div>

        {/* Right */}
        <div
          className="absolute inset-0 bg-zinc-900 border border-zinc-700 overflow-hidden shadow-2xl"
          style={{ transform: "rotateY(90deg) translateZ(128px)" }}
        >
          <img
            src={features[2].imageUrl}
            alt="face3"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        {/* Left */}
        <div
          className="absolute inset-0 bg-zinc-900 border border-zinc-700 overflow-hidden shadow-2xl"
          style={{ transform: "rotateY(-90deg) translateZ(128px)" }}
        >
          <img
            src={features[3].imageUrl}
            alt="face4"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        {/* Top */}
        <div
          className="absolute inset-0 bg-zinc-900 border border-zinc-700 overflow-hidden shadow-2xl"
          style={{ transform: "rotateX(90deg) translateZ(128px)" }}
        >
          <img
            src={features[0].imageUrl}
            alt="face5"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        {/* Bottom */}
        <div
          className="absolute inset-0 bg-zinc-900 border border-zinc-700 overflow-hidden shadow-2xl"
          style={{ transform: "rotateX(-90deg) translateZ(128px)" }}
        >
          <img
            src={features[1].imageUrl}
            alt="face6"
            className="w-full h-full object-cover opacity-80"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Cube3D;
