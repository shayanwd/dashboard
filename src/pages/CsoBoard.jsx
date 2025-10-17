import React from 'react';
import PageHeader from '../components/PageHeader';
import MonthDropdown from '../components/MonthDropdown';
import CsoChartMinimalStack from '../components/CsoChart1';
import CsoChartMinimalStack4B from '../components/CsoChartMinimalStack4B';
import CsoChartMinimalStack2Green from '../components/CsoChartMinimalStack2Green';
import CsoChartLineMint from '../components/CsoChartLineMint';
import CsoChartLineTrio from '../components/CsoChartLineTrio';


export default function CsoBoard() {
    return (
        <>

            <div className="min-h-screen aktivitaet-blur">
                <div className="flex">
                    <main className="flex-1 lg:ml-0">
                        <div className=" px-3 sm:px-5 pt-6 pb-0 sm:pt-8">
                            <div className="leading-none">
                                <PageHeader userName="Shayan" pageName="CSO Board" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1">
                            <div className=" px-3 pr-4 sm:px-5 sm:pr-6 py-6 sm:py-8 border-[rgba(21,21,21,1)] border-r">
                                <section className="chipku-blur bg-[#FFFFFF17] h-full rounded-2xl p-4 sm:p-5 w-full max-w-full shadow-lg relative border-[rgba(255,255,255,0.06)] border-solid border">
                                    <div className="flex flex-col lg:flex-row gap-2 lg:items-center items-start justify-between mb-2">
                                        <div className="flex flex-col gap-2">
                                            <span className="flex gap-2 flex-wrap">
                                                <span className="bg-[#2C2C2C] text-[#0096C7] px-3 py-1 rounded-[8px] text-[12px] font-regular">
                                                    <span className='font-semibold'>256</span> Umsatz
                                                </span>
                                                <span className="bg-[#2C2C2C] text-[#F1C40F] px-3 py-1 rounded-[8px] text-[12px] font-regular">
                                                    <span className='font-semibold'>120</span> Werbeausgabe
                                                </span>
                                                <span className="bg-[#2C2C2C] text-[#27AE60] px-3 py-1 rounded-[8px] text-[12px] font-regular">
                                                    <span className='font-semibold'>190</span> Geldeingang
                                                </span>
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 lg:w-auto w-full">
                                            <MonthDropdown />
                                        </div>
                                    </div>
                                    <div className="w-full h-[300px] strecth">
                                        <CsoChartMinimalStack
                                            categories={['27', '29', '1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25']}
                                            series={[
                                                { name: 'Umsatz', data: [18, 10, 8, 3, 22, 28, 12, 6, 24, 7, 5, 20, 8, 10, 26] },   // cyan
                                                { name: 'Werbeausgabe', data: [14, 9, 5, 2, 8, 10, 9, 2, 12, 3, 2, 9, 6, 5, 12] },        // yellow
                                                { name: 'Geldeingang', data: [12, 7, 4, 1, 6, 9, 6, 1, 10, 2, 1, 7, 5, 6, 11] },         // green
                                            ]}
                                            height={300}
                                        />
                                    </div>
                                </section>
                            </div>
                            <div className=" px-3 pr-4 sm:px-5 sm:pr-6 py-6 sm:py-8 border-[rgba(21,21,21,1)] border-r">
                                <section className="chipku-blur bg-[#FFFFFF17] h-full rounded-2xl p-4 sm:p-5 w-full max-w-full shadow-lg relative border-[rgba(255,255,255,0.06)] border-solid border">
                                    <div className="flex flex-col lg:flex-row gap-2 lg:items-center items-start justify-between mb-2">
                                        <div className="flex flex-col gap-2">
                                            <span className="flex gap-2 flex-wrap">
                                                <span className="bg-[#2C2C2C] text-[#E01E37] px-3 py-1 rounded-[8px] text-[12px] font-regular">
                                                    <span className='font-semibold'>256</span> Kosten Pro Kunde
                                                </span>
                                                <span className="bg-[#2C2C2C] text-[#F17105] px-3 py-1 rounded-[8px] text-[12px] font-regular">
                                                    <span className='font-semibold'>120</span> Kosten Pro Closing Termin
                                                </span>
                                                <span className="bg-[#2C2C2C] text-[#27AE60] px-3 py-1 rounded-[8px] text-[12px] font-regular">
                                                    <span className='font-semibold'>190</span> durchschnittlicher Kundenwert
                                                </span>
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 lg:w-auto w-full">
                                            <MonthDropdown />
                                        </div>
                                    </div>
                                    <div className="w-full h-[300px]">
                                        <CsoChartMinimalStack4B height={300} />
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div class="border-[rgba(21,21,21,1)] border-b"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1">
                            <div className=" px-3 pr-4 sm:px-5 sm:pr-6 py-6 sm:py-8 border-[rgba(21,21,21,1)] border-r">
                                <section className="chipku-blur bg-[#FFFFFF17] h-full rounded-2xl p-4 sm:p-5 w-full max-w-full shadow-lg relative border-[rgba(255,255,255,0.06)] border-solid border">
                                    <div className="flex flex-col lg:flex-row gap-2 lg:items-center items-start justify-between mb-2">
                                        <div className="flex flex-col gap-2">
                                            <span className="flex gap-2 flex-wrap">
                                                <span className="bg-[#2C2C2C] text-[#93FFE9] px-3 py-1 rounded-[8px] text-[12px] font-regular">
                                                    <span className='font-semibold'>120</span> ROAS
                                                </span>
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 lg:w-auto w-full">
                                            <MonthDropdown />
                                        </div>
                                    </div>
                                    <div className="w-full h-[300px]">
                                        <CsoChartLineMint height={300} />
                                    </div>
                                </section>
                            </div>
                            <div className=" px-3 pr-4 sm:px-5 sm:pr-6 py-6 sm:py-8 border-[rgba(21,21,21,1)] border-r">
                                <section className="chipku-blur bg-[#FFFFFF17] h-full rounded-2xl p-4 sm:p-5 w-full max-w-full shadow-lg relative border-[rgba(255,255,255,0.06)] border-solid border">
                                    <div className="flex flex-col lg:flex-row gap-2 lg:items-center items-start justify-between mb-2">
                                        <div className="flex flex-col gap-2">
                                            <span className="flex gap-2 flex-wrap">
                                                <span className="bg-[#2C2C2C] text-[#FF9393] px-3 py-1 rounded-[8px] text-[12px] font-regular">
                                                    <span className='font-semibold'>256</span> Lead-Close-Verhaltinis
                                                </span>
                                                <span className="bg-[#2C2C2C] text-[#0096C7] px-3 py-1 rounded-[8px] text-[12px] font-regular">
                                                    <span className='font-semibold'>120</span> Abschlussquote
                                                </span>
                                                <span className="bg-[#2C2C2C] text-[#C9FF93] px-3 py-1 rounded-[8px] text-[12px] font-regular">
                                                    <span className='font-semibold'>190</span> NoShow Quote
                                                </span>
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 lg:w-auto w-full">
                                            <MonthDropdown />
                                        </div>
                                    </div>
                                    <div className="w-full h-[300px]">
                                        <CsoChartLineTrio height={300} />
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div class="border-[rgba(21,21,21,1)] border-b"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1">
                            <div className=" px-3 pr-4 sm:px-5 sm:pr-6 py-6 sm:py-8 border-[rgba(21,21,21,1)] border-r">
                                <section className="chipku-blur bg-[#FFFFFF17] h-full rounded-2xl p-4 sm:p-5 w-full max-w-full shadow-lg relative border-[rgba(255,255,255,0.06)] border-solid border">
                                    <div className="flex flex-col lg:flex-row gap-2 lg:items-center items-start justify-between mb-2">
                                        <div className="flex flex-col gap-2">
                                            <span className="flex gap-2 flex-wrap">
                                                <span className="bg-[#2C2C2C] text-[#27AE60] px-3 py-1 rounded-[8px] text-[12px] font-regular">
                                                    <span className='font-semibold'>256</span> Closing Termine
                                                </span>
                                                <span className="bg-[#2C2C2C] text-[#C9FF93] px-3 py-1 rounded-[8px] text-[12px] font-regular">
                                                    <span className='font-semibold'>120</span> Setting Termine
                                                </span>
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 lg:w-auto w-full">
                                            <MonthDropdown />
                                        </div>
                                    </div>
                                    <div className="w-full h-[300px]">
                                        <CsoChartMinimalStack2Green height={300} />
                                    </div>
                                </section>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
} 