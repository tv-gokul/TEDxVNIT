export default function Footer() {
    return (
        <footer className="relative bg-black pt-20 pb-10 border-t border-white/10 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

                {/* Brand / Links Column */}
                <div className="md:col-span-4 space-y-8">
                    <div>
                        <h2 className="text-3xl font-black text-white tracking-tighter mb-2">
                            <span className="text-[#E62B1E]">TED</span>
                            <sup className="text-sm ml-0.5 text-[#E62B1E]">x</sup>
                            <span>VNIT</span>
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                            Unraveling Dimensions. An independently organized TED event at Visvesvaraya National Institute of Technology, Nagpur.
                        </p>
                        <p className="text-white font-bold tracking-widest uppercase text-xs mt-4">
                            February 7, 2025
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-[#E62B1E] uppercase tracking-widest mb-6">Important Links</h3>
                        <ul className="space-y-3">
                            {[
                                { name: "TED Homepage", url: "https://www.ted.com" },
                                { name: "TEDx Program", url: "https://www.ted.com/about/programs-initiatives/tedx-program" },
                                { name: "TEDxVNIT Home", url: "/" }
                            ].map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.url}
                                        target={link.url.startsWith("/") ? "_self" : "_blank"}
                                        rel={link.url.startsWith("/") ? "" : "noopener noreferrer"}
                                        className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group"
                                    >
                                        <span className="w-0 h-[1px] bg-[#E62B1E] transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-2"></span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Map Section */}
                <div className="md:col-span-8">
                    <div className="flex flex-col h-full">
                        <h3 className="text-sm font-bold text-[#E62B1E] uppercase tracking-widest mb-6">Find us at VNIT Nagpur</h3>
                        <div className="flex-grow w-full min-h-[300px] rounded-2xl overflow-hidden shadow-2xl border border-white/5 relative group bg-[#111]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.492797615023!2d79.04930331493437!3d21.12521998595537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c062088463c7%3A0xc367686561234720!2sVisvesvaraya%20National%20Institute%20of%20Technology%2C%20Nagpur!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(85%)' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="opacity-60 group-hover:opacity-100 group-hover:filter-none transition-all duration-700"
                            ></iframe>

                            {/* Overlay that fades out on hover */}
                            <div className="absolute inset-0 bg-black/20 pointer-events-none group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-mono uppercase tracking-tight">
                <p>&copy; {new Date().getFullYear()} TEDxVNIT. All Rights Reserved.</p>
                <p>This independent TEDx event is operated under license from TED.</p>
            </div>
        </footer>
    );
}
