import React from 'react';
import { Target, BarChart4 } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { SectionHeading } from './SectionHeading';

export const WhyDifferent = () => (
    <section id="analysis" className="min-h-[85vh] flex items-center bg-ronin-neutral-50 relative overflow-hidden border-y border-ronin-neutral-200 py-20">
        <div className="container mx-auto px-8 md:px-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <SectionHeading
                        tag="The Reality"
                        title="Pretty sites don't always pay the bills."
                        subtitle="Most founders spend thousands on design that lacks clarity. If a user can't tell what you do in 3 seconds, they leave."
                        className="mb-8"
                    />
                    <div className="space-y-8">
                        <FadeIn delay={400}>
                            <p className="text-lg text-ronin-neutral-600 font-medium leading-relaxed max-w-xl">
                                We focus on observable patterns. If your site is slow or the message is vague, you are losing sales every hour. We don't care about awards. We care about how your customers think and act.
                            </p>
                        </FadeIn>
                        <FadeIn delay={500} direction="left">
                            <div className="p-8 bg-ronin-black rounded-[32px] text-white font-heading font-bold text-xl leading-tight italic border border-white/10 shadow-2xl group cursor-default">
                                <span className="group-hover:text-ronin-electric transition-colors duration-500">"We prioritize the customer's decision. If a pixel doesn't help them buy, it doesn't belong."</span>
                            </div>
                        </FadeIn>
                    </div>
                </div>
                <div className="relative group">
                    <FadeIn delay={600} direction="right">
                        <div className="absolute -inset-6 bg-ronin-electric/10 rounded-[48px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="relative bg-ronin-black p-12 rounded-[40px] text-white shadow-3xl hover:-translate-y-2 transition-transform duration-700 ease-[cubic-bezier(0.16, 1, 0.3, 1)]">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-ronin-electric rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                                    <Target size={28} />
                                </div>
                                <span className="font-bold tracking-widest text-xs uppercase">Our Core Focus</span>
                            </div>
                            <p className="text-3xl font-extrabold font-heading leading-tight mb-8">
                                Reduce friction. <br />
                                <span className="text-ronin-electric text-4xl">Increase trust.</span>
                            </p>
                            <p className="text-lg text-ronin-neutral-400 font-sans mb-8 leading-relaxed">
                                We build for clarity and speed. Your customers should never have to guess what to do next.
                            </p>
                            <div className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 group-hover:border-ronin-electric/30 transition-colors">
                                <BarChart4 size={24} className="text-ronin-electric" />
                                <span className="text-sm font-bold uppercase tracking-[0.2em]">Revenue-First Protocol</span>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    </section>
);
