import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactSection() {
    return (
        <section id="contact" className="py-24 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Get Your <span className="text-cta">Free Quote</span> Today</h2>
                        <p className="text-xl text-text/70 mb-10 leading-relaxed">
                            Facing an electrical issue or planning a project? Our expert team is ready to help. Fill out the form and we'll get back to you within 2 business hours.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="bg-primary/10 p-4 rounded-xl text-primary">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <div className="font-bold text-lg text-primary">Call Us</div>
                                    <div className="text-text/70">(555) 000-0000</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-primary/10 p-4 rounded-xl text-primary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <div className="font-bold text-lg text-primary">Email Us</div>
                                    <div className="text-text/70">contact@aenselectrical.com</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-primary/10 p-4 rounded-xl text-primary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <div className="font-bold text-lg text-primary">Office</div>
                                    <div className="text-text/70">123 Electric Way, Costa Mesa, CA</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-primary/5 border border-surface">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-primary uppercase tracking-wider">Full Name</label>
                                    <input type="text" className="w-full bg-surface border-none rounded-xl p-4 focus:ring-2 focus:ring-primary shadow-inner" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-primary uppercase tracking-wider">Email Address</label>
                                    <input type="email" className="w-full bg-surface border-none rounded-xl p-4 focus:ring-2 focus:ring-primary shadow-inner" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-primary uppercase tracking-wider">Service Type</label>
                                <select className="w-full bg-surface border-none rounded-xl p-4 focus:ring-2 focus:ring-primary shadow-inner appearance-none">
                                    <option>Residential Service</option>
                                    <option>Commercial Service</option>
                                    <option>Emergency Repair</option>
                                    <option>Smart Home Setup</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-primary uppercase tracking-wider">Message</label>
                                <textarea rows={4} className="w-full bg-surface border-none rounded-xl p-4 focus:ring-2 focus:ring-primary shadow-inner" placeholder="Tell us about your project..."></textarea>
                            </div>
                            <button className="w-full bg-primary hover:bg-primary/95 text-white py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20">
                                Submit Request
                                <Send size={20} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
