import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const links = [
        { label: 'Home', href: '#' },
        { label: 'Services', href: '#services' },
        { label: 'Our Work', href: '#work' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="bg-white py-2 border-b border-gray-100 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="flex items-center" onClick={() => setMobileOpen(false)}>
                    <img
                        src="/logo_transparent_background.png"
                        alt="AENS Electrical Services"
                        className="h-24 w-auto object-contain"
                    />
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider text-gray-900">
                    {links.map((link) => (
                        <a key={link.label} href={link.href} className="hover:text-primary transition-colors">
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="bg-primary hover:bg-red-700 text-white px-8 py-2.5 rounded-full font-bold transition-all shadow-md active:scale-95"
                    >
                        Get a Quote
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-4 pb-6 pt-2 bg-white border-t border-gray-100 flex flex-col gap-4">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="text-sm font-black uppercase tracking-widest text-gray-800 hover:text-primary transition-colors py-2 border-b border-gray-50 last:border-0"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setMobileOpen(false)}
                        className="bg-primary hover:bg-red-700 text-white text-center px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest transition-all shadow-md mt-2"
                    >
                        Get a Quote
                    </a>
                </div>
            </div>
        </nav>
    );
}
