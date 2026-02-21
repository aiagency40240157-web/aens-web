import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Homeowner",
        text: "AENS Electrical was incredibly professional. They fixed our complex wiring issues in a single afternoon. Highly recommended!"
    },
    {
        name: "Mark Thompson",
        role: "Property Manager",
        text: "We use AENS for all our commercial properties. Their maintenance response time is unbeatable and the prices are fair."
    }
];

export default function SocialProof() {
    return (
        <section className="py-24 bg-primary text-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                            Trusted by Hundreds of <span className="text-cta">Happy Clients</span> Across the Region
                        </h2>
                        <div className="flex gap-12">
                            <div>
                                <div className="text-5xl font-bold text-cta mb-2">15+</div>
                                <div className="text-lg opacity-80">Years Experience</div>
                            </div>
                            <div>
                                <div className="text-5xl font-bold text-cta mb-2">1.2k+</div>
                                <div className="text-lg opacity-80">Projects Done</div>
                            </div>
                            <div>
                                <div className="text-5xl font-bold text-cta mb-2">100%</div>
                                <div className="text-lg opacity-80">Guarantee</div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {testimonials.map((t, i) => (
                            <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 relative">
                                <Quote className="absolute top-4 right-8 text-cta/40 w-12 h-12" />
                                <div className="flex gap-1 text-cta mb-4">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                                <p className="text-xl italic mb-6 leading-relaxed">"{t.text}"</p>
                                <div>
                                    <div className="font-bold text-lg">{t.name}</div>
                                    <div className="text-cta font-medium">{t.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cta/10 rounded-full blur-3xl"></div>
        </section>
    );
}
