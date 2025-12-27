
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#home', label: '首頁' },
        { href: '#philosophy', label: '品牌理念' },
        { href: '#journey', label: '您的旅程' },
        { href: '#technology', label: '智能科技' },
    ];

    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <Logo textColor="text-emerald-600" />
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map(link => (
                                <a key={link.href} href={link.href} className="text-slate-600 hover:text-emerald-700 px-3 py-2 text-sm font-medium transition-colors">
                                    {link.label}
                                </a>
                            ))}
                            <a href="#contact" className="bg-emerald-600 text-white hover:bg-emerald-700 px-5 py-2.5 rounded-full text-sm font-bold transition-transform transform hover:scale-105 shadow-lg hover:shadow-emerald-500/30">
                                預約體驗
                            </a>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-md text-slate-600 hover:text-emerald-700 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg" id="mobile-menu">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map(link => (
                             <a key={link.href} href={link.href} onClick={handleLinkClick} className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:bg-emerald-50 hover:text-emerald-700">
                                 {link.label}
                             </a>
                        ))}
                        <a href="#contact" onClick={handleLinkClick} className="block px-3 py-3 mt-4 text-center rounded-md text-base font-bold bg-emerald-600 text-white">
                            立即預約
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
