export default function Hero() {
    return (
        <section className="relative h-[500px] w-full overflow-hidden bg-gray-900">
            {/* Background Image - Electrician working */}
            <img
                src="/20220321_125827.jpg"
                alt="Electrician working"
                className="absolute inset-0 w-full h-full object-cover opacity-70"
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-start">
                <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase mb-8">
                        Residential and<br />
                        Commercial<br />
                        Electrical Service
                    </h1>
                    <a href="#contact" className="inline-block bg-primary hover:bg-red-700 text-white px-10 py-4 rounded-full font-black text-lg uppercase transition-all shadow-xl shadow-red-900/20 tracking-wider active:scale-95">
                        Schedule Now
                    </a>
                </div>
            </div>
        </section>
    );
}
