import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { Button } from './Button';

export const FinalCTA = () => (
    <section className="py-32 bg-ronin-electric text-white text-center overflow-hidden relative">
        <div className="container mx-auto px-8 md:px-14 relative z-10">
            <FadeIn delay={200}>
                <h2 className="text-5xl md:text-7xl font-extrabold font-heading mb-8 tracking-tighter leading-tight">
                    Ready to make <br /> more sales?
                </h2>
            </FadeIn>
            <FadeIn delay={400}>
                <p className="text-lg md:text-xl text-white/80 mb-12 max-w-xl mx-auto font-sans font-medium">
                    Stop losing revenue to bad design. Let's build a clear, high-speed engine for your business.
                </p>
            </FadeIn>
            <FadeIn delay={600} direction="up">
                <Button
                    className="mx-auto !bg-white !text-ronin-black hover:!bg-ronin-black hover:!text-white px-12 h-20 text-xl font-black shadow-2xl border-none group"
                    onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    Book Free Strategy Call <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </Button>
            </FadeIn>
        </div>
        <div className="absolute inset-0 bg-ronin-black opacity-0 group-hover:opacity-10 transition-opacity duration-1000" />
    </section>
);
