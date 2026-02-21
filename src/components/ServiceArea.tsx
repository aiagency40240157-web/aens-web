import { MapPin } from 'lucide-react';

const cities = [
    "San Juan Capistrano", "San Clemente", "Mission Viejo",
    "Irvine", "Tustin", "Laguna Hills", "Laguna Niguel",
    "El Toro", "Ladera Ranch", "Trabuco Canyon"
];

export default function ServiceArea() {
    return (
        <section className="py-24 bg-[#1A1A1A] overflow-hidden relative">
            {/* Background Accent - shifted to match orange brand color */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#E2703A]/5 transform skew-x-12 translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tight">Our Service Area</h2>
                        <div className="w-16 h-1 bg-[#E2703A] mb-8" />
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Proudly serving the heart of South Orange County. We bring high-end electrical expertise to your doorstep with punctuality and professional service.
                        </p>
                        <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl transition-all hover:bg-white/10">
                            <div className="bg-[#E2703A] p-3 rounded-full shadow-lg shadow-[#E2703A]/20">
                                <MapPin className="text-white" size={24} />
                            </div>
                            <div className="text-white">
                                <div className="text-sm font-bold uppercase tracking-widest opacity-60">Located In</div>
                                <div className="text-xl font-black">SAN JUAN CAPISTRANO, CA</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-md rounded-3xl p-10 border border-white/10 shadow-2xl">
                        <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-8 opacity-60">Cities We Serve</h3>
                        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                            {cities.map((city, i) => (
                                <div key={i} className="flex items-center gap-3 text-gray-300 group cursor-default">
                                    <div className="w-1.5 h-1.5 bg-[#E2703A] rounded-full group-hover:scale-150 transition-all shadow-[0_0_8px_#E2703A]" />
                                    <span className="font-medium group-hover:text-white transition-colors">{city}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10 pt-8 border-t border-white/10 text-center">
                            <p className="text-gray-400 text-sm italic">And surrounding Orange County communities.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
