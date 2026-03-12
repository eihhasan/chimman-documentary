import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail, ExternalLink, QrCode } from 'lucide-react';

const ConnectPromotions: React.FC = () => {
    return (
        <section className="bg-black py-24 px-6 md:px-24 border-t border-zinc-900" aria-label="Connect and Promotions">
            <h2 className="sr-only">Connect with Chimman Documentary</h2>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Instagram QR Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="group bg-zinc-900/40 border border-zinc-800 p-8 flex flex-col items-center text-center transition-all hover:bg-zinc-900/60 hover:border-zinc-700"
                    >
                        <div className="relative mb-6">
                            <div className="w-40 h-40 bg-white p-2 flex items-center justify-center" aria-hidden="true">
                                {/* QR Placeholder - User can replace with actual image */}
                                <QrCode size={120} className="text-black" />
                            </div>
                            <div className="absolute -top-2 -right-2 bg-white text-black p-2 rounded-full shadow-lg" aria-hidden="true">
                                <Instagram size={16} />
                            </div>
                        </div>
                        <h3 className="text-xl font-black uppercase tracking-tighter mb-2">Instagram</h3>
                        <p className="text-zinc-500 text-sm font-medium mb-6">
                            Scan to Follow My Daily Vlogs
                        </p>

                        <a
                            href="https://www.instagram.com/chimman_kontha?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Follow Chimman Documentary on Instagram"
                            className="group/link flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-white transition-colors focus:outline-none focus:text-white"
                        >
                            Follow Me <ExternalLink size={10} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" aria-hidden="true" />
                        </a>
                    </motion.div>

                    {/* Promotions & Collaboration Area - CIRCLE */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        whileHover={{ y: -5 }}
                        className="bg-zinc-900/40 border border-zinc-800 rounded-full aspect-square p-8 flex flex-col items-center justify-center text-center transition-all hover:bg-zinc-900/60 hover:border-zinc-700"
                    >
                        <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 leading-tight">
                            Brand Promotions <br /> & Collaboration
                        </h3>
                        <p className="text-zinc-500 text-sm font-medium mb-8 max-w-[250px]">
                            For paid promotions, brand deals, and collaborations contact me.
                        </p>
                        <a 
                            href="tel:+917599201952"
                            className="w-3/4 py-4 bg-white text-black font-black uppercase tracking-widest text-[10px] rounded-none hover:bg-zinc-200 transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black flex justify-center items-center"
                        >
                            Work With Me
                        </a>
                    </motion.div>

                    {/* Contact Email Area - TRIANGLE */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ y: -5 }}
                        className="relative h-[400px] flex items-center justify-center group"
                    >
                        <div
                            className="absolute inset-0 bg-zinc-900/40 border border-zinc-800 transition-all hover:bg-zinc-900/60 hover:border-zinc-700"
                            style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
                            aria-hidden="true"
                        >
                        </div>
                        <div className="relative z-10 p-8 flex flex-col items-center justify-center text-center mt-20">
                            <div className="w-12 h-12 bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-zinc-700 transition-colors" aria-hidden="true">
                                <Mail size={24} className="text-white" />
                            </div>
                            <h3 className="text-xl font-black uppercase tracking-tighter mb-2">Email Me</h3>
                            <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                                Get in touch directly
                            </p>
                            <a
                                href="mailto:hassan.raza.vlogs@gmail.com"
                                aria-label="Email hassan.raza.vlogs@gmail.com"
                                className="text-sm md:text-base font-bold hover:text-zinc-400 transition-colors break-all px-4 focus:outline-none focus:text-zinc-400"
                            >
                                razahassansaifi2@gmail.com
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ConnectPromotions;