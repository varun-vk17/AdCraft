'use client';

import React, { useEffect, useState } from 'react';
import { Zap, ArrowLeft, Check, Share2, Twitter, Linkedin, Copy } from 'lucide-react';
import Link from 'next/link';
import confetti from 'canvas-confetti';

export default function WaitlistPage() {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        // Trigger confetti on load
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);

        return () => clearInterval(interval);
    }, []);

    const copyLink = () => {
        navigator.clipboard.writeText('https://adcraft.ai?ref=user123');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-[#020202] text-white flex flex-col relative overflow-hidden selection:bg-[#22FF77] selection:text-black">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#22FF77] rounded-full mix-blend-screen filter blur-[150px] opacity-10 animate-pulse pointer-events-none"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

            {/* Navigation */}
            <nav className="p-6 relative z-10">
                <Link href="/" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>
            </nav>

            {/* Main Content */}
            <main className="flex-1 flex items-center justify-center p-6 relative z-10">
                <div className="w-full max-w-lg text-center">

                    {/* Success Icon */}
                    <div className="w-24 h-24 mx-auto bg-[#22FF77]/10 rounded-full flex items-center justify-center mb-8 border border-[#22FF77]/20 shadow-[0_0_40px_rgba(34,255,119,0.3)] animate-bounce">
                        <Check className="w-12 h-12 text-[#22FF77]" />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                        You're on the <span className="text-[#22FF77]">list!</span>
                    </h1>
                    <p className="text-neutral-400 text-lg mb-8">
                        Thanks for joining. We're rolling out access to AdCraft V5 in batches. Keep an eye on your inbox.
                    </p>

                    {/* Position Card */}
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 mb-8 relative overflow-hidden group hover:border-[#22FF77]/30 transition-colors">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#22FF77]/5 to-transparent opacity-50"></div>

                        <div className="relative z-10">
                            <div className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-2">Your Position</div>
                            <div className="text-5xl font-bold text-white mb-2 font-mono">#1,234</div>
                            <div className="text-xs text-[#22FF77] flex items-center justify-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#22FF77] animate-pulse"></span>
                                Moving up fast
                            </div>
                        </div>
                    </div>

                    {/* Referral Section */}
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 text-left">
                        <div className="flex items-center gap-3 mb-4">
                            <Share2 className="w-5 h-5 text-[#22FF77]" />
                            <h3 className="font-bold text-white">Boost your position</h3>
                        </div>
                        <p className="text-sm text-neutral-400 mb-4">
                            Invite friends to skip the line. Get early access for every 3 referrals.
                        </p>

                        <div className="flex gap-2">
                            <div className="flex-1 bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-sm text-neutral-300 font-mono truncate">
                                https://adcraft.ai?ref=user123
                            </div>
                            <button
                                onClick={copyLink}
                                className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-4 rounded-xl transition-colors flex items-center justify-center"
                            >
                                {copied ? <Check className="w-5 h-5 text-[#22FF77]" /> : <Copy className="w-5 h-5" />}
                            </button>
                        </div>

                        <div className="flex gap-3 mt-4">
                            <button className="flex-1 py-2 rounded-lg bg-[#1DA1F2]/10 text-[#1DA1F2] text-xs font-bold hover:bg-[#1DA1F2]/20 transition-colors flex items-center justify-center gap-2">
                                <Twitter className="w-4 h-4" /> Tweet
                            </button>
                            <button className="flex-1 py-2 rounded-lg bg-[#0A66C2]/10 text-[#0A66C2] text-xs font-bold hover:bg-[#0A66C2]/20 transition-colors flex items-center justify-center gap-2">
                                <Linkedin className="w-4 h-4" /> Share
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
