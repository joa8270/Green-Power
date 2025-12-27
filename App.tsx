
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Journey from './components/Journey';
import Technology from './components/Technology';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
    useEffect(() => {
        const reveals = document.querySelectorAll('.reveal');
        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;
            const elementVisible = 100;
            reveals.forEach((el) => {
                const elementTop = el.getBoundingClientRect().top;
                if (elementTop < windowHeight - elementVisible) {
                    el.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll(); // Initial check

        return () => window.removeEventListener('scroll', revealOnScroll);
    }, []);

    return (
        <div className="antialiased">
            <Header />
            <main>
                <Hero />
                <Philosophy />
                <Journey />
                <Technology />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;
