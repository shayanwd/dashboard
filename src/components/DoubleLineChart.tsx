import React from 'react';

export default function DoubleLineChart() {
    // Check if data exists
    const hasData = true; // Set to true when you have data

    // Bar data (screenshot jaisa)
    const barData = [
        { value: 0.8, color: '#7CF9F9', name: 'Bar 1' }, // Light cyan - left bar
        { value: 0.55, color: '#3B82F6', name: 'Bar 2' },
        // Bright blue - right bar
    ];

    // Legend buttons data (screenshot jaisa)
    const legendButtons = [
        { name: 'Setting termine', color: '#4F46E5' }, // Dark blue/purple
        { name: 'Setting durchgefuhrt', color: '#059669' }, // Teal/green
        { name: 'Closing Termine', color: '#DC2626' }, // Reddish-orange
        { name: 'Closing durchgefuhrt', color: '#D97706' }, // Golden yellow
        { name: 'Abschluss', color: '#7C3AED' }, // Purple
    ];

    // Dynamic Y-axis calculation
    const calculateYAxis = (data: any[]) => {
        if (!data || data.length === 0) return { min: -1, max: 1, labels: [-1, -0.5, 0, 0.5, 1, 0.5, 1] };

        const values = data.map(item => item.value);
        const min = Math.min(...values);
        const max = Math.max(...values);

        // Add some padding to the range
        const range = max - min;
        const padding = range * 0.1;
        const adjustedMin = Math.floor((min - padding) * 10) / 10;
        const adjustedMax = Math.ceil((max + padding) * 10) / 10;

        // Generate labels
        const labelCount = 5;
        const labels: number[] = [];
        for (let i = 0; i < labelCount; i++) {
            const label = adjustedMin + (adjustedMax - adjustedMin) * (i / (labelCount - 1));
            labels.push(Math.round(label * 100) / 100);
        }

        return { min: adjustedMin, max: adjustedMax, labels };
    };

    // Calculate Y-axis for current data
    const yAxis = calculateYAxis(barData);

    // Y-axis labels for no data state
    const yAxisLabels = Array.from({ length: 12 }, (_, i) => i * 25);

    if (!hasData) {
        return (
            <div className="chipku-blur bg-[#FFFFFF17] rounded-xl p-6 w-full max-w-2xl">
                {/* Chart Container */}
                <div className="relative h-64 mb-6">
                    {/* Y-axis labels */}
                    <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-[#A0AEC0] font-medium">
                        {yAxisLabels.reverse().map((label, index) => (
                            <span key={index}>{label}</span>
                        ))}
                    </div>

                    {/* Chart area */}
                    <div className="ml-8 h-full relative bg-[#1F2937] rounded-lg">
                        {/* No Data Text */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-[#A0AEC0] text-lg font-medium">No Data</span>
                        </div>
                    </div>
                </div>

                {/* Show Up Quote Button */}
                <div className="flex flex-wrap gap-3 justify-center">
                    {legendButtons.map((button, index) => (
                        <button
                            key={index}
                            className="px-4 py-2 rounded-lg text-xs font-medium text-white transition-colors hover:opacity-80"
                            style={{ backgroundColor: button.color }}
                        >
                            {button.name}
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="chipku-blur bg-[#FFFFFF17] rounded-xl p-6 w-full max-w-2xl">
            {/* Chart Container */}
            <div className="relative h-64 mb-6">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-[#A0AEC0] font-medium">
                    {yAxis.labels.map((label, index) => (
                        <span key={index}>{label}</span>
                    ))}
                </div>

                {/* Chart area */}
                <div className="ml-8 h-full relative">
                    {/* Baseline at 0 */}
                    <div className="absolute left-0 right-0 top-1/2 h-px bg-[#374151] border-dashed border-[#4B5563]"></div>

                    {/* Bars */}
                    <div className="absolute left-0 right-0 top-0 h-full flex justify-center items-end gap-16 pb-8">
                        {barData.map((bar, index) => (
                            <div key={index} className="relative flex flex-col items-center">
                                {/* Bar */}
                                <div
                                    className="w-16 rounded-t-lg relative"
                                    style={{
                                        height: `${((bar.value - yAxis.min) / (yAxis.max - yAxis.min)) * 120}px`, // Dynamic height calculation
                                        background: bar.color,
                                        marginBottom: '8px', // Space from baseline
                                    }}
                                >
                                    {/* Dark line inside bar */}
                                    <div className="absolute top-0 left-0 right-0 h-px bg-[#1F2937]"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Legend Buttons */}
            <div className="flex flex-wrap gap-3 justify-center">
                {legendButtons.map((button, index) => (
                    <button
                        key={index}
                        className="px-2 py-2 rounded-lg text-[12px] font-medium text-white transition-colors hover:opacity-80"
                        style={{ backgroundColor: button.color }}
                    >
                        {button.name}
                    </button>
                ))}
            </div>
        </div>
    );
}
