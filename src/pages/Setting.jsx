import React from 'react';
import PageHeader from '../components/PageHeader';
import CallAttemptsChart from '../components/CallAttemptsChart';
import ConversationTimeChart from '../components/ConversationTimeChart';
import ActiveWorkingChart from '../components/ActiveWorkingChart';
import { SettingRanglist } from '../components/SettingRanglist';
import MetricCard from '../components/MetricCard';
import DoubleBarChart from '../components/DoubleBarChart';
import DoubleLineChart from '../components/DoubleLineChart';
import DoubleLineChart2 from '../components/DoubleLineChart2';


export default function Setting() {

    const leads = [
        {
            benutzer: "Florian Hamphoff",
            settingTermine: "45",
            settingDurchgeführt: "38",
            erscheinungsQuote: "84%",
            closingsTerminiert: "12",
            closingTerminiertProzent: "32%",
            settingZuAbschlussProzent: "68%",
            scDurchgeführtZuA: "85%"
        },
        {
            benutzer: "Sophie Martinez",
            settingTermine: "52",
            settingDurchgeführt: "44",
            erscheinungsQuote: "85%",
            closingsTerminiert: "15",
            closingTerminiertProzent: "34%",
            settingZuAbschlussProzent: "72%",
            scDurchgeführtZuA: "88%"
        },
        {
            benutzer: "Liam O'Connor",
            settingTermine: "38",
            settingDurchgeführt: "31",
            erscheinungsQuote: "82%",
            closingsTerminiert: "9",
            closingTerminiertProzent: "29%",
            settingZuAbschlussProzent: "65%",
            scDurchgeführtZuA: "82%"
        },
        {
            benutzer: "Emma Thompson",
            settingTermine: "41",
            settingDurchgeführt: "35",
            erscheinungsQuote: "85%",
            closingsTerminiert: "11",
            closingTerminiertProzent: "31%",
            settingZuAbschlussProzent: "69%",
            scDurchgeführtZuA: "86%"
        },
        {
            benutzer: "Noah Williams",
            settingTermine: "47",
            settingDurchgeführt: "40",
            erscheinungsQuote: "85%",
            closingsTerminiert: "13",
            closingTerminiertProzent: "33%",
            settingZuAbschlussProzent: "70%",
            scDurchgeführtZuA: "87%"
        },
        {
            benutzer: "Olivia Brown",
            settingTermine: "43",
            settingDurchgeführt: "36",
            erscheinungsQuote: "84%",
            closingsTerminiert: "10",
            closingTerminiertProzent: "28%",
            settingZuAbschlussProzent: "67%",
            scDurchgeführtZuA: "84%"
        },
        {
            benutzer: "James Johnson",
            settingTermine: "50",
            settingDurchgeführt: "42",
            erscheinungsQuote: "84%",
            closingsTerminiert: "14",
            closingTerminiertProzent: "33%",
            settingZuAbschlussProzent: "71%",
            scDurchgeführtZuA: "89%"
        },
        {
            benutzer: "Ava Davis",
            settingTermine: "39",
            settingDurchgeführt: "33",
            erscheinungsQuote: "85%",
            closingsTerminiert: "8",
            closingTerminiertProzent: "24%",
            settingZuAbschlussProzent: "62%",
            scDurchgeführtZuA: "80%"
        },
        {
            benutzer: "Ethan Clark",
            settingTermine: "44",
            settingDurchgeführt: "37",
            erscheinungsQuote: "84%",
            closingsTerminiert: "11",
            closingTerminiertProzent: "30%",
            settingZuAbschlussProzent: "66%",
            scDurchgeführtZuA: "83%"
        },
        {
            benutzer: "Mia Wilson",
            settingTermine: "48",
            settingDurchgeführt: "41",
            erscheinungsQuote: "85%",
            closingsTerminiert: "12",
            closingTerminiertProzent: "29%",
            settingZuAbschlussProzent: "68%",
            scDurchgeführtZuA: "85%"
        },
        {
            benutzer: "Lucas Anderson",
            settingTermine: "42",
            settingDurchgeführt: "35",
            erscheinungsQuote: "83%",
            closingsTerminiert: "9",
            closingTerminiertProzent: "26%",
            settingZuAbschlussProzent: "64%",
            scDurchgeführtZuA: "81%"
        },
        {
            benutzer: "Isabella Garcia",
            settingTermine: "46",
            settingDurchgeführt: "39",
            erscheinungsQuote: "85%",
            closingsTerminiert: "13",
            closingTerminiertProzent: "33%",
            settingZuAbschlussProzent: "70%",
            scDurchgeführtZuA: "86%"
        }
    ];

    return (
        <>
            <div className="min-h-screen">
                <div className="flex">

                    <main className="flex-1 lg:ml-0">
                        <div className=" px-3 sm:px-5 py-6 sm:py-8">
                            <div className="leading-none mb-5">
                                <PageHeader userName="Shayan" pageName="Setting Performance" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-1">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1">
                                    <MetricCard title="CLOSING TERMINIERT % (ERREICHT)" value="420" percentage="+23.5%" isPositive={false} icon="https://cdn.builder.io/api/v1/image/assets/TEMP/11b5dec391f5f99bd322cd60ae81b2459bc5a260?placeholderIfAbsent=true" />
                                    <MetricCard title="SETTING ZU ABSCHLUSS IN %" value="420" percentage="+23.5%" isPositive={true} icon="https://cdn.builder.io/api/v1/image/assets/TEMP/732177d1a9221220b4e305e1a0357acdae8b2161?placeholderIfAbsent=true" />
                                    <MetricCard title="CLOSING TERMINIERT % (ERREICHT)" value="420" percentage="+23.5%" isPositive={true} icon="https://cdn.builder.io/api/v1/image/assets/TEMP/732177d1a9221220b4e305e1a0357acdae8b2161?placeholderIfAbsent=true" />
                                    <MetricCard title="SETTING ZU ABSCHLUSS IN %" value="420" percentage="+23.5%" isPositive={true} icon="https://cdn.builder.io/api/v1/image/assets/TEMP/732177d1a9221220b4e305e1a0357acdae8b2161?placeholderIfAbsent=true" />

                                    <MetricCard title="CLOSING TERMINIERT % (ERREICHT)" value="420" percentage="+23.5%" isPositive={false} icon="https://cdn.builder.io/api/v1/image/assets/TEMP/11b5dec391f5f99bd322cd60ae81b2459bc5a260?placeholderIfAbsent=true" />
                                    <MetricCard title="SETTING ZU ABSCHLUSS IN %" value="420" percentage="+23.5%" isPositive={true} icon="https://cdn.builder.io/api/v1/image/assets/TEMP/732177d1a9221220b4e305e1a0357acdae8b2161?placeholderIfAbsent=true" />

                                </div>

                                <div className='w-full grid khenchde'>
                                    <DoubleBarChart />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mt-1">
                                <MetricCard title="CLOSING TERMINIERT % (ERREICHT)" value="420" percentage="+23.5%" isPositive={true} icon="https://cdn.builder.io/api/v1/image/assets/TEMP/732177d1a9221220b4e305e1a0357acdae8b2161?placeholderIfAbsent=true" />
                                <MetricCard title="SETTING ZU ABSCHLUSS IN %" value="420" percentage="+23.5%" isPositive={true} icon="https://cdn.builder.io/api/v1/image/assets/TEMP/732177d1a9221220b4e305e1a0357acdae8b2161?placeholderIfAbsent=true" />
                                <MetricCard title="SETTING ZU ABSCHLUSS IN %" value="420" percentage="+23.5%" isPositive={true} icon="https://cdn.builder.io/api/v1/image/assets/TEMP/732177d1a9221220b4e305e1a0357acdae8b2161?placeholderIfAbsent=true" />

                            </div>

                        </div>

                        <div className="border-[rgba(21,21,21,1)] border-b"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1">
                            <div className=" px-3 pr-4 sm:px-5 sm:pr-6 py-6 sm:py-8 border-[rgba(21,21,21,1)] border-r">
                                <DoubleLineChart />
                            </div>

                            <div className=" px-3 sm:px-5 py-6 sm:py-8">
                                <DoubleLineChart2 />
                            </div>
                        </div>
                        <div className="border-[rgba(21,21,21,1)] border-b"></div>
                        <SettingRanglist leads={[]} />
                    </main>
                </div>
            </div>
        </>
    );
} 