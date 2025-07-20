import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

export default function DoubleLineChart2() {
    // Check if data exists
    const hasData = true; // Set to false to show no data

    // ApexCharts data integration
    const [state] = useState({
        series: [{
            name: 'Cash Flow',
            data: [1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34, 3.88, 13.07,
                5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4, -47.2, -43.3, -18.6, -
                48.6, -41.1, -39.6, -37.6, -29.4, -21.4, -2.4
            ] // Empty data array
        }],
        options: {
            chart: {
                type: 'bar' as const,
                height: 350,
                background: 'transparent',
                toolbar: { show: false },
                zoom: { enabled: false },
            },
            plotOptions: {
                bar: {
                    colors: {
                        ranges: [{
                            from: -100,
                            to: -46,
                            color: '#93FFE9'
                        }, {
                            from: -45,
                            to: 0,
                            color: '#00BDF9'
                        }]
                    },
                    columnWidth: '80%',
                    borderRadius: 2,
                }
            },
            dataLabels: {
                enabled: false,
            },
            tooltip: {
                enabled: true,
                theme: 'dark',
                style: {
                    fontSize: '12px',
                },
                y: {
                    formatter: function (val: number) {
                        return val.toFixed(2);
                    }
                }
            },
            grid: {
                show: false,
            },
            yaxis: {
                labels: {
                    show: true,
                    align: 'left' as const,
                    style: {
                        colors: '#5D5E60',
                        fontSize: '14px',
                        textAlign: 'left',
                        fontWeight: 500
                    }
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                }
            },
            xaxis: {
                categories: Array.from({ length: 33 }, (_, i) => i + 1),
                labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                }
            }
            // xaxis: {
            //     type: 'datetime' as const,
            //     categories: [
            //         '2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01', '2011-05-01', '2011-06-01',
            //         '2011-07-01', '2011-08-01', '2011-09-01', '2011-10-01', '2011-11-01', '2011-12-01',
            //         '2012-01-01', '2012-02-01', '2012-03-01', '2012-04-01', '2012-05-01', '2012-06-01',
            //         '2012-07-01', '2012-08-01', '2012-09-01', '2012-10-01', '2012-11-01', '2012-12-01',
            //         '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01', '2013-06-01',
            //         '2013-07-01', '2013-08-01', '2013-09-01'
            //     ],
            //     labels: {
            //         rotate: -90
            //     }
            // }
        }
    });

    // Convert ApexCharts data to our bar format
    const barData = state.series[0].data.slice(0, 2).map((value, index) => ({
        value: Math.abs(value) / 100, // Normalize to 0-1 range
        color: value < 0 ? '#F15B46' : '#FEB019', // Red for negative, yellow for positive
        name: `Bar ${index + 1}`
    }));

    // Dynamic legend buttons based on data
    const legendButtons = [

        { name: 'Setting durchgefuhrt', color: '#00BDF9' }, // Light blue
        { name: 'Closing durchgefuhrt', color: '#FEB019' }, // Yellow
        { name: 'Closing Termine', color: '#F15B46' }, // Light red


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
            <div className="chipku-blur bg-[#171819] rounded-xl p-6 w-full h-[100%]">
                {/* Chart Container */}
                <div className="relative h-64 mb-6">
                    {/* Y-axis labels */}
                    <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[14px] text-[#5D5D5E] font-medium">
                        {yAxisLabels.reverse().map((label, index) => (
                            <span key={index}>{label}</span>
                        ))}
                    </div>

                    {/* Chart area */}
                    <div className="ml-8 h-full relative bg-[#2E2E32] rounded-lg">
                        {/* No Data Text */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-[#6D6D6F] text-[16px] font-medium">No Data</span>
                        </div>
                    </div>
                </div>

                {/* Show Up Quote Button */}
                <div className="flex flex-wrap gap-3 pl-4">
                    {legendButtons.map((button, index) => (
                        <button
                            key={index}
                            className="px-3 py-2 bg-[#31354D] rounded-[12px] text-[12px] font-medium text-white transition-colors hover:opacity-80"
                            style={{ color: button.color }}
                        >
                            {button.name}
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="chipku-blur bg-[#FFFFFF17] rounded-xl pt-6  pl-0  pb-6  pr-6 w-full h-[100%]">
            {/* Chart Container */}
            <div className="relative h-64 mb-6">
                {/* ApexCharts Component */}
                <div className="w-full h-full">
                    <ReactApexChart
                        options={state.options}
                        series={state.series}
                        type="bar"
                        height={250}
                        width="100%"
                    />
                </div>
                {/* Middle Border Line */}
                <div className="absolute w-[87%] ml-auto left-0 right-0 top-1/2 h-px border-t-2 border-dashed border-[#56575D] opacity-50"></div>
            </div>

            {/* Legend Buttons */}
            <div className="flex flex-wrap gap-3 pl-4">
                {legendButtons.map((button, index) => (
                    <button
                        key={index}
                        className="px-3 py-2 bg-[#31354D] rounded-[12px] text-[12px] font-medium text-white transition-colors hover:opacity-80"
                        style={{ color: button.color }}
                    >
                        {button.name}
                    </button>
                ))}
            </div>
        </div>
    );
}
