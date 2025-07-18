import React from 'react';
import PageHeader from '../components/PageHeader';
import CallAttemptsChart from '../components/CallAttemptsChart';
import ConversationTimeChart from '../components/ConversationTimeChart';
import ActiveWorkingChart from '../components/ActiveWorkingChart';
import { PreSettingRanglist } from '../components/PreSettingRanglist';
import MetricCard from '../components/MetricCard';

export default function PreSetting() {

    const leads = [
        {
            benutzer: "Florian Hamphoff",
            anwahlversuche: "Ads",
            erreicht: "Meta",
            gespraechszeit: "Facebook Ads",
            gelegteSettings: "-",
            gelegteClosing: "-"
        },
        {
            benutzer: "Sophie Martinez",
            anwahlversuche: "Marketing",
            erreicht: "Google",
            gespraechszeit: "Search Ads",
            gelegteSettings: "-",
            gelegteClosing: "-"
        },
        {
            benutzer: "Liam O'Connor",
            anwahlversuche: "Social Media",
            erreicht: "Twitter",
            gespraechszeit: "Promoted Tweets",
            gelegteSettings: "-",
            gelegteClosing: "-"
        },
        {
            benutzer: "Emma Thompson",
            anwahlversuche: "Content",
            erreicht: "LinkedIn",
            gespraechszeit: "Sponsored Content",
            gelegteSettings: "-",
            gelegteClosing: "-"
        },
        {
            benutzer: "Noah Williams",
            anwahlversuche: "SEO",
            erreicht: "Bing",
            gespraechszeit: "Bing Ads",
            gelegteSettings: "-",
            gelegteClosing: "-"
        },
        {
            benutzer: "Olivia Brown",
            anwahlversuche: "Email",
            erreicht: "Mailchimp",
            gespraechszeit: "Newsletter Campaign",
            gelegteSettings: "-",
            gelegteClosing: "-"
        },
        {
            benutzer: "James Johnson",
            anwahlversuche: "Video",
            erreicht: "YouTube",
            gespraechszeit: "Video Ads",
            gelegteSettings: "-",
            gelegteClosing: "-"
        },
        {
            benutzer: "Ava Davis",
            anwahlversuche: "Influencer",
            erreicht: "Instagram",
            gespraechszeit: "Influencer Partnerships",
            gelegteSettings: "-",
            gelegteClosing: "-"
        },
        {
            benutzer: "Ethan Clark",
            anwahlversuche: "Affiliate",
            erreicht: "Amazon",
            gespraechszeit: "Affiliate Marketing",
            gelegteSettings: "-",
            gelegteClosing: "-"
        },
        {
            benutzer: "Ethan Clark",
            anwahlversuche: "Affiliate",
            erreicht: "Amazon",
            gespraechszeit: "Affiliate Marketing",
            gelegteSettings: "-",
            gelegteClosing: "-"
        },
        {
            benutzer: "Ethan Clark",
            anwahlversuche: "Affiliate",
            erreicht: "Amazon",
            gespraechszeit: "Affiliate Marketing",
            gelegteSettings: "-",
            gelegteClosing: "-"
        },
        {
            benutzer: "Mia Wilson",
            anwahlversuche: "Analytics",
            erreicht: "HubSpot",
            gespraechszeit: "Performance Tracking",
            gelegteSettings: "-",
            gelegteClosing: "-"
        },

    ];

    return (
        <>
            <div className="bg-black min-h-screen">
                <div className="flex">

                    <main className="flex-1 lg:ml-0">
                        <div className=" px-3 sm:px-5 py-6 sm:py-8">
                            <div className="leading-none mb-5">
                                <PageHeader userName="Shayan" pageName="Pre Setting Performance" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                                <MetricCard
                                    title="Leads mit Termin in %"
                                    value="39.0%"
                                    percentage="23.5%"
                                    isPositive={false}
                                    icon="https://cdn.builder.io/api/v1/image/assets/TEMP/11b5dec391f5f99bd322cd60ae81b2459bc5a260?placeholderIfAbsent=true"
                                />
                                <MetricCard
                                    title="Leads mit Termin in %"
                                    value="1.0%"
                                    percentage="2.5%"
                                    isPositive={false}
                                    icon="https://cdn.builder.io/api/v1/image/assets/TEMP/11b5dec391f5f99bd322cd60ae81b2459bc5a260?placeholderIfAbsent=true"
                                />
                                <MetricCard
                                    title="Leads mit Termin in %"
                                    value="39.0%"
                                    percentage="23.5%"
                                    isPositive={false}
                                    icon="https://cdn.builder.io/api/v1/image/assets/TEMP/11b5dec391f5f99bd322cd60ae81b2459bc5a260?placeholderIfAbsent=true"
                                />
                                <MetricCard
                                    title="Leads mit Termin in %"
                                    value="39.0%"
                                    percentage="23.5%"
                                    isPositive={false}
                                    icon="https://cdn.builder.io/api/v1/image/assets/TEMP/11b5dec391f5f99bd322cd60ae81b2459bc5a260?placeholderIfAbsent=true"
                                />
                                <MetricCard
                                    title="Leads mit Termin in %"
                                    value="39.0%"
                                    percentage="23.5%"
                                    isPositive={false}
                                    icon="https://cdn.builder.io/api/v1/image/assets/TEMP/11b5dec391f5f99bd322cd60ae81b2459bc5a260?placeholderIfAbsent=true"
                                />
                                <MetricCard
                                    title="Leads mit Termin in %"
                                    value="39.0%"
                                    percentage="23.5%"
                                    isPositive={false}
                                    icon="https://cdn.builder.io/api/v1/image/assets/TEMP/11b5dec391f5f99bd322cd60ae81b2459bc5a260?placeholderIfAbsent=true"
                                />
                                <MetricCard
                                    title="Leads mit Termin in %"
                                    value="39.0%"
                                    percentage="23.5%"
                                    isPositive={false}
                                    icon="https://cdn.builder.io/api/v1/image/assets/TEMP/11b5dec391f5f99bd322cd60ae81b2459bc5a260?placeholderIfAbsent=true"
                                />
                                <MetricCard
                                    title="Leads mit Termin in %"
                                    value="39.0%"
                                    percentage="23.5%"
                                    isPositive={false}
                                    icon="https://cdn.builder.io/api/v1/image/assets/TEMP/11b5dec391f5f99bd322cd60ae81b2459bc5a260?placeholderIfAbsent=true"
                                />
                                <MetricCard
                                    title="Leads mit Termin in %"
                                    value="39.0%"
                                    percentage="23.5%"
                                    isPositive={false}
                                    icon="https://cdn.builder.io/api/v1/image/assets/TEMP/11b5dec391f5f99bd322cd60ae81b2459bc5a260?placeholderIfAbsent=true"
                                />
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
                        <PreSettingRanglist leads={leads} />
                    </main>
                </div>
            </div>
        </>
    );
} 