import React from 'react';
import { FadeIn } from './FadeIn';
import { FAQItem } from './FAQItem';

export const FAQ = () => (
    <section className="py-40 bg-ronin-black relative overflow-hidden">
        {/* Background Gradients for Glass Effect */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-ronin-electric/20 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] pointer-events-none" />

        <div className="container mx-auto px-8 md:px-14 max-w-3xl relative z-10">
            <FadeIn delay={100}>
                <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-center mb-16 tracking-tight text-white">Strategic Questions</h2>
            </FadeIn>
            <div className="space-y-2">
                {[
                    { q: "Can you improve an existing website?", a: "Yes. If you already have traffic, leads, or sales, we focus on removing friction, tightening messaging, and fixing the decision path so more visitors convert—without redesigning everything from scratch." },
                    { q: "Is this right for new startups with no website?", a: "Yes. We help early-stage founders go live with a clear, revenue-ready site from day one—so you’re not guessing, rebuilding, or wasting money later." },
                    { q: "Why a 10-day timeline?", a: "Because speed matters. Long projects kill momentum. We use a fixed, focused process to get you live fast—then refine based on real user behavior, not opinions." },
                    { q: "Do I own the website?", a: "Yes. Always. You own the code, the design, and the assets. No lock-ins. No dependencies." },
                    { q: "How do I know if my website is the real problem?", a: "If users don’t understand what you offer in seconds, hesitate before acting, or drop off without converting—your site is leaking revenue. The audit makes this obvious." },
                    { q: "Will this help with paid ads or SEO later?", a: "Yes. A clear, fast site improves performance across ads, SEO, and outbound. Conversion issues compound everywhere—fixing them early saves money." },
                    { q: "What makes this different from a normal web design agency?", a: "We don’t design pages. We engineer decisions—what users see, understand, and do next. If it doesn’t help someone move forward, it doesn’t belong." },
                    { q: "How much does this usually cost?", a: "Pricing depends on scope and complexity. After the audit, you’ll know exactly what’s needed and whether it’s worth doing—before spending anything." }
                ].map((faq, i) => (
                    <FadeIn key={i} delay={i * 100} direction="none">
                        <FAQItem question={faq.q} answer={faq.a} />
                    </FadeIn>
                ))}
            </div>
        </div>
    </section>
);
