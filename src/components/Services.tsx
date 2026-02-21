import { Home, Building2, AlertTriangle, Zap, Cpu, Search } from 'lucide-react';

const services = [
    {
        title: "Residential Wiring",
        desc: "Complete home wiring solutions, from new builds to historical renovations. Ensuring your home is safe and compliant.",
        icon: Home
    },
    {
        title: "Commercial Lighting",
        desc: "Energy-efficient lighting solutions for offices, retail spaces, and warehouses. Custom designs for productivity.",
        icon: Building2
    },
    {
        title: "Emergency Repairs",
        desc: "Available 24/7 for urgent electrical issues. Our team responds quickly to restore power and ensure safety.",
        icon: AlertTriangle
    },
    {
        title: "Panel Upgrades",
        desc: "Modernize your electrical panel to handle today's high-demand appliances and prevent circuit breaker trips.",
        icon: Zap
    },
    {
        title: "Smart Home Tech",
        desc: "Installation of smart switches, lighting, and integration with home automation systems for ultimate convenience.",
        icon: Cpu
    },
    {
        title: "Safety Inspections",
        desc: "Thorough electrical audits to identify potential hazards and ensure your property meets all safety standards.",
        icon: Search
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Professional Services</h2>
                    <div className="w-24 h-1.5 bg-cta mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-text/70 max-w-2xl mx-auto">
                        Reliable electrical solutions tailored to your specific needs. No job is too big or too small.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <div key={i} className="group p-8 rounded-2xl border border-surface hover:border-secondary/30 hover:shadow-xl hover:shadow-secondary/5 transition-all duration-300 bg-white">
                            <div className="bg-surface p-4 rounded-xl w-fit mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <s.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-4">{s.title}</h3>
                            <p className="text-text/70 leading-relaxed">
                                {s.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
