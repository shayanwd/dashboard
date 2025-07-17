import React from 'react';

export default function PageHeader({ userName = 'User Name', pageName = '' }) {
    return (
        <div className="mb-6 mt-2">
            <div className="flex items-center gap-2 text-[14px] text-[#8B8B8B] font-[400]">
                <span className="text-[20px]">👋</span>
                Welcome back, <span>[{userName}]</span>!
            </div>
            <div className="text-[32px] font-[500] text-white leading-tight mt-2">{pageName}</div>
        </div>
    );
} 