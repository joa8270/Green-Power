import React from 'react';

const philosophyCards = [
    {
        title: '品牌宗旨',
        description: '以科技賦能傳統養生，協助每一位體驗者達到舒壓、調理、修復、平衡的身心狀態。',
        imageUrl: 'https://drive.google.com/thumbnail?id=1u6sKwE2t2II5vO5QwQlcf3Gmrgzcv9b2&sz=w1920',
        alt: 'Mission'
    },
    {
        title: '品牌願景',
        description: '打造全齡化智慧康養生態，成為家庭健康的後盾，鏈結全球華人健康生活圈。',
        imageUrl: 'https://drive.google.com/thumbnail?id=1wPJ1AgkFRHPe9VAhXFN-_gqTOxkTbRRJ&sz=w1920',
        alt: 'Vision'
    },
    {
        title: '核心價值',
        description: (
            <>
                智慧科技 (Smart Tech) <br />
                自然調理 (Natural Healing) <br />
                舒適體驗 (Comfort Care)
            </>
        ),
        imageUrl: 'https://drive.google.com/thumbnail?id=1S0z6y1bGNVLrh8qG7zjsCu03KAKgExC4&sz=w1920',
        alt: 'Values'
    }
];

const PhilosophyCard: React.FC<{ card: typeof philosophyCards[0]; delay: string }> = ({ card, delay }) => (
    <div className={`group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 reveal ${delay}`}>
        <div className="h-80 overflow-hidden">
            <img src={card.imageUrl} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={card.alt} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-8">
            <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-slate-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {card.description}
                </p>
            </div>
        </div>
    </div>
);


const Philosophy: React.FC = () => {
    return (
        <section id="philosophy" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20 reveal">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">品牌核心理念</h2>
                    <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
                    <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">讓養生成為一種愉悅的習慣，讓健康回歸生活的日常。</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {philosophyCards.map((card, index) => (
                        <PhilosophyCard key={card.title} card={card} delay={`delay-${index*100}`} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Philosophy;