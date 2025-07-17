import React, { useState } from 'react';

export default function DoubleBarChart() {
    const [active, setActive] = useState('Amount');
    const [hovered, setHovered] = useState(null); // 'Amount' | 'Profit' | null
    // Data fix (screenshot jaisa)
    const data = {
        Amount: 220,
        Profit: 50,
    };
    const max = 275;
    // Bar colors
    const highlight = '#7CF9F9';
    const dull = '#23272b';
    // Axis labels
    const xLabels = Array.from({ length: 12 }, (_, i) => i * 25);

    return (
        <div className="bg-[rgba(32,34,36,1)] rounded-xl p-0 flex flex-col justify-between w-full" style={{ minWidth: 350, maxWidth: 500, paddingBottom: 16 }}>
            {/* Toggle */}
            <div className="flex gap-2 mb-4 px-6 pt-6">
                <button
                    className={`px-3 py-1 rounded text-sm font-medium ${active === 'Amount' ? 'bg-[#23272b] text-[#AFFFDE]' : 'bg-[#23272b] text-white opacity-60'}`}
                    onClick={() => setActive('Amount')}
                >
                    Amount
                </button>
                <button
                    className={`px-3 py-1 rounded text-sm font-medium ${active === 'Profit' ? 'bg-[#23272b] text-[#AFFFDE]' : 'bg-[#23272b] text-white opacity-60'}`}
                    onClick={() => setActive('Profit')}
                >
                    Profit
                </button>
            </div>
            {/* Bars */}
            <div className="flex flex-col gap-4 px-8 pb-6 pt-2">
                {/* Amount Bar */}
                <div
                    className="relative w-full h-6 flex items-center cursor-pointer"
                    onMouseEnter={() => setHovered('Amount')}
                    onMouseLeave={() => setHovered(null)}
                >
                    {/* Background bar */}
                    <div className="absolute left-0 top-0 h-6 w-full rounded-full bg-[#23272b]" />
                    {/* Foreground bar */}
                    <div
                        className="absolute left-0 top-0 h-6"
                        style={{
                            width: `${(data.Amount / max) * 100}%`,
                            background: active === 'Amount' ? highlight : dull,
                            borderRadius: 12,
                            transition: 'background 0.2s',
                        }}
                    />
                    {/* Tooltip */}
                    {hovered === 'Amount' && (
                        <div
                            className="absolute left-1/2 -top-8 -translate-x-1/2 bg-[#23272b] text-[#7CF9F9] px-3 py-1 rounded shadow text-xs font-semibold z-10 border border-[#7CF9F9]"
                            style={{ whiteSpace: 'nowrap' }}
                        >
                            Amount
                        </div>
                    )}
                </div>
                {/* Profit Bar */}
                <div
                    className="relative w-full h-6 flex items-center cursor-pointer"
                    onMouseEnter={() => setHovered('Profit')}
                    onMouseLeave={() => setHovered(null)}
                >
                    {/* Background bar */}
                    <div className="absolute left-0 top-0 h-6 w-full rounded-full bg-[#23272b]" />
                    {/* Foreground bar */}
                    <div
                        className="absolute left-0 top-0 h-6"
                        style={{
                            width: `${(data.Profit / max) * 100}%`,
                            background: active === 'Profit' ? highlight : dull,
                            borderRadius: 12,
                            transition: 'background 0.2s',
                        }}
                    />
                    {/* Tooltip */}
                    {hovered === 'Profit' && (
                        <div
                            className="absolute left-1/2 -top-8 -translate-x-1/2 bg-[#23272b] text-[#7CF9F9] px-3 py-1 rounded shadow text-xs font-semibold z-10 border border-[#7CF9F9]"
                            style={{ whiteSpace: 'nowrap' }}
                        >
                            Profit
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