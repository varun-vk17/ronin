import React, { useState } from 'react';
import { Plus } from 'lucide-react';

export const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`mb-4 rounded-[20px] transition-all duration-500 border ${isOpen ? 'bg-white/10 border-white/20' : 'bg-white/5 border-white/10 hover:bg-white-[0.07] hover:border-white/20'}`}>
            <button
                className="flex justify-between items-center w-full text-left p-6 md:p-8"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h4 className="text-lg md:text-xl font-bold font-heading text-white pr-8">{question}</h4>
                <div className={`text-ronin-electric transition-transform duration-500 ease-[cubic-bezier(0.16, 1, 0.3, 1)] ${isOpen ? 'rotate-45' : ''}`}>
                    <Plus size={24} />
                </div>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16, 1, 0.3, 1)] ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 md:px-8 pb-8">
                    <p className="text-ronin-neutral-300 leading-relaxed font-sans">{answer}</p>
                </div>
            </div>
        </div>
    );
};
