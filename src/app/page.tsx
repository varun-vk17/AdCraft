'use client';

import React, { useEffect, useState } from 'react';
import { Zap, Sparkles, PlayCircle, Wand2, Link as LinkIcon, BarChart3, Globe, Music2, Youtube, Film, Sticker, Layout, Palette, Check, Quote, ArrowRight, TrendingUp, Users, Facebook, Target, Type } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

    useEffect(() => {
        // Intersection Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0 }); // Changed to 0 to trigger immediately

        // Small delay to ensure elements are rendered
        setTimeout(() => {
            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        }, 100);

        // Spotlight Effect
        const cards = document.querySelectorAll('.spotlight-card');
        const gridTop = document.getElementById('bento-grid-top');

        const handleMouseMove = (e: MouseEvent) => {
            for (const card of cards) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                // @ts-ignore
                card.style.setProperty('--mouse-x', `${x}px`);
                // @ts-ignore
                card.style.setProperty('--mouse-y', `${y}px`);
            }
        };

        if (gridTop) {
            // @ts-ignore
            gridTop.addEventListener('mousemove', handleMouseMove);
        }

        // Magnetic Buttons
        const magneticButtons = document.querySelectorAll('.group.relative.inline-flex');
        magneticButtons.forEach(btn => {
            // @ts-ignore
            btn.addEventListener('mousemove', (e: MouseEvent) => {
                const rect = (btn as HTMLElement).getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                (btn as HTMLElement).style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.05)`;
            });

            btn.addEventListener('mouseleave', () => {
                (btn as HTMLElement).style.transform = 'translate(0px, 0px) scale(1)';
            });
        });

        return () => {
            observer.disconnect();
            if (gridTop) {
                // @ts-ignore
                gridTop.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);

    return (
        <div className="antialiased selection:bg-[#22FF77] selection:text-black">
            {/* Navigation */}
            <nav className="fixed top-4 left-0 right-0 z-50 mx-auto max-w-7xl px-4 transition-all duration-500 ease-in-out" id="main-nav">
                <div id="nav-container" className="rounded-full border border-white/10 bg-[#020202]/80 backdrop-blur-xl px-6 py-3 flex items-center justify-between shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-all duration-500 ease-in-out mx-auto w-full">
                    <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded bg-gradient-to-br from-[#22FF77] to-[#1ea356] text-black shadow-[0_0_15px_rgba(34,255,119,0.4)]">
                            <Zap className="fill-current" style={{ strokeWidth: 0 }} />
                        </div>
                        <span className="text-lg font-bold tracking-tight">AdCraft<span className="text-neutral-500">AI</span></span>
                    </div>
                    <div id="nav-links" className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400 transition-all duration-300 ease-in-out overflow-hidden">
                        <a href="#features" className="hover:text-white transition-colors">Features</a>
                        <a href="#showcase" className="hover:text-white transition-colors">Showcase</a>
                        <a href="#vault" className="hover:text-white transition-colors">Vault</a>
                        <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/login" className="hidden md:block text-sm font-medium text-neutral-400 hover:text-white transition-colors">Login</Link>
                        <Link href="/signup" className="rounded-full bg-white/10 border border-white/10 px-5 py-2 text-sm font-medium text-white hover:bg-white/20 transition-colors backdrop-blur-md flex items-center gap-2">
                            <Sparkles className="w-4 h-4" />
                            Get Started
                        </Link>
                    </div>
                </div>
            </nav>

            {/* 1. Hero Section (Cinematic) */}
            <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden">
                {/* Background Effects */}
                <div className="glow-blob bg-[#22FF77] w-[800px] h-[800px] top-[-300px] left-1/2 -translate-x-1/2 opacity-20 mix-blend-screen"></div>
                <div className="glow-blob bg-blue-600 w-[600px] h-[600px] bottom-0 right-0 opacity-15 mix-blend-screen"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

                {/* Floating Particles */}
                <div className="particle w-1 h-1 top-1/4 left-1/4" style={{ animationDelay: '0s' }}></div>
                <div className="particle w-2 h-2 top-1/3 right-1/4" style={{ animationDelay: '2s' }}></div>
                <div className="particle w-1 h-1 bottom-1/4 left-1/3" style={{ animationDelay: '4s' }}></div>
                <div className="particle w-1 h-1 top-1/2 left-1/2 opacity-20" style={{ animationDelay: '1s' }}></div>
                <div className="particle w-1.5 h-1.5 bottom-1/3 right-1/3 opacity-20" style={{ animationDelay: '3s' }}></div>

                <div className="mx-auto max-w-7xl px-6 text-center relative z-10">
                    <div className="reveal inline-flex items-center gap-2 rounded-full border border-[#22FF77]/30 bg-[#22FF77]/5 px-4 py-1.5 text-xs font-bold text-[#22FF77] mb-8 uppercase tracking-wider shadow-[0_0_20px_rgba(34,255,119,0.2)] backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-[#22FF77] animate-pulse"></span>
                        AdCraft V5 is Live
                    </div>

                    <h1 className="reveal delay-100 text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.95] mb-8 drop-shadow-2xl">
                        The AI Ad Engine <br />
                        <span className="text-gradient-accent text-glow">for 10x Growth.</span>
                    </h1>

                    <p className="reveal delay-200 mt-8 max-w-2xl mx-auto text-xl text-neutral-400 md:text-2xl leading-relaxed font-light">
                        Stop guessing. AdCraft generates high-converting creatives, writes persuasive copy, and launches
                        campaigns in seconds.
                    </p>

                    <div className="reveal delay-300 mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
                        <Link href="/signup" className="group relative inline-flex h-16 items-center justify-center gap-3 rounded-full bg-[#00FF66] px-10 text-lg font-bold text-black transition-all hover:shadow-[0_0_50px_rgba(0,255,102,0.6)] hover:scale-105 active:scale-95">
                            <Sparkles className="h-5 w-5 fill-black" />
                            <span className="relative top-[1px]">Start Free Trial</span>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <a href="#how-it-works" className="group inline-flex h-16 items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-10 text-lg font-semibold text-white transition-all hover:bg-white/10 hover:border-white/20 backdrop-blur-md hover:scale-105 active:scale-95">
                            <PlayCircle className="h-5 w-5 fill-white/10" />
                            <span className="relative top-[1px]">See How It Works</span>
                        </a>
                    </div>

                    {/* Hero UI Composition (Realistic) */}
                    <div className="reveal delay-300 mt-32 relative mx-auto max-w-6xl h-[450px] md:h-[550px] perspective-1000">
                        {/* Main Interface */}
                        <div className="absolute inset-x-0 top-0 mx-auto w-full max-w-5xl rounded-2xl border border-white/10 bg-[#050505] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden z-10 transform transition-transform duration-1000 hover:rotate-x-2 hover:scale-[1.01] glass-premium">
                            {/* Toolbar */}
                            <div className="border-b border-white/5 bg-black/60 px-4 py-3 flex items-center justify-between backdrop-blur-md">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                                </div>
                                <div className="flex gap-6 text-xs font-medium text-neutral-500">
                                    <span className="text-white flex items-center gap-1"><Wand2 className="w-3 h-3" /> Generate</span>
                                    <span className="hover:text-white transition-colors cursor-pointer text-neutral-400">Edit</span>
                                    <span className="hover:text-white transition-colors cursor-pointer text-neutral-400">Analyze</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                                </div>
                            </div>

                            {/* Canvas Area */}
                            <div className="p-8 grid grid-cols-12 gap-8 h-[700px] bg-[#050505] relative">
                                {/* Background Grid */}
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                                {/* Sidebar (Inputs) */}
                                <div className="col-span-3 space-y-6 border-r border-white/5 pr-6 relative z-10">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Product URL</label>
                                        <div className="h-10 rounded bg-[#0F0F0F] border border-white/10 flex items-center px-3 text-sm text-neutral-300 shadow-inner">
                                            <LinkIcon className="w-3 h-3 mr-2 text-neutral-500" /> adcraft.ai
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Brand Vibe</label>
                                        <div className="flex flex-wrap gap-2">
                                            <div className="px-3 py-1.5 rounded-md bg-[#22FF77]/10 border border-[#22FF77]/30 text-[#22FF77] text-xs font-medium flex items-center gap-1">
                                                <Zap className="w-3 h-3" /> Futuristic
                                            </div>
                                            <div className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-neutral-400 text-xs font-medium hover:bg-white/10 cursor-pointer transition-colors">
                                                Minimal
                                            </div>
                                            <div className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-neutral-400 text-xs font-medium hover:bg-white/10 cursor-pointer transition-colors">
                                                Bold
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Generated Hooks</label>
                                        <div className="p-3 rounded bg-[#0F0F0F] border border-white/10 text-xs text-neutral-300 hover:border-white/30 transition-colors cursor-pointer group">
                                            <div className="flex justify-between mb-1"><span className="text-[#22FF77]">Winner</span>
                                                <span className="text-neutral-600">98/100</span>
                                            </div>
                                            "Stop wasting money on ads that don't convert..."
                                        </div>
                                        <div className="p-3 rounded bg-[#0F0F0F] border border-white/10 text-xs text-neutral-400 hover:border-white/30 transition-colors cursor-pointer">
                                            "The secret to 10x ROAS is finally here..."
                                        </div>
                                    </div>
                                    <button className="w-full py-3 rounded-lg bg-[#22FF77] text-black font-bold text-sm hover:shadow-[0_0_20px_rgba(34,255,119,0.4)] transition-all flex items-center justify-center gap-2">
                                        <Sparkles className="w-4 h-4" /> Regenerate
                                    </button>
                                </div>

                                {/* Main Preview Area (Center) */}
                                <div className="col-span-6 flex flex-col items-center justify-start pt-4 relative z-10 gap-6">
                                    {/* Tab Switcher */}
                                    <div className="flex p-1 bg-[#0F0F0F] rounded-lg border border-white/5">
                                        <div className="px-4 py-1.5 rounded bg-white/10 text-white text-xs font-bold shadow-sm">Meta Feed</div>
                                        <div className="px-4 py-1.5 rounded text-neutral-500 text-xs font-medium hover:text-white transition-colors cursor-pointer">TikTok</div>
                                        <div className="px-4 py-1.5 rounded text-neutral-500 text-xs font-medium hover:text-white transition-colors cursor-pointer">YouTube</div>
                                    </div>

                                    {/* Meta Ad Preview */}
                                    <div className="w-full max-w-sm bg-white rounded-xl overflow-hidden shadow-2xl relative group">
                                        {/* Header */}
                                        <div className="p-3 flex items-center gap-2 border-b border-gray-100">
                                            <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-[#22FF77] font-bold text-xs">AC</div>
                                            <div>
                                                <div className="text-xs font-bold text-black">AdCraft AI</div>
                                                <div className="text-[10px] text-gray-500">Sponsored · <Globe className="w-3 h-3 inline" /></div>
                                            </div>
                                        </div>
                                        {/* Content */}
                                        <div className="px-3 py-2 text-xs text-black">
                                            Create high-performing ads in seconds. 🚀 <span className="text-blue-600">#AI #Marketing</span>
                                        </div>
                                        <div className="relative aspect-square bg-black group-hover:opacity-95 transition-opacity">
                                            <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt="Ad Preview" />
                                            {/* Floating Tag */}
                                            <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur px-3 py-1 rounded-full text-white text-[10px] font-bold border border-white/10">
                                                Generated in 12s
                                            </div>
                                        </div>
                                        {/* CTA */}
                                        <div className="bg-gray-50 p-3 flex justify-between items-center border-t border-gray-100">
                                            <div>
                                                <div className="text-[10px] text-gray-500">ADCRAFT.AI</div>
                                                <div className="text-xs font-bold text-black">The Future of Ad Creation</div>
                                            </div>
                                            <button className="px-4 py-1.5 rounded bg-blue-600 text-white text-xs font-bold">Learn More</button>
                                        </div>

                                        {/* Floating A/B Score */}
                                        <div className="absolute -right-12 top-20 bg-[#0A0A0A] border border-[#22FF77] p-3 rounded-xl shadow-2xl transform rotate-6 z-20">
                                            <div className="text-[10px] text-neutral-400 uppercase font-bold">Predicted CTR</div>
                                            <div className="text-2xl font-bold text-[#22FF77]">2.4%</div>
                                            <div className="flex gap-1 mt-1">
                                                <div className="w-1 h-3 bg-[#22FF77] rounded-full"></div>
                                                <div className="w-1 h-3 bg-[#22FF77] rounded-full"></div>
                                                <div className="w-1 h-3 bg-[#22FF77] rounded-full"></div>
                                                <div className="w-1 h-3 bg-[#22FF77]/30 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Panel (Targeting) */}
                                <div className="col-span-3 space-y-6 border-l border-white/5 pl-6 relative z-10">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Audience Match</label>
                                        <div className="space-y-3">
                                            <div className="bg-[#0F0F0F] p-2 rounded border border-white/5">
                                                <div className="flex justify-between text-xs text-neutral-300 mb-1"><span>SaaS Founders</span> <span className="text-[#22FF77]">98%</span></div>
                                                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                                                    <div className="bg-[#22FF77] h-full rounded-full w-[98%] shadow-[0_0_10px_#22FF77]"></div>
                                                </div>
                                            </div>
                                            <div className="bg-[#0F0F0F] p-2 rounded border border-white/5">
                                                <div className="flex justify-between text-xs text-neutral-300 mb-1">
                                                    <span>Agencies</span> <span className="text-blue-400">85%</span>
                                                </div>
                                                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                                                    <div className="bg-blue-400 h-full rounded-full w-[85%]"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-4 border-t border-white/5">
                                        <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-2 block">Platform Preview</label>
                                        <div className="grid grid-cols-2 gap-2">
                                            <div className="aspect-[9/16] bg-neutral-900 rounded border border-white/10 relative overflow-hidden group cursor-pointer hover:border-[#22FF77]/50 transition-colors">
                                                <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity" alt="Preview 1" />
                                                <div className="absolute bottom-1 left-1 right-1 h-8 bg-gradient-to-t from-black to-transparent"></div>
                                                <Music2 className="absolute bottom-2 left-2 text-white w-3 h-3" />
                                            </div>
                                            <div className="aspect-[9/16] bg-neutral-900 rounded border border-white/10 relative overflow-hidden group cursor-pointer hover:border-red-500/50 transition-colors">
                                                <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity" alt="Preview 2" />
                                                <Youtube className="absolute bottom-2 left-2 text-white w-3 h-3" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Soft Blurred Gradient Bottom */}
                            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none z-20"></div>
                        </div>

                        {/* Floating Elements (Parallax) */}
                        <div className="animate-float absolute -left-12 top-40 z-20 w-56 rounded-xl border border-white/10 bg-[#0F0F0F]/90 p-4 shadow-2xl backdrop-blur-md hidden md:block">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400">
                                    <TrendingUp className="w-4 h-4" />
                                </div>
                                <div className="text-xs font-bold">Trending Hook</div>
                            </div>
                            <p className="text-xs text-neutral-300 leading-relaxed italic">"3 reasons why [Product] is taking over..."</p>
                            <div className="mt-2 text-[10px] text-[#22FF77] font-bold">+45% CTR Lift</div>
                        </div>

                        <div className="animate-float-delayed absolute -right-8 top-60 z-20 w-64 rounded-xl border border-white/10 bg-[#0F0F0F]/90 p-4 shadow-2xl backdrop-blur-md hidden md:block">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                    <Users className="w-4 h-4" />
                                </div>
                                <div className="text-xs font-bold">Audience Insight</div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-1.5 w-full bg-white/10 rounded-full">
                                    <div className="h-full w-3/4 bg-blue-500 rounded-full"></div>
                                </div>
                                <div className="flex justify-between text-[10px] text-neutral-400"><span>Tech Enthusiasts</span>
                                    <span>High Match</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* 2. How It Works (Steps) */}
            <section id="how-it-works" className="py-24 bg-[#020202] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#22FF77]/20 to-transparent"></div>
                <div className="mx-auto max-w-7xl px-6 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="reveal text-4xl md:text-5xl font-bold mb-6">From Idea to Ad in <span className="text-[#22FF77]">3 Steps</span></h2>
                        <p className="reveal delay-100 text-neutral-400 max-w-2xl mx-auto">No more complex workflows. AdCraft streamlines the entire creative process.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-[#22FF77]/20 via-[#22FF77]/50 to-[#22FF77]/20 z-0"></div>

                        {/* Step 1 */}
                        <div className="reveal group relative z-10">
                            <div className="w-24 h-24 mx-auto bg-[#0A0A0A] rounded-2xl border border-white/10 flex items-center justify-center mb-8 relative z-10 group-hover:border-[#22FF77]/50 transition-colors shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                                <div className="absolute inset-0 bg-[#22FF77]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <LinkIcon className="w-10 h-10 text-neutral-400 group-hover:text-[#22FF77] transition-colors" />
                                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#22FF77] text-black font-bold flex items-center justify-center border-4 border-[#020202]">1</div>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-center group-hover:text-[#22FF77] transition-colors">Paste URL</h3>
                            <p className="text-neutral-500 text-center text-sm leading-relaxed">Simply enter your product or landing page URL. Our AI instantly analyzes your brand.</p>
                        </div>

                        {/* Step 2 */}
                        <div className="reveal delay-100 group relative z-10">
                            <div className="w-24 h-24 mx-auto bg-[#0A0A0A] rounded-2xl border border-white/10 flex items-center justify-center mb-8 relative z-10 group-hover:border-[#22FF77]/50 transition-colors shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                                <div className="absolute inset-0 bg-[#22FF77]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <Zap className="w-10 h-10 text-neutral-400 group-hover:text-[#22FF77] transition-colors" />
                                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#22FF77] text-black font-bold flex items-center justify-center border-4 border-[#020202]">2</div>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-center group-hover:text-[#22FF77] transition-colors">AI Generation</h3>
                            <p className="text-neutral-500 text-center text-sm leading-relaxed">AdCraft generates 10+ variations of copy, visuals, and hooks tailored to your audience.</p>
                        </div>

                        {/* Step 3 */}
                        <div className="reveal delay-200 group relative z-10">
                            <div className="w-24 h-24 mx-auto bg-[#0A0A0A] rounded-2xl border border-white/10 flex items-center justify-center mb-8 relative z-10 group-hover:border-[#22FF77]/50 transition-colors shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                                <div className="absolute inset-0 bg-[#22FF77]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <Sparkles className="w-10 h-10 text-neutral-400 group-hover:text-[#22FF77] transition-colors" />
                                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#22FF77] text-black font-bold flex items-center justify-center border-4 border-[#020202]">3</div>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-center group-hover:text-[#22FF77] transition-colors">Launch & Scale</h3>
                            <p className="text-neutral-500 text-center text-sm leading-relaxed">Export directly to Meta/TikTok Ads Manager or download assets to launch manually.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Features (Bento Grid) */}
            <section id="features" className="py-32 relative">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center mb-20">
                        <h2 className="reveal text-4xl md:text-6xl font-bold mb-6">Everything You Need to <br /><span className="text-gradient-accent">Dominate the Feed.</span></h2>
                        <p className="reveal delay-100 text-neutral-400 text-lg">Powerful AI tools designed for modern performance marketing.</p>
                    </div>

                    {/* Top Grid: Strict 3-Column Layout */}
                    <div id="bento-grid-top" className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 max-w-6xl mx-auto h-[600px]">
                        {/* Card 1: Generative AI Core (Large - Spans 2 Cols, 2 Rows) */}
                        <div className="reveal md:col-span-2 md:row-span-2 bg-[#050505] border border-white/5 rounded-3xl p-8 relative overflow-hidden group h-full spotlight-card">
                            <div className="spotlight-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(0,255,102,0.06), transparent 40%)' }}></div>

                            {/* Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#00FF66]/5 via-transparent to-purple-500/5 opacity-50"></div>

                            <div className="absolute top-0 right-0 p-8 z-20">
                                <div className="w-12 h-12 rounded-full bg-[#00FF66]/10 flex items-center justify-center border border-[#00FF66]/20 shadow-[0_0_15px_rgba(0,255,102,0.1)]">
                                    <Sparkles className="text-xl text-[#00FF66]" />
                                </div>
                            </div>

                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <h3 className="text-3xl font-bold mb-2 text-white">Generative AI Core</h3>
                                    <p className="text-neutral-400 max-w-md text-lg">Turn a single product URL into hundreds of on-brand ad creatives. No design skills required.</p>
                                </div>

                                {/* Main Visual */}
                                <div className="mt-8 relative h-72 w-full rounded-xl border border-white/10 bg-[#0A0A0A] overflow-hidden group-hover:border-[#00FF66]/30 transition-colors duration-500 shadow-2xl">
                                    {/* Image Preview */}
                                    <img src="/assets/feature_generative_core.png" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 scale-105 group-hover:scale-100 transition-transform" alt="AI Generation Preview" />

                                    {/* Overlay UI */}
                                    <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                                        <div className="flex items-center gap-3">
                                            <div className="h-1.5 flex-1 bg-white/20 rounded-full overflow-hidden">
                                                <div className="h-full bg-[#00FF66] w-3/4 shadow-[0_0_10px_#00FF66]"></div>
                                            </div>
                                            <span className="text-xs font-mono text-[#00FF66]">GENERATING...</span>
                                        </div>
                                    </div>

                                    {/* Floating Badge */}
                                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur border border-white/10 text-xs font-bold text-white flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-pulse"></span>
                                        AI Active
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Precision Targeting (Top Right) */}
                        <div className="reveal bg-[#050505] border border-white/5 rounded-3xl p-8 relative overflow-hidden group h-full spotlight-card hover:border-blue-500/30 transition-colors">
                            <div className="spotlight-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(59,130,246,0.1), transparent 40%)' }}></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent opacity-100 transition-opacity"></div>
                            <div className="absolute inset-0 opacity-40 mix-blend-overlay transition-opacity group-hover:opacity-60" style={{ backgroundImage: "url('/assets/feature_targeting.png')", backgroundSize: 'cover', backgroundPosition: 'center', maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)' }}></div>

                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                                        <Target className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2 text-white bg-gradient-to-t from-black/90 via-black/50 to-transparent p-2 rounded-lg backdrop-blur-sm inline-block">Precision Targeting</h3>
                                    <p className="text-sm text-neutral-300 font-medium bg-black/60 p-2 rounded-lg backdrop-blur-md">AI analyzes audience signals to find your perfect buyers.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3: Smart Copy (Bottom Right) */}
                        <div className="reveal delay-100 bg-[#050505] border border-white/5 rounded-3xl p-8 relative overflow-hidden group h-full spotlight-card hover:border-pink-500/30 transition-colors">
                            <div className="spotlight-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(236,72,153,0.1), transparent 40%)' }}></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 to-transparent opacity-100 transition-opacity"></div>
                            <div className="absolute inset-0 opacity-40 mix-blend-overlay transition-opacity group-hover:opacity-60" style={{ backgroundImage: "url('/assets/feature_copy.png')", backgroundSize: 'cover', backgroundPosition: 'center', maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)' }}></div>

                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center mb-4 text-pink-400 border border-pink-500/20 group-hover:scale-110 transition-transform duration-300">
                                        <Type className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2 text-white bg-gradient-to-t from-black/90 via-black/50 to-transparent p-2 rounded-lg backdrop-blur-sm inline-block">Smart Copywriter</h3>
                                    <p className="text-sm text-neutral-300 font-medium bg-black/60 p-2 rounded-lg backdrop-blur-md">Persuasive ad copy generated in your brand voice.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section: Wide Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-6">
                        {/* Card 4: Performance Score */}
                        <div className="reveal delay-200 bg-[#050505] border border-white/5 rounded-3xl p-8 relative overflow-hidden group h-[240px] spotlight-card hover:border-purple-500/30 transition-colors">
                            <div className="spotlight-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(168,85,247,0.1), transparent 40%)' }}></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent opacity-100 transition-opacity"></div>
                            <div className="absolute inset-0 opacity-40 mix-blend-overlay transition-opacity group-hover:opacity-60" style={{ backgroundImage: "url('/assets/feature_analytics.png')", backgroundSize: 'cover', backgroundPosition: 'center', maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)' }}></div>

                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 text-purple-400 border border-purple-500/20 group-hover:scale-110 transition-transform duration-300">
                                        <BarChart3 className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2 text-white bg-gradient-to-t from-black/90 via-black/50 to-transparent p-2 rounded-lg backdrop-blur-sm inline-block">Performance Score</h3>
                                    <p className="text-sm text-neutral-300 font-medium bg-black/60 p-2 rounded-lg backdrop-blur-md">Predict ad performance before you spend a dollar.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 5: Instant Export */}
                        <div className="reveal bg-[#050505] border border-white/5 rounded-3xl p-8 relative overflow-hidden group h-[240px] spotlight-card hover:border-[#22FF77]/30 transition-colors flex items-center justify-between">
                            <div className="spotlight-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(34,255,119,0.05), transparent 40%)' }}></div>

                            <div className="relative z-10 max-w-xl">
                                <div className="w-12 h-12 rounded-xl bg-[#22FF77]/10 flex items-center justify-center mb-4 text-[#22FF77] border border-[#22FF77]/20 group-hover:scale-110 transition-transform duration-300">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-white">Instant Export</h3>
                                <p className="text-neutral-400">Push your winning ads directly to Meta Ads Manager, TikTok Ads, and YouTube with one click.</p>
                            </div>

                            <div className="hidden md:flex gap-4 relative z-10 pr-12">
                                <div className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center text-white shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300">
                                    <Facebook className="w-6 h-6 fill-current" />
                                </div>
                                <div className="w-12 h-12 rounded-full bg-black border border-white/20 flex items-center justify-center text-white shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300 delay-75">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
                                </div>
                                <div className="w-12 h-12 rounded-full bg-[#FF0000] flex items-center justify-center text-white shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300 delay-150">
                                    <Youtube className="w-6 h-6 fill-current" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* 4. Showcase (Infinite Scroll Marquee) */}
            <section id="showcase" className="py-32 overflow-hidden bg-black relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505] to-transparent pointer-events-none"></div>

                <div className="mb-20 text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Generated in <span className="text-[#00FF66]">seconds.</span></h2>
                    <p className="text-neutral-400 text-xl">From fashion to tech, see what AdCraft can create.</p>
                </div>

                {/* Marquee Container */}
                <div className="relative w-full">
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-20"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-20"></div>

                    <div className="flex gap-8 w-max animate-marquee">
                        {/* Set 1 */}
                        <div className="w-[400px] h-[500px] rounded-3xl overflow-hidden relative group border border-white/10">
                            <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                <span className="text-[#00FF66] font-bold mb-2">Fashion</span>
                                <h3 className="text-2xl font-bold text-white">Summer Collection</h3>
                            </div>
                        </div>
                        <div className="w-[400px] h-[500px] rounded-3xl overflow-hidden relative group border border-white/10">
                            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                <span className="text-[#00FF66] font-bold mb-2">Tech</span>
                                <h3 className="text-2xl font-bold text-white">Next Gen Gaming</h3>
                            </div>
                        </div>
                        <div className="w-[400px] h-[500px] rounded-3xl overflow-hidden relative group border border-white/10">
                            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                <span className="text-[#00FF66] font-bold mb-2">Food</span>
                                <h3 className="text-2xl font-bold text-white">Artisan Burgers</h3>
                            </div>
                        </div>
                        <div className="w-[400px] h-[500px] rounded-3xl overflow-hidden relative group border border-white/10">
                            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                <span className="text-[#00FF66] font-bold mb-2">Sport</span>
                                <h3 className="text-2xl font-bold text-white">Run Further</h3>
                            </div>
                        </div>

                        {/* Set 2 (Duplicate for Loop) */}
                        <div className="w-[400px] h-[500px] rounded-3xl overflow-hidden relative group border border-white/10">
                            <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                <span className="text-[#00FF66] font-bold mb-2">Fashion</span>
                                <h3 className="text-2xl font-bold text-white">Summer Collection</h3>
                            </div>
                        </div>
                        <div className="w-[400px] h-[500px] rounded-3xl overflow-hidden relative group border border-white/10">
                            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                <span className="text-[#00FF66] font-bold mb-2">Tech</span>
                                <h3 className="text-2xl font-bold text-white">Next Gen Gaming</h3>
                            </div>
                        </div>
                        <div className="w-[400px] h-[500px] rounded-3xl overflow-hidden relative group border border-white/10">
                            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                <span className="text-[#00FF66] font-bold mb-2">Food</span>
                                <h3 className="text-2xl font-bold text-white">Artisan Burgers</h3>
                            </div>
                        </div>
                        <div className="w-[400px] h-[500px] rounded-3xl overflow-hidden relative group border border-white/10">
                            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                <span className="text-[#00FF66] font-bold mb-2">Sport</span>
                                <h3 className="text-2xl font-bold text-white">Run Further</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Creator Vault */}
            <section id="vault" className="py-24 border-y border-white/5 bg-[#080808] relative overflow-hidden">
                <div className="glow-blob bg-blue-600 w-[600px] h-[600px] top-1/2 left-0 opacity-10 mix-blend-screen"></div>

                <div className="mx-auto max-w-7xl px-6 relative z-10">
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-bold">Creator Vault</h2>
                            <p className="text-neutral-400 mt-2">Premium assets included in your plan.</p>
                        </div>
                        <div className="px-3 py-1 rounded-full bg-[#22FF77]/10 border border-[#22FF77]/20 text-[#22FF77] text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(34,255,119,0.2)]">
                            <span className="inline-block w-2 h-2 rounded-full bg-[#22FF77] mr-1 animate-pulse"></span> Updated Weekly
                        </div>
                    </div>

                    {/* Soft Bottom Glow */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#22FF77] blur-[100px] opacity-5 pointer-events-none"></div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="group p-8 rounded-2xl bg-[#050505] border border-white/10 hover:border-[#00FF66] transition-all cursor-pointer hover:shadow-[0_0_50px_rgba(0,255,102,0.15)] hover:-translate-y-1">
                            <div className="w-14 h-14 rounded-xl bg-neutral-900 flex items-center justify-center mb-6 group-hover:bg-[#00FF66] transition-colors shadow-inner">
                                <Film className="text-2xl text-white group-hover:text-black" />
                            </div>
                            <h3 className="font-bold text-white text-lg mb-1">Motion Presets</h3>
                            <p className="text-xs text-neutral-500">50+ After Effects files</p>
                        </div>
                        <div className="group p-8 rounded-2xl bg-[#050505] border border-white/10 hover:border-blue-500 transition-all cursor-pointer hover:shadow-[0_0_50px_rgba(59,130,246,0.15)] hover:-translate-y-1">
                            <div className="w-14 h-14 rounded-xl bg-neutral-900 flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors shadow-inner">
                                <Sticker className="text-2xl text-white" />
                            </div>
                            <h3 className="font-bold text-white text-lg mb-1">Icon Pack</h3>
                            <p className="text-xs text-neutral-500">300+ Vector icons</p>
                        </div>
                        <div className="group p-8 rounded-2xl bg-[#050505] border border-white/10 hover:border-purple-500 transition-all cursor-pointer hover:shadow-[0_0_50px_rgba(168,85,247,0.15)] hover:-translate-y-1">
                            <div className="w-14 h-14 rounded-xl bg-neutral-900 flex items-center justify-center mb-6 group-hover:bg-purple-500 transition-colors shadow-inner">
                                <Layout className="text-2xl text-white" />
                            </div>
                            <h3 className="font-bold text-white text-lg mb-1">Templates</h3>
                            <p className="text-xs text-neutral-500">Figma & Canva ready</p>
                        </div>
                        <div className="group p-8 rounded-2xl bg-[#050505] border border-white/10 hover:border-pink-500 transition-all cursor-pointer hover:shadow-[0_0_50px_rgba(236,72,153,0.15)] hover:-translate-y-1">
                            <div className="w-14 h-14 rounded-xl bg-neutral-900 flex items-center justify-center mb-6 group-hover:bg-pink-500 transition-colors shadow-inner">
                                <Palette className="text-2xl text-white" />
                            </div>
                            <h3 className="font-bold text-white text-lg mb-1">Color Kits</h3>
                            <p className="text-xs text-neutral-500">Trending palettes</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Why It Works (Metrics) */}
            <section className="py-24 relative">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div className="reveal p-6 rounded-2xl bg-neutral-900 border border-white/5 hover:border-[#22FF77]/30 transition-colors group">
                            <div className="text-4xl font-bold text-[#22FF77] mb-2 group-hover:scale-110 transition-transform">+47%</div>
                            <div className="text-sm font-bold text-white uppercase tracking-wide mb-4">Lower CPA</div>
                            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full w-[47%] bg-[#22FF77] shadow-[0_0_10px_#22FF77]"></div>
                            </div>
                        </div>
                        <div className="reveal delay-100 p-6 rounded-2xl bg-neutral-900 border border-white/5 hover:border-blue-500/30 transition-colors group">
                            <div className="text-4xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform">10x</div>
                            <div className="text-sm font-bold text-white uppercase tracking-wide mb-4">Faster Output</div>
                            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full w-[80%] bg-blue-500 shadow-[0_0_10px_#3b82f6]"></div>
                            </div>
                        </div>
                        <div className="reveal delay-200 p-6 rounded-2xl bg-neutral-900 border border-white/5 hover:border-purple-500/30 transition-colors group">
                            <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform">3x</div>
                            <div className="text-sm font-bold text-white uppercase tracking-wide mb-4">More Variations</div>
                            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full w-[60%] bg-purple-500 shadow-[0_0_10px_#a855f7]"></div>
                            </div>
                        </div>
                        <div className="reveal delay-300 p-6 rounded-2xl bg-neutral-900 border border-white/5 hover:border-pink-500/30 transition-colors group">
                            <div className="text-4xl font-bold text-pink-400 mb-2 group-hover:scale-110 transition-transform">5x</div>
                            <div className="text-sm font-bold text-white uppercase tracking-wide mb-4">Hooks Tested</div>
                            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full w-[90%] bg-pink-500 shadow-[0_0_10px_#ec4899]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Social Proof (Monochrome to Color) */}
            <section className="py-12 border-y border-white/5 bg-black/50 backdrop-blur-sm">
                <div className="mx-auto max-w-7xl px-6 text-center">
                    <p className="text-sm font-medium text-neutral-500 mb-8 uppercase tracking-widest">Trusted by forward-thinking brands</p>
                    <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
                        <div className="flex items-center gap-2 group cursor-pointer">
                            <div className="w-8 h-8 bg-white rounded-full group-hover:bg-[#FF3333] transition-colors"></div>
                            <span className="font-bold text-xl text-white">Tesla</span>
                        </div>
                        <div className="flex items-center gap-2 group cursor-pointer">
                            <div className="w-8 h-8 bg-white rounded-full group-hover:bg-[#000000] group-hover:border group-hover:border-white transition-colors"></div>
                            <span className="font-bold text-xl text-white">Uber</span>
                        </div>
                        <div className="flex items-center gap-2 group cursor-pointer">
                            <div className="w-8 h-8 bg-white rounded-full group-hover:bg-[#00D1FF] transition-colors"></div>
                            <span className="font-bold text-xl text-white">Airbnb</span>
                        </div>
                        <div className="flex items-center gap-2 group cursor-pointer">
                            <div className="w-8 h-8 bg-white rounded-full group-hover:bg-[#1DB954] transition-colors"></div>
                            <span className="font-bold text-xl text-white">Spotify</span>
                        </div>
                    </div>
                </div>
            </section>
            {/* 8. Testimonials */}
            <section className="py-24 relative overflow-hidden">
                <div className="glow-blob bg-[#22FF77] w-[300px] h-[300px] top-0 left-0 opacity-5"></div>
                {/* Ambient Particles */}
                <div className="particle w-1 h-1 top-10 right-10 opacity-20"></div>
                <div className="particle w-1.5 h-1.5 bottom-20 left-20 opacity-20" style={{ animationDelay: '2s' }}></div>

                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#22FF77]/20 to-transparent blur-xl opacity-20 rounded-3xl border border-[#22FF77]/20 shadow-[0_0_30px_rgba(34,255,119,0.1)]"></div>
                            <div className="relative z-10">
                                <Quote className="text-6xl text-[#22FF77] mb-8 opacity-50" />
                                <h3 className="text-3xl md:text-4xl font-medium leading-tight mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">
                                    "AdCraft is the secret weapon of our growth team. It's like having a 20-person creative agency in your pocket."
                                </h3>
                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-[#22FF77] blur opacity-50 rounded-full"></div>
                                        <img src="https://i.pravatar.cc/100?img=12" className="w-14 h-14 rounded-full border-2 border-[#22FF77] relative z-10" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-white">Alex Rivera</div>
                                        <div className="text-sm text-neutral-500">CMO at TechFlow</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-6">
                            <div className="p-6 rounded-2xl bg-[#0F0F0F] border border-white/5 hover:border-[#22FF77]/30 transition-colors hover:shadow-[0_0_30px_rgba(34,255,119,0.05)] group shadow-lg">
                                <p className="text-neutral-300 text-sm mb-4 group-hover:text-white transition-colors">"The predictive scoring is scary accurate. Saved us thousands in wasted ad spend."</p>
                                <div className="flex items-center gap-2 text-xs font-bold text-neutral-500">
                                    <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center text-[10px]">SK</div> SARAH K.
                                </div>
                            </div>
                            <div className="p-6 rounded-2xl bg-[#0F0F0F] border border-white/5 hover:border-[#22FF77]/30 transition-colors hover:shadow-[0_0_30px_rgba(34,255,119,0.05)] group shadow-lg">
                                <p className="text-neutral-300 text-sm mb-4 group-hover:text-white transition-colors">"Finally, a tool that understands brand guidelines. The output actually looks like us."</p>
                                <div className="flex items-center gap-2 text-xs font-bold text-neutral-500">
                                    <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center text-[10px]">MT</div> MIKE T.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. Pricing */}
            <section id="pricing" className="py-24 relative overflow-hidden">
                <div className="glow-blob bg-[#22FF77] w-[500px] h-[500px] bottom-0 left-1/2 -translate-x-1/2 opacity-10 mix-blend-screen"></div>

                <div className="mx-auto max-w-7xl px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Simple pricing, elite results.</h2>
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <span className={`text-sm font-medium transition-colors ${billingCycle === 'monthly' ? 'text-white' : 'text-neutral-400'}`}>Monthly</span>
                            <button
                                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                                className="w-12 h-6 rounded-full bg-[#22FF77] p-1 cursor-pointer shadow-[0_0_10px_#22FF77] relative transition-all"
                            >
                                <div className={`w-4 h-4 rounded-full bg-black transition-transform duration-300 ${billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-0'}`}></div>
                            </button>
                            <span className={`text-sm font-medium transition-colors ${billingCycle === 'yearly' ? 'text-white' : 'text-neutral-400'}`}>Yearly <span className="text-[#22FF77] text-xs ml-1 font-bold bg-[#22FF77]/10 px-2 py-0.5 rounded">-20%</span></span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Starter */}
                        <div className="p-8 rounded-3xl border border-white/5 bg-[#0A0A0A] hover:border-white/10 transition-colors group opacity-60 hover:opacity-100">
                            <h3 className="text-xl font-bold text-white">Starter</h3>
                            <div className="text-4xl font-bold mt-4 mb-2">$0</div>
                            <p className="text-sm text-neutral-500 mb-8">For solo creators exploring AI.</p>
                            <Link href="/signup" className="block w-full py-3 rounded-xl border border-white/10 font-bold hover:bg-white/5 transition-colors text-neutral-400 hover:text-white text-center">Get Started</Link>
                            <ul className="mt-8 space-y-3 text-sm text-neutral-400">
                                <li className="flex gap-2"><Check className="text-[#22FF77]" /> 5 Credits/mo</li>
                                <li className="flex gap-2"><Check className="text-[#22FF77]" /> Basic Templates</li>
                            </ul>
                        </div>

                        {/* Pro (Highlighted) */}
                        <div className="p-8 rounded-3xl border border-[#22FF77] bg-[#0A0A0A] relative shadow-[0_0_50px_rgba(34,255,119,0.15)] transform md:-translate-y-4 hover:scale-[1.02] transition-transform duration-300">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#22FF77] text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-[0_0_20px_#22FF77]">Most Popular</div>
                            <div className="absolute inset-0 bg-[#22FF77] blur-3xl opacity-5 -z-10"></div>
                            <h3 className="text-xl font-bold text-white">Pro</h3>
                            <div className="text-4xl font-bold mt-4 mb-2">{billingCycle === 'monthly' ? '$49' : '$39'}</div>
                            <p className="text-sm text-neutral-500 mb-8">For growth teams scaling up.</p>
                            <Link href="/signup" className="block w-full py-3 rounded-xl bg-[#22FF77] text-black font-bold hover:shadow-[0_0_30px_rgba(34,255,119,0.6)] transition-shadow animate-pulse hover:animate-none text-center">Start Free Trial</Link>
                            <ul className="mt-8 space-y-3 text-sm text-neutral-300">
                                <li className="flex gap-2"><Check className="text-[#22FF77]" /> Unlimited Credits</li>
                                <li className="flex gap-2"><Check className="text-[#22FF77]" /> Advanced Analytics</li>
                                <li className="flex gap-2"><Check className="text-[#22FF77]" /> No Watermark</li>
                            </ul>
                        </div>

                        {/* Agency */}
                        <div className="p-8 rounded-3xl border border-white/10 bg-[#0A0A0A] hover:border-white/20 transition-colors group">
                            <h3 className="text-xl font-bold text-white">Agency</h3>
                            <div className="text-4xl font-bold mt-4 mb-2">{billingCycle === 'monthly' ? '$199' : '$159'}</div>
                            <p className="text-sm text-neutral-500 mb-8">For large teams & organizations.</p>
                            <Link href="/demo" className="block w-full py-3 rounded-xl border border-white/20 font-bold hover:bg-white/5 transition-colors text-center">Book a Demo</Link>
                            <ul className="mt-8 space-y-3 text-sm text-neutral-400">
                                <li className="flex gap-2"><Check className="text-[#22FF77]" /> 10 Seats</li>
                                <li className="flex gap-2"><Check className="text-[#22FF77]" /> API Access</li>
                                <li className="flex gap-2"><Check className="text-[#22FF77]" /> Dedicated Support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 10. Final CTA */}
            <section className="py-32 text-center relative overflow-hidden">
                <div className="glow-blob bg-purple-600 w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 mix-blend-screen pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#22FF77]/20 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

                {/* Floating Particles */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#22FF77] rounded-full animate-float opacity-50"></div>
                <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-blue-500 rounded-full animate-float-delayed opacity-50"></div>

                <div className="mx-auto max-w-4xl px-6 relative z-10">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400">
                        Start creating winning <br /> ads in minutes.
                    </h2>
                    <button className="px-10 py-4 rounded-full bg-white text-black text-lg font-bold hover:scale-105 transition-transform shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:shadow-[0_0_70px_rgba(255,255,255,0.5)]">
                        Get Started Free
                    </button>
                    <p className="mt-6 text-sm text-neutral-500">No credit card required · Cancel anytime</p>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/5 bg-black py-12">
                <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-[#22FF77]"></div>
                        <span className="font-bold">AdCraft AI</span>
                    </div>
                    <div className="flex gap-6 text-sm text-neutral-500">
                        <a href="#" className="hover:text-white">Privacy</a>
                        <a href="#" className="hover:text-white">Terms</a>
                        <a href="#" className="hover:text-white">Twitter</a>
                        <a href="#" className="hover:text-white">GitHub</a>
                    </div>
                    <div className="text-sm text-neutral-600">© 2025 AdCraft Inc.</div>
                </div>
            </footer>
        </div>
    );
}
