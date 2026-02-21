import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

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
                            <a href="#" className="bg-gray-50 p-3 rounded-full text-gray-800 hover:bg-[#E2703A] hover:text-white transition-all shadow-sm"><Facebook size={18} /></a>
                            <a href="#" className="bg-gray-50 p-3 rounded-full text-gray-800 hover:bg-[#E2703A] hover:text-white transition-all shadow-sm"><Twitter size={18} /></a>
                            <a href="#" className="bg-gray-50 p-3 rounded-full text-gray-800 hover:bg-[#E2703A] hover:text-white transition-all shadow-sm"><Youtube size={18} /></a>
                            <a href="#" className="bg-gray-50 p-3 rounded-full text-gray-800 hover:bg-[#E2703A] hover:text-white transition-all shadow-sm"><Instagram size={18} /></a>
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
