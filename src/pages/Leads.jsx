import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { StatsCards } from '../components/StatsCards';
import { MonthlyOverview } from '../components/MonthlyOverview';
import { LeadsList } from '../components/LeadsList';
import { SourceCharts } from '../components/SourceCharts';
import PageHeader from '../components/PageHeader';
import MetricCard from '../components/MetricCard';
import LineChart from '../components/LineChart';

export const Leads = () => {
    return (
        <div className="min-h-screen">
            <div className="flex">

                <main className="flex-1 lg:ml-0">

                    <div className="flex flex-col lg:flex-row border-[rgba(21,21,21,1)] border-b">
                        {/* Main Content */}
                        <div className="flex-1 lg:max-w-[60%] px-3 sm:px-5 py-6 sm:py-8 border-[rgba(21,21,21,1)] lg:border-r">
                            <div className="leading-none mb-5">
                                <PageHeader userName="Shayan" pageName="Leads" />

                            </div>
                            <div className="space-y-">
                                <StatsCards />
                                <MonthlyOverview />

                            </div>
                        </div>

                        {/* Sidebar Metrics */}
                        <aside className="flex flex-col w-full lg:max-w-[40%] px-3 sm:px-5 py-6 sm:py-8 space-y-1 justify-end items-end">
                            <MetricCard
                                title="Leads mit Termin in %"
                                value="39.0%"
                                percentage="203.7%"
                                isPositive={false}
                                icon="/src/assets/cdown.svg"
                            />
                            <MetricCard
                                title="Leads zu Abschluss"
                                value="16"
                                percentage="23.5%"
                                isPositive={true}
                                icon="/src/assets/cup.svg"
                            />
                            <MetricCard
                                title="Leads zu Abschluss in %"
                                value="6.2%"
                                percentage="23.5%"
                                isPositive={true}
                                icon="/src/assets/cup.svg"

                            />
                            <MetricCard
                                title="Tage zum Abschluss"
                                value="27.5"
                                percentage="23.5%"
                                isPositive={true}
                                icon="/src/assets/cup.svg"
                            />
                        </aside>
                    </div>
                    <LeadsList />
                    <SourceCharts />
                    {/* <LineChart /> */}
                </main>
            </div>
        </div>
    );
};

export default Leads;

