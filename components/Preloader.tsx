import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Preloader: React.FC = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 20); // Adjust speed here (20ms * 100 = 2000ms = 2s)

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
        >
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-neutral-950">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/10 blur-[120px] rounded-full" />
            </div>

            <div className="relative z-10 flex flex-col items-center">
                {/* Main Title Animation */}
                <div className="overflow-hidden mb-4">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, ease: "circOut", delay: 0.2 }}
                        className="text-6xl md:text-9xl font-black tracking-tighter uppercase"
                    >
                        Chimman
                    </motion.h1>
                </div>

                <div className="overflow-hidden">
                    <motion.p
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, ease: "circOut", delay: 0.4 }}
                        className="text-sm md:text-xl font-medium tracking-[0.5em] text-zinc-400 uppercase"
                    >
                        Documentaries
                    </motion.p>
                </div>
            </div>

            {/* Counter - Moved outside to be relative to screen */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-12 md:bottom-12 right-6 md:right-12 text-6xl md:text-9xl font-black text-zinc-800 pointer-events-none select-none"
            >
                {count}%
            </motion.div>

            {/* Loading Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-zinc-900">
                <motion.div
                    className="h-full bg-white"
                    initial={{ width: "0%" }}
                    animate={{ width: `${count}%` }}
                    transition={{ ease: "linear", duration: 0.02 }} // Smooth update with state
                />
            </div>
        </motion.div>
    );
};

export default Preloader;
