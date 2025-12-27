
import React from 'react';

interface LogoProps {
    textColor?: string;
}

const Logo: React.FC<LogoProps> = ({ 
    textColor = 'text-emerald-500'
}) => {
    return (
        <div className="flex items-center gap-3">
            {/* New Leaf SVG Icon */}
            <div className="w-10 h-10 flex-shrink-0 text-emerald-500">
                 <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
                    {/* Leaf shape */}
                    <path 
                        fill="currentColor" 
                        d="M90,10 C65,15 35,40 10,90 C40,65 65,35 90,10 Z"
                    />
                    {/* White vein */}
                    <path 
                        d="M85,15 C60,40 40,60 15,85"
                        fill="none"
                        stroke="white"
                        strokeOpacity="0.8"
                        strokeWidth="7"
                        strokeLinecap="round"
                    />
                </svg>
            </div>
            {/* Text */}
            <div className={`flex flex-col justify-center ${textColor}`}>
                <span className="text-2xl font-bold tracking-wider leading-tight">
                    綠力 GreenPower
                </span>
                <span className="text-sm tracking-widest leading-tight opacity-90">
                    智能康養會所
                </span>
            </div>
        </div>
    );
};

export default Logo;
