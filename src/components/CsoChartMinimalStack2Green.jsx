import React, { useMemo } from 'react';
import Chart from 'react-apexcharts';

/**
 * CsoChartMinimalStack2Green.jsx
 * Two‑series stacked bars (light green bottom, dark green top) — 15 bars, dark UI.
 * Matches the provided reference: minimal axes, no legend/grid, compact columns.
 */

const CATEGORIES_15 = ['27', '29', '1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25'];

// Default data tuned to the screenshot proportions
const DEFAULT_SERIES = [
    { name: 'Light', data: [16, 10, 7, 9, 8, 18, 16, 4, 13, 10, 5, 7, 14, 9, 12] }, // light green (bottom)
    { name: 'Dark', data: [8, 6, 5, 3, 4, 6, 10, 3, 7, 8, 3, 10, 12, 11, 10] }, // dark green (top)
];

const BASE_OPTIONS = {
    chart: {
        type: 'bar',
        stacked: true,
        toolbar: { show: false },
        zoom: { enabled: false },
        foreColor: '#9CA3AF',
        animations: { enabled: true, speed: 400 },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            borderRadius: 0,
            borderRadiusApplication: 'end',
            borderRadiusWhenStacked: 'last',
            columnWidth: '58%',
        },
    },
    dataLabels: { enabled: false },
    stroke: { width: 0 },
    grid: { show: false },
    legend: { show: false },
    yaxis: { show: false },
    xaxis: {
        type: 'category',
        categories: CATEGORIES_15,
        axisBorder: { show: false },
        axisTicks: { show: false },
        labels: { style: { colors: Array(CATEGORIES_15.length).fill('#9CA3AF') }, offsetY: 4 },
    },
    tooltip: { theme: 'dark' },
    fill: { opacity: 1 },
    colors: ['#D9FF6A', '#16A34A'], // light lime, dark green
};

const CsoChartMinimalStack2Green = ({
    series = DEFAULT_SERIES,
    categories = CATEGORIES_15,
    height = 280,
    colors,
    options = {},
    className = '',
}) => {
    const merged = useMemo(() => ({
        ...BASE_OPTIONS,
        xaxis: { ...BASE_OPTIONS.xaxis, categories },
        colors: colors || BASE_OPTIONS.colors,
        ...options,
    }), [categories, colors, options]);

    return (
        <div className={className}>
            <Chart options={merged} series={series} type="bar" height={height} />
        </div>
    );
};

export default CsoChartMinimalStack2Green;

/* Usage
import CsoChartMinimalStack2Green from './CsoChartMinimalStack2Green';

<div className="rounded-2xl bg-[#0f1115] text-white p-4">
  <div className="text-sm font-semibold mb-2">Two‑Tone Activity</div>
  <CsoChartMinimalStack2Green height={300} />
</div>
*/