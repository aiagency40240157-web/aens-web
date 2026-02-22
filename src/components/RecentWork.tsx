import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const solarImages = [
    "/20210520_181722.jpg", "/20210603_145611.jpg", "/20220321_130125.jpg", "/20220413_165449.jpg",
    "/20221104_141044.jpg", "/20221104_141110.jpg", "/20221104_141112.jpg", "/20230317_133334.jpg",
    "/20230317_133337.jpg", "/20230324_123639.jpg", "/20230324_123644.jpg", "/20230324_124516.jpg",
    "/20230324_152944.jpg", "/20230529_133116.jpg", "/20230531_162252.jpg", "/20230613_130407.jpg",
    "/20230613_130423.jpg", "/20231019_151426.jpg",
];

const lightingImages = [
    "/20201128_162708.jpg", "/20201128_162715.jpg", "/20201128_162722.jpg", "/20201128_162724.jpg",
    "/20201128_162728.jpg", "/20201128_162753.jpg", "/20201128_162805.jpg", "/20201128_162812.jpg",
    "/20201128_162824.jpg", "/20201128_162859.jpg", "/20201128_162925.jpg", "/20201128_163248.jpg",
    "/20210814_143445.jpg", "/20210814_143449.jpg", "/20220321_125657.jpg", "/20220321_125718.jpg",
    "/20220321_125734.jpg", "/20220321_125744.jpg", "/20220321_125752.jpg", "/20220321_125827.jpg",
    "/20220321_125843.jpg", "/20220321_125923.jpg", "/20220321_130044.jpg", "/20221029_161231.jpg",
    "/20230412_121215.jpg", "/20230525_152514.jpg", "/20230525_152534.jpg", "/20230525_152606.jpg",
    "/20231013_133945.jpg", "/20241023_141831.jpg", "/20250614_102640.jpg",
];

const residentialImages = [
    "/IMG_20220513_163657_02.jpg",
    "/IMG_20210308_091242_213.jpg",
    "/IMG_20210223_194510_189.jpg",
    "/20250828_082144.jpg",
    "/20250726_091320.jpg",
    "/20250614_102640.jpg",
    "/20241023_141831.jpg",
    "/20230922_123335.jpg",
    "/20230619_125912.jpg",
    "/20230619_115909.jpg",
    "/20230525_152606.jpg",
    "/20230525_152534.jpg",
    "/20230429_123552.jpg",
];

const allImages = [...solarImages, ...lightingImages, ...residentialImages];
const fullGalleryImages = Array.from(new Set(allImages));

export default function RecentWork() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeImages, setActiveImages] = useState<string[]>([]);
    const [activeTitle, setActiveTitle] = useState("");

    const works = [
        { url: "/20210520_181722.jpg", title: "Solar Solutions", images: solarImages },
        { url: "/20241023_141831.jpg", title: "Lighting", images: lightingImages },
        { url: "/20250726_091320.jpg", title: "Residential Service", images: residentialImages }
    ];

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % activeImages.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + activeImages.length) % activeImages.length);

    const openModal = (images: string[], title: string) => {
        if (images.length === 0) return;
        setActiveImages(images);
        setActiveTitle(title);
        setCurrentIndex(0);
    };

    return (
        <section id="work" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-black mb-4 uppercase text-[#1A1A1A]">Our Recent Work</h2>
                <div className="w-20 h-1 bg-[#E2703A] mx-auto mb-12 rounded-full" />

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {works.map((work, i) => (
                        <div
                            key={i}
                            className={`aspect-[4/3] overflow-hidden rounded-[2rem] group relative shadow-xl border-4 border-gray-50 ${work.images.length > 0 ? 'cursor-pointer' : ''}`}
                            onClick={() => openModal(work.images, work.title)}
                        >
                            <img src={work.url} alt={work.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center">
                                <span className="text-white font-black uppercase tracking-[0.2em] text-xs mb-2">{work.title}</span>
                                {work.images.length > 0 && (
                                    <div className="bg-white text-black text-[10px] font-bold py-2 px-4 rounded-full uppercase tracking-widest">
                                        View Detail
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Banner style image */}
                <div className="w-full h-64 relative rounded-[2.5rem] overflow-hidden mb-12 shadow-2xl group border-8 border-gray-50">
                    <img
                        src="/20220321_125827.jpg"
                        alt="Quality Electrical Service"
                        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/60 to-transparent flex items-center px-16">
                        <div className="text-left">
                            <h3 className="text-white text-2xl font-black uppercase mb-4 tracking-tight">Quality You Can Trust</h3>
                            <div className="flex flex-wrap items-center gap-4">
                                <button
                                    onClick={() => openModal(fullGalleryImages, "Complete")}
                                    className="bg-primary hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-lg active:scale-95"
                                >
                                    View Full Gallery
                                </button>
                                <a href="tel:9492058561" className="inline-flex items-center gap-1.5 text-sm font-bold text-white/90 hover:text-[#E2703A] transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.09 6.09l1-1.01a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                    949-205-8561
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* General Portfolio Modal */}
            {activeImages.length > 0 && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
                    <div className="absolute inset-0 bg-[#1A1A1A]/95 backdrop-blur-md" onClick={() => setActiveImages([])} />

                    <div className="relative w-full max-w-5xl h-[90vh] bg-[#1A1A1A] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col border border-white/10">
                        {/* Header */}
                        <div className="p-6 flex items-center justify-between bg-[#111111] border-b border-white/5">
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E2703A]">{activeTitle} Portfolio</span>
                                <span className="text-white font-bold">Project Image {currentIndex + 1} of {activeImages.length}</span>
                            </div>
                            <button
                                onClick={() => setActiveImages([])}
                                className="bg-white/10 hover:bg-red-600 text-white p-2 rounded-full transition-all"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Main Image Area */}
                        <div className="flex-1 relative flex items-center justify-center p-4 md:p-12 overflow-hidden bg-black">
                            <img
                                src={activeImages[currentIndex]}
                                alt="Work Detail"
                                className="max-w-full max-h-full object-contain shadow-2xl transition-all duration-500"
                            />

                            {/* Navigation Arrows */}
                            <button
                                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-[110] bg-white/10 hover:bg-[#E2703A] text-white p-4 md:p-6 rounded-full transition-all backdrop-blur-md border border-white/20 group/btn"
                            >
                                <ChevronLeft size={32} className="group-hover/btn:scale-110 transition-transform" />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-[110] bg-white/10 hover:bg-[#E2703A] text-white p-4 md:p-6 rounded-full transition-all backdrop-blur-md border border-white/20 group/btn"
                            >
                                <ChevronRight size={32} className="group-hover/btn:scale-110 transition-transform" />
                            </button>
                        </div>

                        {/* Bottom Progress Bar */}
                        <div className="p-4 bg-[#111111] flex justify-center gap-1.5 overflow-x-auto max-w-full">
                            {activeImages.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    className={`h-1 cursor-pointer transition-all ${i === currentIndex ? 'w-8 bg-[#E2703A]' : 'w-2 bg-white/20'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
