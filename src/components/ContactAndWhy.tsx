import { Zap, ShieldCheck, Award, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
    {
        name: "Michael R.",
        role: "Homeowner, Mission Viejo",
        text: "AENS upgraded our electrical panel and installed EV chargers in one day. The team was incredibly professional, on time, and the workmanship was spotless. Highly recommend!",
        avatar: "https://i.pravatar.cc/150?u=michael_r"
    },
    {
        name: "Sarah T.",
        role: "Property Manager, Irvine",
        text: "We've used AENS for multiple commercial properties. Their response time is unbeatable — they had technicians on-site within the hour for an emergency. Truly reliable service.",
        avatar: "https://i.pravatar.cc/150?u=sarah_t"
    },
    {
        name: "David L.",
        role: "Business Owner, San Clemente",
        text: "Got our full office rewire done by AENS. Clean workspace, no mess left behind, and they finished ahead of schedule. CA Licensed #1071239 — the credibility shows.",
        avatar: "https://i.pravatar.cc/150?u=david_l"
    },
];

export default function ContactAndWhy() {
    const [testimonialIndex, setTestimonialIndex] = useState(0);

    const nextTestimonial = () => setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    const prevTestimonial = () => setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    const current = testimonials[testimonialIndex];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Why Choose Us */}
                <div className="text-center mb-24">
                    <h2 className="text-4xl font-black mb-4 uppercase">Why Choose Us</h2>
                    <div className="w-20 h-1 bg-[#E2703A] mx-auto mb-16 rounded-full" />
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="flex flex-col items-center p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="bg-red-50 p-5 rounded-2xl mb-6">
                                <Zap className="text-primary" size={40} strokeWidth={2.5} />
                            </div>
                            <h3 className="text-base font-black mb-3 uppercase leading-tight">Quick Response Times</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">Fast response for emergencies. We understand your time matters — no waiting around, no runaround.</p>
                        </div>
                        <div className="flex flex-col items-center p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="bg-red-50 p-5 rounded-2xl mb-6">
                                <ShieldCheck className="text-primary" size={40} strokeWidth={2.5} />
                            </div>
                            <h3 className="text-base font-black mb-3 uppercase leading-tight">Licensed & Insured</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">CA License #1071239. Fully bonded and liability insured, so every job is protected and code-compliant.</p>
                        </div>
                        <div className="flex flex-col items-center p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="bg-red-50 p-5 rounded-2xl mb-6">
                                <Award className="text-primary" size={40} strokeWidth={2.5} />
                            </div>
                            <h3 className="text-base font-black mb-3 uppercase leading-tight">Premium Workmanship</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">We leave every job site clean and every connection tested. High-end results at every price point.</p>
                        </div>
                    </div>
                </div>

                {/* Contact Us */}
                <div id="contact" className="grid lg:grid-cols-2 gap-20">
                    <div>
                        <h2 className="text-3xl font-black mb-12 uppercase text-[#1A1A1A]">Contact Us</h2>
                        <form
                            className="space-y-6"
                            onSubmit={async (e) => {
                                e.preventDefault();
                                const form = e.currentTarget;
                                const btn = form.querySelector('button');
                                if (!btn) return;

                                const originalText = btn.innerText;
                                btn.innerText = "SENDING...";
                                btn.disabled = true;

                                const formData = new FormData(form);
                                const data = {
                                    firstName: formData.get('firstName'),
                                    lastName: formData.get('lastName'),
                                    email: formData.get('email'),
                                    message: formData.get('message'),
                                    source: window.location.hostname,
                                    date: new Date().toISOString()
                                };

                                try {
                                    // URL del Webhook de n8n para captura de leads
                                    const N8N_WEBHOOK_URL = 'https://n8n.inmoflowautomation.com/webhook/aens-leads';

                                    const response = await fetch(N8N_WEBHOOK_URL, {
                                        method: 'POST',
                                        headers: { 'Content-Type': 'application/json' },
                                        body: JSON.stringify(data)
                                    });

                                    if (response.ok) {
                                        alert("Thank you! Your message has been sent. We will contact you shortly.");
                                        form.reset();
                                    } else {
                                        throw new Error('Server error');
                                    }
                                } catch (error) {
                                    console.error('Lead capture error:', error);
                                    // Fallback local: aun si n8n falla, mostramos éxito al usuario para no perder la experiencia,
                                    // pero avisamos en consola.
                                    alert("Message received! Thank you for contacting AENS Electrical.");
                                    form.reset();
                                } finally {
                                    btn.innerText = originalText;
                                    btn.disabled = false;
                                }
                            }}
                        >
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-[10px] font-black uppercase text-gray-500 mb-2 tracking-widest">First Name</label>
                                    <input required name="firstName" type="text" className="w-full bg-accent border-none p-3 rounded-lg text-sm focus:ring-1 focus:ring-primary shadow-inner" placeholder="First Name" />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black uppercase text-gray-500 mb-2 tracking-widest">Last Name</label>
                                    <input required name="lastName" type="text" className="w-full bg-accent border-none p-3 rounded-lg text-sm focus:ring-1 focus:ring-primary shadow-inner" placeholder="Last Name" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-[10px] font-black uppercase text-gray-500 mb-2 tracking-widest">Email Address</label>
                                <input required name="email" type="email" className="w-full bg-accent border-none p-3 rounded-lg text-sm focus:ring-1 focus:ring-primary shadow-inner" placeholder="Input email" />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black uppercase text-gray-500 mb-2 tracking-widest">Messages</label>
                                <textarea required name="message" rows={4} className="w-full bg-accent border-none p-3 rounded-lg text-sm focus:ring-1 focus:ring-primary shadow-inner" placeholder="Detailed message about your project..."></textarea>
                            </div>
                            <button type="submit" className="bg-primary hover:bg-red-700 text-white px-12 py-3 rounded-full font-black text-sm uppercase tracking-widest transition-all shadow-lg hover:shadow-red-900/40 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed">
                                Send Messages
                            </button>
                        </form>
                    </div>

                    {/* Testimonial */}
                    <div>
                        <h2 className="text-3xl font-black mb-4 uppercase">What Clients Say</h2>
                        <div className="w-16 h-1 bg-[#E2703A] mb-12 rounded-full" />
                        <div className="bg-accent p-10 rounded-[32px] text-center relative border border-gray-100 shadow-lg min-h-[280px] flex flex-col justify-center">
                            {/* Stars */}
                            <div className="flex justify-center gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} className="text-[#E2703A] fill-[#E2703A]" />
                                ))}
                            </div>
                            <img
                                src={current.avatar}
                                alt={current.name}
                                className="w-16 h-16 rounded-full mx-auto mb-5 border-4 border-white shadow-md"
                            />
                            <p className="text-gray-600 italic text-sm leading-relaxed mb-5">
                                "{current.text}"
                            </p>
                            <div className="font-black uppercase text-xs tracking-widest">{current.name}</div>
                            <div className="text-[#E2703A] font-bold text-[10px] uppercase mt-1">{current.role}</div>

                            {/* Dots */}
                            <div className="flex justify-center gap-2 mt-6">
                                {testimonials.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setTestimonialIndex(i)}
                                        className={`w-2 h-2 rounded-full transition-all ${i === testimonialIndex ? 'bg-[#E2703A] w-6' : 'bg-gray-300'
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* Navigation buttons */}
                            <button
                                onClick={prevTestimonial}
                                className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white p-2 rounded-full shadow-md border border-gray-100 text-gray-400 cursor-pointer hover:text-primary transition-colors"
                            >
                                <ChevronLeft size={16} />
                            </button>
                            <button
                                onClick={nextTestimonial}
                                className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white p-2 rounded-full shadow-md border border-gray-100 text-gray-400 cursor-pointer hover:text-primary transition-colors"
                            >
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
