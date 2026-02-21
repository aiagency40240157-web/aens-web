export default function Navbar() {
    return (
        <nav className="bg-white py-2 border-b border-gray-100 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                {/* Logo — real asset with transparent background */}
                <a href="#" className="flex items-center">
                    <img
                        src="/logo_transparent_background.png"
                        alt="AENS Electrical Services"
                        className="h-24 w-auto object-contain"
                    />
                </a>

                <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider text-gray-900">
                    <a href="#" className="hover:text-primary transition-colors">Home</a>
                    <a href="#services" className="hover:text-primary transition-colors">Services</a>
                    <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
                    <a href="#contact" className="bg-primary hover:bg-red-700 text-white px-8 py-2.5 rounded-full font-bold transition-all shadow-md active:scale-95">
                        Get a Quote
                    </a>
                </div>
            </div>
        </nav>
    );
}
