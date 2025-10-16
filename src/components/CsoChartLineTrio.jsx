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
const DEFAULT_SERIES = [
    {
        name: 'Blue',
        data: [280, 160, 260, 300, 320, 230, 360, 340, 220, 300, 330, 290, 250, 310, 270],
    },
    {
        name: 'Neon',
        data: [220, 240, 560, 500, 260, 420, 700, 360, 240, 600, 300, 640, 280, 720, 260],
    },
    {
        name: 'Pink',
        data: [120, 100, 80, 60, 220, 40, 300, 20, 260, 80, 340, 60, 240, 80, 220],
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