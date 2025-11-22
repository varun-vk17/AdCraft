'use client';

import React from 'react';
import { Zap, ArrowLeft, Github, Check } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
    const router = useRouter();

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate signup delay
        setTimeout(() => {
            router.push('/waitlist');
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-[#020202] text-white flex flex-col relative overflow-hidden selection:bg-[#22FF77] selection:text-black">
            {/* Background Effects */}
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#22FF77] rounded-full mix-blend-screen filter blur-[120px] opacity-10 animate-pulse"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-screen filter blur-[120px] opacity-10"></div>
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
                <div className="w-full max-w-4xl grid md:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Benefits */}
                    <div className="hidden md:block">
                        <div className="flex items-center gap-2 mb-8">
                            <div className="flex h-8 w-8 items-center justify-center rounded bg-gradient-to-br from-[#22FF77] to-[#1ea356] text-black shadow-[0_0_15px_rgba(34,255,119,0.4)]">
                                <Zap className="fill-current w-5 h-5" style={{ strokeWidth: 0 }} />
                            </div>
                            <span className="text-xl font-bold tracking-tight">AdCraft<span className="text-neutral-500">AI</span></span>
                        </div>

                        <h1 className="text-4xl font-bold mb-6 leading-tight">
                            Start creating <br />
                            <span className="text-[#22FF77]">high-converting ads</span> <br />
                            in seconds.
                        </h1>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-[#22FF77]/10 flex items-center justify-center text-[#22FF77]">
                                    <Check className="w-4 h-4" />
                                </div>
                                <span className="text-neutral-300">Unlimited AI generations</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-[#22FF77]/10 flex items-center justify-center text-[#22FF77]">
                                    <Check className="w-4 h-4" />
                                </div>
                                <span className="text-neutral-300">Export to Meta & TikTok</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-[#22FF77]/10 flex items-center justify-center text-[#22FF77]">
                                    <Check className="w-4 h-4" />
                                </div>
                                <span className="text-neutral-300">No credit card required</span>
                            </div>
                        </div>

                        <div className="mt-12 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="flex -space-x-2">
                                    <div className="w-8 h-8 rounded-full bg-neutral-700 border-2 border-[#0A0A0A]"></div>
                                    <div className="w-8 h-8 rounded-full bg-neutral-600 border-2 border-[#0A0A0A]"></div>
                                    <div className="w-8 h-8 rounded-full bg-neutral-500 border-2 border-[#0A0A0A]"></div>
                                </div>
                                <div className="text-sm font-bold text-white">Join 10,000+ marketers</div>
                            </div>
                            <p className="text-xs text-neutral-400">"The best ad tool I've used in 5 years." - Alex M.</p>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 shadow-2xl backdrop-blur-xl">
                        <h2 className="text-2xl font-bold text-center mb-2">Create your account</h2>
                        <p className="text-neutral-400 text-center mb-8 text-sm">Get started for free. No credit card needed.</p>

                        <form className="space-y-4" onSubmit={handleSignup}>
                            <div>
                                <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#22FF77]/50 focus:ring-1 focus:ring-[#22FF77]/50 transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="name@company.com"
                                    className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#22FF77]/50 focus:ring-1 focus:ring-[#22FF77]/50 transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Password</label>
                                <input
                                    type="password"
                                    placeholder="Create a password"
                                    className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#22FF77]/50 focus:ring-1 focus:ring-[#22FF77]/50 transition-all"
                                />
                            </div>

                            <button className="w-full bg-[#22FF77] text-black font-bold py-3 rounded-xl hover:shadow-[0_0_20px_rgba(34,255,119,0.4)] transition-all transform active:scale-95 mt-2">
                                Create Account
                            </button>
                        </form>

                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/10"></div>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-[#0A0A0A] px-2 text-neutral-500">Or sign up with</span>
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
                            Already have an account? <Link href="/login" className="text-[#22FF77] font-bold hover:underline">Log in</Link>
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
