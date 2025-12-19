import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { Button } from './Button';

export const Hero = () => (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden bg-white">
        {/* Background Gradients - Increased Opacity & Complexity */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-ronin-electric/15 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[600px] h-[600px] bg-blue-500/15 rounded-full blur-[100px] -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px] -z-10" />

        <div className="container mx-auto px-8 md:px-14 relative z-10">
            <div className="max-w-[1300px]">
                <FadeIn delay={200} direction="down">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-md border border-ronin-electric/20 text-ronin-electric font-bold text-[10px] uppercase tracking-[0.2em] mb-8 font-heading shadow-sm">
                        Revenue-Focused Website Engineering
                    </span>
                </FadeIn>

                <FadeIn delay={400}>
                    <h1 className="text-5xl md:text-7xl lg:text-[100px] font-extrabold font-heading tracking-[-0.04em] mb-10 leading-[0.95] text-ronin-black drop-shadow-sm">
                        We build websites that <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-ronin-electric to-blue-600 inline-block animate-pulse-slow pb-2">generate revenue.</span>
                    </h1>
                </FadeIn>

                <FadeIn delay={600}>
                    <p className="text-lg md:text-xl text-ronin-neutral-600 mb-12 max-w-2xl font-sans leading-relaxed font-medium">
                        Clear, high-performing websites for startups and growing companies. No fluff. No awards. Just a system built to turn your visitors into customers.
                    </p>
                </FadeIn>

                <FadeIn delay={800} direction="up" className="flex flex-col sm:flex-row items-center gap-6">
                    <div className="relative">
                        <Button variant="primary" className="w-full sm:w-auto px-10 py-5 text-lg bg-ronin-electric border-none shadow-xl shadow-ronin-electric/40 hover:shadow-2xl hover:shadow-ronin-electric/60 transition-all duration-300 ring-4 ring-ronin-electric/10 hover:ring-ronin-electric/20" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
                            Book Free Strategy Call <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <div className="hidden md:block absolute -top-12 -right-4 translate-x-3/4 rotate-6">
                            <span className="font-handwriting text-2xl text-ronin-neutral-600 whitespace-nowrap">Find hidden revenue</span>
                            <svg className="w-12 h-12 text-ronin-neutral-400 absolute -bottom-8 -left-2 -rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M80,10 C60,50 40,60 10,60" />
                                <path d="M10,60 L20,50 M10,60 L20,70" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-ronin-neutral-600 font-semibold text-sm">
                        <Check size={18} className="text-green-500" />
                        <span>Built for results.</span>
                    </div>
                </FadeIn>
            </div>
        </div>
    </section>
);
