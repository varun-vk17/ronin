import React, { useState, useEffect } from 'react';
import { Button } from './Button';

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-white/80 backdrop-blur-xl py-4 border-b border-ronin-neutral-100' : 'bg-transparent py-8'}`}>
            <div className="container mx-auto px-8 md:px-14 flex justify-between items-center">
                <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <img src="/Logo.svg" alt="Ronin" className="h-8 md:h-10 w-auto" />
                </div>

                <div className="flex items-center gap-4">
                    <Button variant="primary" className="h-11 py-0 px-6 text-xs bg-ronin-electric border-none" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
                        Book Free Strategy Call
                    </Button>
                </div>
            </div>
        </nav>
    );
};
