import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-12 mb-16">
                    {/* Brand / License */}
                    <div>
                        <img src="/logo_transparent_background.png" alt="AENS" className="h-20 w-auto mb-6" />
                        <div className="space-y-2">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Credentials</p>
                            <p className="text-sm font-bold text-gray-800">CA License #1071239</p>
                            <p className="text-sm text-gray-500 font-medium tracking-tight">Bonded & Liability Insured</p>
                            <a href="tel:9492058561" className="inline-flex items-center gap-1.5 pt-1 text-sm font-bold text-[#E2703A] hover:text-primary transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.09 6.09l1-1.01a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                Cell: 949-205-8561
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-4">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Quick Links</p>
                        <a href="#" className="text-sm font-bold text-gray-800 hover:text-[#E2703A] transition-colors uppercase tracking-wider">About Us</a>
                        <a href="#services" className="text-sm font-bold text-gray-800 hover:text-[#E2703A] transition-colors uppercase tracking-wider">Services</a>
                        <a href="#contact" className="text-sm font-bold text-gray-800 hover:text-[#E2703A] transition-colors uppercase tracking-wider">Contact</a>
                    </div>

                    {/* Socials */}
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6">Follow Us</p>
                        <div className="flex items-center gap-4">
                            <a href="https://www.facebook.com/profile.php?id=61579206035654" target="_blank" rel="noopener noreferrer" className="bg-gray-50 p-3 rounded-full text-gray-800 hover:bg-[#E2703A] hover:text-white transition-all shadow-sm"><Facebook size={18} /></a>
                            <a href="https://twitter.com/AENSELECTRICAL" target="_blank" rel="noopener noreferrer" className="bg-gray-50 p-3 rounded-full text-gray-800 hover:bg-[#E2703A] hover:text-white transition-all shadow-sm"><Twitter size={18} /></a>
                            <a href="https://www.linkedin.com/in/aens1/" target="_blank" rel="noopener noreferrer" className="bg-gray-50 p-3 rounded-full text-gray-800 hover:bg-[#E2703A] hover:text-white transition-all shadow-sm"><Linkedin size={18} /></a>
                            <a href="https://www.instagram.com/aens_1/" target="_blank" rel="noopener noreferrer" className="bg-gray-50 p-3 rounded-full text-gray-800 hover:bg-[#E2703A] hover:text-white transition-all shadow-sm"><Instagram size={18} /></a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-50 text-center">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        © {new Date().getFullYear()} AENS Electrical Services. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
