import React from 'react';
import { ShieldCheck, Linkedin } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const Footer = () => (
    <footer className="bg-white py-20 border-t border-ronin-neutral-100">
        <div className="container mx-auto px-8 md:px-14">
            <div className="flex flex-col md:flex-row justify-between gap-16 mb-20">
                <div className="max-w-xs">
                    <FadeIn delay={100} direction="none">
                        <div className="flex items-center gap-2 mb-6">
                            <img src="/Logo.svg" alt="Ronin" className="h-10 w-auto" />
                        </div>
                        <p className="text-ronin-neutral-500 leading-relaxed font-sans text-sm font-medium">
                            Revenue-first engineering for ambitious brands. Building high-performance sites that turn visitors into customers.
                        </p>
                    </FadeIn>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
                    <div>
                        <FadeIn delay={200} direction="none">
                            <h4 className="font-bold font-heading text-[10px] uppercase tracking-widest text-ronin-neutral-400 mb-6">SOLUTIONS</h4>
                            <ul className="space-y-4 font-sans font-semibold text-sm">
                                <li>
                                    <button
                                        onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                                        className="hover:text-ronin-electric transition-colors text-left"
                                    >
                                        Book Free Strategy Call
                                    </button>
                                </li>
                            </ul>
                        </FadeIn>
                    </div>
                    <div>
                        <FadeIn delay={300} direction="none">
                            <h4 className="font-bold font-heading text-[10px] uppercase tracking-widest text-ronin-neutral-400 mb-6">CONNECT</h4>
                            <ul className="space-y-4 font-sans font-semibold text-sm">
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/varun-kumaran/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 hover:text-ronin-electric transition-colors"
                                    >
                                        <Linkedin size={16} />
                                        <span>LinkedIn</span>
                                    </a>
                                </li>
                            </ul>
                        </FadeIn>
                    </div>
                </div>
            </div>
            <FadeIn delay={600} direction="none" className="pt-10 border-t border-ronin-neutral-100 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-[10px] font-bold uppercase tracking-widest text-ronin-neutral-400">
                    © {new Date().getFullYear()} Ronin Digital. Engineering for Growth.
                </p>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-ronin-neutral-400 px-4 py-2 bg-ronin-neutral-50 rounded-full">
                    <ShieldCheck size={14} />
                    <span>Focused on Revenue Clarity</span>
                </div>
            </FadeIn>
        </div>
    </footer>
);
