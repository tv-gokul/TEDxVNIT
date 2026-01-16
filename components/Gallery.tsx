export default function Gallery() {
    return (
        <section id="gallery">
            <h2 className="section-title">Gallery</h2>
            <div className="flex justify-center items-center w-full py-16">
                <div className="relative group">
                    {/* Red glow effect */}
                    <div 
                        className="absolute -inset-4 bg-red-600 rounded-2xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                        style={{
                            background: 'radial-gradient(ellipse at center, rgba(220, 38, 38, 0.6) 0%, rgba(185, 28, 28, 0.4) 40%, transparent 70%)',
                        }}
                    />
                    {/* Secondary inner glow */}
                    <div 
                        className="absolute -inset-2 bg-red-500 rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                    />
                    {/* Video container */}
                    <div className="relative">
                        <video
                            src="/gallery.mp4"
                            controls
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="relative z-10 w-full rounded-xl border border-red-500/30 shadow-2xl"
                            style={{ 
                                maxWidth: '600px',
                                boxShadow: '0 0 40px rgba(220, 38, 38, 0.3), 0 0 80px rgba(185, 28, 28, 0.2), inset 0 0 20px rgba(0, 0, 0, 0.5)'
                            }}
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
}
