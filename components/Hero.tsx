import Link from 'next/link';

export default function Hero() {
    return (
        <header className="hero relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[#E62B1E] rounded-full opacity-10 blur-[120px] animate-pulse"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                {/* Modern Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>

            <div className="hero-content z-10 w-full h-full text-center px-4 max-w-5xl mx-auto flex flex-col items-center pb-48 pt-20">
                <div className="flex-grow flex flex-col items-center justify-center w-full">
                    <div className="mb-8 relative">
                        <span className="text-[#E62B1E] font-bold tracking-widest text-sm md:text-base uppercase mb-4 block animate-fade-in-up">Theme 2026</span>
                        <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-none mb-2">
                            UNRAVELING
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">DIMENSIONS</span>
                        </h1>
                    </div>

                    <p className="text-gray-400 text-lg md:text-xl font-light tracking-wide mb-8 max-w-2xl mx-auto">
                        Where ideas converge , perspectives shift, and new realities emerge.
                    </p>

                    <div className="flex items-center gap-6 mb-8 border border-white/10 bg-white/5 py-3 px-8 rounded-full backpack-blur-sm hover:border-red-500/50 transition-colors duration-300">
                        <span className="text-white font-bold tracking-widest uppercase text-xs md:text-sm">February 7, 2025</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E62B1E]"></span>
                        <span className="text-gray-300 text-xs md:text-sm tracking-wide">VNIT Nagpur</span>
                    </div>
                    <div>
                        <p>Register for the event</p>
                    </div>

                    <div className="cta-container flex flex-col sm:flex-row items-center gap-6 mt-10">
                        <Link
                            href="/register"
                            className="group relative h-14 w-48 overflow-hidden rounded-full bg-[#E62B1E] shadow-lg shadow-red-600/30 transition-all duration-300 hover:w-56 hover:shadow-red-600/50"
                        >
                            <div className="absolute inset-0 flex items-center justify-center font-bold uppercase tracking-widest text-white transition-opacity duration-300 group-hover:opacity-0">
                                Register
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <span className="font-bold uppercase tracking-widest text-white">Let's Go</span>
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>



            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </header>
    );
}
