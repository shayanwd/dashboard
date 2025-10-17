import React, { useMemo } from 'react';
import Chart from 'react-apexcharts';

/**
 * CsoChartMinimalStack.jsx
 * Minimal stacked column chart styled like the provided screenshot.
 * - Dark UI friendly
 * - No legend / grid / y-axis
 * - Rounded top on stacked bars
 */

const DEFAULT_SERIES = [
    { name: 'A', data: [18, 10, 8, 3, 22, 28, 12, 6, 24, 7, 5, 20, 8, 10, 26] }, // bottom (cyan)
    { name: 'B', data: [14, 9, 5, 2, 8, 10, 9, 2, 12, 3, 2, 9, 6, 5, 12] },     // middle (yellow)
    { name: 'C', data: [12, 7, 4, 1, 6, 9, 6, 1, 10, 2, 1, 7, 5, 6, 11] },      // top (green)
];

const DEFAULT_CATEGORIES = ['27', '29', '1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25'];

const BASE_OPTIONS = {
    chart: {
        type: 'bar',
        stacked: true,
        toolbar: { show: false },
        zoom: { enabled: false },
        foreColor: '#9CA3AF', // muted gray labels for dark UI
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
            dataLabels: { position: 'top' },
        },
    },
    dataLabels: { enabled: false },
    stroke: { width: 0 },
    grid: { show: false },
    legend: { show: false },
    yaxis: { show: false },
    xaxis: {
        type: 'category',
        categories: DEFAULT_CATEGORIES,
        axisBorder: { show: false },
        axisTicks: { show: false },
        labels: {
            style: { colors: Array(DEFAULT_CATEGORIES.length).fill('#9CA3AF') },
            offsetY: 4,
        },
    },
    tooltip: { theme: 'dark' },
    fill: { opacity: 1 },
    colors: ['#00B5E2', '#F4C430', '#22C55E'], // cyan, yellow, green
};

const CsoChartMinimalStack = ({
    series = DEFAULT_SERIES,
    categories = DEFAULT_CATEGORIES,
    height = 300,
    colors,
    options = {},
    className = '',
}) => {
    const merged = useMemo(
        () => ({
            ...BASE_OPTIONS,
            xaxis: { ...BASE_OPTIONS.xaxis, categories },
            colors: colors || BASE_OPTIONS.colors,
            ...options,
        }),
        [categories, colors, options]
    );

    return (
        <div className={className}>
            <Chart options={merged} series={series} type="bar" height={height} />
        </div>
    );
};

export default CsoChartMinimalStack;

/* Usage
import CsoChartMinimalStack from './CsoChartMinimalStack';

<Card className="bg-[#0f1115] text-white p-4 rounded-2xl"> 
  <CsoChartMinimalStack height={240} />
</Card>
*/