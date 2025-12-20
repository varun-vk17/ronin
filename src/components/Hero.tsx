import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { Button } from './Button';

export const Hero = () => (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden bg-white">
        <div className="container mx-auto px-8 md:px-14 relative z-10">
            <div className="max-w-[1300px]">
                <FadeIn delay={200} direction="down">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-ronin-electric/10 text-ronin-electric font-bold text-[10px] uppercase tracking-[0.2em] mb-8 font-heading">
                        Revenue-Focused Website Engineering
                    </span>
                </FadeIn>

                <FadeIn delay={400}>
                    <h1 className="text-5xl md:text-7xl lg:text-[100px] font-extrabold font-heading tracking-tighter mb-10 leading-[1.0] text-ronin-black">
                        We build websites that <br />
                        <span className="bg-gradient-to-br from-[#6B5FFF] to-[#1D2CF3] bg-clip-text text-transparent inline-block animate-pulse-slow">generate revenue.</span>
                    </h1>
                </FadeIn>

                <FadeIn delay={600}>
                    <p className="text-lg md:text-xl text-ronin-neutral-600 mb-12 max-w-2xl font-sans leading-relaxed font-medium">
                        Clear, high-performing websites for startups and growing companies. No fluff. No awards. Just a system built to turn your visitors into customers.
                    </p>
                </FadeIn>

                <FadeIn delay={800} direction="up" className="flex flex-col sm:flex-row items-center gap-6">
                    <div className="relative">
                        <Button variant="premium" className="w-full sm:w-auto px-10 py-5 text-lg border-none" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
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
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-ronin-electric/5 rounded-full blur-[120px] -z-1 animate-pulse" />
    </section>
);
