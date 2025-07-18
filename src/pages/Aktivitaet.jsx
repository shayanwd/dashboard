import React from 'react';
import PageHeader from '../components/PageHeader';
import CallAttemptsChart from '../components/CallAttemptsChart';
import ConversationTimeChart from '../components/ConversationTimeChart';
import ActiveWorkingChart from '../components/ActiveWorkingChart';


export default function Aktivitaet() {
    return (
        <>

            <div className="min-h-screen aktivitaet-blur">
                <div className="flex">
                    <main className="flex-1 lg:ml-0">
                        <div className=" px-3 sm:px-5 pt-6 pb-0 sm:pt-8">
                            <div className="leading-none">
                                <PageHeader userName="Shayan" pageName="Aktivität" />
                            </div>
                        </div>
                        <div className="px-3 sm:px-5 pb-6 sm:pb-8">
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
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1">
                            <div className=" px-3 pr-4 sm:px-5 sm:pr-6 py-6 sm:py-8 border-[rgba(21,21,21,1)] border-r">
                                <ConversationTimeChart />
                            </div>
                            <div className=" px-3 sm:px-5 py-6 sm:py-8">
                                <ActiveWorkingChart />
                            </div>
                        </div>
                        <div className="border-[rgba(21,21,21,1)] border-b mb-6 sm:mb-8"></div>
                    </main>
                </div>
            </div>
        </>
    );
} 