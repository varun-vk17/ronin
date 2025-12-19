import React from 'react';
import { Clock, BarChart3, MousePointer2, Target, Rocket, Activity } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { SectionHeading } from './SectionHeading';

export const ExpectedResults = () => (
    <section id="the edge" className="min-h-[85vh] flex flex-col justify-center bg-white relative overflow-hidden py-24">
        <div className="container mx-auto px-8 md:px-14">
            <SectionHeading
                tag="Expected Outcomes"
                title="What your business gains."
                subtitle="We focus on the metrics that actually matter to your bottom line."
                center
                className="mb-16"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {[
                    { text: "Visitors stay longer and click more.", icon: <Clock size={28} /> },
                    { text: "Know exactly where your sales come from.", icon: <BarChart3 size={28} /> },
                    { text: "A site that works perfectly on every mobile device.", icon: <MousePointer2 size={28} /> },
                    { text: "Remove the confusion that kills sales.", icon: <Target size={28} /> },
                    { text: "A message that speaks directly to your ideal buyer.", icon: <Rocket size={28} /> },
                    { text: "Rock-solid infrastructure that never crashes.", icon: <Activity size={28} /> }
                ].map((res, i) => (
                    <FadeIn key={i} delay={100 + i * 100} direction="up">
                        <div className="flex items-center gap-6 p-8 bg-ronin-neutral-50 rounded-[28px] border border-ronin-neutral-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.16, 1, 0.3, 1)] group cursor-default">
                            <div className="shrink-0 p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-500 [&>svg]:stroke-ronin-gradient">{res.icon}</div>
                            <span className="font-bold font-heading text-ronin-black text-lg leading-snug">{res.text}</span>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </div>
    </section>
);
