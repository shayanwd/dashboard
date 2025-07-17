import React, { useRef, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import FilterButton from './FilterButton';


const series = [
    {
        name: 'Closer Academy',
        data: [400, 420, 380, 500, 600, 550, 700, 650, 600, 700, 650, 600, 700, 650, 600, 700, 650, 600, 700, 650, 600, 700, 650, 600, 700, 650, 600, 700, 650],
    },
    {
        name: 'Beratungsgespräch',
        data: [200, 250, 300, 350, 400, 370, 420, 410, 400, 420, 410, 400, 420, 410, 400, 420, 410, 400, 420, 410, 400, 420, 410, 400, 420, 410, 400, 420, 410],
    },
];


const options = {
    chart: {
        type: 'line',
        background: 'transparent',
        toolbar: { show: false },
        zoom: { enabled: false },
    },
    grid: {
        borderColor: 'rgba(255,255,255,0.08)',
        strokeDashArray: 6,
        yaxis: { lines: { show: true } },
        xaxis: { lines: { show: false } },
    },
    legend: {
        show: false,
    },
    colors: ['#CFFF5A', '#5AFFE4'],
    stroke: {
        width: 3,
        curve: 'smooth',
        lineCap: 'round',
    },
    markers: {
        size: 0,
    },
    xaxis: {
        categories: [27, 29, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25],
        labels: {
            style: {
                colors: '#A2A3A5',
                fontSize: '13px',
                fontWeight: 400,
            },
        },
        axisBorder: { show: false },
        axisTicks: { show: false },
    },
    yaxis: {
        min: 0,
        max: 800,
        tickAmount: 4,
        labels: {
            style: {
                colors: '#A2A3A5',
                fontSize: '13px',
                fontWeight: 400,
            },
        },
    },
    tooltip: {
        theme: 'dark',
        x: { show: false },
        y: { formatter: (val) => Math.round(val) },
    },
};

export default function ActiveWorkingChart() {
    const [filterOpen, setFilterOpen] = useState(false);
    const filterBtnRef = useRef();

    return (
        <section className="bg-[#181818] rounded-2xl p-4 sm:p-5 w-full max-w-full shadow-lg relative border-[rgba(255,255,255,0.06)] border-solid border">
            <div className="flex items-center justify-between mb-2">
                <div className="flex flex-col gap-2">
                    <span className="text-[white] text-[16px] font-semibold uppercase tracking-wider">Aktive Arbeitszeit</span>
                    <span className="flex gap-2">
                        <span className="bg-[#2C2C2C] text-[#C9FF93] px-3 py-1 rounded-[8px] text-[12px] font-medium">Closer Academy</span>
                        <span className="bg-[#2C2C2C] text-[#93FFE9] px-3 py-1 rounded-[8px] text-[12px] font-medium">Beratungsgespräch</span>

                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <div ref={filterBtnRef}>
                        <FilterButton onClick={() => setFilterOpen((v) => !v)} />
                    </div>
                    <button className="w-9 h-9 flex items-center justify-center">
                        <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.789551" width="28" height="28" rx="7" fill="#E6F3FF" fill-opacity="0.14" />
                            <path d="M13.9999 15.4562C14.3681 15.4562 14.6666 15.1577 14.6666 14.7895C14.6666 14.4213 14.3681 14.1229 13.9999 14.1229C13.6317 14.1229 13.3333 14.4213 13.3333 14.7895C13.3333 15.1577 13.6317 15.4562 13.9999 15.4562Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18.6667 15.4562C19.0349 15.4562 19.3333 15.1577 19.3333 14.7895C19.3333 14.4213 19.0349 14.1229 18.6667 14.1229C18.2985 14.1229 18 14.4213 18 14.7895C18 15.1577 18.2985 15.4562 18.6667 15.4562Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.33341 15.4562C9.7016 15.4562 10.0001 15.1577 10.0001 14.7895C10.0001 14.4213 9.7016 14.1229 9.33341 14.1229C8.96522 14.1229 8.66675 14.4213 8.66675 14.7895C8.66675 15.1577 8.96522 15.4562 9.33341 15.4562Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </button>
                </div>

            </div>
            <div className="w-full h-[300px]">
                <ReactApexChart options={options} series={series} type="line" height={300} width="100%" />
            </div>
        </section>
    );
} 