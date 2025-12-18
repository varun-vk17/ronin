import React, { useState, useRef } from 'react';
import { Calendar, Clock, CheckCircle2, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { FadeIn } from './FadeIn';
import { Button } from './Button';
import { SectionHeading } from './SectionHeading';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const TIME_SLOTS = [
    '09:00 AM', '10:00 AM', '11:00 AM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
];

export const BookingSection = () => {
    const form = useRef<HTMLFormElement>(null);
    const [selectedDate, setSelectedDate] = useState<number | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [step, setStep] = useState(1); // 1: Date/Time, 2: Form, 3: Success
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Simple calendar logic
    const getDaysInMonth = (month: number, year: number) => new Date(year, month + 1, 0).getDate();
    const getFirstDayOfMonth = (month: number, year: number) => new Date(year, month, 1).getDay();

    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);

    const handlePrevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const handleNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => setStep(3), 1000);
    };

    return (
        <section id="booking" className="py-24 bg-ronin-black text-white relative overflow-hidden">
            <div className="container mx-auto px-8 md:px-14 relative z-10">
                <SectionHeading
                    tag="Start Now"
                    title="Book Your Strategy Call."
                    subtitle="No sales pressure. Just a clear conversation about your revenue goals."
                    light
                    center
                    className="mb-16"
                />

                <div className="max-w-5xl mx-auto bg-white text-ronin-black rounded-[40px] overflow-hidden shadow-3xl flex flex-col md:flex-row min-h-[600px]">

                    {/* Left Side: Value Props */}
                    <div className="md:w-1/3 bg-ronin-neutral-50 p-10 flex flex-col justify-between border-r border-ronin-neutral-100">
                        <div>
                            <h4 className="text-2xl font-black font-heading tracking-tight mb-6">What happens next?</h4>
                            <ul className="space-y-6">
                                {[
                                    { title: "Strategy Deep Dive", desc: "We analyze your business goals and current gaps." },
                                    { title: "Find Hidden Revenue", desc: "Identify leaks or planning blindspots." },
                                    { title: "10-Day Roadmap", desc: "Walk through the exact build timeline." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4">
                                        <div className="mt-1">
                                            <div className="w-6 h-6 rounded-full bg-ronin-electric/10 flex items-center justify-center text-ronin-electric">
                                                <CheckCircle2 size={14} />
                                            </div>
                                        </div>
                                        <div>
                                            <span className="block font-bold text-sm mb-1">{item.title}</span>
                                            <span className="block text-xs text-ronin-neutral-500 font-medium leading-relaxed">{item.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="pt-10 mt-10 border-t border-ronin-neutral-200">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-ronin-black overflow-hidden">
                                    {/* Placeholder for founder image */}
                                    <img src="https://ui-avatars.com/api/?name=Founder&background=0a0a0a&color=fff" alt="Founder" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Founder-Led Call</p>
                                    <p className="text-xs text-ronin-neutral-500">You speak directly with the engineer.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Interactive UI */}
                    <div className="md:w-2/3 p-8 md:p-12 relative">
                        {step === 1 && (
                            <FadeIn className="h-full flex flex-col">
                                <div className="flex justify-between items-center mb-8">
                                    <h3 className="text-xl font-bold font-heading">Select a Date & Time</h3>
                                    <div className="flex gap-2">
                                        <button onClick={handlePrevMonth} className="p-2 hover:bg-ronin-neutral-100 rounded-lg transition-colors"><ChevronLeft size={20} /></button>
                                        <span className="font-bold text-sm min-w-[100px] text-center">{MONTHS[currentMonth]} {currentYear}</span>
                                        <button onClick={handleNextMonth} className="p-2 hover:bg-ronin-neutral-100 rounded-lg transition-colors"><ChevronRight size={20} /></button>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row gap-8 flex-grow">
                                    {/* Calendar Grid */}
                                    <div className="flex-1">
                                        <div className="grid grid-cols-7 mb-4">
                                            {DAYS.map(d => <div key={d} className="text-center text-xs font-bold text-ronin-neutral-400 uppercase tracking-widest">{d}</div>)}
                                        </div>
                                        <div className="grid grid-cols-7 gap-2">
                                            {Array(firstDay).fill(null).map((_, i) => <div key={`empty-${i}`} />)}
                                            {Array(daysInMonth).fill(null).map((_, i) => {
                                                const day = i + 1;
                                                const isSelected = selectedDate === day;
                                                return (
                                                    <button
                                                        key={day}
                                                        onClick={() => setSelectedDate(day)}
                                                        className={`aspect-square rounded-xl text-sm font-bold transition-all ${isSelected ? 'bg-ronin-electric text-white shadow-lg scale-110' : 'hover:bg-ronin-neutral-100'}`}
                                                    >
                                                        {day}
                                                    </button>
                                                )
                                            })}
                                        </div>
                                    </div>

                                    {/* Time Slots */}
                                    <div className="w-full md:w-48 border-l border-ronin-neutral-100 pl-8 md:pl-8 pt-8 md:pt-0 border-t md:border-t-0">
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-ronin-neutral-400 mb-4">Available Times</h4>
                                        <div className="space-y-2 max-h-[300px] overflow-y-auto custom-scrollbar pr-2">
                                            {TIME_SLOTS.map(time => (
                                                <button
                                                    key={time}
                                                    onClick={() => setSelectedTime(time)}
                                                    className={`w-full py-3 px-4 rounded-lg text-xs font-bold border transition-all ${selectedTime === time ? 'border-ronin-electric bg-ronin-electric/5 text-ronin-electric' : 'border-ronin-neutral-200 hover:border-ronin-neutral-300'}`}
                                                >
                                                    {time}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-8 border-t border-ronin-neutral-100 flex justify-end">
                                    <Button
                                        onClick={() => setStep(2)}
                                        className={`${!selectedDate || !selectedTime ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        variant="primary"
                                    >
                                        Continue
                                    </Button>
                                </div>
                            </FadeIn>
                        )}

                        {step === 2 && (
                            <FadeIn className="h-full flex flex-col justify-center max-w-md mx-auto">
                                <button onClick={() => setStep(1)} className="absolute top-8 left-8 text-xs font-bold text-ronin-neutral-500 hover:text-ronin-black flex items-center gap-1">
                                    <ChevronLeft size={14} /> Back
                                </button>
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold font-heading mb-2">Final Details</h3>
                                    <p className="text-sm text-ronin-neutral-500">
                                        Booking for <span className="text-ronin-black font-bold">{MONTHS[currentMonth]} {selectedDate}, {selectedTime}</span>
                                    </p>
                                </div>
                                <form ref={form} onSubmit={(e) => {
                                    e.preventDefault();
                                    setIsSubmitting(true);

                                    // Replace these with your actual IDs
                                    const SERVICE_ID = 'service_zxwooyd';
                                    const TEMPLATE_ID = 'template_24tbztm';
                                    const PUBLIC_KEY = '0Xt04NLSeeh-mk9Ha';

                                    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current!, PUBLIC_KEY)
                                        .then((result) => {
                                            console.log(result.text);
                                            setStep(3);
                                            setIsSubmitting(false);
                                        }, (error) => {
                                            console.log(error.text);
                                            alert("Something went wrong. Please try again or email us directly.");
                                            setIsSubmitting(false);
                                        });
                                }} className="space-y-4">
                                    <input type="hidden" name="date" value={`${MONTHS[currentMonth]} ${selectedDate}, ${currentYear}`} />
                                    <input type="hidden" name="time" value={selectedTime || ''} />

                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest mb-2">Full Name</label>
                                        <input required name="user_name" type="text" className="w-full bg-ronin-neutral-50 border border-ronin-neutral-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-ronin-electric transition-colors" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest mb-2">Work Email</label>
                                        <input required name="user_email" type="email" className="w-full bg-ronin-neutral-50 border border-ronin-neutral-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-ronin-electric transition-colors" placeholder="john@company.com" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest mb-2">Website URL</label>
                                        <input name="website" type="url" className="w-full bg-ronin-neutral-50 border border-ronin-neutral-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-ronin-electric transition-colors" placeholder="https://company.com" />
                                    </div>
                                    <Button variant="primary" className="w-full mt-4 flex items-center justify-center gap-2" disabled={isSubmitting}>
                                        {isSubmitting ? <><Loader2 className="animate-spin" size={18} /> Booking...</> : "Confirm Booking"}
                                    </Button>
                                </form>
                            </FadeIn>
                        )}

                        {step === 3 && (
                            <FadeIn className="h-full flex flex-col items-center justify-center text-center">
                                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white mb-6 shadow-xl animate-float">
                                    <CheckCircle2 size={40} />
                                </div>
                                <h3 className="text-3xl font-black font-heading mb-4">You're Booked!</h3>
                                <p className="text-ronin-neutral-500 max-w-xs mx-auto mb-8">
                                    We've sent a calendar invitation to your email. See you on {MONTHS[currentMonth]} {selectedDate} at {selectedTime}.
                                </p>
                                <Button variant="outline" onClick={() => { setSelectedDate(null); setSelectedTime(null); setStep(1); }}>
                                    Book Another
                                </Button>
                            </FadeIn>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
