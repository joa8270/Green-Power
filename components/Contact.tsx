
import React from 'react';

const LocationIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
    </svg>
);

const PhoneIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
    </svg>
);

const CalendarIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
    </svg>
);

const MapIcon = () => (
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0121 18.382V7.618a1 1 0 01-.447-.894L15 7m0 13V7"></path>
    </svg>
);


const Contact: React.FC = () => {
    return (
        <section id="contact" className="relative py-32 flex items-center">
            <img src="https://drive.google.com/thumbnail?id=13cB9iarqnyVf9VeXxNSIv503YzPpG9mO&sz=w1920" 
                 className="absolute inset-0 w-full h-full object-cover" 
                 alt="Contact Background" />
            
            <div className="absolute inset-0 bg-slate-900/70"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-16 text-center max-w-3xl mx-auto shadow-2xl reveal">
                    <h2 className="text-4xl font-bold text-white mb-6">蒞臨 綠力GreenPower</h2>
                    <p className="text-emerald-100 text-xl mb-10">我們誠摯地邀請您親臨會所，開啟您的健康新體驗。</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white mb-10">
                        <div>
                            <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4"><LocationIcon /></div>
                            <h4 className="font-bold text-emerald-300 mb-1">地址</h4>
                            <p>桃園市龍潭區<br />五福街99號4樓</p>
                        </div>
                        <div>
                            <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4"><PhoneIcon /></div>
                            <h4 className="font-bold text-emerald-300 mb-1">電話</h4>
                            <p>0927-067-079<br />(陸陸)</p>
                        </div>
                        <div>
                            <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4"><CalendarIcon /></div>
                            <h4 className="font-bold text-emerald-300 mb-1">開幕</h4>
                            <p>2025年10月10日<br />上午 11:00</p>
                        </div>
                    </div>

                    <a href="https://maps.google.com/?q=桃園市龍潭區五福街99號" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-white text-emerald-800 font-bold px-8 py-3 rounded-full hover:bg-emerald-50 transition transform hover:scale-105 shadow-lg">
                        <MapIcon />
                        開啟 Google Maps 導航
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
