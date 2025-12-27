
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 text-slate-400 py-10 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <div className="flex justify-center mb-4">
                    <Logo textColor="text-emerald-400" />
                </div>
                <p className="mb-6">科技養生．健康生活．快樂一生</p>
                <p className="text-sm text-slate-500">
                    &copy; 2025 綠力康養國際有限公司. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
