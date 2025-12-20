import React from 'react';
import { Rocket, Zap, Trophy, Check, ShieldCheck } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { SectionHeading } from './SectionHeading';
import { Button } from './Button';
import { PremiumIcon } from './PremiumIcon';

export const Pricing = () => (
    <section id="steps" className="py-32 bg-ronin-black text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <SectionHeading
                tag="Focused Execution"
                title="Clear paths to growth."
                subtitle="We only take on 2 new projects per month to stay focused on your results. Every project is founder-led."
                light
                center
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-7xl mx-auto">
                {[
                    {
                        icon: <Rocket />,
                        name: "REVENUE SPRINT",
                        price: "$500",
                        bestFor: "Validating a new offer fast",
                        features: ["10-day focused build", "High-clarity landing page", "Essential tracking setup", "Validated validation"],
                        btnText: "Book Free Strategy Call"
                    },
                    {
                        icon: <Zap className="text-ronin-electric" />,
                        name: "REVENUE ENGINE",
                        price: "$800",
                        bestFor: "Scaling existing sales and leads",
                        features: ["Full website architecture", "Advanced conversion tracking", "Monthly profit audits", "Founder-led engineering"],
                        featured: true,
                        btnText: "Book Free Strategy Call"
                    },
                    {
                        icon: <Trophy />,
                        name: "DOMINANCE",
                        price: "Custom",
                        bestFor: "Ready to 10X your digital revenue",
                        features: ["Full funnel engineering", "Strategic consulting", "Priority support", "Market-leading scale"],
                        btnText: "Book Free Strategy Call"
                    }
                ].map((plan, i) => (
                    <FadeIn key={i} delay={i * 200} direction="up">
                        <div className={`relative p-10 rounded-[40px] border transition-all duration-700 ease-[cubic-bezier(0.16, 1, 0.3, 1)] flex flex-col hover:shadow-3xl ${plan.featured ? 'bg-ronin-neutral-900 border-ronin-electric scale-105 shadow-2xl hover:-translate-y-2' : 'bg-transparent border-ronin-neutral-800 hover:-translate-y-1'}`}>
                            {plan.featured && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-ronin-electric px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">1 SLOT LEFT THIS MONTH</span>}
                            <div className="mb-8 flex items-center justify-between">
                                <PremiumIcon size="small" className="group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(107,95,255,0.4)]">
                                    {plan.icon}
                                </PremiumIcon>
                                <span className="text-[10px] font-black tracking-widest uppercase opacity-60">{plan.name}</span>
                            </div>
                            <div className="mb-6">
                                <span className="text-5xl font-black font-heading tracking-tighter">{plan.price}</span>
                            </div>
                            <p className="text-ronin-neutral-400 text-sm font-bold mb-8 uppercase tracking-widest">{plan.bestFor}</p>
                            <ul className="space-y-4 mb-12 flex-grow">
                                {plan.features.map((f, j) => (
                                    <li key={j} className="flex items-center gap-3 text-sm font-medium">
                                        <Check size={16} className="text-ronin-electric" /> {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </FadeIn>
                ))}
            </div>

            <FadeIn delay={600}>
                <div className="mt-20 max-w-2xl mx-auto p-10 bg-ronin-electric/10 rounded-[32px] border border-ronin-electric/20 text-center relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform duration-1000">
                        <ShieldCheck size={100} />
                    </div>
                    <h4 className="text-2xl font-bold font-heading mb-4 tracking-tight">Our Guarantee</h4>
                    <p className="text-ronin-neutral-300 font-sans leading-relaxed text-sm mb-6">
                        If your new site doesn't show measurable growth within 90 days, we'll continue optimizing it for free until it does. We only win when you win.
                    </p>
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">
                        * MEASURABLE GROWTH = MORE LEADS OR SALES TRACKED VIA ANALYTICS.
                    </p>
                </div>
            </FadeIn>
        </div>
    </section>
);
