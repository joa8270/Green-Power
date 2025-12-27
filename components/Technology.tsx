
import React, { useState, useMemo } from 'react';

interface Equipment {
  id: string;
  type: string;
  name: string;
  highlight: string;
  desc: string;
  imageUrl: string;
}

const equipmentData: Equipment[] = [
    { id: 'e1', type: '檢測類', name: '亞健康評估儀', highlight: '3分鐘預見健康風險', desc: '全身能量掃描，提供科學數據佐證，為您的調理方向定錨。', imageUrl: 'https://drive.google.com/thumbnail?id=1U3DeXEkZ9kM3lDkpc_9WaMZjlaGOLum-&sz=w1920' },
    { id: 'e2', type: '全方位調理', name: '能量太空艙', highlight: '躺著做的深層細胞SPA', desc: '智能化全身能量艙，利用光波與熱能共振，讓細胞動起來。', imageUrl: 'https://drive.google.com/thumbnail?id=1tkSu4AHbwjzKkATfIT4AM20JKE1g2DcZ&sz=w1920' },
    { id: 'e3', type: '全方位調理', name: '360負氧離子汗蒸艙', highlight: '負離子森林浴', desc: '不用去森林也能享受高濃度負離子，排汗排毒一身輕。', imageUrl: 'https://drive.google.com/thumbnail?id=1HkcdrQMw0j8kiA4BHS1muA_S2V4v0Z3P&sz=w1920' },
    { id: 'e4', type: '全方位調理', name: '全方位調理床', highlight: '自動正脊舒壓', desc: '針對現代人脊椎壓力設計，釋放背部肌肉的深層緊繃。', imageUrl: 'https://drive.google.com/thumbnail?id=1nb9eeYTZ0u3ODerqw-YvDBi11MUCssmG&sz=w1920' },
    { id: 'e5', type: '全方位調理', name: '草本薰蒸艙', highlight: '古法草本溫養', desc: '結合傳統草本智慧與現代薰蒸科技，由外而內溫暖全身。', imageUrl: 'https://drive.google.com/thumbnail?id=1Pz3Z0Ze9cdI4LHD6gTHMndL-lOSaZI5q&sz=w1920' },
    { id: 'e6', type: '局部調理', name: '太赫茲細胞修復儀', highlight: '喚醒細胞活力', desc: '利用太赫茲波穿透力，激活細胞，從根本恢復身體機能。', imageUrl: 'https://drive.google.com/thumbnail?id=1bp7B1V98v_F7Rn3-Zo5qnBz74kCbGeEW&sz=w1920' },
    { id: 'e7', type: '局部調理', name: '盆肌底調理幸福椅', highlight: '女性自信之源', desc: '非侵入式調理，重塑核心肌群健康，找回生活自信。', imageUrl: 'https://drive.google.com/thumbnail?id=1vnli8O9KWR3cs-w1qp2u0VP45t9dmhYz&sz=w1920' },
    { id: 'e8', type: '局部調理', name: '攝護線保健椅', highlight: '男性活力守護', desc: '專為男性設計，改善循環，做好健康管理。', imageUrl: 'https://drive.google.com/thumbnail?id=1ZN4b865uGGQjIe3sNEwD3W-BIDGBpP-W&sz=w1920' },
    { id: 'e9', type: '局部調理', name: '健腦儀', highlight: '大腦的放鬆SPA', desc: '調節腦波頻率，放鬆緊繃心神，有效改善睡眠品質。', imageUrl: 'https://drive.google.com/thumbnail?id=1pJ8crxXSq2zGWZhv8QPcR2cA56CZc3e3&sz=w1920' },
    { id: 'e10', type: '局部調理', name: '溫養艾灸椅', highlight: '無煙科技艾灸', desc: '傳承古法艾灸精髓，去除煙燻困擾，溫養經絡更有感。', imageUrl: 'https://drive.google.com/thumbnail?id=1-uYQMk0-e89GRinYpHOkzH13ZAX_ZQH7&sz=w1920' },
    { id: 'e11', type: '輔助設備', name: '富氫水機', highlight: '生命之水', desc: '提供高濃度氫氧水，強化身體抗氧化能力，喝出健康。', imageUrl: 'https://drive.google.com/thumbnail?id=1gYiv_X71ghNti8xL6nsMk90S1Dm3NrpC&sz=w1920' },
    { id: 'e12', type: '輔助設備', name: '高純度氫氧機', highlight: '呼吸也是養生', desc: '吸入高純度氫氧氣，幫助身體放鬆，提升能量水平。', imageUrl: 'https://drive.google.com/thumbnail?id=1Urw72EPXHYwEo5ocBQiyYuoDgXiBi1HW&sz=w1920' },
    { id: 'e13', type: '輔助設備', name: '養生桶 + 扶陽椅', highlight: '溫熱雙效調理', desc: '足浴與熱能溫養的完美結合，增強末梢循環。', imageUrl: 'https://drive.google.com/thumbnail?id=1AO72ARVltl0tSEgDb6Jfn9lQbs3HA9Tv&sz=w1920' }
];

const Technology: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const selectedEquipment = equipmentData[selectedIndex];

    const equipmentList = useMemo(() => {
        let currentType = '';
        return equipmentData.map((item, index) => {
            const showHeader = item.type !== currentType;
            if (showHeader) {
                currentType = item.type;
            }
            return (
                <React.Fragment key={item.id}>
                    {showHeader && (
                        <div className="px-4 py-2 text-xs font-bold text-slate-400 mt-2 uppercase tracking-wider">
                            {currentType}
                        </div>
                    )}
                    <button
                        onClick={() => setSelectedIndex(index)}
                        className={`equipment-btn w-full text-left px-4 py-3 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 border-l-4 text-slate-600 text-sm mb-1 ${selectedIndex === index ? 'active' : 'border-transparent'}`}
                    >
                        {item.name}
                    </button>
                </React.Fragment>
            );
        });
    }, [selectedIndex]);

    return (
        <section id="technology" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 reveal">
                    <h2 className="text-4xl font-bold text-slate-900">智能科技設備</h2>
                    <p className="mt-4 text-lg text-slate-600">現代科技與傳統智慧的完美結合</p>
                </div>

                <div className="flex flex-col lg:flex-row h-auto lg:h-[700px] gap-6 reveal">
                    {/* Sidebar List */}
                    <div className="lg:w-1/3 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col overflow-hidden">
                        <div className="p-4 bg-slate-100 border-b border-slate-200">
                            <h3 className="font-bold text-slate-600 uppercase tracking-wider text-sm">設備列表</h3>
                        </div>
                        <div className="overflow-y-auto flex-1 p-3 space-y-2 custom-scrollbar">
                            {equipmentList}
                        </div>
                    </div>

                    {/* Main Display Area */}
                    <div className="lg:w-2/3 relative rounded-2xl overflow-hidden shadow-2xl group min-h-[500px]">
                        <img 
                            key={selectedEquipment.id}
                            src={selectedEquipment.imageUrl} 
                            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 animate-fade-in-up" 
                            alt={selectedEquipment.name}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                             {selectedEquipment && (
                                 <div className="animate-fade-in-up" key={selectedEquipment.id}>
                                    <span className="inline-block bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded mb-4">{selectedEquipment.type}</span>
                                    <h3 className="text-4xl font-bold mb-2">{selectedEquipment.name}</h3>
                                    <p className="text-xl text-emerald-300 mb-6 font-medium">{selectedEquipment.highlight}</p>
                                    <p className="text-lg text-slate-200 leading-relaxed max-w-2xl">{selectedEquipment.desc}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technology;