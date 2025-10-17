import React, { useMemo } from 'react';
import Chart from 'react-apexcharts';

/**
 * CsoChartMinimalStack4B.jsx
 * Four‑series stacked columns — tuned to match the latest reference image.
 * Order bottom→top: Green, Orange, Red, DarkGray (small cap).
 * 15 bars, dark UI, no legend/grid/y‑axis.
 */

const CATEGORIES_15 = ['27', '29', '1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25'];

// Defaults crafted to visually match the provided screenshot
const DEFAULT_SERIES = [
    // Green (bottom)
    { name: 'durchschnittlicher Kundenwert', data: [14, 10, 8, 6, 16, 12, 10, 8, 12, 10, 8, 10, 12, 8, 12] },
    // Orange (middle 1)
    { name: 'Kosten Pro Closing Termin', data: [8, 7, 6, 4, 7, 6, 5, 4, 8, 7, 5, 8, 10, 7, 8] },
    // Red (middle 2 – prominent)
    { name: ' Kosten Pro Kunde', data: [12, 10, 9, 6, 10, 12, 12, 5, 14, 12, 11, 14, 16, 12, 12] },
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
            // ✅ Adds the gray background behind bars
            colors: {
                backgroundBarColors: ['#FFFFFF17'], // subtle gray tone
                backgroundBarOpacity: 1,
            },
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
    colors: ['#22C55E', '#F97316', '#EF4444', '#2F333B'],
};

const CsoChartMinimalStack4B = ({
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

export default CsoChartMinimalStack4B;

/* Usage
import CsoChartMinimalStack4B from './CsoChartMinimalStack4B';

<div className="rounded-2xl bg-[#0f1115] text-white p-4">
  <div className="text-sm font-semibold mb-2">Stacked Totals</div>
  <CsoChartMinimalStack4B height={300} />
</div>
*/
