import React, { useMemo } from 'react';
import Chart from 'react-apexcharts';

/**
 * CsoChartLineTrio.jsx
 * Three‑series line chart styled to match the reference image:
 *  - Dark UI, dashed horizontal grid, right‑side y‑axis
 *  - 15 x‑axis labels (27 … 25)
 *  - Neon yellow, cyan blue, and soft pink lines with subtle glow
 */

const CATEGORIES_15 = ['27', '29', '1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25'];

// Default data roughly shaped like the mock for quick drop‑in
// --- only this block changed ---
const DEFAULT_SERIES = [
    {
        // Blue (steady-mid, gentle wiggles)
        name: 'Abschlussquote',
        data: [300, 210, 280, 330, 320, 260, 350, 300, 340, 325, 290, 265, 305, 335, 295],
    },
    {
        // Neon (tall spikes at ~3, 9, 17, 23; sharper drops around 5, 11, 19, 25)
        name: 'NoShow Quote',
        data: [240, 260, 690, 640, 250, 390, 280, 420, 740, 270, 380, 660, 300, 700, 260],
    },
    {
        // Pink (low, very jagged with deep dips around 5, 9, 19)
        name: 'Lead-Close-Verhaltinis',
        data: [180, 160, 150, 140, 60, 120, 70, 260, 50, 240, 80, 260, 220, 240, 210],
    },
];


const BASE_OPTIONS = {
    chart: {
        type: 'line',
        toolbar: { show: false },
        zoom: { enabled: false },
        foreColor: '#9CA3AF',
        animations: { enabled: true, speed: 450 },
        background: 'transparent',
    },
    stroke: {
        width: [3, 3, 3],
        curve: 'straight',
        lineCap: 'round',
    },
    markers: { size: 0 },
    colors: ['#00B5E2', '#E8FF6A', '#FF9AA2'], // blue, neon yellow, soft pink
    // Drop shadow glow for each line
    dropShadow: {
        enabled: true,
        blur: 5,
        opacity: 0.35,
    },
    grid: {
        show: true,
        borderColor: '#2A2E35',
        strokeDashArray: 4,
        xaxis: { lines: { show: false } },
        yaxis: { lines: { show: true } },
        padding: { left: 0, right: 0, top: 8, bottom: 8 },
    },
    dataLabels: { enabled: false },
    tooltip: { theme: 'dark' },
    legend: { show: false },
    xaxis: {
        type: 'category',
        categories: CATEGORIES_15,
        axisBorder: { show: false },
        axisTicks: { show: false },
        labels: { style: { colors: Array(CATEGORIES_15.length).fill('#9CA3AF') }, offsetY: 4 },
    },
    yaxis: {
        opposite: true,
        min: 0,
        max: 800,
        tickAmount: 8,
        labels: {
            style: { colors: '#9CA3AF' },
            formatter: (val) => (val % 1 === 0 ? val : Math.round(val)),
        },
    },
};

const CsoChartLineTrio = ({
    series = DEFAULT_SERIES,
    categories = CATEGORIES_15,
    height = 320,
    max = 800,
    colors,
    options = {},
    className = '',
}) => {
    const merged = useMemo(() => ({
        ...BASE_OPTIONS,
        colors: colors || BASE_OPTIONS.colors,
        xaxis: { ...BASE_OPTIONS.xaxis, categories },
        yaxis: { ...BASE_OPTIONS.yaxis, max },
        ...options,
    }), [categories, colors, max, options]);

    return (
        <div className={className}>
            <Chart options={merged} series={series} type="line" height={height} />
        </div>
    );
};

export default CsoChartLineTrio;

/* Usage
import CsoChartLineTrio from './CsoChartLineTrio';

<div className="rounded-2xl bg-[#0f1115] text-white p-4">
  <div className="text-sm font-semibold mb-2">Comparative Trends</div>
  <CsoChartLineTrio height={340} />
</div>
*/