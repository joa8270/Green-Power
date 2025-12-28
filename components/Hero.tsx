import React from 'react';

const Hero: React.FC = () => {
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const headerOffset = 80; // Header height is h-20, which is 80px
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };
    
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            <img 
                src="https://drive.google.com/thumbnail?id=1bbFiLnf1ywcyCjuiwKgowhbIC9P6L_th&sz=w1920" 
                className="absolute inset-0 w-full h-full object-cover" 
                alt="Hero Background"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-slate-900/80"></div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto reveal active">
                <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-sm font-semibold tracking-wider mb-6 backdrop-blur-sm">
                    NEXT GENERATION WELLNESS
                </span>
                <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight">
                    科技賦能傳統養生<br />
                    <span className="text-emerald-400">智慧守護現代健康</span>
                </h1>
                <p className="text-lg md:text-2xl text-slate-200 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
                    在綠力 GreenPower，我們融合了頂尖的 AI 檢測科技與深厚的東方調理智慧，為您打造獨一無二的身心修復空間。
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                    <a href="#journey" onClick={(e) => handleLinkClick(e, '#journey')} className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(5,150,105,0.4)] hover:shadow-[0_0_30px_rgba(5,150,105,0.6)]">
                        開啟健康旅程
                    </a>
                    <a href="#technology" onClick={(e) => handleLinkClick(e, '#technology')} className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full font-bold text-lg transition-all">
                        探索智能設備
                    </a>
                </div>
            </div>
            
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;