import React, { useState } from 'react';


import DateRangePicker from './DateRangePicker';
import CampaignDropdown from './CampaignDropdown.tsx';
import FilterButton from './FilterButton.jsx';

const HeaderComponent = () => {

    const [range, setRange] = useState({ from: undefined, to: undefined });
    const [campaign, setCampaign] = useState('');
    const [campaign2, setCampaign2] = useState('');
    const campaignOptions = [
        'Kampagne Name',
        'Kampagne Name 2',
        'Kampagne Name 3',
        'Kampagne Name 4',
        'Kampagne Name 5',
    ];

    const campaignOptions2 = [
        'Kampagne Name 1',
        'Kampagne Name 2',
        'Kampagne Name 3',
        'Kampagne Name 4',
        'Kampagne Name 5',
        'Kampagne Name 6',
        'Kampagne Name 7',
        'Kampagne Name 8',
        'Kampagne Name 9',
        'Kampagne Name 10',
    ];

    return (
        <>

            <div className="grid grid-cols-2 lg:flex lg:flex-row gap-2 z-60 relative w-full lg:mb-0 mb-2 lg:mt-0 mt-4">
                <DateRangePicker value={range} onChange={setRange} />
                <CampaignDropdown
                    options={campaignOptions}
                    value={campaign}
                    onChange={setCampaign}
                />
                <CampaignDropdown
                    options={campaignOptions2}
                    value={campaign2}
                    onChange={setCampaign2}
                />
            </div>
            <FilterButton />
        </>
    )
}

export default HeaderComponent
