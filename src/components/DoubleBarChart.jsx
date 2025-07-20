import React, { useState } from 'react';

export default function DoubleBarChart({ title, hasData }) {
    const [hovered, setHovered] = useState(null); // 'Amount' | 'Profit' | null
    // Data fix (screenshot jaisa)
    const data = {
        Amount: 220,
        Profit: 50,
    };
    const max = 275;
    // Bar colors
    const amountColor = '#C9FF93'; // Green for Amount
    const profitColor = '#00BDF9'; // Blue for Profit
    const dull = '#23272b';
    // Axis labels
    const xLabels = Array.from({ length: 12 }, (_, i) => i * 25);

    return (
        <div className="chipku-blur relative bg-[#FFFFFF17] rounded-xl p-0 flex flex-col justify-between w-full h-[100%]">
            {/* Dotted line on left side */}
            <div className={`absolute left-6 bottom-6 w-px  h-[75%] border-l border-dashed border-[#56575D] opacity-30`}></div>
            <div className='pt-6'>
                {title && <span className="text-[white] text-[16px] font-semibold uppercase tracking-wider mb-3 block  pl-6">{title}</span>}
                <div className={`flex gap-2 mb-4 px-6 `}>
                    <button
                        className={`px-2 py-2 rounded-[8px] text-sm font-medium bg-[#30333D] text-[#C9FF93] `}
                    >
                        Amount
                    </button>
                    <button
                        className={`px-2 py-2 rounded-[8px] text-sm font-medium bg-[#30333D] text-[#93FFE9] `}

                    >
                        Profit
                    </button>
                </div>
            </div>
            {/* Bars */}
            <div className="flex flex-col gap-4 px-10 pb-6 pt-6 ">

                {/* Amount Bar */}
                <div
                    className="relative w-full h-6 flex items-center cursor-pointer group"
                    onMouseEnter={() => setHovered('Amount')}
                    onMouseLeave={() => setHovered(null)}
                >
                    {/* Background bar */}
                    <div className="absolute left-0 top-0 h-6 w-full rounded-full bg-[#23272b]" />
                    {/* Foreground bar */}
                    <div
                        className="absolute left-0 top-0 h-6 transition-all duration-300 ease-out"
                        style={{
                            width: `${(data.Amount / max) * 100}%`,
                            background: amountColor,
                            borderRadius: 12,
                            transform: hovered === 'Amount' ? 'scaleY(1.1)' : 'scaleY(1)',
                            boxShadow: hovered === 'Amount' ? '0 0 10px rgba(201, 255, 147, 0.3)' : 'none',
                        }}
                    />
                    {/* Tooltip */}
                    {hovered === 'Amount' && (
                        <div
                            className="absolute left-1/2 -top-8 -translate-x-1/2 bg-[#23272b] text-[#C9FF93] px-3 py-1 rounded shadow-lg text-xs font-semibold z-10 border border-[#C9FF93] backdrop-blur-sm"
                            style={{ whiteSpace: 'nowrap' }}
                        >
                            Amount: {data.Amount}
                        </div>
                    )}
                </div>
                {/* Profit Bar */}
                <div
                    className="relative w-full h-6 flex items-center cursor-pointer group"
                    onMouseEnter={() => setHovered('Profit')}
                    onMouseLeave={() => setHovered(null)}
                >
                    {/* Background bar */}
                    <div className="absolute left-0 top-0 h-6 w-full rounded-full bg-[#23272b]" />
                    {/* Foreground bar */}
                    <div
                        className="absolute left-0 top-0 h-6 transition-all duration-300 ease-out"
                        style={{
                            width: `${(data.Profit / max) * 100}%`,
                            background: profitColor,
                            borderRadius: 12,
                            transform: hovered === 'Profit' ? 'scaleY(1.1)' : 'scaleY(1)',
                            boxShadow: hovered === 'Profit' ? '0 0 10px rgba(0, 189, 249, 0.3)' : 'none',
                        }}
                    />
                    {/* Tooltip */}
                    {hovered === 'Profit' && (
                        <div
                            className="absolute left-1/2 -top-8 -translate-x-1/2 bg-[#23272b] text-[#00BDF9] px-3 py-1 rounded shadow-lg text-xs font-semibold z-10 border border-[#00BDF9] backdrop-blur-sm"
                            style={{ whiteSpace: 'nowrap' }}
                        >
                            Profit: {data.Profit}
                        </div>
                    )}
                </div>
            </div>
            {/* X Axis */}
            <div className="flex flex-row justify-between px-8 pb-2 pt-1">
                {xLabels.map((label, idx) => (
                    <span key={idx} className="text-xs text-[#A0AEC0] font-medium" style={{ minWidth: 16, textAlign: 'center' }}>{label}</span>
                ))}
            </div>
        </div>
    );
} 