import React, { useState } from 'react';

const PAGE_SIZE = 10;

export const SettingRanglist = ({ className = '', leads }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortField, setSortField] = useState(null);
    const [sortDirection, setSortDirection] = useState('asc');

    // Sorting logic
    const sortedLeads = React.useMemo(() => {
        if (!sortField) return leads;
        return [...leads].sort((a, b) => {
            const aValue = a[sortField] || '';
            const bValue = b[sortField] || '';
            if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
            if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
            return 0;
        });
    }, [leads, sortField, sortDirection]);

    // Pagination logic
    const totalPages = Math.max(1, Math.ceil(sortedLeads.length / PAGE_SIZE));
    const paginatedLeads = sortedLeads.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

    const handleSort = (field) => {
        if (sortField === field) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField(field);
            setSortDirection('asc');
        }
        setCurrentPage(1); // Reset to first page on sort
    };

    const handlePrev = () => setCurrentPage((p) => Math.max(1, p - 1));
    const handleNext = () => setCurrentPage((p) => Math.min(totalPages, p + 1));

    const Pagination = () => (
        <div className="flex flex-row sm:flex-row items-center gap-3 sm:gap-5 justify-end lg:justify-center">
            <div className="flex items-center gap-1">
                {sortedLeads.length > 0 && (
                    <button onClick={handlePrev} disabled={currentPage === 1} className="flex items-center justify-center w-[30px] h-[30px] p-[7px] rounded-lg hover:bg-[rgba(255,255,255,0.05)] transition-colors disabled:opacity-40">
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/12d5836f7bd8e79cc1cab294437637813b1bbf06?placeholderIfAbsent=true"
                            alt="Previous"
                            className="aspect-[1] object-contain w-4"
                        />
                    </button>
                )}
                <div className="flex flex-wrap gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                        <button
                            key={pageNum}
                            onClick={() => setCurrentPage(pageNum)}
                            className={`min-h-[30px] w-[30px] text-xs sm:text-sm font-normal rounded-[10px] transition-colors ${currentPage === pageNum
                                ? 'bg-[rgba(255,255,255,0.09)] border text-white border-[rgba(255,255,255,0.06)] border-solid'
                                : 'text-[rgba(133,134,136,1)] hover:bg-[rgba(255,255,255,0.05)]'
                                }`}
                        >
                            {pageNum}
                        </button>
                    ))}
                </div>
                {sortedLeads.length > 0 && (
                    <button onClick={handleNext} disabled={currentPage === totalPages} className="bg-[rgba(230,243,255,0.14)] flex items-center justify-center w-[30px] h-[30px] rounded-[10px] hover:bg-[rgba(230,243,255,0.2)] transition-colors disabled:opacity-40">
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5720ff0c139ee4cc3f304a98baaafe4ffde4a238?placeholderIfAbsent=true"
                            alt="Next"
                            className="aspect-[1] object-contain w-4"
                        />
                    </button>
                )}
            </div>
            <div className="text-[rgba(133,134,136,1)] text-sm font-normal">
                <span className="text-white">{paginatedLeads.length}</span>
                <span> of {leads.length}</span>
            </div>
        </div>
    );

    return (
        <section className={`flex w-full flex-col items-stretch justify-center px-3 sm:px-5 py-6 sm:py-8 border-[rgba(21,21,21,1)] border-b ${className}`}>
            <div className="flex flex-row sm:flex-row items-start sm:items-center gap-3 sm:gap-5 mb-5">
                <h2 className="text-white text-2xl sm:text-[32px] font-medium leading-none flex-1">
                    Rangliste
                </h2>
                <div className="w-full sm:w-auto">
                    <Pagination />
                </div>
            </div>

            {/* Mobile Card View */}
            <div className="block sm:hidden space-y-3">
                {paginatedLeads.length > 0 ? (
                    paginatedLeads.map((lead, index) => (
                        <div key={index} className="bg-[rgba(255,255,255,0.09)] border p-4 rounded-[10px] border-[rgba(255,255,255,0.06)] border-solid">
                            <div className="text-white font-semibold text-lg mb-2">{lead.benutzer}</div>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-[rgba(139,139,139,1)]">Setting Termine:</span>
                                    <span className="text-white">{lead.settingTermine}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-[rgba(139,139,139,1)]">Setting durchgeführt:</span>
                                    <span className="text-white">{lead.settingDurchgeführt}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-[rgba(139,139,139,1)]">Erscheinungs quote:</span>
                                    <span className="text-white">{lead.erscheinungsQuote}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-[rgba(139,139,139,1)]">Closings terminiert:</span>
                                    <span className="text-white">{lead.closingsTerminiert}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-[rgba(139,139,139,1)]">Closing terminiert % (erreicht):</span>
                                    <span className="text-white">{lead.closingTerminiertProzent}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-[rgba(139,139,139,1)]">Setting zu Abschluss in %:</span>
                                    <span className="text-white">{lead.settingZuAbschlussProzent}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-[rgba(139,139,139,1)]">SC Durchgeführt zu A:</span>
                                    <span className="text-white">{lead.scDurchgeführtZuA}</span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="bg-[rgba(255,255,255,0.09)] border w-full p-8 rounded-[10px] border-[rgba(255,255,255,0.06)] border-solid flex items-center justify-center">
                        <div className="text-[rgba(139,139,139,1)] text-lg">No Data</div>
                    </div>
                )}
            </div>

            {/* Desktop Table View */}
            <div className="hidden sm:block w-full">
                {/* Table Header */}
                <div className="flex w-full items-center gap-4 lg:gap-8 text-sm text-[rgba(139,139,139,1)] font-normal leading-none flex-wrap pl-[18px] pr-2 py-2.5 rounded-[10px]">
                    <button
                        onClick={() => handleSort('benutzer')}
                        className="flex items-center gap-1 whitespace-nowrap min-w-0 flex-1 hover:text-white transition-colors"
                    >
                        <div className="truncate">Benutzer</div>
                        {sortField === 'benutzer' && (
                            <span>{sortDirection === 'asc' ? '' : ''}</span>
                        )}
                    </button>
                    <div className="min-w-0 flex-1 truncate">Setting Termine</div>
                    <div className="min-w-0 flex-1 truncate">Setting durchgeführt</div>
                    <div className="min-w-0 flex-1 truncate">Erscheinungs quote</div>
                    <div className="min-w-0 flex-1 truncate">Closings terminiert</div>
                    <button
                        onClick={() => handleSort('closingTerminiertProzent')}
                        className="flex items-center gap-1 whitespace-nowrap min-w-0 flex-1 hover:text-white transition-colors"
                    >
                        <div className="truncate">Closing terminiert % (erreicht)</div>
                        {sortField === 'closingTerminiertProzent' && (
                            <span>{sortDirection === 'asc' ? '' : ''}</span>
                        )}
                    </button>
                    <div className="min-w-0 flex-1 truncate">Setting zu Abschluss in %</div>
                    <div className="min-w-0 flex-1 truncate">SC Durchgeführt zu A</div>
                </div>

                {/* Table Body */}
                <div className="bg-[rgba(255,255,255,0.09)] border w-full mt-1 p-2 rounded-[10px] border-[rgba(255,255,255,0.06)] border-solid">
                    {paginatedLeads.length > 0 ? (
                        paginatedLeads.map((lead, index) => (
                            <div
                                key={index}
                                className={`flex w-full items-center gap-4 lg:gap-8 text-sm text-white font-semibold leading-none flex-wrap pl-2.5 py-2.5 rounded-[10px] hover:bg-[rgba(255,255,255,0.05)] transition-colors ${index > 0 ? 'mt-2' : ''}`}
                            >
                                <div className="min-w-0 flex-1 truncate">{lead.benutzer}</div>
                                <div className="min-w-0 flex-1 truncate">{lead.settingTermine}</div>
                                <div className="min-w-0 flex-1 truncate">{lead.settingDurchgeführt}</div>
                                <div className="min-w-0 flex-1 truncate">{lead.erscheinungsQuote}</div>
                                <div className="min-w-0 flex-1 truncate">{lead.closingsTerminiert}</div>
                                <div className="min-w-0 flex-1 truncate">{lead.closingTerminiertProzent}</div>
                                <div className="min-w-0 flex-1 truncate">{lead.settingZuAbschlussProzent}</div>
                                <div className="min-w-0 flex-1 truncate">{lead.scDurchgeführtZuA}</div>
                            </div>
                        ))
                    ) : (
                        <div className="flex items-center justify-center py-8">
                            <div className="text-[rgba(139,139,139,1)] text-lg">No Data</div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

