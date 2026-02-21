import { Zap, ShieldCheck, Award, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ContactAndWhy() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Why Choose Us */}
                <div className="text-center mb-24">
                    <h2 className="text-4xl font-black mb-16 uppercase">Why Choose Us</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="flex flex-col items-center">
                            <div className="bg-accent p-6 rounded-2xl mb-6">
                                <Zap className="text-primary fill-primary/20" size={48} />
                            </div>
                            <h3 className="text-lg font-black mb-4 uppercase leading-tight">Quick Response Times</h3>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-accent p-6 rounded-2xl mb-6">
                                <ShieldCheck className="text-primary fill-primary/20" size={48} />
                            </div>
                            <h3 className="text-lg font-black mb-4 uppercase leading-tight">Licensed Electricians</h3>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-accent p-6 rounded-2xl mb-6">
                                <Award className="text-primary fill-primary/20" size={48} />
                            </div>
                            <h3 className="text-lg font-black mb-4 uppercase leading-tight">Award Winning Service</h3>
                        </div>
                    </div>
                </div>

                {/* Contact Us */}
                <div id="contact" className="grid lg:grid-cols-2 gap-20">
                    <div>
                        <h2 className="text-3xl font-black mb-12 uppercase text-[#1A1A1A]">Contact Us</h2>
                        <form
                            className="space-y-6"
                            onSubmit={(e) => {
                                e.preventDefault();
                                const btn = e.currentTarget.querySelector('button');
                                if (btn) {
                                    const originalText = btn.innerText;
                                    btn.innerText = "SENDING...";
                                    btn.disabled = true;
                                    setTimeout(() => {
                                        alert("Thank you! Your message has been sent. We will contact you shortly.");
                                        btn.innerText = originalText;
                                        btn.disabled = false;
                                        (e.target as HTMLFormElement).reset();
                                    }, 1500);
                                }
                            }}
                        >
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-[10px] font-black uppercase text-gray-500 mb-2 tracking-widest">First Name</label>
                                    <input required type="text" className="w-full bg-accent border-none p-3 rounded-lg text-sm focus:ring-1 focus:ring-primary shadow-inner" placeholder="First Name" />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black uppercase text-gray-500 mb-2 tracking-widest">Last Name</label>
                                    <input required type="text" className="w-full bg-accent border-none p-3 rounded-lg text-sm focus:ring-1 focus:ring-primary shadow-inner" placeholder="Last Name" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-[10px] font-black uppercase text-gray-500 mb-2 tracking-widest">Email Address</label>
                                <input required type="email" className="w-full bg-accent border-none p-3 rounded-lg text-sm focus:ring-1 focus:ring-primary shadow-inner" placeholder="Input email" />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black uppercase text-gray-500 mb-2 tracking-widest">Messages</label>
                                <textarea required rows={4} className="w-full bg-accent border-none p-3 rounded-lg text-sm focus:ring-1 focus:ring-primary shadow-inner" placeholder="Detailed message about your project..."></textarea>
                            </div>
                            <button type="submit" className="bg-primary hover:bg-red-700 text-white px-12 py-3 rounded-full font-black text-sm uppercase tracking-widest transition-all shadow-lg hover:shadow-red-900/40 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed">
                                Send Messages
                            </button>
                        </form>
                    </div>

                    {/* Testimonial */}
                    <div>
                        <h2 className="text-3xl font-black mb-12 uppercase">Testimonial</h2>
                        <div className="bg-accent p-12 rounded-[32px] text-center relative border border-gray-100 shadow-lg">
                            <img
                                src="https://i.pravatar.cc/150?u=1"
                                alt="User"
                                className="w-20 h-20 rounded-full mx-auto mb-6 border-4 border-white shadow-md"
                            />
                            <p className="text-gray-600 italic text-sm leading-relaxed mb-6">
                                "Tanahell is the friendliest and most efficient company I have ever used. The whole thing took time to introduce the product and as a result puts forward only the best opportunities that really suit you."
                            </p>
                            <div className="font-black uppercase text-xs">Shalime Hayden</div>
                            <div className="text-primary font-bold text-[10px] uppercase">Product Designer</div>

                            {/* Navigation buttons */}
                            <button className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white p-2 rounded-full shadow-md border border-gray-100 text-gray-400 cursor-pointer hover:text-primary transition-colors">
                                <ChevronLeft size={16} />
                            </button>
                            <button className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white p-2 rounded-full shadow-md border border-gray-100 text-gray-400 cursor-pointer hover:text-primary transition-colors">
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
