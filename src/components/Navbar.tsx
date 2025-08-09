import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
            const currentProgress = (window.pageYOffset / totalScroll) * 100;
            setScrollProgress(currentProgress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed w-full top-0 z-50">
            <div className="h-1 bg-gradient-to-r from-orange-500 to-orange-600" style={{ width: `${scrollProgress}%` }} />
            <nav className="bg-zinc-900/90 backdrop-blur-lg border-b border-zinc-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <a href="#hero" className="text-2xl font-bold text-white">
                                Prajwal<span className="text-orange-500">.</span>
                            </a>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-center space-x-8">
                                <a href="#hero" className="nav-link text-gray-300 hover:text-white px-3 py-2">
                                    Home
                                </a>
                                <a href="#skills" className="nav-link text-gray-300 hover:text-white px-3 py-2">
                                    Skills
                                </a>
                                <a href="#portfolio" className="nav-link text-gray-300 hover:text-white px-3 py-2">
                                    Portfolio
                                </a>
                                <a href="#contact" className="nav-link text-gray-300 hover:text-white px-3 py-2">
                                    Contact
                                </a>
                            </div>
                        </div>
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-300 hover:text-white p-2"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {isMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-zinc-800">
                            <a href="#hero" className="block text-gray-300 hover:text-white hover:bg-zinc-700 px-3 py-2 rounded-md">
                                Home
                            </a>
                            <a href="#skills" className="block text-gray-300 hover:text-white hover:bg-zinc-700 px-3 py-2 rounded-md">
                                Skills
                            </a>
                            <a href="#portfolio" className="block text-gray-300 hover:text-white hover:bg-zinc-700 px-3 py-2 rounded-md">
                                Portfolio
                            </a>
                            <a href="#contact" className="block text-gray-300 hover:text-white hover:bg-zinc-700 px-3 py-2 rounded-md">
                                Contact
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
//