import React from 'react';
import PageHeader from '../components/PageHeader';
import { ClosingRanglist } from '../components/ClosingRanglist';
import MetricCard from '../components/MetricCard';
import DoubleLineChart from '../components/DoubleLineChart';
import DoubleLineChart2 from '../components/DoubleLineChart2';

export default function Closing() {

    const leads = [
        {
            benutzer: "Florian Hamphoff",
            closingTermine: "15",
            closingDurchgeführt: "12",
            erscheinungsQuote: "80%",
            abschluss: "8",
            abschlussProzent: "67%"
        },
        {
            benutzer: "Sophie Martinez",
            closingTermine: "22",
            closingDurchgeführt: "18",
            erscheinungsQuote: "82%",
            abschluss: "14",
            abschlussProzent: "78%"
        },
        {
            benutzer: "Liam O'Connor",
            closingTermine: "18",
            closingDurchgeführt: "15",
            erscheinungsQuote: "83%",
            abschluss: "11",
            abschlussProzent: "73%"
        },
        {
            benutzer: "Emma Thompson",
            closingTermine: "25",
            closingDurchgeführt: "21",
            erscheinungsQuote: "84%",
            abschluss: "17",
            abschlussProzent: "81%"
        },
        {
            benutzer: "Noah Williams",
            closingTermine: "12",
            closingDurchgeführt: "10",
            erscheinungsQuote: "83%",
            abschluss: "7",
            abschlussProzent: "70%"
        },
        {
            benutzer: "Olivia Brown",
            closingTermine: "20",
            closingDurchgeführt: "17",
            erscheinungsQuote: "85%",
            abschluss: "13",
            abschlussProzent: "76%"
        },
        {
            benutzer: "James Johnson",
            closingTermine: "16",
            closingDurchgeführt: "14",
            erscheinungsQuote: "88%",
            abschluss: "10",
            abschlussProzent: "71%"
        },
        {
            benutzer: "Ava Davis",
            closingTermine: "19",
            closingDurchgeführt: "16",
            erscheinungsQuote: "84%",
            abschluss: "12",
            abschlussProzent: "75%"
        },
        {
            benutzer: "Ethan Clark",
            closingTermine: "14",
            closingDurchgeführt: "12",
            erscheinungsQuote: "86%",
            abschluss: "9",
            abschlussProzent: "75%"
        },
        {
            benutzer: "Mia Wilson",
            closingTermine: "21",
            closingDurchgeführt: "18",
            erscheinungsQuote: "86%",
            abschluss: "15",
            abschlussProzent: "83%"
        },
        {
            benutzer: "Alexander Schmidt",
            closingTermine: "17",
            closingDurchgeführt: "15",
            erscheinungsQuote: "88%",
            abschluss: "11",
            abschlussProzent: "73%"
        },
        {
            benutzer: "Isabella Rodriguez",
            closingTermine: "23",
            closingDurchgeführt: "20",
            erscheinungsQuote: "87%",
            abschluss: "16",
            abschlussProzent: "80%"
        }
    ];

    return (
        <>
            <div className="min-h-screen">
                <div className="flex">

                    <main className="flex-1 lg:ml-0">
                        <div className=" px-3 sm:px-5 py-6 sm:py-8">
                            <div className="leading-none mb-5">
                                <PageHeader userName="Shayan" pageName="Closing Performance" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
                                <MetricCard
                                    title="CLOSING TERMINE"
                                    value="39.0%"
                                    percentage="23.5%"
                                    isPositive={false}
                                    icon="https://cdn.builder.io/api/v1/image/assets/TEMP/11b5dec391f5f99bd322cd60ae81b2459bc5a260?placeholderIfAbsent=true"
                                />
                                <MetricCard
                                    title="CLOSING DURCHGEFÜHRT"
                                    value="1.0%"
                                    percentage="2.5%"
                                    isPositive={false}
                                    icon="https://cdn.builder.io/api/v1/image/assets/TEMP/11b5dec391f5f99bd322cd60ae81b2459bc5a260?placeholderIfAbsent=true"
                                />
                                <MetricCard
                                    title="ERSCHEINUNGSQUOTE %"
                                    value="39.0%"
                                    percentage="23.5%"
                                    isPositive={false}
                                    icon="https://cdn.builder.io/api/v1/image/assets/TEMP/11b5dec391f5f99bd322cd60ae81b2459bc5a260?placeholderIfAbsent=true"
                                />
                                <MetricCard
                                    title="NO SHOW QUOTE %"
                                    value="39.0%"
                                    percentage="23.5%"
                                    isPositive={false}
                                    icon="https://cdn.builder.io/api/v1/image/assets/TEMP/11b5dec391f5f99bd322cd60ae81b2459bc5a260?placeholderIfAbsent=true"
                                />

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
                        <div className="border-[rgba(21,21,21,1)] border-b mb-6"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 sm:px-5 px-3">
                            <MetricCard
                                title="CLOSING TERMINE"
                                value="39.0%"
                                percentage="23.5%"
                                isPositive={false}
                                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/11b5dec391f5f99bd322cd60ae81b2459bc5a260?placeholderIfAbsent=true"
                            />
                            <MetricCard
                                title="CLOSING DURCHGEFÜHRT"
                                value="1.0%"
                                percentage="2.5%"
                                isPositive={false}
                                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/11b5dec391f5f99bd322cd60ae81b2459bc5a260?placeholderIfAbsent=true"
                            />
                            <MetricCard
                                title="ERSCHEINUNGSQUOTE %"
                                value="39.0%"
                                percentage="23.5%"
                                isPositive={false}
                                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/11b5dec391f5f99bd322cd60ae81b2459bc5a260?placeholderIfAbsent=true"
                            />
                            <MetricCard
                                title="NO SHOW QUOTE %"
                                value="39.0%"
                                percentage="23.5%"
                                isPositive={false}
                                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/11b5dec391f5f99bd322cd60ae81b2459bc5a260?placeholderIfAbsent=true"
                            />

                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mt-1 sm:px-5 px-3">
                            <MetricCard
                                title="CLOSING TERMINE"
                                value="39.0%"
                                percentage="23.5%"
                                isPositive={false}
                                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/11b5dec391f5f99bd322cd60ae81b2459bc5a260?placeholderIfAbsent=true"
                            />
                            <MetricCard
                                title="CLOSING DURCHGEFÜHRT"
                                value="1.0%"
                                percentage="2.5%"
                                isPositive={false}
                                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/11b5dec391f5f99bd322cd60ae81b2459bc5a260?placeholderIfAbsent=true"
                            />
                            <MetricCard
                                title="ERSCHEINUNGSQUOTE %"
                                value="39.0%"
                                percentage="23.5%"
                                isPositive={false}
                                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/11b5dec391f5f99bd322cd60ae81b2459bc5a260?placeholderIfAbsent=true"
                            />


                        </div>

                        <ClosingRanglist leads={[]} />
                    </main>
                </div>
            </div>
        </>
    );
} 