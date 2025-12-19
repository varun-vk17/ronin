import React from 'react';
import { History, TrendingDown, Wallet, Coins } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const ProblemSection = () => (
    <section id="problem" className="py-24 bg-white grid-pattern border-y border-ronin-neutral-100 overflow-hidden">
        <div className="container mx-auto px-8 md:px-14 text-center">
            <div className="max-w-4xl mx-auto space-y-12">
                <FadeIn delay={200}>
                    <div className="relative inline-block">
                        <h2 className="text-4xl md:text-6xl font-extrabold font-heading tracking-tight text-ronin-black mb-3">
                            Most websites are built to impress — not to sell.
                        </h2>
                        <div className="relative inline-block">
                            <span className="text-3xl md:text-5xl font-bold font-heading tracking-tight text-transparent bg-ronin-gradient bg-clip-text italic">
                                They look polished, but leave users unsure what to do next.
                            </span>
                            <div className="absolute -right-8 -top-4 bg-red-50 p-2 rounded-full shadow-sm animate-float">
                                <TrendingDown size={24} className="text-red-500" />
                            </div>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn delay={400}>
                    <p className="text-xl md:text-2xl text-ronin-neutral-600 font-medium max-w-2xl mx-auto leading-relaxed">
                        Confusion is the enemy of revenue. If visitors hesitate, they leave.
                    </p>
                </FadeIn>

                <FadeIn delay={600} direction="up">
                    <div className="pt-8">
                        <span className="text-xs font-black tracking-[0.3em] uppercase text-ronin-neutral-400 mb-4 block">The Real Fix</span>
                        <h2 className="text-4xl md:text-6xl font-black font-heading tracking-tighter text-ronin-black uppercase">
                            ENGINEER FOR GROWTH.
                        </h2>
                    </div>
                </FadeIn>
            </div>
        </div>
    </section>
);
