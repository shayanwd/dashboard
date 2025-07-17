import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { StatsCards } from '../components/StatsCards';
import { MonthlyOverview } from '../components/MonthlyOverview';
import { LeadsList } from '../components/LeadsList';
import { SourceCharts } from '../components/SourceCharts';
import PageHeader from '../components/PageHeader';
import MetricCard from '../components/MetricCard';

export const Leads = () => {
    return (
        <div className="bg-black min-h-screen">
            <div className="flex">

                <main className="flex-1 lg:ml-0">

                    <div className="flex flex-col lg:flex-row border-[rgba(21,21,21,1)] border-b">
                        {/* Main Content */}
                        <div className="flex-1 lg:max-w-[60%] px-3 sm:px-5 py-6 sm:py-8 border-[rgba(21,21,21,1)] lg:border-r">
                            <div className="leading-none mb-5">
                                <PageHeader userName="Shayan" pageName="Leads" />

                            </div>
                            <div className="space-y-5">
                                <StatsCards />
                                <MonthlyOverview />

                            </div>
                        </div>

                        {/* Sidebar Metrics */}
                        <aside className="flex-1 lg:max-w-[40%] px-3 sm:px-5 py-6 sm:py-8 space-y-4">
                            <MetricCard
                                title="Leads mit Termin in %"
                                value="39.0%"
                                percentage="203.7%"
                                isPositive={false}
                                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/11b5dec391f5f99bd322cd60ae81b2459bc5a260?placeholderIfAbsent=true"
                            />
                            <MetricCard
                                title="Leads zu Abschluss"
                                value="16"
                                percentage="23.5%"
                                isPositive={true}
                                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/9e8a4b5a9f9e72b59a48273b9b94af7d7700c435?placeholderIfAbsent=true"
                            />
                            <MetricCard
                                title="Leads zu Abschluss in %"
                                value="6.2%"
                                percentage="23.5%"
                                isPositive={true}
                                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/a81aa47759294ca9a922db3a0af1bab4aae35902?placeholderIfAbsent=true"

                            />
                            <MetricCard
                                title="Tage zum Abschluss"
                                value="27.5"
                                percentage="23.5%"
                                isPositive={true}
                                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/9e8a4b5a9f9e72b59a48273b9b94af7d7700c435?placeholderIfAbsent=true"
                            />
                        </aside>
                    </div>
                    <LeadsList />
                    <SourceCharts />
                </main>
            </div>
        </div>
    );
};

export default Leads;

