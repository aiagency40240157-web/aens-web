import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        property_type: 'Residential',
        issue_type: 'General Electrical',
        urgency: 'Within 30 days',
        contact_preference: 'Email',
        description: '',
        has_photos: false,
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        
        try {
            const payload = {
                ...formData,
                timestamp: new Date().toISOString(),
            };

            const response = await fetch('https://n8n.inmoflowautomation.com/webhook/aens-final-leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({
                    name: '', email: '', phone: '', property_type: 'Residential',
                    issue_type: 'General Electrical', urgency: 'Within 30 days',
                    contact_preference: 'Email', description: '', has_photos: false,
                });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

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
                                    <div className="text-text/70">(949) 205-8561</div>
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
                                    <div className="font-bold text-lg text-primary">Service Area</div>
                                    <div className="text-text/70">South Orange County, CA</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-primary/5 border border-surface">
                        {status === 'success' ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center">
                                <CheckCircle size={64} className="text-green-500 mb-4" />
                                <h3 className="text-2xl font-bold text-primary mb-3">Request Submitted!</h3>
                                <p className="text-text/70 text-lg mb-6">
                                    Thank you! One of our specialists will reach out to you shortly.
                                </p>
                                <button 
                                    onClick={() => setStatus('idle')}
                                    className="text-primary font-bold hover:underline"
                                >
                                    Submit another request
                                </button>
                            </div>
                        ) : (
                            <form className="space-y-5" onSubmit={handleSubmit}>
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary uppercase tracking-wider">Full Name *</label>
                                        <input 
                                            type="text" name="name" required value={formData.name} onChange={handleChange}
                                            className="w-full bg-surface border-none rounded-xl p-4 focus:ring-2 focus:ring-primary shadow-inner" 
                                            placeholder="John Doe" 
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary uppercase tracking-wider">Email Address *</label>
                                        <input 
                                            type="email" name="email" required value={formData.email} onChange={handleChange}
                                            className="w-full bg-surface border-none rounded-xl p-4 focus:ring-2 focus:ring-primary shadow-inner" 
                                            placeholder="john@example.com" 
                                        />
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary uppercase tracking-wider">Phone Number *</label>
                                        <input 
                                            type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                                            className="w-full bg-surface border-none rounded-xl p-4 focus:ring-2 focus:ring-primary shadow-inner" 
                                            placeholder="(949) 555-0123" 
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary uppercase tracking-wider">Property Type</label>
                                        <select 
                                            name="property_type" value={formData.property_type} onChange={handleChange}
                                            className="w-full bg-surface border-none rounded-xl p-4 focus:ring-2 focus:ring-primary shadow-inner appearance-none"
                                        >
                                            <option value="Residential">Residential</option>
                                            <option value="Commercial">Commercial</option>
                                            <option value="Industrial">Industrial</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary uppercase tracking-wider">Service Needed</label>
                                        <select 
                                            name="issue_type" value={formData.issue_type} onChange={handleChange}
                                            className="w-full bg-surface border-none rounded-xl p-4 focus:ring-2 focus:ring-primary shadow-inner appearance-none"
                                        >
                                            <option value="General Electrical">General Electrical</option>
                                            <option value="Main Panel Upgrade">Main Panel Upgrade</option>
                                            <option value="EV Charger Installation">EV Charger Installation</option>
                                            <option value="Rewiring">Rewiring</option>
                                            <option value="Lighting Installation">Lighting Installation</option>
                                            <option value="Emergency Repair">Emergency Repair</option>
                                            <option value="Smart Home Setup">Smart Home Setup</option>
                                            <option value="Inspection">Inspection</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary uppercase tracking-wider">How Urgent?</label>
                                        <select 
                                            name="urgency" value={formData.urgency} onChange={handleChange}
                                            className="w-full bg-surface border-none rounded-xl p-4 focus:ring-2 focus:ring-primary shadow-inner appearance-none"
                                        >
                                            <option value="Emergency - Right now">🚨 Emergency - Right now</option>
                                            <option value="This week">⚡ This week</option>
                                            <option value="Within 30 days">📅 Within 30 days</option>
                                            <option value="Just getting information">ℹ️ Just getting information</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-primary uppercase tracking-wider">Describe Your Issue *</label>
                                    <textarea 
                                        name="description" required rows={4} value={formData.description} onChange={handleChange}
                                        className="w-full bg-surface border-none rounded-xl p-4 focus:ring-2 focus:ring-primary shadow-inner" 
                                        placeholder="Tell us about your electrical issue or project..."
                                    ></textarea>
                                </div>
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary uppercase tracking-wider">Preferred Contact</label>
                                        <select 
                                            name="contact_preference" value={formData.contact_preference} onChange={handleChange}
                                            className="w-full bg-surface border-none rounded-xl p-4 focus:ring-2 focus:ring-primary shadow-inner appearance-none"
                                        >
                                            <option value="Email">Email</option>
                                            <option value="Phone">Phone</option>
                                            <option value="Text">Text</option>
                                        </select>
                                    </div>
                                    <div className="flex items-end pb-2">
                                        <label className="flex items-center gap-3 cursor-pointer">
                                            <input 
                                                type="checkbox" name="has_photos" checked={formData.has_photos} onChange={handleChange}
                                                className="w-5 h-5 rounded text-primary focus:ring-primary"
                                            />
                                            <span className="text-sm text-text/70">I have photos to share</span>
                                        </label>
                                    </div>
                                </div>

                                {status === 'error' && (
                                    <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-xl">
                                        <AlertCircle size={20} />
                                        <span className="text-sm font-medium">Something went wrong. Please try again or call us directly.</span>
                                    </div>
                                )}

                                <button 
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="w-full bg-primary hover:bg-primary/95 disabled:opacity-70 text-white py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20"
                                >
                                    {status === 'sending' ? (
                                        <>
                                            <Loader2 size={20} className="animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Submit Request
                                            <Send size={20} />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
