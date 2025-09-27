import React, { useState } from 'react';
// import filtericon from '/src/assets/filter.svg';

const FilterButton = React.forwardRef(function FilterButton({ className = '', onClick }, ref) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCampaign, setSelectedCampaign] = useState('Kampagne Name 3');
    const [selectedQuelle, setSelectedQuelle] = useState('Google Ads');
    const [selectedMedium, setSelectedMedium] = useState('CPC');
    const [selectedUtmSource, setSelectedUtmSource] = useState('google');
    const [selectedUtmMedium, setSelectedUtmMedium] = useState('cpc');
    const [selectedUtmCampaign, setSelectedUtmCampaign] = useState('summer_sale');
    const [selectedUtmTerm, setSelectedUtmTerm] = useState('marketing');
    const [selectedUtmContent, setSelectedUtmContent] = useState('banner_1');
    const [expandedCategories, setExpandedCategories] = useState({
        kampagne: true,
        quelle: false,
        medium: false,
        utmSource: false,
        utmMedium: false,
        utmCampaign: false,
        utmTerm: false,
        utmContent: false
    });

    const handleFilterClick = () => {
        setIsModalOpen(!isModalOpen);
        if (onClick) onClick();
    };

    const toggleCategory = (category) => {
        setExpandedCategories(prev => ({
            ...prev,
            [category]: !prev[category]
        }));
    };

    const campaignOptions = [
        'Kampagne Name',
        'Kampagne Name 2',
        'Kampagne Name 3'
    ];

    const quelleOptions = [
        'Google Ads',
        'Facebook Ads',
        'Instagram Ads',
        'LinkedIn Ads',
        'Twitter Ads',
        'TikTok Ads',
        'YouTube Ads',
        'Organic Search',
        'Direct Traffic',
        'Email Marketing'
    ];

    const mediumOptions = [
        'CPC',
        'CPM',
        'CPA',
        'Organic',
        'Email',
        'Social',
        'Display',
        'Video',
        'Shopping',
        'Remarketing'
    ];

    const utmSourceOptions = [
        'google',
        'facebook',
        'instagram',
        'linkedin',
        'twitter',
        'tiktok',
        'youtube',
        'bing',
        'yahoo',
        'direct'
    ];

    const utmMediumOptions = [
        'cpc',
        'cpm',
        'email',
        'social',
        'display',
        'video',
        'shopping',
        'remarketing',
        'affiliate',
        'organic'
    ];

    const utmCampaignOptions = [
        'summer_sale',
        'winter_promotion',
        'new_product_launch',
        'holiday_special',
        'back_to_school',
        'black_friday',
        'cyber_monday',
        'spring_clearance',
        'brand_awareness',
        'lead_generation'
    ];

    const utmTermOptions = [
        'marketing',
        'advertising',
        'promotion',
        'sale',
        'discount',
        'offer',
        'deal',
        'special',
        'limited_time',
        'exclusive'
    ];

    const utmContentOptions = [
        'banner_1',
        'banner_2',
        'video_ad',
        'carousel_ad',
        'story_ad',
        'feed_ad',
        'search_ad',
        'display_ad',
        'shopping_ad',
        'remarketing_ad'
    ];

    return (
        <div className="relative">
            <div
                ref={ref}
                className={`bg-[rgba(255,255,255,0.09)] border flex items-center justify-between w-full sm:w-[200px] p-[3px_3px_3px_10px] rounded-[10px] cursor-pointer transition-all duration-200 ${isModalOpen
                    ? 'border-[#7EBAFF] border-2 shadow-[0_0_10px_rgba(74,144,226,0.3)]'
                    : 'border-[rgba(255,255,255,0.06)] border-solid'
                    } ${className}`}
                onClick={handleFilterClick}
            >
                <div className="text-white text-sm font-normal leading-none">
                    Filters
                </div>
                <div className="bg-[rgba(230,243,255,0.14)] flex items-center justify-center w-7 h-7 px-1.5 rounded-[7px]">
                    {/* <img
                        src={filtericon}
                        alt="Filter"
                        className="aspect-[1] object-contain w-4"
                    /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" class="aspect-[1] object-contain w-4"><path d="M2.66663 14V9.33333" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.66663 6.66667V2" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 14V8" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 5.33333V2" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.3334 14V10.6667" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.3334 8V2" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path><path d="M0.666626 9.33333H4.66663" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 5.33333H10" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.3334 10.6667H15.3334" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="absolute top-full mt-2 lg:left-none lg:right-[0] right-none z-50">
                    <div className="bg-[#0000001A] backdrop-blur-[64px] border border-[#FFFFFF0F] rounded-lg shadow-lg w-80 max-h-96 overflow-y-auto">
                        {/* Filter Categories */}
                        <div className="p-4 space-y-2">
                            {/* Quelle */}
                            <div className={`border-b border-[#FFFFFF0F] transition-all duration-200 p-2 ${expandedCategories.quelle ? 'bg-[#ffffff12] rounded-[5px] backdrop-blur-[64px]' : ''}`}>
                                <div
                                    className="flex items-center gap-2 cursor-pointer text-white text-sm"
                                    onClick={() => toggleCategory('quelle')}
                                >
                                    <svg
                                        className={`w-4 h-4 transition-transform ${expandedCategories.quelle ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                    <span>Quelle</span>
                                </div>

                                {expandedCategories.quelle && (
                                    <div className="mt-2 space-y-1 pl-4">
                                        {quelleOptions.map((option, index) => (
                                            <div
                                                key={index}
                                                className={`flex items-center space-x-2 px-2 py-1 rounded ${selectedQuelle === option ? 'bg-[#2a2a2a]' : ''}`}
                                            >
                                                <input
                                                    type="checkbox"
                                                    id={`quelle-${index}`}
                                                    checked={selectedQuelle === option}
                                                    onChange={() => setSelectedQuelle(option)}
                                                    className="w-4 h-4 text-[#00BDF9] bg-gray-100 border-gray-300 rounded focus:ring-[#00BDF9]"
                                                />
                                                <label
                                                    htmlFor={`quelle-${index}`}
                                                    className="text-white text-sm cursor-pointer"
                                                >
                                                    {option}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Medium */}
                            <div className={`border-b border-[#FFFFFF0F] transition-all duration-200 p-2 ${expandedCategories.medium ? 'bg-[#2a2a2a] rounded-[5px]' : ''}`}>
                                <div
                                    className="flex items-center gap-2 cursor-pointer text-white text-sm"
                                    onClick={() => toggleCategory('medium')}
                                >
                                    <svg
                                        className={`w-4 h-4 transition-transform ${expandedCategories.medium ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                    <span>Medium</span>
                                </div>

                                {expandedCategories.medium && (
                                    <div className="mt-2 space-y-1 pl-4">
                                        {mediumOptions.map((option, index) => (
                                            <div
                                                key={index}
                                                className={`flex items-center space-x-2 px-2 py-1 rounded ${selectedMedium === option ? 'bg-[#2a2a2a]' : ''}`}
                                            >
                                                <input
                                                    type="checkbox"
                                                    id={`medium-${index}`}
                                                    checked={selectedMedium === option}
                                                    onChange={() => setSelectedMedium(option)}
                                                    className="w-4 h-4 text-[#00BDF9] bg-gray-100 border-gray-300 rounded focus:ring-[#00BDF9]"
                                                />
                                                <label
                                                    htmlFor={`medium-${index}`}
                                                    className="text-white text-sm cursor-pointer"
                                                >
                                                    {option}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Kampagne */}
                            <div className={`border-b border-[#FFFFFF0F] transition-all duration-200 p-2 ${expandedCategories.kampagne ? 'bg-[#2a2a2a] rounded-[5px]' : ''}`}>
                                <div
                                    className="flex items-center gap-2 cursor-pointer text-white text-sm"
                                    onClick={() => toggleCategory('kampagne')}
                                >

                                    <svg
                                        className={`w-4 h-4 transition-transform ${expandedCategories.kampagne ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                    <span>Kampagne</span>
                                </div>

                                {expandedCategories.kampagne && (
                                    <div className="mt-2 space-y-1 pl-4">
                                        {campaignOptions.map((option, index) => (
                                            <div
                                                key={index}
                                                className={`flex items-center space-x-2 px-2 py-1 rounded ${selectedCampaign === option ? 'bg-[#2a2a2a]' : ''}`}
                                            >
                                                <input
                                                    type="checkbox"
                                                    id={`campaign-${index}`}
                                                    checked={selectedCampaign === option}
                                                    onChange={() => setSelectedCampaign(option)}
                                                    className="w-4 h-4 text-[#00BDF9] bg-gray-100 border-gray-300 rounded focus:ring-[#00BDF9]"
                                                />
                                                <label
                                                    htmlFor={`campaign-${index}`}
                                                    className="text-white text-sm cursor-pointer"
                                                >
                                                    {option}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* UTM Source */}
                            <div className={`border-b border-[#FFFFFF0F] transition-all duration-200 p-2 ${expandedCategories.utmSource ? 'bg-[#2a2a2a] rounded-[5px]' : ''}`}>
                                <div
                                    className="flex items-center gap-2 cursor-pointer text-white text-sm"
                                    onClick={() => toggleCategory('utmSource')}
                                >
                                    <svg
                                        className={`w-4 h-4 transition-transform ${expandedCategories.utmSource ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                    <span>UTM Source</span>
                                </div>

                                {expandedCategories.utmSource && (
                                    <div className="mt-2 space-y-1 pl-4">
                                        {utmSourceOptions.map((option, index) => (
                                            <div
                                                key={index}
                                                className={`flex items-center space-x-2 px-2 py-1 rounded ${selectedUtmSource === option ? 'bg-[#2a2a2a]' : ''}`}
                                            >
                                                <input
                                                    type="checkbox"
                                                    id={`utmSource-${index}`}
                                                    checked={selectedUtmSource === option}
                                                    onChange={() => setSelectedUtmSource(option)}
                                                    className="w-4 h-4 text-[#00BDF9] bg-gray-100 border-gray-300 rounded focus:ring-[#00BDF9]"
                                                />
                                                <label
                                                    htmlFor={`utmSource-${index}`}
                                                    className="text-white text-sm cursor-pointer"
                                                >
                                                    {option}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* UTM Medium */}
                            <div className={`border-b border-[#FFFFFF0F] transition-all duration-200 p-2 ${expandedCategories.utmMedium ? 'bg-[#2a2a2a] rounded-[5px]' : ''}`}>
                                <div
                                    className="flex items-center gap-2 cursor-pointer text-white text-sm"
                                    onClick={() => toggleCategory('utmMedium')}
                                >
                                    <svg
                                        className={`w-4 h-4 transition-transform ${expandedCategories.utmMedium ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                    <span>UTM Medium</span>
                                </div>

                                {expandedCategories.utmMedium && (
                                    <div className="mt-2 space-y-1 pl-4">
                                        {utmMediumOptions.map((option, index) => (
                                            <div
                                                key={index}
                                                className={`flex items-center space-x-2 px-2 py-1 rounded ${selectedUtmMedium === option ? 'bg-[#2a2a2a]' : ''}`}
                                            >
                                                <input
                                                    type="checkbox"
                                                    id={`utmMedium-${index}`}
                                                    checked={selectedUtmMedium === option}
                                                    onChange={() => setSelectedUtmMedium(option)}
                                                    className="w-4 h-4 text-[#00BDF9] bg-gray-100 border-gray-300 rounded focus:ring-[#00BDF9]"
                                                />
                                                <label
                                                    htmlFor={`utmMedium-${index}`}
                                                    className="text-white text-sm cursor-pointer"
                                                >
                                                    {option}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* UTM Campaign */}
                            <div className={`border-b border-[#FFFFFF0F] transition-all duration-200 p-2 ${expandedCategories.utmCampaign ? 'bg-[#2a2a2a] rounded-[5px]' : ''}`}>
                                <div
                                    className="flex items-center gap-2 cursor-pointer text-white text-sm"
                                    onClick={() => toggleCategory('utmCampaign')}
                                >
                                    <svg
                                        className={`w-4 h-4 transition-transform ${expandedCategories.utmCampaign ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                    <span>UTM Campaign</span>
                                </div>

                                {expandedCategories.utmCampaign && (
                                    <div className="mt-2 space-y-1 pl-4">
                                        {utmCampaignOptions.map((option, index) => (
                                            <div
                                                key={index}
                                                className={`flex items-center space-x-2 px-2 py-1 rounded ${selectedUtmCampaign === option ? 'bg-[#2a2a2a]' : ''}`}
                                            >
                                                <input
                                                    type="checkbox"
                                                    id={`utmCampaign-${index}`}
                                                    checked={selectedUtmCampaign === option}
                                                    onChange={() => setSelectedUtmCampaign(option)}
                                                    className="w-4 h-4 text-[#00BDF9] bg-gray-100 border-gray-300 rounded focus:ring-[#00BDF9]"
                                                />
                                                <label
                                                    htmlFor={`utmCampaign-${index}`}
                                                    className="text-white text-sm cursor-pointer"
                                                >
                                                    {option}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* UTM Term */}
                            <div className={`border-b border-[#FFFFFF0F] transition-all duration-200 p-2 ${expandedCategories.utmTerm ? 'bg-[#2a2a2a] rounded-[5px]' : ''}`}>
                                <div
                                    className="flex items-center gap-2 cursor-pointer text-white text-sm"
                                    onClick={() => toggleCategory('utmTerm')}
                                >
                                    <svg
                                        className={`w-4 h-4 transition-transform ${expandedCategories.utmTerm ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                    <span>UTM Term</span>
                                </div>

                                {expandedCategories.utmTerm && (
                                    <div className="mt-2 space-y-1 pl-4">
                                        {utmTermOptions.map((option, index) => (
                                            <div
                                                key={index}
                                                className={`flex items-center space-x-2 px-2 py-1 rounded ${selectedUtmTerm === option ? 'bg-[#2a2a2a]' : ''}`}
                                            >
                                                <input
                                                    type="checkbox"
                                                    id={`utmTerm-${index}`}
                                                    checked={selectedUtmTerm === option}
                                                    onChange={() => setSelectedUtmTerm(option)}
                                                    className="w-4 h-4 text-[#00BDF9] bg-gray-100 border-gray-300 rounded focus:ring-[#00BDF9]"
                                                />
                                                <label
                                                    htmlFor={`utmTerm-${index}`}
                                                    className="text-white text-sm cursor-pointer"
                                                >
                                                    {option}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* UTM Content */}
                            <div className={`transition-all duration-200 p-2 ${expandedCategories.utmContent ? 'bg-[#2a2a2a] rounded-[5px]' : ''}`}>
                                <div
                                    className="flex items-center gap-2 cursor-pointer text-white text-sm"
                                    onClick={() => toggleCategory('utmContent')}
                                >
                                    <svg
                                        className={`w-4 h-4 transition-transform ${expandedCategories.utmContent ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                    <span>UTM Content</span>
                                </div>

                                {expandedCategories.utmContent && (
                                    <div className="mt-2 space-y-1 pl-4">
                                        {utmContentOptions.map((option, index) => (
                                            <div
                                                key={index}
                                                className={`flex items-center space-x-2 px-2 py-1 rounded ${selectedUtmContent === option ? 'bg-[#2a2a2a]' : ''}`}
                                            >
                                                <input
                                                    type="checkbox"
                                                    id={`utmContent-${index}`}
                                                    checked={selectedUtmContent === option}
                                                    onChange={() => setSelectedUtmContent(option)}
                                                    className="w-4 h-4 text-[#00BDF9] bg-gray-100 border-gray-300 rounded focus:ring-[#00BDF9]"
                                                />
                                                <label
                                                    htmlFor={`utmContent-${index}`}
                                                    className="text-white text-sm cursor-pointer"
                                                >
                                                    {option}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
});

export default FilterButton; 