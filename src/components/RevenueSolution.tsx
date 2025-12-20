import React from 'react';
import { Search, Layers, Cpu, Activity } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { PremiumIcon } from './PremiumIcon';
import { SectionHeading } from './SectionHeading';

export const RevenueSolution = () => (
    <section id="revenue" className="relative min-h-[85vh] flex flex-col justify-center bg-ronin-black text-white overflow-hidden py-24">
        <div className="container mx-auto px-6 relative z-10">
            <SectionHeading
                tag="The Roadmap"
                title="A systematic 10-day process."
                subtitle="We follow a high-velocity engineering protocol to get you live and making sales fast."
                light
                className="mb-16"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    {
                        icon: <Search className="text-ronin-electric" size={32} />,
                        days: "Day 1-2",
                        title: "Book Free Strategy Call",
                        desc: "We analyze your offer and competitors to find exactly where you are losing customers."
                    },
                    {
                        icon: <Layers className="text-ronin-electric" size={32} />,
                        days: "Day 3-5",
                        title: "Clarity Mapping",
                        desc: "We design a path that guides users to a decision. Every step is intentional and zero-friction."
                    },
                    {
                        icon: <Cpu className="text-ronin-electric" size={32} />,
                        days: "Day 6-8",
                        title: "High-Speed Build",
                        desc: "We build your site for extreme speed and mobile reliability. No slow plugins or heavy code."
                    },
                    {
                        icon: <Activity className="text-ronin-electric" size={32} />,
                        days: "Day 9-10",
                        title: "Launch & Track",
                        desc: "Full tracking setup. We verify that your site is capturing every possible lead and sale."
                    }
                ].map((item, i) => (
                    <FadeIn key={i} delay={200 + i * 150} direction="up">
                        <div className="p-10 rounded-[32px] bg-ronin-neutral-900 border border-ronin-neutral-800 hover:border-ronin-electric hover:shadow-2xl hover:shadow-ronin-electric/10 transition-all duration-700 group flex flex-col min-h-[320px] hover:-translate-y-2">
                            <div className="mb-8 flex justify-between items-center">
                                <PremiumIcon size="standard" className="group-hover:scale-110 group-hover:shadow-[#6B5FFF]/60">
                                    {item.icon}
                                </PremiumIcon>
                                <span className="text-ronin-electric font-black text-[10px] uppercase tracking-widest">{item.days}</span>
                            </div>
                            <h4 className="text-xl font-bold font-heading mb-3 tracking-tight group-hover:text-ronin-electric transition-colors">{item.title}</h4>
                            <p className="text-ronin-neutral-400 font-sans text-base leading-relaxed">{item.desc}</p>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </div>
    </section >
);
