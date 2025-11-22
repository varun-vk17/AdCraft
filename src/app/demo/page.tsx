'use client';

import React from 'react';
import { Zap, ArrowLeft, Calendar, Clock, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function DemoPage() {
    return (
        <div className="min-h-screen bg-[#020202] text-white flex flex-col relative overflow-hidden selection:bg-[#22FF77] selection:text-black">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[#22FF77] rounded-full mix-blend-screen filter blur-[150px] opacity-5 pointer-events-none"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

            {/* Navigation */}
            <nav className="p-6 relative z-10">
                <Link href="/" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>
            </nav>

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center p-6 relative z-10">
                <div className="text-center mb-12 max-w-2xl">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#22FF77]/30 bg-[#22FF77]/5 px-4 py-1.5 text-xs font-bold text-[#22FF77] mb-6 uppercase tracking-wider shadow-[0_0_20px_rgba(34,255,119,0.2)] backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-[#22FF77] animate-pulse"></span>
                        Limited Spots Available
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        See AdCraft in <span className="text-[#22FF77]">Action.</span>
                    </h1>
                    <p className="text-neutral-400 text-lg">
                        Book a personalized demo with our product experts. We'll show you how to generate high-converting ads for your specific brand.
                    </p>
                </div>

                <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8 items-start">
                    {/* Left: Value Props */}
                    <div className="space-y-6">
                        <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-[#22FF77]/30 transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-[#22FF77]/10 flex items-center justify-center mb-4 text-[#22FF77] group-hover:scale-110 transition-transform">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Live Generation</h3>
                            <p className="text-neutral-400 text-sm">We'll take your actual product URL and generate ad creatives live on the call.</p>
                        </div>

                        <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-blue-500/30 transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400 group-hover:scale-110 transition-transform">
                                <Calendar className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Strategy Session</h3>
                            <p className="text-neutral-400 text-sm">Get a custom ad strategy audit from our performance marketing team.</p>
                        </div>

                        <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-purple-500/30 transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 text-purple-400 group-hover:scale-110 transition-transform">
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Q&A</h3>
                            <p className="text-neutral-400 text-sm">Ask any questions about integration, pricing, or enterprise features.</p>
                        </div>
                    </div>

                    {/* Right: Booking Form */}
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-20">
                            <Clock className="w-32 h-32 text-white" />
                        </div>

                        <h2 className="text-2xl font-bold mb-6 relative z-10">Schedule a time</h2>

                        <form className="space-y-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">First Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#22FF77]/50 focus:ring-1 focus:ring-[#22FF77]/50 transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#22FF77]/50 focus:ring-1 focus:ring-[#22FF77]/50 transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Work Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#22FF77]/50 focus:ring-1 focus:ring-[#22FF77]/50 transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Company Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#22FF77]/50 focus:ring-1 focus:ring-[#22FF77]/50 transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Preferred Date</label>
                                <input
                                    type="date"
                                    className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#22FF77]/50 focus:ring-1 focus:ring-[#22FF77]/50 transition-all [color-scheme:dark]"
                                />
                            </div>

                            <button className="w-full bg-[#22FF77] text-black font-bold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(34,255,119,0.4)] transition-all transform active:scale-95 mt-4 text-lg">
                                Confirm Booking
                            </button>

                            <p className="text-xs text-center text-neutral-500 mt-4">
                                By booking a demo, you agree to our Terms of Service and Privacy Policy.
                            </p>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}
