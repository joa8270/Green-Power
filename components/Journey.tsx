
import React from 'react';

const ClockIcon = () => (
    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
);

const CheckIcon = () => (
    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
);

const journeySteps = [
    {
        step: '01',
        title: '亞健康評估',
        description: '旅程始於科學數據。我們使用先進的「亞健康評估儀」進行約 15 分鐘的全身檢測，將看不見的疲勞與身體風險數據化，為後續的調理提供精準依據。',
        details: [
            { icon: <ClockIcon />, text: '耗時：約 15 分鐘' },
            { icon: <CheckIcon />, text: '重點：全身能量數據分析' }
        ],
        imageUrl: 'https://drive.google.com/thumbnail?id=1dOj8HZupMihiB_VsfA9_31vfP4bAq8P1&sz=w800',
        imageAlt: 'Step 1'
    },
    {
        step: '02',
        title: '一對一健康諮詢',
        description: '數據需要專業解讀。我們的健康顧問將與您一對一會談，深入了解您的生活習慣，找出數據背後的原因，並建立專屬於您的健康檔案，推薦最適合的調理方案。',
        details: [
            { icon: <ClockIcon />, text: '耗時：約 15 分鐘' },
            { icon: <CheckIcon />, text: '重點：數據解讀、需求確認' }
        ],
        imageUrl: 'https://drive.google.com/thumbnail?id=1WteBk1M7Pifh1h1jvbpn7RCYqT5B4ZwE&sz=w800',
        imageAlt: 'Step 2'
    },
    {
        step: '03',
        title: '核心設備體驗',
        description: '感受科技的力量。根據諮詢結果，您將親身體驗 1-2 項核心設備（如能量太空艙）。在輕音樂、舒適毛巾與富氫水的陪伴下，讓身體深度放鬆，快速充電。',
        details: [
            { icon: <ClockIcon />, text: '耗時：約 40 分鐘' },
            { icon: <CheckIcon />, text: '重點：深層放鬆、感受改變' }
        ],
        imageUrl: 'https://drive.google.com/thumbnail?id=1gYiv_X71ghNti8xL6nsMk90S1Dm3NrpC&sz=w800',
        imageAlt: 'Step 3'
    },
    {
        step: '04',
        title: '規劃專屬方案',
        description: '這只是開始。體驗結束後，我們將根據您的實際感受與回饋，量身打造長期的調理計畫與會員專屬方案，讓綠力成為您長期的健康夥伴。',
        details: [
            { icon: <ClockIcon />, text: '耗時：約 10 分鐘' },
            { icon: <CheckIcon />, text: '重點：長期規劃、會員服務' }
        ],
        imageUrl: 'https://drive.google.com/thumbnail?id=1NU_urhl2bxbNA_VESzOW7kw7kEliCFz5&sz=w800',
        imageAlt: 'Step 4'
    }
];

interface JourneyStepProps {
    step: typeof journeySteps[0];
    isReversed: boolean;
}

const JourneyStep: React.FC<JourneyStepProps> = ({ step, isReversed }) => {
    const directionClass = isReversed ? 'md:flex-row-reverse' : 'md:flex-row';
    const textAlignClass = isReversed ? 'md:text-right' : 'md:text-left';
    const itemsAlignClass = isReversed ? 'md:items-end' : 'md:items-start';
    const detailFlexClass = isReversed ? 'flex items-center justify-end' : 'flex items-center';
    const imageEffectClass = isReversed 
        ? 'transform -translate-x-3 translate-y-3 group-hover:-translate-x-2 group-hover:translate-y-2' 
        : 'transform translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2';
    const stepBadgePosition = isReversed ? 'top-4 right-4' : 'top-4 left-4';

    return (
        <div className={`flex flex-col ${directionClass} items-center gap-12 mb-24 last:mb-0 reveal`}>
            <div className="w-full md:w-1/2 relative group">
                <div className={`absolute inset-0 bg-emerald-600 rounded-2xl transition-transform ${imageEffectClass}`}></div>
                <img src={step.imageUrl} className="relative rounded-2xl shadow-lg w-full h-[300px] md:h-[400px] object-cover" alt={step.imageAlt} />
                <div className={`absolute ${stepBadgePosition} bg-white text-emerald-800 font-bold w-12 h-12 flex items-center justify-center rounded-full shadow-md text-xl`}>{step.step}</div>
            </div>
            <div className={`w-full md:w-1/2 ${textAlignClass}`}>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">{step.description}</p>
                <ul className={`space-y-2 text-slate-500 font-medium flex flex-col ${itemsAlignClass}`}>
                    {step.details.map((detail, index) => (
                         <li key={index} className={detailFlexClass}>
                            {isReversed && <span className="mr-2">{detail.text}</span>}
                            {detail.icon}
                            {!isReversed && <span className="ml-2">{detail.text}</span>}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const Journey: React.FC = () => {
    return (
        <section id="journey" className="py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-24 reveal">
                    <span className="text-emerald-600 font-bold tracking-widest uppercase">Process</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2">您的專屬康養旅程</h2>
                </div>
                {journeySteps.map((step, index) => (
                    <JourneyStep key={step.step} step={step} isReversed={index % 2 !== 0} />
                ))}
            </div>
        </section>
    );
};

export default Journey;