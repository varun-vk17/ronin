import React from 'react';
import { FadeIn } from './FadeIn';

export const SocialProofMarquee = () => (
    <section className="py-20 bg-white overflow-hidden border-b border-ronin-neutral-100">
        <FadeIn delay={200} direction="none">
            <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-ronin-neutral-400 mb-12">BUILT ON RELIABLE INFRASTRUCTURE</p>
            <div className="flex animate-marquee gap-20 whitespace-nowrap opacity-30 grayscale items-center">
                {Array(10).fill(['STRIPE', 'VERCEL', 'NEXT.js', 'FIGMA', 'TAILWIND', 'SUPABASE', 'LINEAR']).flat().map((logo, i) => (
                    <span key={i} className="text-2xl font-black font-heading tracking-tighter italic hover:text-transparent hover:bg-ronin-gradient hover:bg-clip-text hover:opacity-100 transition-all cursor-default">{logo}</span>
                ))}
            </div>
            <p className="text-center text-xs font-bold text-ronin-neutral-500 mt-8">We use the same tools that power the world's leading startups.</p>
        </FadeIn>
    </section>
);
