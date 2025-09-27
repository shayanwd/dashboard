import React from 'react';
import PageHeader from '../components/PageHeader';
import { UmsatzRanglist } from '../components/UmsatzRanglist';
import { SalesRanglist } from '../components/SalesRanglist';
import MetricCard from '../components/MetricCard';
import DoubleLineChart from '../components/DoubleLineChart';
import DoubleLineChart2 from '../components/DoubleLineChart2';

export default function Umsatz() {

    const leads1 = [
        {
            benutzer: "Florian Hamphoff",
            umsatzGesamt: "€45,280",
            ersteRate: "€16,320"
        },
        {
            benutzer: "Sophie Martinez",
            umsatzGesamt: "€52,450",
            ersteRate: "€18,880"
        },
        {
            benutzer: "Liam O'Connor",
            umsatzGesamt: "€38,720",
            ersteRate: "€13,940"
        },
        {
            benutzer: "Emma Thompson",
            umsatzGesamt: "€67,890",
            ersteRate: "€24,440"
        },
        {
            benutzer: "Noah Williams",
            umsatzGesamt: "€29,340",
            ersteRate: "€10,560"
        },
        {
            benutzer: "Olivia Brown",
            umsatzGesamt: "€48,560",
            ersteRate: "€17,480"
        },
        {
            benutzer: "James Johnson",
            umsatzGesamt: "€35,670",
            ersteRate: "€12,840"
        },
        {
            benutzer: "Ava Davis",
            umsatzGesamt: "€42,180",
            ersteRate: "€15,180"
        },
        {
            benutzer: "Ethan Clark",
            umsatzGesamt: "€31,920",
            ersteRate: "€11,490"
        },
        {
            benutzer: "Mia Wilson",
            umsatzGesamt: "€58,740",
            ersteRate: "€21,150"
        },
        {
            benutzer: "Alexander Schmidt",
            umsatzGesamt: "€33,450",
            ersteRate: "€12,040"
        },
        {
            benutzer: "Isabella Rodriguez",
            umsatzGesamt: "€55,230",
            ersteRate: "€19,880"
        }
    ];

    const leads2 = [
        {
            datum: "15.01.2024",
            name: "Michael Weber",
            email: "m.weber@email.com",
            produkt: "Premium Package",
            setter: "Sarah Müller",
            closer: "Florian Hamphoff",
            ersteRate: "€2,500",
            umsatz: "€8,900"
        },
        {
            datum: "18.01.2024",
            name: "Anna Schmidt",
            email: "a.schmidt@email.com",
            produkt: "Basic Package",
            setter: "Lucas Fischer",
            closer: "Sophie Martinez",
            ersteRate: "€1,800",
            umsatz: "€6,200"
        },
        {
            datum: "22.01.2024",
            name: "Thomas Müller",
            email: "t.mueller@email.com",
            produkt: "Premium Package",
            setter: "Emma Thompson",
            closer: "Liam O'Connor",
            ersteRate: "€3,200",
            umsatz: "€11,500"
        },
        {
            datum: "25.01.2024",
            name: "Lisa Wagner",
            email: "l.wagner@email.com",
            produkt: "Standard Package",
            setter: "Noah Williams",
            closer: "Emma Thompson",
            ersteRate: "€2,100",
            umsatz: "€7,800"
        },
        {
            datum: "28.01.2024",
            name: "David Klein",
            email: "d.klein@email.com",
            produkt: "Premium Package",
            setter: "Olivia Brown",
            closer: "James Johnson",
            ersteRate: "€2,800",
            umsatz: "€9,600"
        },
        {
            datum: "02.02.2024",
            name: "Maria Fischer",
            email: "m.fischer@email.com",
            produkt: "Basic Package",
            setter: "Ava Davis",
            closer: "Ethan Clark",
            ersteRate: "€1,500",
            umsatz: "€5,400"
        },
        {
            datum: "05.02.2024",
            name: "Peter Schulz",
            email: "p.schulz@email.com",
            produkt: "Standard Package",
            setter: "Mia Wilson",
            closer: "Alexander Schmidt",
            ersteRate: "€2,300",
            umsatz: "€8,200"
        },
        {
            datum: "08.02.2024",
            name: "Julia Meyer",
            email: "j.meyer@email.com",
            produkt: "Premium Package",
            setter: "Isabella Rodriguez",
            closer: "Florian Hamphoff",
            ersteRate: "€3,500",
            umsatz: "€12,800"
        },
        {
            datum: "12.02.2024",
            name: "Andreas Bauer",
            email: "a.bauer@email.com",
            produkt: "Basic Package",
            setter: "Sophie Martinez",
            closer: "Liam O'Connor",
            ersteRate: "€1,600",
            umsatz: "€5,800"
        },
        {
            datum: "15.02.2024",
            name: "Nina Hoffmann",
            email: "n.hoffmann@email.com",
            produkt: "Standard Package",
            setter: "Emma Thompson",
            closer: "James Johnson",
            ersteRate: "€2,200",
            umsatz: "€7,900"
        },
        {
            datum: "18.02.2024",
            name: "Markus Wolf",
            email: "m.wolf@email.com",
            produkt: "Premium Package",
            setter: "Noah Williams",
            closer: "Ethan Clark",
            ersteRate: "€2,900",
            umsatz: "€10,500"
        },
        {
            datum: "22.02.2024",
            name: "Sandra Becker",
            email: "s.becker@email.com",
            produkt: "Basic Package",
            setter: "Olivia Brown",
            closer: "Alexander Schmidt",
            ersteRate: "€1,700",
            umsatz: "€6,100"
        }
    ];

    return (
        <>
            <div className="bg-black min-h-screen">
                <div className="flex">

                    <main className="flex-1 lg:ml-0">
                        <div className=" px-3 sm:px-5 py-6 sm:py-8">
                            <div className="leading-none mb-5">
                                <PageHeader userName="Shayan" pageName="Umsatz" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
                                <MetricCard
                                    title="UMSATZ GESAMT"
                                    value="125,430"
                                    percentage="12.3%"
                                    isPositive={true}
                                    icon="/src/assets/cdown.svg"
                                />
                                <MetricCard
                                    title="CASHFLOW ERSTE RATE"
                                    value="45,280"
                                    percentage="8.7%"
                                    isPositive={true}
                                    icon="/src/assets/cdown.svg"
                                />
                                <MetricCard
                                    title="DURCHSCHNITTLICHER CASHFLOW"
                                    value="3,240"
                                    percentage="15.2%"
                                    isPositive={true}
                                    icon="/src/assets/cdown.svg"
                                />
                                <MetricCard
                                    title="ERSTE RATE IN %"
                                    value="36.1%"
                                    percentage="5.4%"
                                    isPositive={true}
                                    icon="/src/assets/cdown.svg"
                                />

                            </div>

                        </div>


                        <div className="border-[rgba(21,21,21,1)] border-b "></div>

                        <UmsatzRanglist leads={[]} />


                        <SalesRanglist leads={[]} />
                    </main>
                </div>
            </div>
        </>
    );
} 