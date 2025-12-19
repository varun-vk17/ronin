import React from 'react';
import { FadeIn } from './FadeIn';

export const SectionHeading = ({
    tag,
    title,
    subtitle,
    light = false,
    center = false,
    className = "mb-16"
}: {
    tag: string;
    title: string;
    subtitle: string;
    light?: boolean;
    center?: boolean;
    className?: string;
}) => (
    <div className={`max-w-4xl ${className} ${center ? 'mx-auto text-center' : 'text-left'}`}>
        <FadeIn delay={100}>
            <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4 ${light ? 'bg-white/10 text-white' : 'bg-ronin-electric/10 bg-ronin-gradient bg-clip-text text-transparent'}`}>
                {tag}
            </span>
        </FadeIn>
        <FadeIn delay={200}>
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight mb-6 leading-tight ${light ? 'text-white' : 'text-ronin-black'}`}>
                {title}
            </h2>
        </FadeIn>
        <FadeIn delay={300}>
            <p className={`text-lg md:text-xl font-sans leading-relaxed ${light ? 'text-ronin-neutral-300' : 'text-ronin-neutral-600'}`}>
                {subtitle}
            </p>
        </FadeIn>
    </div>
);
