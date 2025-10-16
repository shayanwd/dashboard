import React, { useMemo } from 'react';
import Chart from 'react-apexcharts';

/**
 * CsoChartLineMint.jsx
 * Minimal single‑series line chart styled to match the reference.
 * - Dark UI, mint line, subtle glow
 * - Right‑side y‑axis with dashed gridlines
 * - 15 x‑axis labels (27..25)
 */

const CATEGORIES_15 = ['27', '29', '1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25'];

const DEFAULT_SERIES = [
    {
        name: 'Value',
        data: [320, 120, 300, 280, 330, 150, 360, 370, 140, 310, 260, 180, 290, 320, 280],
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
        width: 3,
        curve: 'straight',
        lineCap: 'round',
    },
    markers: { size: 0 },
    colors: ['#A7FFE4'], // mint
    dropShadow: { enabled: true, top: 0, left: 0, blur: 6, color: '#A7FFE4', opacity: 0.35 },
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
    xaxis: {
        type: 'category',
        categories: CATEGORIES_15,
        axisBorder: { show: false },
        axisTicks: { show: false },
        labels: { style: { colors: Array(CATEGORIES_15.length).fill('#9CA3AF') }, offsetY: 4 },
    },
    yaxis: {
        opposite: true, // put labels on the right
        min: 0,
        max: 800,
        tickAmount: 8,
        labels: {
            style: { colors: '#9CA3AF' },
            formatter: (val) => (val % 1 === 0 ? val : Math.round(val)),
        },
    },
};

const CsoChartLineMint = ({
    series = DEFAULT_SERIES,
    categories = CATEGORIES_15,
    height = 300,
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

export default CsoChartLineMint;

/* Usage
import CsoChartLineMint from './CsoChartLineMint';

<div className="rounded-2xl bg-[#0f1115] text-white p-4">
  <div className="text-sm font-semibold mb-2">Trend</div>
  <CsoChartLineMint height={320} />
</div>
*/
