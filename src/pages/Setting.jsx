import React from 'react';
import PageHeader from '../components/PageHeader';
import CallAttemptsChart from '../components/CallAttemptsChart';
import ConversationTimeChart from '../components/ConversationTimeChart';
import ActiveWorkingChart from '../components/ActiveWorkingChart';
import { Ranglist } from '../components/Ranglist';
import MetricCard from '../components/MetricCard';
import DoubleBarChart from '../components/DoubleBarChart';

export default function Setting() {

    return (
        <>
            <div className="bg-black min-h-screen">
                <div className="flex">

                    <main className="flex-1 lg:ml-0">
                        <div className=" px-3 sm:px-5 py-6 sm:py-8">
                            <div className="leading-none mb-5">
                                <PageHeader userName="Shayan" pageName="Setting Performance" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-1">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1">
                                    <MetricCard title="CLOSING TERMINIERT % (ERREICHT)" value="420" percentage="+23.5%" isPositive={true} icon="https://cdn.builder.io/api/v1/image/assets/TEMP/11b5dec391f5f99bd322cd60ae81b2459bc5a260?placeholderIfAbsent=true" />
                                    <MetricCard title="SETTING ZU ABSCHLUSS IN %" value="420" percentage="+23.5%" isPositive={true} icon="https://cdn.builder.io/api/v1/image/assets/TEMP/11b5dec391f5f99bd322cd60ae81b2459bc5a260?placeholderIfAbsent=true" />
                                    <MetricCard title="CLOSING TERMINIERT % (ERREICHT)" value="420" percentage="+23.5%" isPositive={true} icon="https://cdn.builder.io/api/v1/image/assets/TEMP/11b5dec391f5f99bd322cd60ae81b2459bc5a260?placeholderIfAbsent=true" />
                                    <MetricCard title="SETTING ZU ABSCHLUSS IN %" value="420" percentage="+23.5%" isPositive={true} icon="https://cdn.builder.io/api/v1/image/assets/TEMP/11b5dec391f5f99bd322cd60ae81b2459bc5a260?placeholderIfAbsent=true" />

                                    <MetricCard title="CLOSING TERMINIERT % (ERREICHT)" value="420" percentage="+23.5%" isPositive={true} icon="https://cdn.builder.io/api/v1/image/assets/TEMP/11b5dec391f5f99bd322cd60ae81b2459bc5a260?placeholderIfAbsent=true" />
                                    <MetricCard title="SETTING ZU ABSCHLUSS IN %" value="420" percentage="+23.5%" isPositive={true} icon="https://cdn.builder.io/api/v1/image/assets/TEMP/11b5dec391f5f99bd322cd60ae81b2459bc5a260?placeholderIfAbsent=true" />

                                </div>

                                <div className='w-full'>
                                    <DoubleBarChart />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mt-1">
                                <MetricCard title="CLOSING TERMINIERT % (ERREICHT)" value="420" percentage="+23.5%" isPositive={true} icon="https://cdn.builder.io/api/v1/image/assets/TEMP/11b5dec391f5f99bd322cd60ae81b2459bc5a260?placeholderIfAbsent=true" />
                                <MetricCard title="SETTING ZU ABSCHLUSS IN %" value="420" percentage="+23.5%" isPositive={true} icon="https://cdn.builder.io/api/v1/image/assets/TEMP/11b5dec391f5f99bd322cd60ae81b2459bc5a260?placeholderIfAbsent=true" />
                                <MetricCard title="SETTING ZU ABSCHLUSS IN %" value="420" percentage="+23.5%" isPositive={true} icon="https://cdn.builder.io/api/v1/image/assets/TEMP/11b5dec391f5f99bd322cd60ae81b2459bc5a260?placeholderIfAbsent=true" />

                            </div>

                        </div>
                        <div className="border-[rgba(21,21,21,1)] border-b"></div>
                        <div className=" px-3 sm:px-5 py-6 sm:py-8">
                            <CallAttemptsChart />
                        </div>
                        <div className="border-[rgba(21,21,21,1)] border-b"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1">
                            <div className=" px-3 pr-4 sm:px-5 sm:pr-6 py-6 sm:py-8 border-[rgba(21,21,21,1)] border-r">
                                <ConversationTimeChart />
                            </div>

                            <div className=" px-3 sm:px-5 py-6 sm:py-8">
                                <ActiveWorkingChart />
                            </div>
                        </div>
                        <div className="border-[rgba(21,21,21,1)] border-b"></div>
                        <Ranglist />
                    </main>
                </div>
            </div>
        </>
    );
} 