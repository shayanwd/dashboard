import React from 'react';

export default function StatCard({ title, value, percentChange, className = '' }) {
    const isPositive = percentChange >= 0;
    return (
        <div className={`bg-[#171819b5] border border-[#23242a] rounded-[20px] p-6 flex flex-col gap-4 min-w-[260px] ${className}`}>
            <div className="text-[#A2A3A5] text-[16px] font-[600] tracking-wide mb-2">{title}</div>
            <div className="flex items-center gap-4 justify-between">
                <span className="text-white text-[36px] font-bold leading-none">{value}</span>
                <span className={`flex items-center gap-1 px-3 py-1 rounded-[10px] text-[18px] font-[500] ${isPositive ? 'bg-[#2d4732] text-[#7be495]' : 'bg-[#3a2323] text-[#e57b7b]'}`}>
                    {isPositive ? (
                        <svg width="16" height="16" fill="none" stroke="#7be495" strokeWidth="2" viewBox="0 0 24 24"><polyline points="6 15 12 9 18 15" /></svg>
                    ) : (
                        <svg width="16" height="16" fill="none" stroke="#e57b7b" strokeWidth="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg>
                    )}
                    {Math.abs(percentChange).toFixed(1)}%
                </span>
            </div>
        </div>
    );
} 