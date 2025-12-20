import React from 'react';

export const Button = ({
    children,
    variant = 'primary',
    className = '',
    onClick
}: React.PropsWithChildren<{
    variant?: 'primary' | 'outline' | 'ghost' | 'premium';
    className?: string;
    onClick?: () => void;
}>) => {
    // Moved layout classes to content span to handle inner glow z-indexing
    const base = "px-6 py-4 rounded-xl font-bold transition-all duration-500 relative group text-base transform active:scale-95";

    // Wrapper for content to ensure it sits above the inner glow and maintains layout
    const contentClasses = "flex items-center justify-center gap-2 relative z-10 w-full";

    const variants = {
        primary: "bg-ronin-electric text-white hover:shadow-2xl hover:shadow-ronin-electric/40 hover:-translate-y-0.5",
        outline: "border-2 border-ronin-black text-ronin-black hover:bg-ronin-black hover:text-white hover:-translate-y-0.5",
        ghost: "bg-transparent text-ronin-black hover:bg-ronin-neutral-100",
        premium: "bg-gradient-to-br from-[#6B5FFF] to-[#1D2CF3] text-white shadow-2xl shadow-[#6B5FFF]/40 hover:shadow-[#6B5FFF]/60 hover:scale-105"
    };

    return (
        <button className={`${base} ${variants[variant]} ${className}`} onClick={onClick}>
            {variant === 'premium' && (
                <div className="absolute inset-[2px] rounded-[10px] bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            )}
            <span className={contentClasses}>
                {children}
            </span>
        </button>
    );
};
