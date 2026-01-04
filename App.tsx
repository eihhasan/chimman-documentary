import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import ScrollStage from "./components/ScrollStage";
import Showcase from "./components/Showcase";
import HorizontalCarousel from "./components/HorizontalCarousel";
import StatsSection from "./components/StatsSection";
import LearningsSection from "./components/LearningsSection";
import UpcomingSection from "./components/UpcomingSection";
import { BRAND_NAME } from "./constants";
import JourneyTimeline from "./components/Journey-Timeline";

const App: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative bg-black text-white min-h-screen selection:bg-white selection:text-black">
      <Navbar />

      {/* 3D Scroll Hero Experience */}
      <ScrollStage />

      {/* Stats Breakdown - Travel Stats */}
      <StatsSection />

      {/* Section 2: Learnings & Realities */}
      <LearningsSection />

      {/* Archive vlogs  */}
      {/* <JourneyTimeline /> */}

      {/* Horizontal Carousel Archive - Vlog Snippets */}
      <HorizontalCarousel />

      {/* Section 1: Past Vlogs & Style Identity */}
      <Showcase />

      {/* Section 3: Upcoming Journeys */}
      <UpcomingSection />

      {/* Footer */}
      <footer className="bg-black py-24 px-6 md:px-24 border-t border-zinc-900 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-zinc-900/10 blur-[150px] -z-10" />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4  uppercase">
              Follow us and <br /> become family.
            </h2>
            <p className="text-zinc-500 font-medium max-w-md">
              You don’t just follow us — you join our family. Every follow gives
              us the confidence and motivation to grow further.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 w-full md:w-auto">
            <a href="https://www.instagram.com/chimman_kontha?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <button className="px-12 py-5 bg-white text-black font-black uppercase tracking-widest text-[10px] rounded-none hover:bg-zinc-200 transition-all text-center">
                Follow Instagram
              </button>
            </a>
            <button className="px-12 py-5 border border-zinc-800 text-white font-black uppercase tracking-widest text-[10px] rounded-none hover:bg-zinc-900 transition-all text-center">
              Join YouTube
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between text-zinc-700 text-[10px] font-black tracking-widest uppercase">
          <div>© 2024 {BRAND_NAME}. STORIES BEYOND MAPS.</div>
          <div className="flex gap-10 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-white transition-colors">
              YouTube
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Snapchat
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default App;
