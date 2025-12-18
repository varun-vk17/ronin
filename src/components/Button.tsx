import React from 'react';

export const Button = ({
    children,
    variant = 'primary',
    className = '',
    onClick
}: React.PropsWithChildren<{
    variant?: 'primary' | 'outline' | 'ghost';
    className?: string;
    onClick?: () => void;
}>) => {
    const base = "px-6 py-4 rounded-xl font-bold transition-all duration-500 flex items-center justify-center gap-2 text-base transform active:scale-95 group";
    const variants = {
        primary: "bg-ronin-electric text-white hover:shadow-2xl hover:shadow-ronin-electric/40 hover:-translate-y-0.5",
        outline: "border-2 border-ronin-black text-ronin-black hover:bg-ronin-black hover:text-white hover:-translate-y-0.5",
        ghost: "bg-transparent text-ronin-black hover:bg-ronin-neutral-100"
    };

    return (
        <button className={`${base} ${variants[variant]} ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};
