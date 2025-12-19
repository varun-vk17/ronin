import React, { useState } from 'react';
import { Plus } from 'lucide-react';

export const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-ronin-neutral-200 py-6 last:border-0">
            <button
                className="flex justify-between items-center w-full text-left group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h4 className="text-lg md:text-xl font-bold font-heading group-hover:text-transparent group-hover:bg-ronin-gradient group-hover:bg-clip-text transition-colors pr-8 transition-all duration-300">{question}</h4>
                <div className={`transition-transform duration-500 ease-[cubic-bezier(0.16, 1, 0.3, 1)] ${isOpen ? 'rotate-45' : ''}`}>
                    <Plus size={24} />
                </div>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16, 1, 0.3, 1)] ${isOpen ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-ronin-neutral-600 leading-relaxed font-sans">{answer}</p>
            </div>
        </div>
    );
};
