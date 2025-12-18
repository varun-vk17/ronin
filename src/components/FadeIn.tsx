import React, { useState, useEffect, useRef } from 'react';

export const FadeIn = ({
    children,
    delay = 0,
    direction = 'up',
    duration = 800,
    className = ""
}: React.PropsWithChildren<{
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    duration?: number;
    className?: string;
    key?: React.Key;
}>) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        if (domRef.current) observer.observe(domRef.current);
        return () => {
            if (domRef.current) observer.unobserve(domRef.current);
        };
    }, []);

    const getDirectionClasses = () => {
        switch (direction) {
            case 'up': return isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0';
            case 'down': return isVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0';
            case 'left': return isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0';
            case 'right': return isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0';
            case 'none': return isVisible ? 'opacity-100' : 'opacity-0';
            default: return '';
        }
    };

    return (
        <div
            ref={domRef}
            className={`transition-all cubic-bezier(0.16, 1, 0.3, 1) ${getDirectionClasses()} ${className}`}
            style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: `${delay}ms`,
                willChange: 'transform, opacity'
            }}
        >
            {children}
        </div>
    );
};
