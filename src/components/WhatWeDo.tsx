import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const panelImages = [
    "/20251229_150209.jpg",
    "/20251231_084816.jpg",
    "/20251231_084823.jpg",
    "/20251231_084826.jpg",
    "/20251231_090132.jpg",
    "/20251231_090715.jpg",
    "/20251231_091258.jpg",
    "/20230407_150440.jpg",
    "/20221104_141034.jpg",
    "/20220406_154224.jpg",
];

const evImages = [
    "/20210408_085026.jpg",
    "/20210408_085141.jpg",
    "/20210609_102045.jpg",
    "/20220329_123502.jpg",
    "/20221105_135113.jpg",
    "/20221105_140238.jpg",
    "/20230429_123552.jpg",
    "/20230922_123335.jpg",
    "/20250726_091320.jpg",
];

const rewireImages = [
    "/IMG_20231006_102913.jpg",
    "/IMG_20231006_102757.jpg",
    "/IMG_20231005_133335.jpg",
    "/IMG_20231005_133321.jpg",
    "/20251210_152926.jpg",
    "/20251205_110450.jpg",
    "/20251205_110014.jpg",
    "/20251205_110008.jpg",
    "/20251205_104126.jpg",
    "/20230708_121549.jpg",
    "/20230707_122816.jpg",
    "/20230707_122756.jpg",
    "/20230504_165007.jpg",
];

const residentialImages = [
    "/IMG_20210301_130843_838.jpg",
    "/20250926_104222.jpg",
    "/20250912_071537.jpg",
    "/20250910_082837.jpg",
    "/20250910_082843.jpg",
    "/20250909_101032.jpg",
    "/20250829_125815.jpg",
    "/20250828_082144.jpg",
    "/20250828_082131.jpg",
    "/20231019_151426.jpg",
    "/20230613_130423.jpg",
    "/20230613_130407.jpg",
    "/20230531_162252.jpg",
    "/20230529_133116.jpg",
    "/20230324_152944.jpg",
    "/20230324_124516.jpg",
    "/20230324_123644.jpg",
    "/20230324_123639.jpg",
];

const solarImages = [
    "/20210520_181722.jpg",
    "/20210603_145611.jpg",
    "/20220321_130125.jpg",
    "/20220413_165449.jpg",
    "/20221104_141044.jpg",
    "/20221104_141110.jpg",
    "/20221104_141112.jpg",
    "/20230317_133334.jpg",
    "/20230317_133337.jpg",
    "/20230324_123639.jpg",
    "/20230324_123644.jpg",
    "/20230324_124516.jpg",
    "/20230324_152944.jpg",
    "/20230529_133116.jpg",
    "/20230531_162252.jpg",
    "/20230613_130407.jpg",
    "/20230613_130423.jpg",
    "/20231019_151426.jpg",
];

function ImageCarousel({ images }: { images: string[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, [images.length]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <div className="relative group w-full h-[450px] overflow-hidden rounded-3xl shadow-2xl border-8 border-gray-50">
            {images.map((img, index) => (
                <div
                    key={img}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img
                        src={img}
                        alt={`Service Photo ${index + 1}`}
                        className="w-full h-full object-contain bg-neutral-100"
                    />
                </div>
            ))}

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
            >
                <ChevronLeft size={20} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
            >
                <ChevronRight size={20} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'bg-white w-6' : 'bg-white/50'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}

export default function WhatWeDo() {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Intro Section */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-4xl font-black mb-6 uppercase tracking-tight text-[#1A1A1A]">What We Do</h2>
                    <div className="w-20 h-1 bg-[#E2703A] mx-auto mb-8 rounded-full" />
                    <p className="text-gray-700 text-lg leading-relaxed font-medium mb-4">
                        AENS Electrical Services is a licensed C‑10 electrical contractor delivering fast, high‑end work for homes, businesses, and industrial facilities across South Orange County.
                    </p>
                    <p className="text-gray-600 text-base leading-relaxed">
                        We specialize in electrical panel upgrades, EV charger installations, full-house rewires, and remodeling projects, completed with clean workmanship and attention to every detail.
                    </p>
                </div>

                {/* Sub-blocks with alternating layout */}
                <div className="space-y-32">
                    {/* Block 1: Panel Upgrades */}
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-1">
                            <h3 className="text-3xl font-black mb-4 uppercase text-[#1A1A1A]">Panel Upgrades</h3>
                            <p className="text-gray-600 text-base leading-relaxed mb-6">
                                Upgrade your outdated or overloaded panel so it can safely handle today’s power demands, from EV chargers to new HVAC systems and smart homes.
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed mb-8">
                                We manage the entire process – load calculations, permits, panel replacement, grounding, and final inspection – so your service is safe, code‑compliant, and ready for future expansion.
                            </p>
                            <a href="#contact" className="inline-block bg-primary hover:bg-red-700 text-white px-10 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-lg hover:shadow-primary/20 active:scale-95">
                                Learn More
                            </a>
                        </div>
                        <div className="order-2">
                            <ImageCarousel images={panelImages} />
                        </div>
                    </div>

                    {/* Block 2: EV Charger Installation (Reversed) */}
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1">
                            <ImageCarousel images={evImages} />
                        </div>
                        <div className="order-1 md:order-2">
                            <h3 className="text-3xl font-black mb-4 uppercase text-[#1A1A1A]">EV Charger Installation</h3>
                            <p className="text-gray-600 text-base leading-relaxed mb-6">
                                We install Level 2 EV chargers for Tesla, Ford, Rivian, BMW and all major electric vehicle brands in garages, driveways, and commercial parking areas.
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed mb-8">
                                Our team evaluates your panel capacity, designs the best circuit route, and delivers a clean, professional installation that charges fast and protects your electrical system.
                            </p>
                            <a href="#contact" className="inline-block bg-primary hover:bg-red-700 text-white px-10 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-lg hover:shadow-primary/20 active:scale-95">
                                Get a Quote
                            </a>
                        </div>
                    </div>

                    {/* Block 3: Rewiring & Remodeling */}
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-1">
                            <h3 className="text-3xl font-black mb-4 uppercase text-[#1A1A1A]">Rewiring & Remodeling</h3>
                            <p className="text-gray-600 text-base leading-relaxed mb-6">
                                From older homes that need new wiring to complete kitchen, bathroom, and office remodels, we modernize your electrical system for safety, reliability, and better lighting.
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed mb-8">
                                We remove unsafe or undersized wiring, add dedicated circuits, and integrate modern solutions like LED lighting, smart switches, and surge protection.
                            </p>
                            <a href="#work" className="inline-block bg-primary hover:bg-red-700 text-white px-10 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-lg hover:shadow-primary/20 active:scale-95">
                                View Projects
                            </a>
                        </div>
                        <div className="order-2">
                            <ImageCarousel images={rewireImages} />
                        </div>
                    </div>

                    {/* Block 4: Residential, Commercial & Industrial (Reversed) */}
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1">
                            <ImageCarousel images={residentialImages} />
                        </div>
                        <div className="order-1 md:order-2">
                            <h3 className="text-3xl font-black mb-4 uppercase text-[#1A1A1A]">Residential, Commercial & Industrial</h3>
                            <p className="text-gray-600 text-base leading-relaxed mb-6">
                                AENS handles everything from service calls in single‑family homes to tenant improvements, small commercial build‑outs, and light industrial projects.
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed mb-8">
                                Every job is performed by licensed, insured electricians and backed by our commitment to clean work areas, clear communication, and on‑time completion.
                            </p>
                            <a href="#contact" className="inline-block bg-primary hover:bg-red-700 text-white px-10 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-lg hover:shadow-primary/20 active:scale-95">
                                Contact Us
                            </a>
                        </div>
                    </div>

                    {/* Block 5: Solar & Battery Storage */}
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-1">
                            <h3 className="text-3xl font-black mb-4 uppercase text-[#1A1A1A]">Solar & Battery Storage</h3>
                            <p className="text-gray-600 text-base leading-relaxed mb-6">
                                Maximize your energy independence with high-performance solar solutions. We install, maintain, and upgrade solar panel systems and battery backups.
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed mb-8">
                                From inverter replacements and troubleshooting to full system battery integration (like Tesla Powerwall), we ensure your solar investment delivers maximum efficiency and safety.
                            </p>
                            <a href="#contact" className="inline-block bg-primary hover:bg-red-700 text-white px-10 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-lg hover:shadow-primary/20 active:scale-95">
                                Solar Estimate
                            </a>
                        </div>
                        <div className="order-2">
                            <ImageCarousel images={solarImages} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
