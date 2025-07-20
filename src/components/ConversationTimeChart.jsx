import React, { useRef, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import FilterButton from './FilterButton';
import OptionsDropdownButton from './OptionsDropdownButton';


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
        borderColor: '#252627',
        strokeDashArray: 6,
        yaxis: { lines: { show: true } },
        xaxis: { lines: { show: false } },
    },
    legend: {
        show: false,
    },
    colors: ['#FF9393', '#93FFE9'],
    stroke: {
        width: 3,
        curve: 'smooth',
        lineCap: 'round',
    },
    markers: {
        size: 0,
    },
    xaxis: {
        categories: [27, 29, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25,],
        labels: {
            style: {
                colors: '#56575D',
                fontSize: '14px',
                fontWeight: 400,
            },
        },
        axisBorder: { show: false },
        axisTicks: { show: false },
        tickPlacement: 'on',
        position: 'bottom',
    },
    yaxis: {
        min: 0,
        max: 800,
        tickAmount: 4,
        labels: {
            style: {
                colors: '#56575D',
                fontSize: '14px',
                fontWeight: 400,
            },
        },
        opposite: true,
    },
    tooltip: {
        theme: 'dark',
        x: { show: false },
        y: { formatter: (val) => Math.round(val) },
    },
};

export default function ConversationTimeChart() {
    const [filterOpen, setFilterOpen] = useState(false);
    const filterBtnRef = useRef();

    return (
        <section className="chipku-blur bg-[#FFFFFF17] rounded-2xl p-4 sm:p-5 w-full max-w-full shadow-lg relative border-[rgba(255,255,255,0.06)] border-solid border">


            <div className="flex flex-col lg:flex-row gap-2 lg:items-center items-start justify-between mb-2">
                <div className="flex flex-col gap-2">
                    <span className="text-[white] text-[16px] font-semibold uppercase tracking-wider">Gesprächszeit</span>
                    <span className="flex gap-2">
                        <span className="bg-[#2C2C2C] text-[#FF9393] px-3 py-1 rounded-[8px] text-[12px] font-medium">Closer Academy</span>
                        <span className="bg-[#2C2C2C] text-[#93FFE9] px-3 py-1 rounded-[8px] text-[12px] font-medium">Beratungsgespräch</span>

                    </span>
                </div>
                <div className="flex items-center gap-2 lg:w-auto w-full">
                    <div className=' lg:w-auto w-full' ref={filterBtnRef}>
                        <FilterButton onClick={() => setFilterOpen((v) => !v)} />
                    </div>
                    <OptionsDropdownButton
                        onOptionClick={(val) => alert(val + ' clicked')}
                    />
                </div>

            </div>
            <div className="w-full h-[300px]">
                <ReactApexChart options={options} series={series} type="line" height={300} width="100%" />
            </div>
        </section>
    );
} 