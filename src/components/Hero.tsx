import { useState, useEffect, useCallback } from 'react';
import { Phone } from 'lucide-react';

const bgImages = [
    '/20220321_125843.jpg',
    '/20201128_162824.jpg',
    '/20231013_133953.jpg',
];

export default function Hero() {
    const [currentImg, setCurrentImg] = useState(0);

    const next = useCallback(() => {
        setCurrentImg((prev) => (prev + 1) % bgImages.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [next]);

    return (
        <section className="relative min-h-[620px] w-full overflow-hidden bg-gray-900">
            {/* Sliding background images */}
            {bgImages.map((src, i) => (
                <img
                    key={src}
                    src={src}
                    alt="AENS Electrical Services"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === currentImg ? 'opacity-60' : 'opacity-0'
                        }`}
                    style={{ objectPosition: 'center 40%' }}
                />
            ))}

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-start py-28">

                {/* Top row: badge + phone */}
                <div className="w-full flex flex-wrap items-center justify-between gap-4 mb-6">
                    {/* License badge */}
                    <div className="inline-flex items-center gap-2 bg-primary/90 text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-lg">
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                        CA License #1071239 · Bonded & Insured
                    </div>

                    {/* Phone number */}
                    <a
                        href="tel:9492058561"
                        className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-5 py-2.5 rounded-full font-black text-sm uppercase tracking-widest transition-all active:scale-95 shadow-lg"
                    >
                        <Phone size={16} className="text-[#E2703A]" />
                        Cell: 949-205-8561
                    </a>
                </div>

                {/* Headline */}
                <h1 className="text-5xl md:text-7xl font-black text-white leading-tight uppercase mb-6 tracking-tight">
                    Residential &<br />
                    Commercial<br />
                    <span className="text-[#E2703A]">Electrical</span>
                </h1>

                {/* Subtitle */}
                <p className="text-gray-300 text-base md:text-lg font-medium mb-10 max-w-lg leading-relaxed">
                    Panel upgrades · EV chargers · Full rewires · Solar · Emergency service — South Orange County's trusted C‑10 contractor.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4">
                    <a
                        href="#contact"
                        className="inline-flex items-center bg-primary hover:bg-red-700 text-white px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest transition-all shadow-xl shadow-red-900/30 active:scale-95"
                    >
                        Schedule Now
                    </a>
                    <a
                        href="#services"
                        className="inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest transition-all active:scale-95"
                    >
                        Our Services
                    </a>
                </div>

                {/* Slide dots */}
                <div className="flex gap-2 mt-10">
                    {bgImages.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentImg(i)}
                            className={`h-1.5 rounded-full transition-all ${i === currentImg ? 'w-8 bg-[#E2703A]' : 'w-2 bg-white/40'
                                }`}
                            aria-label={`Slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Bottom stats strip */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-3 divide-x divide-white/10 py-5">
                        {[
                            { value: '10+', label: 'Years Experience' },
                            { value: 'Fast Response', label: 'Emergency Service' },
                            { value: '500+', label: 'Projects Completed' },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center px-4">
                                <div className="text-white font-black text-lg md:text-2xl leading-tight">{stat.value}</div>
                                <div className="text-gray-400 text-[10px] uppercase tracking-widest font-bold mt-0.5">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
