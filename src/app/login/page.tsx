'use client';

import React from 'react';
import { Zap, ArrowLeft, Github, Mail } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-[#020202] text-white flex flex-col relative overflow-hidden selection:bg-[#22FF77] selection:text-black">
            {/* Background Effects */}
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#22FF77] rounded-full mix-blend-screen filter blur-[120px] opacity-10 animate-pulse"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-10"></div>
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
                <div className="w-full max-w-md">
                    {/* Logo */}
                    <div className="flex justify-center mb-8">
                        <div className="flex items-center gap-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-gradient-to-br from-[#22FF77] to-[#1ea356] text-black shadow-[0_0_15px_rgba(34,255,119,0.4)]">
                                <Zap className="fill-current w-6 h-6" style={{ strokeWidth: 0 }} />
                            </div>
                            <span className="text-2xl font-bold tracking-tight">AdCraft<span className="text-neutral-500">AI</span></span>
                        </div>
                    </div>

                    {/* Card */}
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 shadow-2xl backdrop-blur-xl">
                        <h1 className="text-2xl font-bold text-center mb-2">Welcome back</h1>
                        <p className="text-neutral-400 text-center mb-8 text-sm">Enter your details to access your workspace.</p>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="name@company.com"
                                    className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#22FF77]/50 focus:ring-1 focus:ring-[#22FF77]/50 transition-all"
                                />
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider">Password</label>
                                    <a href="#" className="text-xs text-[#22FF77] hover:underline">Forgot password?</a>
                                </div>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#22FF77]/50 focus:ring-1 focus:ring-[#22FF77]/50 transition-all"
                                />
                            </div>

                            <button className="w-full bg-[#22FF77] text-black font-bold py-3 rounded-xl hover:shadow-[0_0_20px_rgba(34,255,119,0.4)] transition-all transform active:scale-95 mt-2">
                                Sign In
                            </button>
                        </form>

                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/10"></div>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-[#0A0A0A] px-2 text-neutral-500">Or continue with</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white py-2.5 rounded-xl transition-all text-sm font-medium">
                                <Github className="w-4 h-4" /> GitHub
                            </button>
                            <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white py-2.5 rounded-xl transition-all text-sm font-medium">
                                <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center">
                                    <span className="text-black font-bold text-[10px]">G</span>
                                </div> Google
                            </button>
                        </div>

                        <p className="text-center mt-8 text-sm text-neutral-400">
                            Don't have an account? <Link href="/signup" className="text-[#22FF77] font-bold hover:underline">Sign up</Link>
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
