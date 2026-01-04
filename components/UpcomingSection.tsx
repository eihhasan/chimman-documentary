import React from "react";
import { motion } from "framer-motion";
import { UPCOMING_JOURNEYS } from "../constants";
import { MapPin, Calendar } from "lucide-react";

const UpcomingSection: React.FC = () => {
  return (
    <section className="bg-black py-32 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <h2 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter ">
            Next Destination.
          </h2>
          <span className="text-zinc-600 font-mono text-xs mt-4 md:mt-0">
            [ THE UNKNOWN CALLS ]
          </span>
        </div>

        <div className="space-y-8">
          {UPCOMING_JOURNEYS.map((trip, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-8 p-10 border border-zinc-800 bg-zinc-900/20 items-start md:items-center hover:border-white transition-colors cursor-pointer group"
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center gap-2 text-white font-bold text-xs uppercase bg-zinc-800 px-3 py-1">
                    <MapPin className="w-3 h-3 text-white" />
                    {trip.destination}
                  </span>
                  <span className="flex items-center gap-2 text-zinc-500 font-bold text-xs uppercase">
                    <Calendar className="w-3 h-3" />
                    {trip.date}
                  </span>
                </div>
                <h3 className="text-white text-3xl font-black mb-4 uppercase group-hover:translate-x-2 transition-transform">
                  {trip.why}
                </h3>
                <p className="text-zinc-400 max-w-2xl">{trip.expect}</p>
              </div>
              <div className="h-full flex items-center">
                <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <span className="font-bold text-sm">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingSection;
