import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChart = () => {
    // Sample data for two series
    const data1 = [
        { x: new Date(2024, 0, 1).getTime(), y: 30 },
        { x: new Date(2024, 0, 2).getTime(), y: 40 },
        { x: new Date(2024, 0, 3).getTime(), y: 35 },
        { x: new Date(2024, 0, 4).getTime(), y: 50 },
        { x: new Date(2024, 0, 5).getTime(), y: 45 },
        { x: new Date(2024, 0, 6).getTime(), y: 60 },
        { x: new Date(2024, 0, 7).getTime(), y: 55 },
        { x: new Date(2024, 0, 8).getTime(), y: 70 },
        { x: new Date(2024, 0, 9).getTime(), y: 65 },
        { x: new Date(2024, 0, 10).getTime(), y: 80 }
    ];

    const data2 = [
        { x: new Date(2024, 0, 1).getTime(), y: 20 },
        { x: new Date(2024, 0, 2).getTime(), y: 35 },
        { x: new Date(2024, 0, 3).getTime(), y: 25 },
        { x: new Date(2024, 0, 4).getTime(), y: 45 },
        { x: new Date(2024, 0, 5).getTime(), y: 40 },
        { x: new Date(2024, 0, 6).getTime(), y: 55 },
        { x: new Date(2024, 0, 7).getTime(), y: 50 },
        { x: new Date(2024, 0, 8).getTime(), y: 65 },
        { x: new Date(2024, 0, 9).getTime(), y: 60 },
        { x: new Date(2024, 0, 10).getTime(), y: 75 }
    ];

    const XAXISRANGE = 86400000; // 24 hours in milliseconds
    let lastDate = new Date(2024, 0, 10).getTime();

    const getNewSeries = (baseval, yrange1, yrange2) => {
        const newDate = baseval + 86400000;
        lastDate = newDate;

        const newDataPoint1 = {
            x: newDate,
            y: Math.floor(Math.random() * (yrange1.max - yrange1.min + 1)) + yrange1.min
        };

        const newDataPoint2 = {
            x: newDate,
            y: Math.floor(Math.random() * (yrange2.max - yrange2.min + 1)) + yrange2.min
        };

        data1.push(newDataPoint1);
        data2.push(newDataPoint2);

        // Keep only last 10 data points for performance
        if (data1.length > 10) {
            data1.shift();
        }
        if (data2.length > 10) {
            data2.shift();
        }
    };

    const [state, setState] = useState({
        series: [
            {
                name: 'Series 1',
                data: data1.slice()
            },
            {
                name: 'Series 2',
                data: data2.slice()
            }
        ],
        options: {
            chart: {
                id: 'realtime',
                height: 350,
                type: 'line',
                animations: {
                    enabled: true,
                    easing: 'linear',
                    dynamicAnimation: {
                        speed: 1000
                    }
                },
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 2
            },
            title: {
                text: 'Double Line Chart',
                align: 'left',
                style: {
                    color: '#fff'
                }
            },
            markers: {
                size: 0
            },
            xaxis: {
                type: 'datetime',
                range: XAXISRANGE,
                labels: {
                    style: {
                        colors: '#fff'
                    }
                }
            },
            yaxis: {
                max: 100,
                labels: {
                    style: {
                        colors: '#fff'
                    }
                }
            },
            legend: {
                show: true,
                position: 'top',
                labels: {
                    colors: '#fff'
                }
            },
            grid: {
                borderColor: '#333',
                strokeDashArray: 3
            },
            theme: {
                mode: 'dark'
            },
            colors: ['#4A90E2', '#FF6B6B']
        }
    });

    useEffect(() => {
        const interval = setInterval(() => {
            getNewSeries(lastDate, {
                min: 10,
                max: 90
            }, {
                min: 5,
                max: 85
            });

            // Update the chart with new data
            if (window.ApexCharts) {
                window.ApexCharts.exec('realtime', 'updateSeries', [
                    {
                        name: 'Series 1',
                        data: data1
                    },
                    {
                        name: 'Series 2',
                        data: data2
                    }
                ]);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div id="chart">
                <ReactApexChart
                    options={state.options}
                    series={state.series}
                    type="line"
                    height={350}
                />
            </div>
        </div>
    );
};

export default LineChart;
